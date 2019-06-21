
console.log('hellow world')

if ('serviceWorker' in navigator) {
  console.log('navigator is support service worker')
  window.addEventListener('load', () => {
    console.log('navigator here')
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('service worker registed')
      })
      .catch(() => {
        console.log('service worker error')
      })
  })
} else {
  console.log('navigator in not support service worker')
}