---
layout: page
title: 뿌요뿌요 퍼즐 게임
permalink: /portfolio/puyo_puzzle/
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
  <h1>뿌요뿌요 퍼즐 게임</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/puzzle_image1.png" alt="뿌요뿌요 게임 플레이 화면">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 환경:</strong> C++, SDL3, Visual Studio 2022</p>  
    <p><strong>플랫폼:</strong> Windows</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/puzzle_puyopuyo" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/puzzle_puyopuyo</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;Modern C++ 기능과 SDL3 라이브러리를 활용하여 네트워크 대전이 가능한 뿌요뿌요 스타일의 퍼즐 게임을 개발했습니다. p2p 기반의 서버 및 클라이언트를 모두 구현하여 1:1 대전이 가능하게 개발하였습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>P2P 네트워크 대전 시스템</h3>
    <ul>
      <li>한 사용자가 서버 역할을 하고 다른 사용자가 클라이언트가 되어 실시간으로 대전할 수 있는 구조 설계</li>
      <li>패킷 기반 통신과 비동기 I/O를 활용한 효율적인 네트워크 처리</li>
      <li>각 패킷 타입별 전용 프로세서로 모듈화된 패킷 처리 시스템 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>게임 시스템 설계</h3>
    <ul>
      <li>상태 패턴을 활용한 게임의 다양한 화면과 상태 전환 관리</li>
      <li>리소스, 상태, 플레이어 등을 관리하는 매니저 클래스 설계</li>
      <li>시각적 효과를 위한 파티클 시스템과 애니메이션 구현</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>시스템 아키텍처 설계</h3>
    <p>다양한 디자인 패턴을 적용하여 확장성 있고 모듈화된 시스템 아키텍처를 구현했습니다. 상태 패턴을 통해 게임의 다양한 화면과 상태 전환을 관리하고, 매니저 시스템으로 리소스와 게임 객체를 효율적으로 관리했습니다. 특히 네트워크 통신과 게임 로직을 분리하여 각 시스템의 독립성을 보장하면서도 유기적인 상호작용이 가능하도록 설계했습니다.</p>
  </div>

<div class="challenge-section">
    <h3>재귀 함수를 활용한 매칭 체크</h3>
    <p>게임 로직상 블록 체크를 효과적으로 해야하는데, 이 과정에서 재귀 로직을 활용하여 Block 체크 및 삭제해야할 방해블록을 선별 추출하였습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>네트워크 프로그래밍</h3>
    <p>P2P 기반의 네트워크 대전 기능을 구현하면서 Windows Socket API와 IOCP(I/O Completion Port)를 활용한 비동기 네트워크 프로그래밍에 대한 이해도를 높였습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>이 프로젝트를 통해 SDL3 엔진 프레임워크에 좀 더 익숙해지고 숙지할 수 있게 되었습니다. </p>
    <p>학생 시절 친구들과 즐겨하던 게임을 직접 만들고 기능을 단계적으로 구현하면서 보람과 재미를 느꼈습니다.</p>
    <p>클라, 서버 풀스택으로 진행하면서 패킷을 정의하고 동기화는 과정 또한 즐겁고 보람있었습니다. </p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/puzzle_image2.png" alt="로그인 화면">
        <p>로그인 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/puzzle_image3.png" alt="캐릭터 선택 화면">
        <p>캐릭터 선택 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/puzzle_image4.png" alt="게임 플레이 화면">
        <p>게임 플레이 화면</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 데모 영상</h3>
    <div style="position: relative; padding-bottom: 30%; height: 0; overflow: hidden; max-width: 100%;">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/c-e-KC9jHfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/iris">← 아이리스 온라인</a>
  <a href="/portfolio/">프로젝트 목록</a>
  <a href="/portfolio/sheet_generator">Sheet Generator →</a>
</div>

<style>
.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  color: #333;
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

.portfolio-media-gallery h2 {
  margin-bottom: 1.5em;
}

.video-container {
  margin-bottom: 0em;
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
  font-size: 16px;
  line-height: 1.6;
}

p, li, td, th {
  font-size: 1rem;
}

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

p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: #555;
}

ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 8px;
  color: #555;
}

@media (max-width: 768px) {
  body {
    font-size: 15px;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>