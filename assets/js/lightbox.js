/**
 * 프로젝트 상세 페이지 이미지 라이트박스
 *
 * .portfolio-main-image / .gallery-item 안의 이미지를 클릭하면
 * 화면 중앙에 원본 비율로 확대해 보여준다. 배경 클릭, 닫기 버튼, Esc로 닫는다.
 * 스크립트가 실패해도 이미지는 원래대로 보인다 (점진적 향상).
 */
(function () {
  "use strict";

  var targets = document.querySelectorAll(
    ".portfolio-main-image img, .gallery-item img"
  );
  if (!targets.length) return;

  var overlay = null;
  var lastFocus = null;

  function captionFor(img) {
    var item = img.closest ? img.closest(".gallery-item") : null;
    var p = item ? item.querySelector("p") : null;
    return (p && p.textContent.trim()) || img.getAttribute("alt") || "";
  }

  function close() {
    if (!overlay) return;
    document.body.style.overflow = "";
    document.removeEventListener("keydown", onKeydown);
    overlay.remove();
    overlay = null;
    if (lastFocus) lastFocus.focus();
  }

  function onKeydown(event) {
    if (event.key === "Escape") close();
  }

  function open(img) {
    lastFocus = img;

    overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", captionFor(img) || "이미지 확대 보기");

    var figure = document.createElement("figure");
    figure.className = "lightbox__figure";

    var big = document.createElement("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || "";
    big.className = "lightbox__img";
    figure.appendChild(big);

    var cap = captionFor(img);
    if (cap) {
      var figcaption = document.createElement("figcaption");
      figcaption.className = "lightbox__caption";
      figcaption.textContent = cap;
      figure.appendChild(figcaption);
    }

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox__close";
    closeBtn.setAttribute("aria-label", "닫기");
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", close);

    overlay.appendChild(closeBtn);
    overlay.appendChild(figure);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target === figure) close();
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeydown);
    // 강제 리플로우로 초기 상태(opacity: 0)를 커밋한 뒤 클래스를 붙여
    // 트랜지션이 항상 발동하게 한다 (rAF는 환경에 따라 지연될 수 있음)
    overlay.getBoundingClientRect();
    overlay.classList.add("is-open");
    closeBtn.focus();
  }

  targets.forEach(function (img) {
    img.classList.add("lightbox-target");
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", (img.alt || "이미지") + " 확대 보기");
    img.addEventListener("click", function () {
      open(img);
    });
    img.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open(img);
      }
    });
  });
})();
