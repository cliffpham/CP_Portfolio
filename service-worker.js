"use strict";var precacheConfig=[["/cp_portfolio/index.html","4cfd859107e7da22c0a4ea3825143587"],["/cp_portfolio/static/css/main.2e05b7c3.css","382c6a2daf8f5907507746a2823df9c4"],["/cp_portfolio/static/js/main.07be5d8f.js","ff8ae2d64c7cf981df58ba546a3af86f"],["/cp_portfolio/static/media/arrowLeft.1ea5c645.png","1ea5c6453af4315349f388e7fb907279"],["/cp_portfolio/static/media/arrowRight.8382a4e3.png","8382a4e3789e1ab05c4becec54d8d1d2"],["/cp_portfolio/static/media/contact.6c61c54a.jpg","6c61c54a9a4ad87860ef7744995bef3a"],["/cp_portfolio/static/media/demo.8930c8bf.png","8930c8bf1563e375e4728c69d82d202d"],["/cp_portfolio/static/media/email.1760f36a.png","1760f36a6faba0278807ea5349bc2ccd"],["/cp_portfolio/static/media/filler.f833e03d.jpg","f833e03d29d59d88407d73f43ff28296"],["/cp_portfolio/static/media/github.529bbe36.png","529bbe366d082ce54460453a81e72586"],["/cp_portfolio/static/media/linkedin.00438f5e.png","00438f5e4e7c7df451ae640c86fb1285"],["/cp_portfolio/static/media/mylogo.de291ddb.png","de291ddb999a300b3e919c03bb830bd8"],["/cp_portfolio/static/media/notebook.7a1cfe36.jpg","7a1cfe364c6e045829b28fe78e2f3f0c"],["/cp_portfolio/static/media/play.7276f8f7.png","7276f8f7316182a3f63a6b42816e107e"],["/cp_portfolio/static/media/prof2.7e6451e5.png","7e6451e5cf5579b1a6f5003d44baccee"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/cp_portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});