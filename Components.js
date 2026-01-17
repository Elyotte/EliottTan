class NavBar extends HTMLElement {
  connectedCallback() {
    const isProjectPage = window.location.pathname.includes("/projects/");
    const pathToIndex = isProjectPage ? "../index.html" : "index.html";  

    this.style.position = 'sticky';
    this.style.top = '0';
    this.style.zIndex = '1000';
    this.style.display = 'block';
    this.style.width = '100%';
    

    this.innerHTML = `
      <nav class="nav">
        <a href="${pathToIndex}#hero">Home</a>
        <a href="${pathToIndex}#projects">Projects</a>
        <a href="${pathToIndex}#footer">Contact</a>
      </nav>
    `
  }
}

class Footerbar extends HTMLElement{
    
}

customElements.define("nav-bar", NavBar)
customElements.define("app-footer", Footerbar)