self.addEventListener("install" , o=>{
   o.waitUnti(
       caches.open("static").then(cache =>{
           return cache.addAll(["./","./index.html", "./styles.css", "./log.png","./main.js"]);
       })
   );
   
});

self.addEventListener("fetch" , o=>{
   //console.log('intercepting fetch request for: ${o.request.url');
   o.respondWith(
       caches.match(o.request).then(response =>{
            return response || fetch(o.request);
       })
   );
});