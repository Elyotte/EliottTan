class NavBar extends HTMLElement {
  connectedCallback() {
    const isProjectPage = window.location.pathname.includes("/Projects/");
    const pathToIndex = isProjectPage ? "../index.html" : "index.html";  

    this.innerHTML = `
      <a href="${pathToIndex}#hero">Home</a>
      <a href="${pathToIndex}#projects">Projects</a>
      <a href="${pathToIndex}#Prototypes">Prototypes</a>
      <a href="${pathToIndex}#R&D">R&D</a>
      <a href="${pathToIndex}#footer">Contact</a>
    `
  }
}

class Footerbar extends HTMLElement{
    connectedCallback(){
      const isProjectPage = window.location.pathname.includes("/Projects/");
      const pathToIndex = isProjectPage ? "../index.html" : "index.html";  

      this.innerHTML = `
      <p>© 2025 - tan.eliott04@gmail.com</p>
      <div class="footer-links">
        <a href="${pathToIndex}#hero">Home</a>
        <a href="https://www.linkedin.com/in/eliott-tan/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Elyotte" target="_blank">GitHub</a>
      </div> 
      `
    }
}

customElements.define("nav-bar", NavBar)
customElements.define("app-footer", Footerbar)