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
    { url: 'interrogation.html', title: 'Are You a Good Person?' },
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
    { url: 'job1.html', title: 'Business İdea : 1' },
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

// --- RETRO PİKSEL İKONLAR (KALIN VE TOK ÇİZGİLİ VERSİYON) ---
const pixelIcons = {
    // Ekranı Büyütme (Dışa açılan oklar)
    fullscreen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
    
    // Favori Yıldız
    star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    
    // Rastgele Oyun (Yenileme - Kalın versiyon)
    refresh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>`,
    
    // Kalp
    heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    
    // Ana Sayfa (Ev)
    home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    
    // Cihaza Kur (İndirme)
    install: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
    
    // Tema Paleti
    palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`
};

let currentGameIndex = 0; 
let favoritedUrls = JSON.parse(localStorage.getItem('9nau9_favorites')) || [];
let currentFavIndex = 0; 

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
    currentGameIndex = (currentGameIndex + 1) % games.length; 
    loadAnaAkis(); 
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
    if (favoritedUrls.length === 0) {
        mainIframe.style.display = 'none';
        iframePlaceholder.style.display = 'block';
        iframePlaceholder.innerText = "Henüz Favori Eklenmedi";
        pageTitle.innerText = "Favoriler";
    } else {
        if (currentFavIndex >= favoritedUrls.length) {
            currentFavIndex = 0;
        }
        
        // Kaydettiğimiz URL üzerinden doğru oyunu buluyoruz
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
    if (favoritedUrls.length > 0) {
        currentFavIndex = (currentFavIndex + 1) % favoritedUrls.length;
        loadFavoriteToIframe();
    }
}

function removeFavorite() {
    if (favoritedUrls.length === 0) return;
    
    favoritedUrls.splice(currentFavIndex, 1);
    localStorage.setItem('9nau9_favorites', JSON.stringify(favoritedUrls));

    if (currentFavIndex >= favoritedUrls.length) {
        currentFavIndex = 0;
    }
    loadFavoriler();
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

// --- SAHNE ÇİZİM FONKSİYONLARI ---

// --- SAHNE ÇİZİM FONKSİYONLARI ---

// --- TEMA DEĞİŞTİRME MANTIĞI ---
const themes = ['', 'theme-win98', 'theme-frutiger', 'theme-hellokitty', 'theme-googledark'];
let currentThemeIndex = 0;

function toggleTheme() {
    // Önceki temayı body'den sil
    if (themes[currentThemeIndex] !== '') {
        document.body.classList.remove(themes[currentThemeIndex]);
    }
    // Sıradaki temaya geç
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    // Yeni temayı body'e ekle (varsayılan boş tema değilse)
    if (themes[currentThemeIndex] !== '') {
        document.body.classList.add(themes[currentThemeIndex]);
    }
}

// 1. Sahne: Ana Akış
function loadAnaAkis() {
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
            <span class="icon-btn icon-large" onclick="nextItem()" aria-label="refresh">${pixelIcons.refresh}</span>
        </div>
        <div class="footer-right">
            ${installBtnHTML}
            <span id="heart-icon" class="icon-btn ${isLiked ? 'heart-filled' : ''}" onclick="toggleLike()" aria-label="heart">${pixelIcons.heart}</span>
        </div>
    `;
}

// 2. Sahne: Favoriler (Eksiksiz Tam Sürüm)
function loadFavoriler() {
    loadFavoriteToIframe();
    
    // Sağ taraftaki kalp butonu (Sadece favori varsa çıkar, ikonu ve buton yuvarlağını içerir)
    const heartBtnHTML = favoritedUrls.length > 0 
        ? `<span class="icon-btn heart-filled" onclick="removeFavorite()" aria-label="remove-heart">${pixelIcons.heart}</span>` 
        : `<div style="width: 24px;"></div>`;
    
    // Alt barı eksiksiz olarak (Ev, Tema, Yenile ve Kalp) yeniden çiziyoruz
    bottomBar.innerHTML = `
        <div class="footer-left">
            <span class="icon-btn" onclick="loadAnaAkis()" aria-label="home">${pixelIcons.home}</span>
            <span class="icon-btn" onclick="toggleTheme()" aria-label="theme">${pixelIcons.palette}</span>
        </div>
        <div class="footer-center">
            <span class="icon-btn icon-large" onclick="nextFavorite()" aria-label="refresh">${pixelIcons.refresh}</span>
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