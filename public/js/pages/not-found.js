export default class NotFound extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        const template = document.createElement("template");
        template.innerHTML = /* html */`
            <h1>Not Found</h1>
        `;
        
        const style = document.createElement('style');
        style.textContent = /* css */`
            
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.appendChild(style);
    }
}