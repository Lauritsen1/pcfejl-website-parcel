let url = window.location.href;

let currentUrl = url.split("/");

let breadcrumb = document.querySelector(".breadcrumbs__current");

let finalUrl = currentUrl[3].split(".")[0];

breadcrumb.textContent = finalUrl;
