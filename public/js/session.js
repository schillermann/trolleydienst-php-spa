export default class Session {
    #page

    /**
     * @param {Page} page 
     */
    constructor(page) {
        this.#page = page
    }

    async start() {
        const page = this.#page

        async function registerPage() {
            const content = document.querySelector("content")
            if (content.firstChild) {
                content.removeChild(content.firstChild)
            }
            const elementName = window.location.hash.substring(1)
        
            if(!customElements.get(elementName)) {
                const Page = await page.withRequestPath(window.location.hash)
                customElements.define(elementName, Page);
            }

            content.appendChild(document.createElement(elementName));
        }

        await registerPage()
        window.addEventListener('hashchange', registerPage)
    }
}