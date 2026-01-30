export function initHeader() {
  const hamburger = document.querySelector(".header__hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // active 메뉴 자동 처리
  setActiveMenuLink();

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    document.body.classList.toggle("is-locked", isOpen);
  });

  function setActiveMenuLink() {
    // 현재 파일명 가져오기
    const currentPage = window.location.pathname.split("/").pop();

    // 모든 메뉴 링크 선택 (데스크톱 + 모바일)
    const links = document.querySelectorAll(".header__menu-link, .mobile-menu a");

    links.forEach(link => {
      const href = link.getAttribute("href");

      // index.html 예외 처리
      const isHome =
        (currentPage === "" || currentPage === "index.html") &&
        href === "index.html";

      if (href === currentPage || isHome) {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    });
  }

}
