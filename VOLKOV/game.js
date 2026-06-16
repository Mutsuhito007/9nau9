const config = {
    type: Phaser.AUTO,
    width: 540,
    height: 960,
    backgroundColor: '#1a1a1a',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

const targetWord = ['V', 'O', 'L', 'K', 'O', 'V'];
const possibleLetters = ['V', 'O', 'L', 'K']; 
let letterSlots = []; 
let solvedRows = [false, false, false, false, false, false]; 
let activeRowIndex = -1; 
let activeSlidingLetter = null; 

let guideLineTop;
let guideLineBottom;

let score = 0;
let highScore = localStorage.getItem('volkovHighScore') || 0; 
let lives = 3;
let currentSpeed = 1200; 
const baseSpeed = 1200;  

let scoreText;
let livesText;
let isGameOver = false;
let isPaused = false; 

const successPool = ['a', 'a1'];
const errorPool = ['b1', 'b2', 'b3', 'b4'];

function preload() {
    this.load.audio('b1', 'a/b1.mp3');
    this.load.audio('b2', 'a/b2.mp3');
    this.load.audio('b3', 'a/b3.mp3');
    this.load.audio('b4', 'a/b4.mp3');
    
    this.load.audio('a', 'aaa/a.mp3');
    this.load.audio('a1', 'aaa/a1.mp3');
}

function create() {
    isGameOver = false;
    isPaused = false; 
    score = 0;
    lives = 3;
    currentSpeed = baseSpeed;
    solvedRows = [false, false, false, false, false, false];
    letterSlots = [];

    let startY = 220; 
    let spacingY = 110; 
    let centerX = this.scale.width / 2;

    scoreText = this.add.text(40, 50, 'SCORE: 0', {
        fontFamily: 'Bebas Neue',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold'
    });

    livesText = this.add.text(this.scale.width - 40, 50, '♥ ♥ ♥', {
        fontFamily: 'Bebas Neue',
        fontSize: '32px',
        color: '#ff3333',
        fontStyle: 'bold'
    }).setOrigin(1, 0);

    for (let i = 0; i < targetWord.length; i++) {
        let letter = this.add.text(centerX, startY + (i * spacingY), targetWord[i], {
            fontFamily: 'Bebas Neue',
            fontSize: '80px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        letterSlots.push({ obj: letter, startY: letter.y });
    }

    // REHBER ÇİZGİLER
    guideLineTop = this.add.rectangle(centerX, 0, config.width, 2, 0xffffff, 0.4).setVisible(false);
    guideLineBottom = this.add.rectangle(centerX, 0, config.width, 2, 0xffffff, 0.4).setVisible(false);

    this.input.off('pointerdown'); 
    this.input.on('pointerdown', handleTap, this);

    this.time.delayedCall(1000, () => {
        startRandomRow.call(this);
    });
}

function playRandomSound(scene, poolArray) {
    let availableSounds = poolArray.filter(key => scene.cache.audio.exists(key));
    
    if (availableSounds.length > 0) {
        const allEffects = successPool.concat(errorPool);
        allEffects.forEach(soundKey => {
            scene.sound.stopByKey(soundKey);
        });

        let randomKey = Phaser.Utils.Array.GetRandom(availableSounds);
        scene.sound.play(randomKey);
    } else {
        console.log("Sistem Notu: Bu havuzdaki hiçbir ses dosyası klasörde bulunamadı.");
    }
}

function startRandomRow() {
    if (isGameOver) return;

    let unsolvedIndexes = [];
    for (let i = 0; i < solvedRows.length; i++) {
        if (!solvedRows[i]) unsolvedIndexes.push(i);
    }

    if (unsolvedIndexes.length === 0) {
        score += 100;
        scoreText.setText('SCORE: ' + score);

        playRandomSound(this, successPool);

        this.cameras.main.flash(300, 0, 255, 0);

        solvedRows = [false, false, false, false, false, false];
        for (let i = 0; i < letterSlots.length; i++) {
            letterSlots[i].obj.setVisible(true);
        }

        this.time.delayedCall(1500, () => {
            startRandomRow.call(this);
        });
        return; 
    }

    activeRowIndex = Phaser.Utils.Array.GetRandom(unsolvedIndexes);
    letterSlots[activeRowIndex].obj.setVisible(false);

    // Çizgileri aktif olan harfin tam altına ve üstüne hizalayıp görünür yap
    guideLineTop.y = letterSlots[activeRowIndex].startY - 50;
    guideLineBottom.y = letterSlots[activeRowIndex].startY + 50;
    guideLineTop.setVisible(true);
    guideLineBottom.setVisible(true);

    spawnLetter.call(this);
}

function spawnLetter() {
    if (activeRowIndex === -1 || isGameOver) return;

    let yPos = letterSlots[activeRowIndex].startY;
    let randomChar = Phaser.Utils.Array.GetRandom(possibleLetters);

    if (activeSlidingLetter) {
        activeSlidingLetter.destroy();
    }

    // YENİ: Harfin Nereden Nereye Gideceğine Karar Veren Yön Sistemi
    let isLeftToRight = Math.random() > 0.5; // Yazı tura atıyoruz (%50 İhtimal)
    let startX = isLeftToRight ? -50 : config.width + 50; // Soldan mı sağdan mı başlasın?
    let endX = isLeftToRight ? config.width + 50 : -50;   // Sağda mı solda mı bitsin?

    activeSlidingLetter = this.add.text(startX, yPos, randomChar, {
        fontFamily: 'Bebas Neue',
        fontSize: '80px',
        color: '#ffcc00', 
        fontStyle: 'bold'
    }).setOrigin(0.5);

    this.tweens.add({
        targets: activeSlidingLetter,
        x: endX, // Hesaplanan bitiş noktasına doğru kay
        duration: currentSpeed, 
        onComplete: () => {
            if (!isGameOver && !solvedRows[activeRowIndex] && !isPaused) {
                spawnLetter.call(this);
            }
        }
    });
}

function handleTap() {
    if (isGameOver) {
        this.scene.restart();
        return;
    }

    if (activeRowIndex === -1 || !activeSlidingLetter || isPaused) return;

    let currentLetterChar = activeSlidingLetter.text;
    let targetChar = targetWord[activeRowIndex];

    if (currentLetterChar === targetChar) {
        // --- DOĞRU BASIŞ (SKOR EFEKTLERİ) ---
        isPaused = true; 
        guideLineTop.setVisible(false);
        guideLineBottom.setVisible(false);
        playRandomSound(this, successPool);

        this.tweens.killTweensOf(activeSlidingLetter);
        activeSlidingLetter.destroy();
        activeSlidingLetter = null;

        let targetLetterObj = letterSlots[activeRowIndex].obj;
        targetLetterObj.setVisible(true);
        solvedRows[activeRowIndex] = true;

        // TAM KELİME ZOOM EFEKTİ
        let allLetterObjects = letterSlots.map(slot => slot.obj);
        
        this.tweens.add({
            targets: allLetterObjects,
            scaleX: 2.0,
            scaleY: 2.0,
            duration: 150,
            yoyo: true, 
            ease: 'Quad.easeInOut'
        });

        score += 10;
        scoreText.setText('SCORE: ' + score);

        currentSpeed = Math.max(400, currentSpeed - 50); 
        activeRowIndex = -1; 

        this.time.delayedCall(1200, () => {
            isPaused = false; 
            startRandomRow.call(this); 
        });
    } else {
        // --- HATALI BASIŞ (DİSKO EFEKTİ) ---
        isPaused = true; 
        guideLineTop.setVisible(false);
        guideLineBottom.setVisible(false);
        playRandomSound(this, errorPool);

        lives--;
        
        // DİSKO EFEKTİ
        this.time.addEvent({
            delay: 80, 
            repeat: 8,  
            callback: () => {
                let r = Phaser.Math.Between(50, 255);
                let g = Phaser.Math.Between(50, 255);
                let b = Phaser.Math.Between(50, 255);
                this.cameras.main.flash(150, r, g, b);
            }
        });

        this.tweens.killTweensOf(activeSlidingLetter);
        activeSlidingLetter.destroy();
        activeSlidingLetter = null;

        if (lives === 2) livesText.setText('♥ ♥');
        else if (lives === 1) livesText.setText('♥');
        
        if (lives <= 0) {
            livesText.setText('');
            triggerGameOver.call(this);
        } else {
            this.time.delayedCall(1200, () => {
                isPaused = false; 
                spawnLetter.call(this); 
                
                guideLineTop.setVisible(true);
                guideLineBottom.setVisible(true);
            });
        }
    }
}

function triggerGameOver() {
    isGameOver = true;

    if (activeSlidingLetter) {
        this.tweens.killTweensOf(activeSlidingLetter);
        activeSlidingLetter.destroy();
    }

    if (score > highScore) {
        highScore = score;
        localStorage.setItem('volkovHighScore', highScore);
    }

    let centerX = this.scale.width / 2;
    let centerY = this.scale.height / 2;

    let overlay = this.add.rectangle(centerX, centerY, this.scale.width, this.scale.height, 0x000000, 1);

    let gameOverText = this.add.text(centerX, centerY - 110, 'GAME OVER', {
        fontFamily: 'Bebas Neue',
        fontSize: '64px',
        color: '#ff3333',
        fontStyle: 'bold'
    }).setOrigin(0.5);

    let finalScoreText = this.add.text(centerX, centerY - 20, 'SCORE: ' + score, {
        fontFamily: 'Bebas Neue',
        fontSize: '40px',
        color: '#ffffff',
        fontStyle: 'bold'
    }).setOrigin(0.5);

    let bestScoreText = this.add.text(centerX, centerY + 40, 'BEST: ' + highScore, {
        fontFamily: 'Bebas Neue',
        fontSize: '40px',
        color: '#ffcc00',
        fontStyle: 'bold'
    }).setOrigin(0.5);

    let restartText = this.add.text(centerX, centerY + 130, 'TAP TO RESTART', {
        fontFamily: 'Bebas Neue',
        fontSize: '28px',
        color: '#ffffff',
        fontStyle: 'bold'
    }).setOrigin(0.5);
}

function update() {}