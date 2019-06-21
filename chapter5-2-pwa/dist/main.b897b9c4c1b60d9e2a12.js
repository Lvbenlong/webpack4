(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports) {

console.log('hellow world');

if ('serviceWorker' in navigator) {
  console.log('navigator is support service worker');
  window.addEventListener('load', function () {
    console.log('navigator here');
    navigator.serviceWorker.register('/service-worker.js').then(function () {
      console.log('service worker registed');
    })["catch"](function () {
      console.log('service worker error');
    });
  });
} else {
  console.log('navigator in not support service worker');
}

/***/ })
],[[0,1]]]);
//# sourceMappingURL=main.b897b9c4c1b60d9e2a12.js.map