class HeadLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }

    templateLoggedOut() {
        if (!this.templateLoggedOutElement) {
            this.templateLoggedOutElement = document.createElement("template")
            this.templateLoggedOutElement.innerHTML = /* html */`
                <style>
                    nav {
                        display: flex;
                        justify-content: space-between;
                        background-color: #373433;
                        color: #ffffff;
                    }
                    #primary-items {
                        display: flex;
                    }
                </style>
                <nav>
                    <section id="primary-items">
                        <label>Logo</label>
                        <h1>Trolleydienst</h1>
                    </section>
                </nav>
            `
        }

        return this.templateLoggedOutElement
    }

    templateLoggedIn() {
        if (!this.templateLoggedInElement) {
            this.templateLoggedInElement = document.createElement("template")
            this.templateLoggedInElement.innerHTML = /* html */`
                <style>
                    nav {
                        display: flex;
                        justify-content: space-between;
                        background-color: #373433;
                        color: #ffffff;
                    }
                    #primary-items {
                        display: flex;
                    }
                    #secondary-items {
    
                    }
                </style>
                <nav>
                    <section id="primary-items">
                        <button onclick>Menu</button>
                        <label>Logo</label>
                    </section>
                    <section id="secondary-items">
                        <a href="#">LOG OUT</a>
                    </section>
                </nav>
            `
        }
        return this.templateLoggedInElement
    }

    static get observedAttributes() { return ['loggedin']; }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name !== 'loggedin') {
            return
        }
        this.shadowRoot.innerHTML = ''
        
        if (this.getAttribute('loggedin') === 'true') {
            this.shadowRoot.appendChild(this.templateLoggedIn().content.cloneNode(true))
            return
        }
        
        this.shadowRoot.appendChild(this.templateLoggedOut().content.cloneNode(true))
    }
}

export { HeadLogin as default }