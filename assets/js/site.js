/**
 * 사이트 공통 동작
 * - 다크 모드 전환: 선택은 localStorage에 저장하고, 저장값이 없으면 시스템 설정을 따른다.
 * - 프로젝트 목록 필터: 전체 / 회사 / 개인 그룹을 보여주거나 숨긴다.
 */
(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.dataset.theme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  var bar = document.querySelector("[data-filters]");
  if (bar) {
    var buttons = bar.querySelectorAll("button[data-filter]");
    var groups = document.querySelectorAll("[data-group]");
    var status = document.querySelector("[data-filter-status]");
    bar.hidden = false;
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.dataset.filter;
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
        groups.forEach(function (g) { g.hidden = f !== "all" && g.dataset.group !== f; });
        if (status) {
          var count = document.querySelectorAll(".grid:not([hidden]) .pcard").length;
          status.textContent = btn.textContent + " " + count + "개를 보여줍니다.";
        }
      });
    });
  }
})();
