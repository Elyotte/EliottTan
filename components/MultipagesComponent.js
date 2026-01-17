class MultipageComponent extends HTMLElement{
    isProjectPage = window.location.pathname.includes("/projects/");
    base = isProjectPage ? "../index.html" : "index.html";
}