class Postinsta extends HTMLElement {
  static get observedAttributes() {
    return ["pp",'publi',"views","username2","username1","caption","hastag", "days","data","location"];
  }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.render();
    }

  attributeChangedCallback (propName, oldValue, newValue){
    this[propName] = newValue;
    this.render();
  }
  
    render() {
      this.shadowRoot.innerHTML = `
          <link rel="stylesheet" href="/src/components/postinsta/style.css"

          <section>
          <div class = "card"></div>
          </section>

          <div>
            <image class="user" src="${this.pp}"></image>
            <image class="post" src="${this.publi}"></image>

            <image class="heart"src="./images/heart.png"></image>
            <image class="comment" src="images/comment.png"></image>
            <image class="share" src="images/share.png"></image>
            <image class="bookmark" src="images/bookmark.png"></image>
            <image class="dot" src="images/dot.png"></image>
            </div>

            <h1 class="local"><b>${this.location}</b></h1>
            <h1 class="data"><b>${this.data}</b></h1>
            <h1 class="seen"><b>${this.views}</b></h1>
            <h1 class="name"><b>${this.username2}</b></h1>
            <h1 class="description"><b>${this.username1} </b>${this.caption} <i style= "color: rgb(67, 130, 207);">${this.hastag}</i></h1>
            <h1 class="date"><b>${this.days}</b></h1>
          
         
          `;
    }
  }
  
  customElements.define('my-post', Postinsta);
  export default Postinsta;
  