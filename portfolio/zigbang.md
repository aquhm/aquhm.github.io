---
layout: page
title: 직방 3D 단지 투어
permalink: /portfolio/zigbang/
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
  <h1>직방 3D 단지 투어 - 실감형 부동산 가상 투어</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/zigbang_image2.png" alt="직방 3D 단지 투어 메인 이미지">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2018.05 - 2020.12</p>  
    <p><strong>개발 환경:</strong> Unity, C#, WebGL, Visual Studio, Git</p>  
    <p><strong>플랫폼:</strong> Web, iOS, Android</p>  
    <p><strong>개발 규모:</strong> 전체 5인 중 클라이언트 3~4인</p>
  </div>

  <div class="project-description">
    <p>직방의 부동산 중개 플랫폼에 3D 가상 투어 기능을 개발하여 사용자가 직접 방문하지 않고도 현장감 있게 아파트 단지와 호실을 둘러볼 수 있는 서비스를 구현했습니다. Unity 기반의 경량화된 3D 렌더링과 사용자 친화적인 인터페이스를 통해 모바일 환경에서도 빠르고 안정적인 가상 투어 경험을 제공했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>UI/UX 개발</h3>
    <ul>
      <li>UGUI 기반 전체 UI 시스템 개발 및 연출 작업</li>
      <li>Room 면적별 정보 표시 UX 설계</li>
      <li>매물 정보 시각화 시스템 구현</li>
      <li>사용자 온보딩을 위한 튜토리얼 시스템 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>성능 최적화</h3>
    <ul>
      <li>Object Material Pooling으로 생성 시 지연 최적화</li>
      <li>주변 건물 Culling 처리</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>데이터 통합</h3>
    <ul>
      <li>서버 API를 통한 실시간 매물 정보 연동</li>      
      <li>매물 정보 필터링 및 표시 기능 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>사용자 경험 개선</h3>
    <ul>      
      <li>다양한 화면 크기 및 해상도 대응</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>모바일 환경 최적화</h3>
    <p>다양한 기기에서 일관된 성능을 보장하기 위해 Object Pooling과 Culling 시스템을 세밀하게 조정했습니다. 특히 Object Material Pooling을 활용하여 생성 시 발생하는 지연을 최소화하고, 화면에 보이지 않는 주변 건물에 대한 효율적인 Culling 처리를 구현함으로써 저사양 모바일 기기에서도 원활한 성능을 확보했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>폴더블 기기 대응</h3>
    <p>폴더블 기기의 동적 해상도 변경 시 발생하는 렌더링 이슈를 해결했습니다. 화면 접힘 상태가 변경될 때 렌더텍스쳐가 올바르게 조정되지 않는 문제를 위해, 해상도 변경 이벤트 감지 시 렌더텍스쳐를 동적으로 재생성하는 방식을 구현했습니다. 다양한 안드로이드 및 iOS 기기에서의 철저한 테스트를 통해 기기별 특성을 고려한 최적화를 진행했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>직방 3D 단지 투어 프로젝트는 게임 엔진 기술을 실용적인 비즈니스 도메인에 적용하는 값진 경험이었습니다.</p>
    <p>짧은 개발 기간 내에 높은 완성도를 달성하기 위해 팀원들과 긴밀한 협업 체계를 구축한 것이 성공적인 런칭의 핵심이었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/zigbang_image1.png" alt="호 상세 뷰">
        <p>호 상세 뷰</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/zigbang_image3.png" alt="전경 뷰">
        <p>전경 뷰</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/zigbang_image4.png" alt="매물정보 시각화">
        <p>매물정보 시각화</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div style="position: relative; padding-bottom: 30%; height: 0; overflow: hidden; max-width: 100%;">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Wtx45Vvjse4?si=nk1xs0PIVl2y_A99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/soma">← Soma</a>
  <a href="/portfolio/">프로젝트 목록</a>
  <a href="/portfolio/icarus">이카루스 온라인 →</a>
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
  max-height: 600px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  margin: 0 auto;
  display: block;
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