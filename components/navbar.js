class NavBar extends HTMLElement {
  connectedCallback() {
    const isProjectPage = window.location.pathname.includes("/projects/")

    const base = isProjectPage ? "../index.html" : "index.html"

    this.innerHTML = `
      <nav>
        <a href="${base}#hero">Home</a>
        <a href="${base}#projects">Projects</a>
        <a href="${base}#footer">Contact</a>
      </nav>
    `
  }
}

customElements.define("nav-bar", NavBar)