const pageTitle = document.getElementById('page-title');
const bottomBar = document.getElementById('bottom-bar');
const iframePlaceholder = document.getElementById('placeholder-text');
const mainIframe = document.getElementById('main-iframe');

// OYUN AKIŞI VERİTABANI
const games = [
    { url: 'oyun1.html', title: 'Don\'t Panic Dude!' }, 
    { url: 'oyun2.html', title: '5X5' },
    { url: 'asmr1.html', title: 'ASMR-1' },
    { url: 'calculator.html', title: 'Calculator' },
    { url: 'wish.html', title: 'The Wish Pool' },
    { url: 'value.html', title: 'Human Value Calculator' },
    { url: 'bunker.html', title: 'Shelter Manifest' },
    { url: 'fate.html', title: 'The Mortal Clock' },
    { url: 'diary.html', title: 'Diary' },
    { url: 'domain.html', title: 'Future Domains' },
    { url: 'crypto.html', title: 'Crypto Oracle' },
    { url: 'feedback.html', title: 'Feedback ' },
    { url: 'engine.html', title: '4-Stroke Engine' },
    { url: 'heart.html', title: 'Human Heart Mechanism' },
    { url: 'companion.html', title: 'Companion Matrix' },
    { url: 'tv-remote.html', title: 'Universal Remote' },
    { url: 'xeno-ban.html', title: 'Xeno-Banx' },
    { url: 'cyberchondria.html', title: 'Cyberchondria' },
    { url: 'the-list.html', title: 'The Void List' },
    { url: 'world-stats.html', title: 'World Statistics' },
    { url: 'lucky-day.html', title: 'Lucky Day' },
    { url: 'asmr2.html', title: 'ASMR-2' },
    { url: 'prison-wall.html', title: 'Your Prison Wall' },
    { url: 'devil-pet.html', title: 'Hellspawn Caretaker' },
    { url: 'future-cv.html', title: 'Future CV' },
    { url: 'daily-truth.html', title: 'Daily Truth' },
    { url: 'santa-letter.html', title: 'Santa Letter' },
    { url: 'final-checklist.html', title: 'Final Project' },
    { url: 'story.html', title: 'The secret of life' },
    { url: 'dialog.html', title: 'Dialogues...' },
    { url: 'video1.html', title: 'Message-1' },
    { url: 'video2.html', title: 'Message-2' },
    { url: 'video3.html', title: 'Message-3' },
    { url: 'video4.html', title: 'Message-4' },
    { url: 'video5.html', title: 'Message-5' },
    { url: 'video6.html', title: 'Message-6' },
    { url: 'video7.html', title: 'Message-7' },
    { url: 'video8.html', title: 'Message-8' },
    { url: 'video9.html', title: 'Message-9' },
    { url: 'flappy-troll.html', title: 'Shift' },
    { url: 'memory-troll.html', title: 'Panic Match' },
    { url: 'vortex-run.html', title: 'Vertigo Dash' },
    { url: 'iq-troll.html', title: 'Neuron Fall' },
    { url: 'job1.html', title: 'Business İdea : 1' },
    { url: 'job2.html', title: 'Business İdea : 2' },
    { url: 'job3.html', title: 'Business İdea : 3' },
    { url: 'job4.html', title: 'Business İdea : 4' },
    { url: 'job5.html', title: 'Business İdea : 5' },
    { url: 'job6.html', title: 'Business İdea : 6' },
    { url: 'job7.html', title: 'Business İdea : 7' },
    { url: 'job8.html', title: 'Business İdea : 8' },
    { url: 'job9.html', title: 'Business İdea : 9' },
    { url: 'job10.html', title: 'Business İdea : 10' },
    { url: 'job11.html', title: 'Business İdea : 11' },
    { url: 'job12.html', title: 'Business İdea : 12' },
    { url: 'job13.html', title: 'Business İdea : 13' },
    { url: 'cat-memorial.html', title: 'Mop' },
    { url: 'dont-laugh.html', title: 'Don\'t Laugh !' },
    { url: 'excuse-generator.html', title: 'The Escape Hatch' },
    { url: 'reincarnation-wheel.html', title: 'One Last Chance' },
    { url: 'jump-up.html', title: 'Breach' },
    { url: 'saatgame.html', title: 'Wasted Time' },
    { url: 'book.html', title: 'Short Stories - 1' },
    { url: 'book2.html', title: 'Short Stories - 2' },
    { url: 'book3.html', title: 'Short Stories - 3' },
    { url: 'dialog2.html', title: 'Dialogues...' },
    { url: 'dialog3.html', title: 'Dialogues...' },
    { url: 'dialog4.html', title: 'Dialogues...' },
    { url: 'dialog5.html', title: 'Dialogues...' },
    { url: 'dialog6.html', title: 'Dialogues...' },
    { url: 'wallpaper.html', title: 'Wallpapers' },
    { url: 'color-wheel.html', title: 'Chroma Shift' },
    { url: 'horror-quiz.html', title: 'Horror Cinephile' },
    { url: 'dna-designer.html', title: 'DNA Designer' },
    { url: 'black-loop.html', title: 'Black Loop' },
    { url: 'math.html', title: 'Math Match' },
    { url: 'asmr3.html', title: 'ASMR-3' },
    { url: 'wormhole.html', title: 'Wormhole' },
    { url: 'solarsystem.html', title: 'Solar System' },
    { url: 'atom.html', title: 'Atom' },
    { url: 'volkov.html', title: 'VOLKOV' },
    { url: 'color.html', title: 'Color Circle' },
    { url: 'market.html', title: 'Judgment Day Market' },
    { url: 'ideas.html', title: 'The Muse' },
    { url: 'yt-generator.html', title: 'Shoot me an idea' },
    { url: 'conspiracy.html', title: 'Truth Uncovered' },
    { url: 'heaven.html', title: 'Welcome to heaven' },
    { url: 'dude-ai.html', title: 'Welcome to heaven' },
    { url: 'join.html', title: 'Welcome to heaven' },
    { url: 'swarm.html', title: 'Swarm' },
    { url: 'gelirken-getir.html', title: 'WayGrab' },
    { url: 'talent-invest.html', title: 'Talent-X' },
    { url: 'nauduel.html', title: 'SaltArena' },
    { url: 'beggar.html', title: 'Cardboard Destiny' },
    { url: 'find-dude.html', title: 'Where is my cute little devil?' },
    { url: 'wordsgame.html', title: 'Nihilist\'s Crossword' },
    { url: 'gun.html', title: 'DIY Pew-Pew Lab' },
    { url: 'asmr4.html', title: 'ASMR-4' },
    { url: 'ninja.html', title: 'ASMR-5' },
    { url: 'nau.html', title: 'nauCoin' }
];

// --- DİZİYİ RASTGELE KARIŞTIRMA (SHUFFLE) FONKSİYONU ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

// SAYFA YÜKLENDİĞİNDE OYUN LİSTESİNİ KARIŞTIR
shuffleArray(games);

// --- DÜZELTME: İlk açılışta şans eseri nau.html çıkmasını engelle! ---
if (games[0].url === 'nau.html') {
    [games[0], games[1]] = [games[1], games[0]]; 
}

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

let currentGameIndex = 0; 
// Gösterilen sayfaları ve buton sayacını kalıcı hafızadan GÜVENLİ çek (Bozukluk varsa çökmez)
let gosterilenSayfalar = [];
try {
    const kayitliGecmis = localStorage.getItem('9nau9_gecmis');
    // Eğer hafızada bozuk "undefined" yazısı kalmışsa onu da engelle
    if (kayitliGecmis && kayitliGecmis !== "undefined") {
        gosterilenSayfalar = JSON.parse(kayitliGecmis);
    }
} catch (e) {
    console.error("Geçmiş hafıza bozulmuş, sıfırlanıyor...");
    gosterilenSayfalar = [];
    localStorage.removeItem('9nau9_gecmis'); // Bozuk bombayı temizle
}

let butonBasmaSayisi = parseInt(localStorage.getItem('9nau9_buton_sayaci')) || 0;
let favoritedUrls = [];
try {
    const kayitli = localStorage.getItem('9nau9_favorites');
    if (kayitli) favoritedUrls = JSON.parse(kayitli);
} catch (e) {
    console.error("Favoriler okunurken hata oluştu");
    favoritedUrls = [];
}
let currentFavIndex = 0; 
let isFirstFavView = true; // Favorilere ilk girildiğini anlamak için anahtar

// Kırmızı buton için sayaç ve reklam kontrolü
let sayfaGecisSayaci = 0;
let favGecisSayaci = 0;
let isAdActive = false; // Reklamın ekranda olup olmadığını takip ediyoruz

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

function nextItem() {
    butonBasmaSayisi++; // Her sayfa geçişinde sayıyı 1 artır
    localStorage.setItem('9nau9_buton_sayaci', butonBasmaSayisi); // Sayacı hafızaya kaydet

    if (butonBasmaSayisi === 9) {
        // Tam 9. basışta nau.html'in listedeki sırasını bul ve ona atla
        const nauIndex = games.findIndex(g => g.url === 'nau.html');
        if (nauIndex !== -1) {
            currentGameIndex = nauIndex;
            // 9. sayfayı da hafızaya alıyoruz ki rastgele döngüde bir daha çıkmasın
            if (!gosterilenSayfalar.includes(nauIndex)) {
                gosterilenSayfalar.push(nauIndex);
                localStorage.setItem('9nau9_gecmis', JSON.stringify(gosterilenSayfalar));
            }
            loadGameToIframe();
            return;
        }
    }

    // 1. Henüz GÖSTERİLMEYEN oyunların listesini (havuzunu) çıkar
    let gosterilmeyenler = [];
    for (let i = 0; i < games.length; i++) {
        // Eğer bu oyun hafızada YOKSA havuza ekle
        if (!gosterilenSayfalar.includes(i)) {
            // Özel Kural: nau.html 9. tıklamadan önce rastgele havuza giremez!
            if (games[i].url === 'nau.html' && butonBasmaSayisi < 9) {
                continue;
            }
            gosterilmeyenler.push(i);
        }
    }

    // 2. Eğer havuzda gösterilmeyen oyun kalmadıysa (hepsi bitmişse), hafızayı sıfırla
    if (gosterilmeyenler.length === 0) {
        gosterilenSayfalar = []; 
        console.log("Tüm içerikler gösterildi, hafıza sıfırlandı!");
        
        // Havuzu tekrar tüm oyunlarla doldur
        for (let i = 0; i < games.length; i++) {
            if (games[i].url !== 'nau.html' || butonBasmaSayisi >= 9) {
                gosterilmeyenler.push(i);
            }
        }
    }

    // 3. ZAR ATMAK YERİNE: Sadece "gösterilmeyenler" havuzunun içinden KESİN olarak 1 tane çek
    let rastgeleKutu = Math.floor(Math.random() * gosterilmeyenler.length);
    let secilenIndex = gosterilmeyenler[rastgeleKutu];

    // 4. Seçilen yeni oyunu kalıcı hafızaya kaydet
    gosterilenSayfalar.push(secilenIndex);
    localStorage.setItem('9nau9_gecmis', JSON.stringify(gosterilenSayfalar));

    currentGameIndex = secilenIndex;
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
if (!gosterilenSayfalar.includes(currentGameIndex)) {
    gosterilenSayfalar.push(currentGameIndex); 
    localStorage.setItem('9nau9_gecmis', JSON.stringify(gosterilenSayfalar));
}
loadAnaAkis();

// Service Worker Başlatıcı
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker aktif!', reg))
            .catch(err => console.log('Service Worker hatası:', err));
    });
}