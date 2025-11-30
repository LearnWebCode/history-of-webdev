import Swup from 'swup';
import { greet, Human } from 'utils'

// use the greet function
console.log(greet('Meowsalot'))

// or, show off the Class syntactic sugar
const bob = new Human('Bobby Jones')
bob.jump()
bob.run()

// only load expensive js when needed as button is clicked
document.getElementById('load-expensive-feature').addEventListener('click', async () => {
    const expensiveModule = await import('./expensive-feature.js')
    expensiveModule.start()
})

// Initialize Swup for page transitions
const swup = new Swup({
    animateHistoryBrowsing: true
});

function updateActiveNav() {
  // Remove active class from all nav links
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.classList.remove('active');
  });
  
  // Add active class to current page link
  const currentLink = document.querySelector(`nav a[href="${window.location.pathname}"]`);
  if (currentLink) {
    currentLink.classList.add('active');
  }
}

// Run on initial load
updateActiveNav();

// Run after each page transition
swup.hooks.on('content:replace', updateActiveNav);