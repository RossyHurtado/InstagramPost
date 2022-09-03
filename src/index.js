import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <my-post 
        username2="rossycecilia"  
        location="New York City"
        pp="./images/rossy.jpeg"
        publi="./images/studio.jpg"
        
        views="1.000.000 view"
        username1="rossycecilia" 
        caption="New studio ready!" 
        hastag= "#myhouse" 
        data="View all 500 comments"
        days="3 DAYS AGO"> 
        </my-post>
        `
    }
}

customElements.define("app-container",AppContainer);
