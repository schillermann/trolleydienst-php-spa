class NavAdmin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});   
    }

    templateAdmin() {
        if (!this.templateAdminElement) {
            this.templateAdminElement = document.createElement("template");
            this.templateAdminElement.innerHTML = /* html */`
                <style>
                    ul {
                        border: 1px solid;
                    }
                </style>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#publisher-route-trolley">Route 1</a></li>
                        <li><a href="#publisher-route-infostand">Route 2</a></li>
                        <li><a href="#publisher-report">Report</a></li>
                        <li><a href="#publisher-info">Info</a></li>
                        <li><a href="#publisher-profile">Profile</a></li>
                    </ul>
                </nav>
            `;
        }

        return this.templateAdminElement
    }

    templatePublisher() {
        if (!this.templatePublisherElement) {
            this.templatePublisherElement = document.createElement("template");
            this.templatePublisherElement.innerHTML = /* html */`
                <style>
                    ul {
                        border: 1px solid;
                    }
                </style>
                <nav>
                    <ul>
                        <li>Route 1</li>
                        <li>Route 2</li>
                    </ul>
                </nav>
            `;
        }

        return this.templatePublisherElement
    }

    templateAnonymous() {
        if (!this.templateAnonymousElement) {
            this.templateAnonymousElement = document.createElement("template");
            this.templateAnonymousElement.innerHTML = /* html */`
                <nav>
                </nav>
            `;
        }

        return this.templateAnonymousElement
    }

    static get observedAttributes() { return ['open', 'role']; }

    attributeChangedCallback(name, oldValue, newValue) {
        
        if (name === 'role') {
            
            this.shadowRoot.innerHTML = ''
            if (newValue === 'admin') {
                this.shadowRoot.appendChild(this.templateAdmin().content.cloneNode(true));
            } else if (newValue === 'publisher') {
                this.shadowRoot.appendChild(this.templatePublisher().content.cloneNode(true));
            } else {
                this.shadowRoot.appendChild(this.templateAnonymous().content.cloneNode(true));
            }
        }

        if (name === 'open') {
            if (newValue === 'true') {
                this.shadowRoot.querySelector('nav').style.display = 'block'
            } else {
                this.shadowRoot.querySelector('nav').style.display = 'none'
            }
        }
    }
}

export { NavAdmin as default }