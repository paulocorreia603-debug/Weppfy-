self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("push",function(e){e.waitUntil((async function(){
 var t="Wepfy",c="Nova atividade. Abre o Wepfy.",tag="";
 try{var sub=await self.registration.pushManager.getSubscription();
  if(sub){var r=await fetch("https://nqtfgtvonqkdxxapidfg.supabase.co/functions/v1/wepfy?acao=ultima&t="+Date.now(),{headers:{"x-ep":sub.endpoint},cache:"no-store"});
   var j=await r.json();t=j.t||t;c=j.c||c;tag=j.tag||""}}catch(x){}
 await self.registration.showNotification(t,{body:c,icon:"icon.png",badge:"icon.png",tag:tag?("venda-"+tag):("fluxo-"+Date.now()),renotify:true})})())});
self.addEventListener("notificationclick",function(e){e.notification.close();e.waitUntil(self.clients.matchAll({type:"window"}).then(function(l){return l.length?l[0].focus():self.clients.openWindow("./")}))});
