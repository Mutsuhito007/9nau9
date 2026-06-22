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

// --- RETRO PİKSEL İKONLAR (KALIN VE TOK ÇİZGİLİ VERSİYON) ---
const pixelIcons = {
    // Ekranı Büyütme (Dışa açılan oklar)
    fullscreen: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="square" stroke-linejoin="miter"><polyline points="15 3 21 3 2[...]
    
    // Favori Yıldız
    star: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 [...]
    
    // Rastgele Oyun (Yenileme - Kalın versiyon)
    refresh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6[...]
    
    // Kalp
    heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-[...]
    
    // Ana Sayfa (Ev)
    home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2[...]
    
    // Cihaza Kur (İndirme)
    install: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5[...]
    
    // Tema Paleti
    palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"[...]
};

let currentGameIndex = 0; 
// Gösterilen sayfaların indekslerini hafızada tutacağımız liste
let gosterilenSayfalar = [];
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
    // iframe ve pageTitle'ı sildik, en üstteki global değişkenleri (mainIframe, pageTitle) kullanacağız.

    if (!kirmiziButon || !mainIframe) {
        // Fallback: normal akış
        nextItem();
        return;
    }

    // Eğer reklam aktifse, kullanıcı butona bastığında reklamdan çıkılır
    if (isAdActive) {
        isAdActive = false;
        nextItem();
        return;
    }

    sayfaGecisSayaci++;

    if (sayfaGecisSayaci % 5 === 0) {
        // 1. İframe içine reklamı bas ve sistemi reklama kilitli konuma getir
        isAdActive = true;
        mainIframe.src = 'reklam-test.html'; // iframe yerine mainIframe kullandık
        if (pageTitle) pageTitle.innerText = "Data Buffering...";

        // 2. Kırmızı Butonu Kilitle ve Soluklaştır
        kirmiziButon.style.pointerEvents = 'none';
        kirmiziButon.style.opacity = '0.5';

        // 3. Geri Sayımı Başlat
        let kalanSure = 5;
        const originalHTML = kirmiziButon.innerHTML;
        kirmiziButon.innerText = kalanSure;

        const geriSayim = setInterval(() => {
            kalanSure--;

            if (kalanSure > 0) {
                kirmiziButon.innerText = kalanSure;
            } else {
                // 4. SÜRE BİTTİ - Kilidi Aç
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
    // Yine iframe ve pageTitle aramalarını sildik.

    if (!favButon || !mainIframe) {
        nextFavorite();
        return;
    }

    // Eğer reklam aktifse, kullanıcı butona bastığında reklamdan çıkılır
    if (isAdActive) {
        isAdActive = false;
        nextFavorite();
        return;
    }

    favGecisSayaci++;

    if (favGecisSayaci % 5 === 0) {
        // 1. İframe içine reklamı bas ve sistemi reklama kilitli konuma getir
        isAdActive = true;
        mainIframe.src = 'reklam-test.html'; // iframe yerine mainIframe kullandık
        if (pageTitle) pageTitle.innerText = "Data Buffering...";

        // 2. Butonu Kilitle ve Soluklaştır
        favButon.style.pointerEvents = 'none';
        favButon.style.opacity = '0.5';

        // 3. Geri Sayımı Başlat
        let kalanSure = 5;
        const originalHTML = favButon.innerHTML;
        favButon.innerText = kalanSure;

        const geriSayim = setInterval(() => {
            kalanSure--;

            if (kalanSure > 0) {
                favButon.innerText = kalanSure; 
            } else {
                // 4. SÜRE BİTTİ - Kilidi Aç
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

// --- 9NAU9 KURALI: BUTONA BASMA SAYACI ---
let butonBasmaSayisi = 0; // Kullanıcının butona kaç kez bastığını sayar

function nextItem() {
    butonBasmaSayisi++; // Her sayfa geçişinde sayıyı 1 artır

    if (butonBasmaSayisi === 9) {
        // Tam 9. basışta nau.html'in listedeki sırasını bul ve direkt ona atla
        const nauIndex = games.findIndex(g => g.url === 'nau.html');
        if (nauIndex !== -1) {
            currentGameIndex = nauIndex;
            
            // DÜZELTME: nau.html'i gösterdiğimiz için onu da hafızaya ekliyoruz ki rastgele döngüde bir daha çıkmasın
            if (!gosterilenSayfalar.includes(nauIndex)) {
                gosterilenSayfalar.push(nauIndex);
            }
            
            loadGameToIframe();
            return;
        }
    }

    // Hafıza kontrollü rastgele seçim
    // 1. Eğer listedeki TÜM oyunları gösterdiysek, hafızayı sıfırla ki başa dönebilelim.
    if (gosterilenSayfalar.length >= games.length) {
        gosterilenSayfalar = [];
        console.log("Tüm içerikler gösterildi, hafıza sıfırlandı!");
    }

    let rastgeleIndex;
    // 2. Daha önce GÖSTERİLMEDİĞİNE emin olana kadar rastgele sayı çekmeye devam et
    do {
        rastgeleIndex = Math.floor(Math.random() * games.length);
    } while (gosterilenSayfalar.includes(rastgeleIndex));

    // 3. Yeni bulduğumuz ve daha önce gösterilmemiş bu sayfayı hafızaya kaydet
    gosterilenSayfalar.push(rastgeleIndex);

    // 4. Aktif oyun indeksini güncelle
    currentGameIndex = rastgeleIndex;

    // 5. İframe'i yeni sayfayla yükle
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
    // Eğer favoriler menüsüne ilk kez tıklandıysa sabit sayfayı (info.html) göster
    if (isFirstFavView) {
        mainIframe.src = "footer.html";
        pageTitle.innerText = "Transmission";
        iframePlaceholder.style.display = 'none';
        mainIframe.style.display = 'block';
        return; // İşlemi burada kes ki diğer favorileri yüklemesin
    }

    // Karıştır tuşuna basıldıysa normal favori döngüsüne gir
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
    // Karıştır butonuna ilk basışta info sayfasından çıkıp favorilere geçiyoruz
    if (isFirstFavView) {
        isFirstFavView = false;
    } else if (favoritedUrls.length > 0) {
        // Sonraki basışlarda favoriler arasında sırayla geziyor
        currentFavIndex = (currentFavIndex + 1) % favoritedUrls.length;
    }
    loadFavoriteToIframe();
}

function removeFavorite() {
    if (favoritedUrls.length === 0) return;
    
    // Aktif favoriyi diziden çıkar
    favoritedUrls.splice(currentFavIndex, 1);
    localStorage.setItem('9nau9_favorites', JSON.stringify(favoritedUrls));

    // Eğer son favoriyi sildiysek indeksi başa sar
    if (currentFavIndex >= favoritedUrls.length) {
        currentFavIndex = 0;
    }
    
    // EĞER FAVORİLER TAMAMEN BİTTİYSE
    if (favoritedUrls.length === 0) {
        loadFavoriler(); // Boş ekranı çizmesi için ana fonksiyonu çağır
    } else {
        // FAVORİLER HALA VARSA EKRANDAN ATMA, BİR SONRAKİNE GEÇ VE ALTI GÜNCELLE
        isFirstFavView = false; 
        loadFavoriteToIframe();
        
        // Sadece kalp ikonunu ekrandan kaldır (Çünkü artık favori değil)
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
    isAdActive = false; // REKLAM TAKILMASINI ÖNLE
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

// 2. Sahne: Favoriler (Eksiksiz Tam Sürüm)
function loadFavoriler() {
    isAdActive = false; // REKLAM TAKILMASINI ÖNLE
    isFirstFavView = true;
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
            <span id="fav-refresh-btn" class="icon-btn icon-large" onclick="handleFavRefreshClick()" aria-label="refresh">${pixelIcons.refresh}</span>
        </div>
        <div class="footer-right">
            ${heartBtnHTML}
        </div>
    `;
}

// Sistemi Başlat
gosterilenSayfalar.push(currentGameIndex); // DÜZELTME: Site ilk açıldığında gösterilen oyunu hafızaya al
loadAnaAkis();

// Service Worker Başlatıcı
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker aktif!', reg))
            .catch(err => console.log('Service Worker hatası:', err));
    });
}
