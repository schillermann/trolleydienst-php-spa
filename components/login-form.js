const template = document.createElement("template");
template.innerHTML =
`
    <div>
        <form>
            <p id="error"></p>
            <input type="text" placeholder="Username or E-Mail"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
            <p><a href="password-reset">Forgot your password?</a></p>
        </form>
    </div>
`;

const style = document.createElement('style');
style.textContent =
`
    div {
        background-color: white;
        font-family: sans-serif;
        margin-top: 30vh;
        margin-left: auto;
        margin-right: auto;
        min-height: 300px;
        max-width: 360px;
        padding: 45px;
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%), 0 5px 5px 0 rgb(0 0 0 / 24%);
        text-align: center;
    }
    input {
        background: #f2f2f2;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
    }
    button {
        text-transform: uppercase;
        cursor: pointer;
        color: white;
        background: #604A7B;
        width: 100%;
        border: 0;
        padding: 15px;
    }
    #error {
        color: red;
        margin-bottom: 2em;
        min-height: 1.2em;
    }
`;

class LoginForm extends HTMLElement {
    constructor() {
        super();

        // this.shownInfo = false;
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.appendChild(style);
    }

    checkCredentials = (event, errorHTMLParagraphElement) => {
        event.preventDefault();
        
        const httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() { 
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                const response = httpRequest.responseText;
                const login = JSON.parse(response);

                if(login.hasOwnProperty('error')) {
                    errorHTMLParagraphElement.innerHTML = login.error;
                } else {
                    alert("Login successful");
                }
            }
        }

        httpRequest.open("GET", "api/login.json", true);            
        httpRequest.send();
    }

    connectedCallback() {
         this.shadowRoot
            .querySelector("button")
            .addEventListener("click", (event) => {
                this.checkCredentials(
                    event,
                    this.shadowRoot.querySelector("#error")
                )
            });
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector("button").removeEventListener("click");
    }
}

export default LoginForm;