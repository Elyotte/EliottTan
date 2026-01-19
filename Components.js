class NavBar extends HTMLElement {
  connectedCallback() {
    const isProjectPage = window.location.pathname.includes("/projects/");
    const pathToIndex = isProjectPage ? "../index.html" : "index.html";  

    this.innerHTML = `
      <a href="${pathToIndex}#hero">Home</a>
      <a href="${pathToIndex}#projects">Projects</a>
      <a href="${pathToIndex}#footer">Contact</a>
    `
  }
}

class Footerbar extends HTMLElement{
    connectedCallback(){
      const isProjectPage = window.location.pathname.includes("/projects/");
      const pathToIndex = isProjectPage ? "../index.html" : "index.html";  

      this.innerHTML = `
      <p>© 2025 - tan.eliott04@gmail.com</p>
      <div>
        <a href="${pathToIndex}#hero">Home</a>
        <a href="linkedin.com/in/eliott-tan">LinkedIn</a>
        <a href="https://github.com/Elyotte">GitHub</a>
      </div> 
      `
    }
}

customElements.define("nav-bar", NavBar)
customElements.define("app-footer", Footerbar)