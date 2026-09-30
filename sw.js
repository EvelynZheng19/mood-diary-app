const CACHE='mood-diary-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
self.addEventListener('periodicsync',e=>{if(e.tag==='mood-reminder'){e.waitUntil(self.registration.showNotification('情绪日记与自我调节',{body:'今天还没有记录心情。给自己三分钟，看看此刻的感受。',icon:'icon-192.png'}))}});
