class NavBar extends MultipageComponent {
  connectedCallback() {
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

customElements.define("nav-bar", NavBar)