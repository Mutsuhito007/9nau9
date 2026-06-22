const pageTitle = document.getElementById('page-title');
const bottomBar = document.getElementById('bottom-bar');
const iframePlaceholder = document.getElementById('placeholder-text');
const mainIframe = document.getElementById('main-iframe');

// OYUN AKIŞI VERİTABANI (Sayfalar bu sıraya göre gösterilecek)
const games = [
    { url: 'job4.html', title: 'Business İdea : 4' },
    { url: 'asmr2.html', title: 'ASMR-2' },
    { url: 'dialog5.html', title: 'Dialogues...' },
    { url: 'lucky-day.html', title: 'Lucky Day' },
    { url: 'memory-troll.html', title: 'Panic Match' },
    { url: 'story.html', title: 'The secret of life' },
    { url: 'oyun2.html', title: '5X5' },
    { url: 'math.html', title: 'Math Match' },
    { url: 'cyberchondria.html', title: 'Cyberchondria' },
    { url: 'bunker.html', title: 'Shelter Manifest' },
    { url: 'nau.html', title: 'nauCoin' },
    { url: 'video1.html', title: 'Message-1' },
    { url: 'book.html', title: 'Short Stories - 1' },
    { url: 'devil-pet.html', title: 'Hellspawn Caretaker' },
    { url: 'heart.html', title: 'Human Heart Mechanism' },
    { url: 'job9.html', title: 'Business İdea : 9' },
    { url: 'volkov.html', title: 'VOLKOV' },
    { url: 'conspiracy.html', title: 'Truth Uncovered' },
    { url: 'saatgame.html', title: 'Wasted Time' },
    { url: 'video5.html', title: 'Message-5' },
    { url: 'excuse-generator.html', title: 'The Escape Hatch' },
    { url: 'calculator.html', title: 'Calculator' },
    { url: 'heaven.html', title: 'Welcome to heaven' },
    { url: 'jump-up.html', title: 'Breach' },
    { url: 'diary.html', title: 'Diary' },
    { url: 'video8.html', title: 'Message-8' },
    { url: 'job11.html', title: 'Business İdea : 11' },
    { url: 'reincarnation-wheel.html', title: 'One Last Chance' },
    { url: 'ideas.html', title: 'The Muse' },
    { url: 'xeno-ban.html', title: 'Xeno-Banx' },
    { url: 'book3.html', title: 'Short Stories - 3' },
    { url: 'color-wheel.html', title: 'Chroma Shift' },
    { url: 'dialog.html', title: 'Dialogues...' },
    { url: 'job1.html', title: 'Business İdea : 1' },
    { url: 'asmr4.html', title: 'ASMR-4' },
    { url: 'dude-ai.html', title: 'Welcome to heaven' },
    { url: 'job5.html', title: 'Business İdea : 5' },
    { url: 'video6.html', title: 'Message-6' },
    { url: 'talent-invest.html', title: 'Talent-X' },
    { url: 'vortex-run.html', title: 'Vertigo Dash' },
    { url: 'companion.html', title: 'Companion Matrix' },
    { url: 'job13.html', title: 'Business İdea : 13' },
    { url: 'solarsystem.html', title: 'Solar System' },
    { url: 'dialog3.html', title: 'Dialogues...' },
    { url: 'video9.html', title: 'Message-9' },
    { url: 'prison-wall.html', title: 'Your Prison Wall' },
    { url: 'color.html', title: 'Color Circle' },
    { url: 'crypto.html', title: 'Crypto Oracle' },
    { url: 'job7.html', title: 'Business İdea : 7' },
    { url: 'horror-quiz.html', title: 'Horror Cinephile' },
    { url: 'asmr1.html', title: 'ASMR-1' },
    { url: 'flappy-troll.html', title: 'Shift' },
    { url: 'job2.html', title: 'Business İdea : 2' },
    { url: 'video4.html', title: 'Message-4' },
    { url: 'dna-designer.html', title: 'DNA Designer' },
    { url: 'dialog4.html', title: 'Dialogues...' },
    { url: 'wish.html', title: 'The Wish Pool' },
    { url: 'beggar.html', title: 'Cardboard Destiny' },
    { url: 'oyun1.html', title: 'Don\'t Panic Dude!' },
    { url: 'yt-generator.html', title: 'Shoot me an idea' },
    { url: 'job12.html', title: 'Business İdea : 12' },
    { url: 'video3.html', title: 'Message-3' },
    { url: 'domain.html', title: 'Future Domains' },
    { url: 'gun.html', title: 'DIY Pew-Pew Lab' },
    { url: 'dialog6.html', title: 'Dialogues...' },
    { url: 'cat-memorial.html', title: 'Mop' },
    { url: 'wordsgame.html', title: 'Nihilist\'s Crossword' },
    { url: 'fate.html', title: 'The Mortal Clock' },
    { url: 'job10.html', title: 'Business İdea : 10' },
    { url: 'asmr3.html', title: 'ASMR-3' },
    { url: 'the-list.html', title: 'The Void List' },
    { url: 'video2.html', title: 'Message-2' },
    { url: 'value.html', title: 'Human Value Calculator' },
    { url: 'job8.html', title: 'Business İdea : 8' },
    { url: 'wormhole.html', title: 'Wormhole' },
    { url: 'iq-troll.html', title: 'Neuron Fall' },
    { url: 'book2.html', title: 'Short Stories - 2' },
    { url: 'daily-truth.html', title: 'Daily Truth' },
    { url: 'dont-laugh.html', title: 'Don\'t Laugh !' },
    { url: 'join.html', title: 'Welcome to heaven' },
    { url: 'market.html', title: 'Judgment Day Market' },
    { url: 'job6.html', title: 'Business İdea : 6' },
    { url: 'video7.html', title: 'Message-7' },
    { url: 'tv-remote.html', title: 'Universal Remote' },
    { url: 'future-cv.html', title: 'Future CV' },
    { url: 'black-loop.html', title: 'Black Loop' },
    { url: 'engine.html', title: '4-Stroke Engine' },
    { url: 'find-dude.html', title: 'Where is my cute little devil?' },
    { url: 'world-stats.html', title: 'World Statistics' },
    { url: 'gelirken-getir.html', title: 'WayGrab' },
    { url: 'dialog2.html', title: 'Dialogues...' },
    { url: 'job3.html', title: 'Business İdea : 3' },
    { url: 'santa-letter.html', title: 'Santa Letter' },
    { url: 'wallpaper.html', title: 'Wallpapers' },
    { url: 'feedback.html', title: 'Feedback ' },
    { url: 'atom.html', title: 'Atom' },
    { url: 'swarm.html', title: 'Swarm' },
    { url: 'nauduel.html', title: 'SaltArena' },
    { url: 'ninja.html', title: 'ASMR-5' },
    { url: 'final-checklist.html', title: 'Final Project' }
];
// --- RETRO PİKSEL İKONLAR (KALIN VE TOK ÇİZGİLİ VERSİYON) ---
const pixelIcons = {
    fullscreen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
    star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    refresh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>`,
    heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    install: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`
};

// --- YENİ SİSTEM: SIRA TAKİBİ VE HAFIZA ---
let currentGameIndex = 0; 

try {
    const kayitliIndex = localStorage.getItem('9nau9_siradaki_index');
    if (kayitliIndex !== null && kayitliIndex !== "undefined") {
        currentGameIndex = parseInt(kayitliIndex, 10);
        // Eğer oyun eklendi/silindi ve index taştıysa sıfırla
        if (currentGameIndex >= games.length || isNaN(currentGameIndex)) {
            currentGameIndex = 0;
        }
    }
} catch (e) {
    console.error("Index okunurken hata, başa dönüldü.");
    currentGameIndex = 0;
}

// Favori işlemleri
let favoritedUrls = [];
try {
    const kayitli = localStorage.getItem('9nau9_favorites');
    if (kayitli) favoritedUrls = JSON.parse(kayitli);
} catch (e) {
    console.error("Favoriler okunurken hata oluştu");
    favoritedUrls = [];
}
let currentFavIndex = 0; 
let isFirstFavView = true; 

// Kırmızı buton için sayaç ve reklam kontrolü
let sayfaGecisSayaci = 0;
let favGecisSayaci = 0;
let isAdActive = false; 

// Kırmızı (yenile) butonuna tıklama mantığı
function handleRefreshClick() {
    const kirmiziButon = document.getElementById('refresh-btn');

    if (!kirmiziButon || !mainIframe) {
        nextItem();
        return;
    }

    if (isAdActive) {
        isAdActive = false;
        nextItem();
        return;
    }

    sayfaGecisSayaci++;

    if (sayfaGecisSayaci % 5 === 0) {
        isAdActive = true;
        mainIframe.src = 'reklam-test.html'; 
        if (pageTitle) pageTitle.innerText = "Data Buffering...";

        kirmiziButon.style.pointerEvents = 'none';
        kirmiziButon.style.opacity = '0.5';

        let kalanSure = 5;
        const originalHTML = kirmiziButon.innerHTML;
        kirmiziButon.innerText = kalanSure;

        const geriSayim = setInterval(() => {
            kalanSure--;

            if (kalanSure > 0) {
                kirmiziButon.innerText = kalanSure;
            } else {
                clearInterval(geriSayim);
                kirmiziButon.style.pointerEvents = 'auto'; 
                kirmiziButon.style.opacity = '1'; 
                kirmiziButon.innerHTML = originalHTML; 
            }
        }, 1000);

    } else {
        nextItem();
    }
}

// Favori (yenile) butonuna tıklama mantığı
function handleFavRefreshClick() {
    const favButon = document.getElementById('fav-refresh-btn');

    if (!favButon || !mainIframe) {
        nextFavorite();
        return;
    }

    if (isAdActive) {
        isAdActive = false;
        nextFavorite();
        return;
    }

    favGecisSayaci++;

    if (favGecisSayaci % 5 === 0) {
        isAdActive = true;
        mainIframe.src = 'reklam-test.html'; 
        if (pageTitle) pageTitle.innerText = "Data Buffering...";

        favButon.style.pointerEvents = 'none';
        favButon.style.opacity = '0.5';

        let kalanSure = 5;
        const originalHTML = favButon.innerHTML;
        favButon.innerText = kalanSure;

        const geriSayim = setInterval(() => {
            kalanSure--;

            if (kalanSure > 0) {
                favButon.innerText = kalanSure; 
            } else {
                clearInterval(geriSayim);
                favButon.style.pointerEvents = 'auto'; 
                favButon.style.opacity = '1'; 
                favButon.innerHTML = originalHTML; 
            }
        }, 1000);

    } else {
        nextFavorite();
    }
}

// ==========================================
// PWA: UYGULAMAYI CİHAZA İNDİRME / KURMA MOTORU
// ==========================================
let deferredPrompt;
let isAppInstalled = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); 
    deferredPrompt = e; 
    
    const installBtns = document.querySelectorAll('.btn-install');
    installBtns.forEach(btn => btn.classList.add('install-ready'));
});

window.addEventListener('appinstalled', () => {
    isAppInstalled = true; 
    deferredPrompt = null;
    loadAnaAkis(); 
});

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt(); 
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Kullanıcı uygulamayı kurdu!');
            }
            deferredPrompt = null;
            const installBtns = document.querySelectorAll('.btn-install');
            installBtns.forEach(btn => btn.classList.remove('install-ready'));
        });
    } else {
        alert("Sistem Kurulumu Bekleniyor: Lütfen tarayıcı menüsünden 'Ana Ekrana Ekle' (Add to Homescreen) seçeneğini kullanın.");
    }
}

// ----- ANA AKIŞ VE FAVORİLER FONKSİYONLARI -----

function loadGameToIframe() {
    mainIframe.src = games[currentGameIndex].url;
    pageTitle.innerText = games[currentGameIndex].title;
    iframePlaceholder.style.display = 'none'; 
    mainIframe.style.display = 'block';
}

// --- YENİ SIRALI GEÇİŞ FONKSİYONU ---
function nextItem() {
    currentGameIndex++; // Sıradaki oyuna geç
    
    // Eğer listenin sonuna ulaştıysak, başa (0. indexe) dön
    if (currentGameIndex >= games.length) {
        currentGameIndex = 0;
    }

    // Kaldığı sırayı tarayıcı hafızasına kaydet
    localStorage.setItem('9nau9_siradaki_index', currentGameIndex);
    
    loadGameToIframe(); 
}

function toggleLike() {
    const currentUrl = games[currentGameIndex].url;
    const indexInFavorites = favoritedUrls.indexOf(currentUrl);
    
    if (indexInFavorites === -1) {
        favoritedUrls.push(currentUrl);
    } else {
        favoritedUrls.splice(indexInFavorites, 1);
    }
    
    const heartIcon = document.getElementById('heart-icon');
    if (!heartIcon) return;
    
    if (favoritedUrls.includes(currentUrl)) {
        heartIcon.classList.add('heart-filled');
    } else {
        heartIcon.classList.remove('heart-filled');
    }

    localStorage.setItem('9nau9_favorites', JSON.stringify(favoritedUrls));
}

function loadFavoriteToIframe() {
    if (isFirstFavView) {
        mainIframe.src = "footer.html";
        pageTitle.innerText = "Transmission";
        iframePlaceholder.style.display = 'none';
        mainIframe.style.display = 'block';
        return; 
    }

    if (favoritedUrls.length === 0) {
        mainIframe.style.display = 'none';
        iframePlaceholder.style.display = 'block';
        iframePlaceholder.innerText = "You haven't added any favorites yet.";
        pageTitle.innerText = "Favoriler";
    } else {
        if (currentFavIndex >= favoritedUrls.length) {
            currentFavIndex = 0;
        }
        
        const favUrl = favoritedUrls[currentFavIndex];
        const favGame = games.find(g => g.url === favUrl);
        
        if (favGame) {
            mainIframe.src = favGame.url;
            pageTitle.innerText = favGame.title;
            iframePlaceholder.style.display = 'none';
            mainIframe.style.display = 'block';
        }
    }
}

function nextFavorite() {
    if (isFirstFavView) {
        isFirstFavView = false;
    } else if (favoritedUrls.length > 0) {
        currentFavIndex = (currentFavIndex + 1) % favoritedUrls.length;
    }
    loadFavoriteToIframe();
}

function removeFavorite() {
    if (favoritedUrls.length === 0) return;
    
    favoritedUrls.splice(currentFavIndex, 1);
    localStorage.setItem('9nau9_favorites', JSON.stringify(favoritedUrls));

    if (currentFavIndex >= favoritedUrls.length) {
        currentFavIndex = 0;
    }
    
    if (favoritedUrls.length === 0) {
        loadFavoriler(); 
    } else {
        isFirstFavView = false; 
        loadFavoriteToIframe();
        
        const heartBtn = document.querySelector('.heart-filled');
        if (heartBtn) heartBtn.outerHTML = `<div style="width: 24px;"></div>`;
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

const themes = ['', 'theme-win98', 'theme-frutiger', 'theme-hellokitty', 'theme-googledark'];
let currentThemeIndex = 0;

function toggleTheme() {
    if (themes[currentThemeIndex] !== '') {
        document.body.classList.remove(themes[currentThemeIndex]);
    }
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    if (themes[currentThemeIndex] !== '') {
        document.body.classList.add(themes[currentThemeIndex]);
    }
}

function loadAnaAkis() {
    isAdActive = false; 
    loadGameToIframe(); 
    
    const isLiked = favoritedUrls.includes(games[currentGameIndex].url);
    const readyClass = deferredPrompt ? 'install-ready' : '';
    
    const installBtnHTML = isAppInstalled ? '' : `<span class="icon-btn btn-install ${readyClass}" onclick="installApp()" aria-label="install">${pixelIcons.install}</span>`;
    
    bottomBar.innerHTML = `
        <div class="footer-left">
            <span class="icon-btn" onclick="toggleFullScreen()" aria-label="fullscreen">${pixelIcons.fullscreen}</span>
            <span class="icon-btn" onclick="loadFavoriler()" aria-label="star">${pixelIcons.star}</span>
        </div>
        <div class="footer-center">
            <span id="refresh-btn" class="icon-btn icon-large" onclick="handleRefreshClick()" aria-label="refresh">${pixelIcons.refresh}</span>
        </div>
        <div class="footer-right">
            ${installBtnHTML}
            <span id="heart-icon" class="icon-btn ${isLiked ? 'heart-filled' : ''}" onclick="toggleLike()" aria-label="heart">${pixelIcons.heart}</span>
        </div>
    `;
}

function loadFavoriler() {
    isAdActive = false; 
    isFirstFavView = true;
    loadFavoriteToIframe();
    
    const heartBtnHTML = favoritedUrls.length > 0 
        ? `<span class="icon-btn heart-filled" onclick="removeFavorite()" aria-label="remove-heart">${pixelIcons.heart}</span>` 
        : `<div style="width: 24px;"></div>`;
    
    bottomBar.innerHTML = `
        <div class="footer-left">
            <span class="icon-btn" onclick="loadAnaAkis()" aria-label="home">${pixelIcons.home}</span>
            <span class="icon-btn" onclick="toggleTheme()" aria-label="theme">${pixelIcons.palette}</span>
        </div>
        <div class="footer-center">
            <span id="fav-refresh-btn" class="icon-btn icon-large" onclick="handleFavRefreshClick()" aria-label="refresh">${pixelIcons.refresh}</span>
        </div>
        <div class="footer-right">
            ${heartBtnHTML}
        </div>
    `;
}

// Sistemi Başlat
loadAnaAkis();

// Service Worker Başlatıcı
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker aktif!', reg))
            .catch(err => console.log('Service Worker hatası:', err));
    });
}