---
layout: portfolio-detail
title: SheetGenerator
permalink: /portfolio/sheet_generator/
description: 구글 시트와 Excel 데이터를 바이너리·JSON으로 변환하고 관리용 C# 코드를 자동 생성하는 데이터 파이프라인 도구입니다.
image: /images/portfolio/sheet_generator_image.webp
---

<div class="portfolio-header">
  <h1>SheetGenerator</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/sheet_generator_image.webp' | relative_url }}" alt="SheetGenerator 메인 이미지" width="863" height="481" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 환경:</strong> C# 10.0, .NET 7.0, Visual Studio 2022</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/SheetGenerator" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/SheetGenerator</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;SheetGenerator는 구글 시트나 Excel 데이터를 바이너리 또는 JSON 형식으로 변환하고, 해당 데이터를 효율적으로 관리할 수 있는 C# 코드를 자동으로 생성하는 도구입니다. 게임 개발 및 응용 프로그램에서 자주 필요한 데이터 관리 솔루션으로, 기획자와 개발자 간의 협업을 원활하게 만들어줍니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>데이터 임포트 및 변환 시스템</h3>
    <ul>
      <li>구글 API를 통해 스프레드시트 데이터를 직접 가져오는 기능 구현</li>
      <li>다양한 형식(바이너리, JSON)으로 데이터 변환 모듈 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>코드 생성 엔진</h3>
    <ul>
      <li>템플릿 기반 코드 생성 시스템 설계 및 구현</li>
      <li>데이터 접근을 위한 클래스와 메서드 자동 생성</li>
      <li>확장 가능한 템플릿 시스템 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>데이터 최적화 및 성능 향상</h3>
    <ul>
      <li>MessagePack을 이용한 효율적인 바이너리 직렬화/역직렬화 구현</li>
      <li>Index와 Key 기반 데이터 검색 알고리즘 최적화</li>      
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>확장성 있는 아키텍처 설계</h3>
    <p>다양한 데이터 소스와 출력 형식, 그리고 여러 프로그래밍 언어를 지원하기 위한 확장 가능한 아키텍처를 설계하는 것이 목표이었습니다. 인터페이스와 팩토리 패턴을 활용하여 새로운 기능을 추가할 때 기존 코드를 수정하지 않고도 확장할 수 있는 구조를 만들었습니다.</p>
    <p>C#뿐만 아니라 C++, Python등 다른 언어 코드로 생성가능하게 확장성 있게 추상화하여 구조화하였습니다.</p>
  </div>  
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>실제 프로젝트를 진행하면서  기획자와 개발자 간의 협업 효율성과 협업성의 중요성을 알고 있었습니다.  반복적인 작업을 자동화하면 프로젝트 효율성이 좋아지기 떄문에 그런 경험을 토대로 만들어 보았습니다.</p>
    <p>현재는 구글시트만 지원하지만, 추후 Excel 파일로부터 진원하도록 기능 추가 예정입니다.</p>
  </div>
</div>
<div class="portfolio-nav">
  <a href="{{ '/portfolio/puyo_puzzle/' | relative_url }}">← 뿌요 퍼즐게임</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/git_action_runner/' | relative_url }}">Git Action Runner →</a>
</div>
