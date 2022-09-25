export default class Page {
    #fallbackFilePath
    #routesWithFilePath

    /**
     * 
     * @param {string} fallbackFilePath 
     * @param {{route: string, filePath: string}[]} routesWithFilePath 
     */
    constructor(fallbackFilePath, routesWithFilePath = []) {
        this.#fallbackFilePath = fallbackFilePath
        this.#routesWithFilePath = routesWithFilePath
    }

    /**
     * @param {string} name 
     * @param {string} value 
     * @returns {HTMLElement}
     */
    async withRequestPath(path) {
        const route = this.#routesWithFilePath.find(e => e.route === path)
        const filePath = (route) ? route.filePath : this.#fallbackFilePath
        const { default: Page } = await import(filePath)
        return Page
    }

    /**
     * @param {string} route 
     * @param {string} filePath
     * @returns {Page}
     */
    withRoute(route, filePath) {
        
        return new Page(
            this.#fallbackFilePath,
            this.#routesWithFilePath.concat([
                { route, filePath }
            ])
        )
    }
} 