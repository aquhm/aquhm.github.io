/**
 * 프로젝트 상세 페이지 이미지 라이트박스
 *
 * .portfolio-main-image / .gallery-item 안의 이미지를 클릭하면
 * 화면 중앙에 원본 비율로 확대해 보여준다. 배경 클릭, 닫기 버튼, Esc로 닫는다.
 *
 * 핵심 레이아웃은 인라인 스타일로 강제한다 — 배포 직후 방문자의 캐시에
 * 구버전 CSS가 남아 있어도 오버레이가 항상 화면 중앙에 뜨게 하기 위함이다.
 * 스타일시트(_sass/_lightbox.scss)는 hover/focus 같은 상태 표현만 담당한다.
 */
(function () {
  "use strict";

  var targets = document.querySelectorAll(
    ".portfolio-main-image img, .gallery-item img"
  );
  if (!targets.length) return;

  var overlay = null;
  var lastFocus = null;

  function assign(style, props) {
    for (var key in props) style[key] = props[key];
  }

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
    assign(overlay.style, {
      position: "fixed",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      zIndex: "1000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 16px 24px",
      backgroundColor: "rgba(17, 24, 39, 0.88)",
      opacity: "0",
      transition: "opacity 0.2s ease"
    });

    var figure = document.createElement("figure");
    figure.className = "lightbox__figure";
    assign(figure.style, {
      margin: "0",
      maxWidth: "100%",
      maxHeight: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "14px"
    });

    var big = document.createElement("img");
    big.src = img.currentSrc || img.src;
    big.alt = img.alt || "";
    big.className = "lightbox__img";
    assign(big.style, {
      maxWidth: "min(1100px, 100%)",
      maxHeight: "calc(100vh - 160px)",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      borderRadius: "10px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)"
    });
    figure.appendChild(big);

    var cap = captionFor(img);
    if (cap) {
      var figcaption = document.createElement("figcaption");
      figcaption.className = "lightbox__caption";
      figcaption.textContent = cap;
      assign(figcaption.style, {
        color: "#d7dce3",
        fontSize: "0.95rem",
        textAlign: "center"
      });
      figure.appendChild(figcaption);
    }

    var closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "lightbox__close";
    closeBtn.setAttribute("aria-label", "닫기");
    closeBtn.innerHTML = "&times;";
    assign(closeBtn.style, {
      position: "absolute",
      top: "14px",
      right: "16px",
      width: "44px",
      height: "44px",
      border: "0",
      borderRadius: "50%",
      backgroundColor: "rgba(255, 255, 255, 0.12)",
      color: "#fff",
      fontSize: "26px",
      lineHeight: "1",
      cursor: "pointer"
    });
    closeBtn.addEventListener("click", close);

    overlay.appendChild(closeBtn);
    overlay.appendChild(figure);
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay || event.target === figure) close();
    });

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeydown);
    // 강제 리플로우로 opacity: 0을 커밋한 뒤 올려서 페이드인을 발동
    overlay.getBoundingClientRect();
    overlay.style.opacity = "1";
    closeBtn.focus();
  }

  targets.forEach(function (img) {
    img.classList.add("lightbox-target");
    img.style.cursor = "zoom-in";
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
