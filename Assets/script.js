function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'yes');
    document.getElementById('cookieBanner').style.display = 'none';
  }

  window.onload = function () {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookieBanner').style.display = 'flex';
    }
  };

  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
  });
  
  document.querySelectorAll(".has-submenu > a").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle("open");
      }
    });
  });