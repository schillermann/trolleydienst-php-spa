import Head from './layout/head.js'
import Nav from './layout/nav.js'
import Page from './page.js'
import Session from './session.js'

window.customElements.define('wc-head', Head)
window.customElements.define('wc-nav', Nav)

const page = await new Page('./pages/not-found.js')
    .withRoute('', './pages/dashboard.js')
    .withRoute('#publisher-route', './pages/publisher/route.js')
    .withRoute('#publisher-info', './pages/publisher/info.js')
    .withRoute('#publisher-profile', './pages/publisher/profile.js')
    .withRoute('#publisher-report', './pages/publisher/report.js')

await new Session(page).start(window.location.hash)

window.addEventListener('click', function(event) {
    if (event.target.tagName === 'WC-HEAD') {
        
        const isOpen = document.querySelector('wc-nav').getAttribute('open') === 'true'
        const status = !isOpen
        document.querySelector('wc-nav').setAttribute('open', status.toString())
    }
    
})