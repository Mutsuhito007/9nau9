// 9nau9 Service Worker (Tarayıcıyı PWA olduğuna inandırmak için)
self.addEventListener('install', (e) => {
    console.log('[9nau9] Service Worker Kuruldu');
});

self.addEventListener('fetch', (e) => {
    // Çevrimdışı çalışabilme yeteneği için boş bırakıyoruz
});