import Glide from '@glidejs/glide'


function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}


// new Glide('.glide', { 
//   type: 'carousel',
//   autoplay: 3000,
//   perView: 4,
//   gap: `${vw(2.85714286)}`,
//   breakpoints: {
//     700: {
//       perView: 1,
//       peek: {
//         before: 0,
//         after: `${vw(8.5714286)}vw`
//       }
//     }
//   }
// }).mount()


const sliders = document.querySelectorAll('.glide')
const conf = {
  type: 'carousel',
  autoplay: 3000,
  perView: 4,
  gap: `${vw(2.85714286)}`,
  breakpoints: {
    700: {
      perView: 1,
      peek: {
        before: 0,
        after: `${vw(8.5714286)}vw`
      }
    }
  }
}
sliders.forEach(item => {
  new Glide(item, conf).mount()
})