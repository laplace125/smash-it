const staticCacheName = "site-static-v1" ;
const dynamicCache = "site-dynamic-v1";
const asset = [
    '/' ,
    '/index.html' ,
    '/style.css',
    '/index.js',
    '/apple-icon-150x150.png' ,
    '/splash-screen.jpg',
    'https://api.openweathermap.org/data/2.5/weather?q=london&APPID=b44a75f786956d76ce1dd22e69f9b892&units=metric'
];


self.addEventListener('install' , evt => {
    //console.log('service worker has been installed');
    evt.waitUntill(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets)
        })
    )
    
});



self.addEventListener('activate' , evt => {
    //console.log('service worker has been activated')
    evt.waitUntill(
        caches.keys().then(keys => {
            return Promise.all(keys
            .filter(key =>key !== staticCacheName)  
            .map(key => caches.delete())  
            )
        })
    )

})

self.addEventListener('fetch' , evt => {
    //console.log('fetch event' , evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes =>{
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                })
            });
        })
    )})