var cacheName = 'odelife-stars-app-v1'
var filesToCache = [
	'/',
  '/index.html',
  '/stars.html',
  '/styles/styles.css',
  '/images/logo.png',
  '/styles/bootstrap.min.css',
  '/styles/bootstrap-grid.min.css',
  '/styles/bootstrap-reboot.min.css',
  '/scripts/bootstrap.min.js',
  '/scripts/bootstrap.bundle.min.js',
  '/scripts/jquery-3.7.1.min.js'
];


// start service worker and cache all of the app's content
self.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(cacheName).then(function(cache){
			return cache.addAll(filesToCache);
		})
	);
});


// serve cached content when offline
self.addEventListener('fetch', function(e){
	e.respondWith(
		caches.match(e.request).then(function(response){
			return response || fetch(e.request);
		})
	);

});