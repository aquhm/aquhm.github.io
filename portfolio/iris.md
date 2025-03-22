---
layout: page
title: 아이리스 온라인
permalink: /portfolio/iris/
---

<div class="navigation-container">
  <div class="logo">
    <a href="/">HOME</a>
  </div>
  <nav class="main-navigation">
    <ul>
      <li><a href="/" class="nav-link {% if page.url == '/' %}active{% endif %}">RESUME</a></li>
      <li><a href="/portfolio/" class="nav-link {% if page.url == '/portfolio/' %}active{% endif %}">PROJECT</a></li>
      <li><a href="https://github.com/aquhm" class="nav-link">GITHUB</a></li>
    </ul>
  </nav>
  <div class="navigation-button">
    <a href="mailto:aquhm@naver.com" class="contact-button">CONTACT</a>
  </div>
</div>

<div class="portfolio-header">
  <h1>아이리스 온라인</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/iris_image1.jpg" alt="아이리스 온라인 메인 이미지">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2009.09 - 2011.05</p>  
    <p><strong>개발 환경:</strong> C++, WinApi, STL, Visual Studio, MFC, GameBryo, Perforce</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>개발 규모:</strong> 전체 25~30인 중 클라이언트 4~5인</p>
  </div>

  <div class="project-description">
    <p>&nbsp;아이리스 온라인의 서비스 런칭 3개월 전 합류하여 상용화 준비 및 러시아 진출을 위한 현지화 작업을 담당했습니다. 초기에는 클라이언트 개발에 집중하다가 점차 서버 및 데이터베이스 작업까지 범위를 확장하여 풀스택 개발 경험을 쌓았습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>SNS 연동 시스템 개발</h3>
    <ul>
      <li>Twitter Open API 및 OAuth 기반 인증 시스템 구현</li>
      <li>게임 내에서 트윗 작성 및 피드 리스트 실시간 표시 기능 개발</li>
      <li>게임 이벤트와 연동된 자동 SNS 알림 시스템 구축</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>핵심 콘텐츠 개발</h3>
    <ul>
      <li>파티/길드 시스템 개선</li>
      <li>친구 시스템 구현</li>
      <li>캐시 아이템 개발 (외형 변경, 탈것)</li>
      <li>콘텐츠 단위의 서버, 클라이언트, DB(MSSQL) Stored Procedure 통합 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>글로벌 서비스 대응</h3>
    <ul>
      <li>러시아 서비스 현지화 및 런칭 지원</li>
      <li>패치 작업 및 유지 보수</li>
      <li>국가별 정책에 맞는 게임 시스템 조정</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>Twitter API 연동</h3>
    <p>당시 소셜 네트워크의 게임 내 통합은 일반적이지 않았습니다. OAuth 인증 방식과 REST API를 활용하여 게임 내에서 Twitter 기능을 구현할 수 있었습니다. 
특히 게임 클라이언트와 웹 서비스 간의 통신을 안정적으로 구현하기 위해 Thread를 활용하여 비동기 통신 방식을 적용하고, 오류 처리 및 재시도 메커니즘을 구축했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>풀스택 개발 경험</h3>
    <p>초기 클라이언트 개발에서 시작하여 점차 서버와 데이터베이스(MSSQL Stored Procedure) 작업까지 담당하게 되면서, 컨텐츠 시스템 단위에 아키텍처를 이해하고 개발할 수 있는 역량을 키웠습니다. </p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>아이리스 온라인 프로젝트는 상용 서비스 직전 단계와 해외 진출 과정에 참여한 귀중한 경험이었습니다. 특히 Twitter API 연동 작업이 가장 흥미롭고 의미 있는 업무였습니다. OAuth 인증 방식과 REST API 활용을 통해 게임 내에서 소셜 기능을 구현하는 과정에서 웹 서비스 연동에 대한 실질적인 경험을 얻을 수 있었습니다.</p>

    <p>또한 초기 클라이언트 개발에서 시작하여 점차 서버와 데이터베이스 작업까지 담당하게 되면서, MMORPG의 전체 시스템 아키텍처를 이해하고 능력을 기를 수 있었습니다. 글로벌 서비스를 위한 현지화 과정에서는 다국어 지원을 고려한 개발의 중요성을 체득했습니다.</p>

    <p>이 프로젝트를 통해 게임 서비스의 전 주기에 걸친 이해와 함께, 다양한 기술 스택을 활용한 풀스택 개발 역량을 쌓을 수 있었습니다. 특히 런칭 준비 단계에서의 집중적인 디버깅과 최적화 작업은 이후 프로젝트에서도 큰 도움이 되었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/iris_image2.jpg" alt="컨텐츠">
        <p>컨텐츠</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/iris_image3.jpg" alt=">트위터 연동 시스템">
        <p>트위터 연동 시스템</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/iris_image5.jpg" alt="로비 캐릭터 화면">
        <p>로비 캐릭터 화면</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div style="position: relative; padding-bottom: 30%; height: 0; overflow: hidden; max-width: 100%;">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/koKhtPk20s4?si=mcemeQ2VktE1Kf4b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/icarus">← 이카루스 온라인</a>
  <a href="/portfolio/">프로젝트 목록</a>
  <a href="/portfolio/puyo_puzzle">뿌요뿌요 퍼즐게임 →</a>
</div>

<style>
.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  color: #333; /* portfolio.md와 일치하는 기본 텍스트 색상 */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
}

h2, h3, h4 {
  margin-top: 2em;
  margin-bottom: 1em;
  color: #1a1a1a;
  font-weight: 600;
}

p {
  margin-bottom: 1.5em;
}

.portfolio-header {
  margin-top: 2.5em;
  margin-bottom: 0.5em;
  text-align: center;
}

.portfolio-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5em;
}

.portfolio-main-image {
  text-align: center;
  margin-bottom: 3em;
}

.portfolio-main-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.project-section {
  margin-bottom: 40px;
  margin-left: 40px;
}

.project-details {
    font-size: 1rem;
    color: #555;
}

.project-details p {
  margin-bottom: 0.7em;
}

.feature-section, .challenge-section {
  margin-bottom: 30px;
}

ul, ol {
  padding-left: 2em;
  margin-bottom: 1.5em;
}

li {
  margin-bottom: 0.7em;
}

.portfolio-media-gallery {
  margin-left: 2em;
  border-top: 1px solid #eee;
  padding-top: 1em;
}

.image-gallery h3 {
  margin-bottom: 0.5em;
}

/* 제목과 내용물 사이 간격 조정 */
.portfolio-media-gallery h2 {
  margin-bottom: 1.5em; /* 제목 아래 간격 조정 */
}

/* 비디오 섹션과 이미지 갤러리 사이 간격 조정 */
.video-container {
  margin-bottom: 0em; /* 기존 간격 축소 */
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  justify-items: center;
}

.gallery-item {
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
  height: auto;
  overflow: visible;
}

.gallery-item img {
  width: 100%;
  height: 350px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  background-color: #f9f9f9;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.02);
}

.gallery-item p {  
  text-align: center;
  font-size: 1rem;
  color: #555;
  margin-top: 5px;
}

.portfolio-nav {
  margin-top: 5em;
  border-top: 1px solid #eee;
  padding-top: 2.5em;
  text-align: center;
}

.portfolio-nav a {
  display: inline-block;
  padding: 12px 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  margin: 0 15px;
  transition: all 0.2s ease;
  font-weight: 500;
}


.portfolio-nav a:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .page-content {
    padding: 0 25px;
  }
  
  .portfolio-nav a {
    margin: 10px 5px;
    display: block;
    width: 100%;
  }
}

/* 네비게이션 스타일 */
.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: white;
  border-bottom: 1px solid #eee;
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo a {
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
}

.main-navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-navigation li {
  margin: 0 15px;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.nav-link:hover, .nav-link.active {
  color: #2e95e5;
}

.contact-button {
  background-color: #2e95e5;
  color: white;
  padding: 8px 18px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #1a82d5;
  text-decoration: none;
  color: white;
}

/* Base Typography */
body {
  font-size: 16px; /* Base font size for all content */
  line-height: 1.6; /* Comfortable line spacing */
}

/* Main Text Elements */
p, li, td, th {
  font-size: 1rem; /* 16px relative to base */
}

/* Headings with Clear Hierarchy */
h1 {
  font-size: 2.5rem;
  color: #333;
  font-weight: 500;
}

h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  margin-top: 30px;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  margin-top: 25px;
  margin-bottom: 15px;
}

/* 단락 스타일 */
p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
}

/* 리스트 스타일 */
ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
  color: #555;
}

/* Secondary Elements */
.meta-info, .project-details span {
  font-size: 0.9375rem; /* 15px - slightly smaller than body */
}

/* Caption Text */
.caption, figcaption, .gallery-item p {
  font-size: 0.875rem; /* 14px */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  body {
    font-size: 15px; /* Slightly smaller base on mobile */
  }
  
  h1 {
    font-size: 2rem; /* 30px */
  }
  
  h2 {
    font-size: 1.5rem; /* 24px */
  }
}
</style>