---
layout: page
title: 쿼터뷰 모바일 전략 시뮬레이션
permalink: /portfolio/makers_games/
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
  <h1>쿼터뷰 모바일 전략 시뮬레이션</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/maker_image1.jpg" alt="쿼터뷰 모바일 전략 시뮬레이션 메인 이미지">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2018.01 - 2020.10</p>
    <p><strong>개발 환경:</strong> Unity, C#, Visual Studio, Slack, Jira, Github, RESTful API</p>
    <p><strong>플랫폼:</strong> Android, iOS</p>
    <p><strong>개발 규모:</strong> 전체 25~30인 중 클라이언트 5~6인</p>
  </div>

  <div class="project-description">
    <p>'Game of War: Fire Age', 'Lords Mobile'과 유사한 쿼터뷰 방식의 모바일 전략 시뮬레이션 게임을 개발했습니다. 프로젝트 초기부터 소프트 런칭 직전까지 참여하며 핵심 성장 시스템 개발을 주도했습니다. 데이터 기반 설계를 통해 확장성과 유지보수성을 확보하고, 기획자용 개발 도구를 제작하여 개발 생산성을 크게 향상시켰습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>스킬 시스템 구축</h3>
    <ul>
      <li>XML 데이터 기반의 연구/재능/연맹 등 다양한 스킬 트리 설계 및 UI/UX 연동</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>성장 시스템 개발</h3>
    <ul>
      <li>MVC 패턴과 이벤트 기반 아키텍처를 활용하여 군주, 영웅, 병사 등 성장 관련 오브젝트의 생명주기(생성, 레벨업, 소멸) 관리</li>
      <li>자원 수집 및 훈련병 훈련 시스템 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>전투 및 아이템 시스템</h3>
    <ul>
      <li>부대 출전, 전투 덱 설정 등 전투 준비 기능 및 정찰 기능 구현</li>
      <li>인벤토리, 상점, 아이템 강화 시스템 및 연맹 생성/가입, 연합 전투 기능 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>개발 효율화 도구 제작</h3>
    <ul>
      <li>Unity EditorWindow를 활용한 편집 도구를 개발하여 기획자가 테스트 환경을 쉽게 설정할 수 있도록 지원</li>
      <li>Excel 데이터를 XML로 변환하는 Serialize 도구를 유지보수하고, VBA Macro 연동을 통해 기획자 작업 효율성 향상</li>
      <li>XML 데이터 무결성 검증 모듈을 구현하여 빌드 전 오류 발생률 감소</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>데이터 기반의 확장성 있는 설계</h3>
    <p>게임의 핵심 시스템 대부분을 XML 데이터 기반으로 설계하여 기획자가 코드 수정 없이 밸런스나 콘텐츠를 쉽게 추가하고 변경할 수 있는 구조를 만들었습니다. 이를 통해 확장성과 유지보수성을 크게 높였고, 이는 빠른 프로토타이핑과 반복적인 개선 작업에 기여했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>개발 생산성 향상을 위한 에디터 도구</h3>
    <p>기획자들이 직접 게임 데이터를 수정하고 테스트할 수 있는 Unity 에디터 도구를 제작했습니다. 이 도구를 통해 개발자의 개입 없이 기획자가 직접 콘텐츠를 테스트하고 수정할 수 있게 되어, 개발팀은 핵심 로직 개발에 더 집중할 수 있었고 전체적인 개발 속도가 향상되었습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>프로젝트 초기 단계부터 참여하여 모바일 전략 게임의 핵심 시스템을 설계하고 구축하는 전 과정을 경험할 수 있었습니다. 특히 데이터 기반 설계를 통해 시스템의 유연성과 확장성을 확보하는 것의 중요성을 깊이 깨달았습니다.</p>
    <p>또한, 기획자와의 원활한 협업을 위해 개발 도구를 제작하고 개선하는 과정에서, 좋은 도구가 어떻게 팀 전체의 생산성을 높일 수 있는지 직접 체감했습니다. 이 프로젝트를 통해 소프트 런칭 90% 진척도를 달성하며, 상용화 수준의 게임을 만드는 데 필요한 기술적 역량과 협업 능력을 기를 수 있었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/maker_image1.jpg" alt="게임 플레이 화면 1" style="max-width: 400px; height: auto;">
        <p>월드맵 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/maker_image2.jpg" alt="게임 플레이 화면 2" style="max-width: 400px; height: auto;">
        <p>영지 화면</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/zigbang">← 직방 3D 단지 투어</a>
  <a href="/portfolio/">프로젝트 목록</a>
  <a href="/portfolio/icarus">이카루스 온라인 →</a>
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
