// ---- Page navigation logic ----
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const logo = document.getElementById("logo-home");

function showPage(pageId) {
  // hide all pages, show the selected one
  pages.forEach((page) => {
    page.classList.toggle("active", page.id === pageId);
  });

  // update active state on nav links (feedback about current page)
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageId);
  });

  // scroll to top when switching pages
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Nav link clicks
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = link.dataset.page;
    showPage(pageId);
  });
});

// Logo click -> always return to Home
logo.addEventListener("click", () => {
  showPage("home");
});

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();
