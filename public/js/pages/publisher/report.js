export default class Report extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});

        const template = document.createElement("template");
        template.innerHTML = /* html */`
            <h1>Report</h1>
        `;

        const style = document.createElement('style');
        style.textContent = /* css */`
            
        `;

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.appendChild(style);
    }
}