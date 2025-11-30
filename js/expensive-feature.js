import throttle from 'lodash-es/throttle.js'
import { addCommas } from 'utils'

export async function start() {
    console.log('Expensive feature started!')

    const response = await fetch("https://api.github.com/users/learnwebcode")
    const data = await response.json()
    
    const followersEl = document.getElementById('followers')
    followersEl.classList.add('followers-badge')
    followersEl.textContent = `I have ${addCommas(data.followers)} followers on GitHub`
}

const liveWidthSpan = document.getElementById('live-width')
onResize()
const followersEl = document.getElementById('live-width')
    followersEl.classList.add('live-width')

function onResize() {
    liveWidthSpan.textContent = `current screen width: ${window.innerWidth}px`
}

// Call at most once per second
const throttledResize = throttle(onResize, 1000)
window.addEventListener("resize", throttledResize)