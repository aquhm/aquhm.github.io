---
layout: page
title: 프로젝트
permalink: /portfolio/
description: Unity·C++ 기반 게임 클라이언트와 3D 서비스, 디지털 트윈, 온디바이스 AI 앱까지 소프트웨어 엔지니어 김대호의 프로젝트 모음입니다.
image: /images/portfolio/soma_image1.webp
---
<div class="wrap">
  <div class="page-head">
    <h1>프로젝트</h1>
    <p>회사에서 만든 서비스 6개와, 업무 밖에서 만든 앱과 도구들입니다.</p>
  </div>
  <div class="filters" role="group" aria-label="프로젝트 분류" data-filters hidden>
    <button type="button" data-filter="all" aria-pressed="true">전체</button>
    <button type="button" data-filter="work" aria-pressed="false">회사 프로젝트</button>
    <button type="button" data-filter="side" aria-pressed="false">개인 프로젝트</button>
  </div>
  <p class="visually-hidden" data-filter-status role="status" aria-live="polite"></p>

  <h2 class="group-title" data-group="work">회사 프로젝트</h2>
  <div class="grid" data-group="work">
    {%- assign work = site.data.projects | where: "kind", "work" -%}
    {%- for p in work %}{% include project-card.html project=p %}{% endfor %}
  </div>

  <h2 class="group-title" data-group="side">개인 프로젝트</h2>
  <div class="grid" data-group="side">
    {%- assign side = site.data.projects | where: "kind", "side" -%}
    {%- for p in side %}{% include project-card.html project=p %}{% endfor %}
  </div>
</div>
