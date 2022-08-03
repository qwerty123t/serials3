import Glide from '@glidejs/glide'

new Glide('.glide', { 
  type: 'carousel',
  autoplay: 3000,
  perView: 4,
  breakpoints: {
    700: {
      perView: 1
    }
  }
}).mount()