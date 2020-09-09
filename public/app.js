if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service.js')
    .then( (reg) => console.log('service worker regstered' , reg))
    .catch((err) => console.log('service Worker not registered' , err))
}