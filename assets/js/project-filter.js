/**
 * 프로젝트 목록 언어별 필터 칩
 *
 * [data-project-filter] 컨테이너 안의 [data-lang] 카드를 칩 선택에 따라 걸러낸다.
 * 칩은 JS가 동작할 때만 노출하므로(초기 hidden), 스크립트가 실패해도
 * 전체 프로젝트 목록은 그대로 보인다.
 *
 * data-lang은 공백으로 구분해 여러 값을 가질 수 있다. (예: data-lang="cpp csharp")
 */
(function () {
  "use strict";

  var section = document.querySelector("[data-project-filter]");
  if (!section) return;

  var bar = section.querySelector(".project-filter");
  var status = section.querySelector("[data-filter-status]");
  var items = Array.prototype.slice.call(section.querySelectorAll("[data-lang]"));
  if (!bar || !items.length) return;

  var chips = Array.prototype.slice.call(bar.querySelectorAll(".filter-chip"));
  if (!chips.length) return;

  function langsOf(item) {
    return (item.getAttribute("data-lang") || "").split(/\s+/).filter(Boolean);
  }

  function countFor(filter) {
    if (filter === "all") return items.length;
    return items.filter(function (item) {
      return langsOf(item).indexOf(filter) !== -1;
    }).length;
  }

  // 해당 언어 프로젝트가 없는 칩은 제거하고, 남은 칩에는 개수를 붙인다.
  // 개수 배지를 붙이기 전에 표시 라벨을 따로 보관한다(안내 문구에 사용).
  chips = chips.filter(function (chip) {
    var count = countFor(chip.getAttribute("data-filter"));
    if (count === 0) {
      chip.parentNode.removeChild(chip);
      return false;
    }
    chip.setAttribute("data-label", chip.textContent.trim());
    var badge = document.createElement("span");
    badge.className = "filter-chip__count";
    badge.textContent = count;
    chip.appendChild(badge);
    return true;
  });

  function labelOf(filter) {
    for (var i = 0; i < chips.length; i++) {
      if (chips[i].getAttribute("data-filter") === filter) {
        return chips[i].getAttribute("data-label") || filter;
      }
    }
    return filter;
  }

  function apply(filter) {
    items.forEach(function (item) {
      item.hidden = filter !== "all" && langsOf(item).indexOf(filter) === -1;
    });

    chips.forEach(function (chip) {
      var active = chip.getAttribute("data-filter") === filter;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });

    if (status) {
      status.textContent =
        labelOf(filter) + " 필터 적용, 프로젝트 " + countFor(filter) + "개를 표시합니다.";
    }
  }

  bar.addEventListener("click", function (event) {
    var chip = event.target.closest ? event.target.closest(".filter-chip") : null;
    if (chip && bar.contains(chip)) {
      apply(chip.getAttribute("data-filter"));
    }
  });

  bar.hidden = false;
  apply("all");
})();
