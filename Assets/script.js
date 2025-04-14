function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'yes');
    document.getElementById('cookieBanner').style.display = 'none';
  }

  window.onload = function () {
    if (!localStorage.getItem('cookiesAccepted')) {
      document.getElementById('cookieBanner').style.display = 'flex';
    }
  };

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });