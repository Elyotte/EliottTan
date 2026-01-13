class NavBar extends HTMLElement {
  connectedCallback() {
    const isProjectPage = window.location.pathname.includes("/projects/")

    this.style.position = 'sticky';
    this.style.top = '0';
    this.style.zIndex = '1000';
    this.style.display = 'block';
    this.style.width = '100%';
    
    const base = isProjectPage ? "../index.html" : "index.html"

    this.innerHTML = `
      <nav class="nav">
        <a href="${base}#hero">Home</a>
        <a href="${base}#projects">Projects</a>
        <a href="${base}#footer">Contact</a>
      </nav>
    `
  }
}

customElements.define("nav-bar", NavBar)