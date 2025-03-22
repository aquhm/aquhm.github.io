---
layout: page
title: 포트폴리오
permalink: /portfolio/
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

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Full of Happiness</h1>
    <p class="hero-description">안녕하세요! 읽기 쉬운 코드를 지향하는 개발자 김대호입니다.</p>
    <p class="hero-description">C++, C# 기반의 게임 엔진 개발 경험을 바탕으로 PC와 모바일 플랫폼에서 약 10년간의 다양한 개발을 수행해왔습니다.</p>
    <p class="hero-description">다양한 프레임워크에 대한 관심이 많으며 도전하기를 좋아합니다.</p>
    <a href="#projects" class="hero-button">프로젝트 살펴보기</a>
  </div>
  <div class="hero-image">
    <img src="{{ site.baseurl }}/images/programming.jpg" alt="개발자 일러스트레이션">
  </div>
</div>

<h1 id="projects" class="section-title">Works</h1>

<div class="projects-container">
  <a href="/portfolio/soma" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">Soma</h2>
      <p class="project-subtitle">WebRTC 기반 3D 아바타 가상 오피스</p>
      <p class="project-description">Unity Engine 기반 메타버스형 3D 가상 오피스 서비스로, Windows, macOS, Android, iOS 멀티 플랫폼을 지원하는 화상 통화 기반 재택근무 솔루션입니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/soma_image1.jpg" alt="Soma 프로젝트 미리보기">
    </div>
  </a>

  <a href="/portfolio/zigbang" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">직방 3D 단지 투어</h2>
      <p class="project-subtitle">Data Driven 방식의 아파트 단지 시뮬레이션</p>
      <p class="project-description">React Native 기반 직방 앱에 Unity Engine 모듈을 통합하여 3D 아파트 단지 시뮬레이션 서비스를 개발했습니다. 아파트 매물 정보 시각화 및 성능 최적화를 통해 모바일 환경에서도 원활하게 작동하는 서비스를 구현했습니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/zigbang_image2.png" alt="직방 3D 단지 투어 미리보기">
    </div>
  </a>

  <a href="/portfolio/icarus" class="project-item">
    <div class="project-content">
      <div class="project-category">C++, CryEngine3</div>
      <h2 class="project-title">이카루스 온라인</h2>
      <p class="project-subtitle">PC 3D Online MMORPG</p>
      <p class="project-description">국내에서 성공적으로 서비스 중이던 이카루스 온라인의 북미 런칭 프로젝트에 참여하여 Nexon America 플랫폼 연동 및 북미 시장에 특화된 기능 개발을 담당했습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/icarus_image1.png" alt="이카루스 온라인 미리보기">
    </div>
  </a>

  <a href="/portfolio/iris" class="project-item">
    <div class="project-content">
      <div class="project-category">C++, GameBryo</div>
      <h2 class="project-title">아이리스 온라인</h2>
      <p class="project-subtitle">PC 3D Online MMORPG</p>
      <p class="project-description">아이리스 온라인의 서비스 런칭 3개월 전 합류하여 상용화 준비 및 러시아 진출을 위한 현지화 작업을 담당했습니다. 초기에는 클라이언트 개발에 집중하다가 점차 서버 및 데이터베이스 작업까지 범위를 확장하여 풀스택 개발 경험을 쌓았습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/iris_image1.jpg" alt="아이리스 온라인 미리보기">
    </div>
  </a>
</div>

<h1 class="section-title">Personal Projects</h1>

<div class="projects-container">
  <a href="/portfolio/puyo_puzzle" class="project-item">
    <div class="project-content">
      <div class="project-category">C++, SDL3</div>
      <h2 class="project-title">뿌요뿌요 퍼즐 게임</h2>
      <p class="project-subtitle">C++/SDL3 기반 네트워크 대전 퍼즐 게임</p>
      <p class="project-description">SDL3 라이브러리를 활용하여 네트워크 대전이 가능한 뿌요뿌요 스타일의 퍼즐 게임을 개발했습니다. P2P기반의 서버, 클라이언트 로직을 구현하였습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/puzzle_image1.png" alt="뿌요뿌요 퍼즐 게임 미리보기">
    </div>
  </a>

  <a href="/portfolio/sheet_generator" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, .NET</div>
      <h2 class="project-title">SheetGenerator</h2>
      <p class="project-subtitle">데이터 및 코드 생성 도구</p>
      <p class="project-description">구글 시트나 Excel 데이터를 바이너리 또는 JSON 형식으로 변환하고, 해당 데이터를 효율적으로 관리할 수 있는 C# 코드를 자동으로 생성하는 도구입니다. 게임 개발 및 응용 프로그램에서 자주 필요한 데이터 관리 솔루션입니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/sheet_generator_image.png" alt="SheetGenerator 미리보기">
    </div>
  </a>

  <a href="/portfolio/git_action_runner" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, WPF</div>
      <h2 class="project-title">Git Action Runner</h2>
      <p class="project-subtitle">GitHub Actions 워크플로우 관리 도구</p>
      <p class="project-description">Windows 데스크톱 환경에서 GitHub Actions 워크플로우를 관리하는 GUI 애플리케이션입니다. 개발자 친화적인 인터페이스로 복잡한 CI/CD 파이프라인을 손쉽게 제어할 수 있도록 설계되었습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image1.png" alt="Git Action Runner 미리보기">
    </div>
  </a>
</div>

<div class="skills-section">
  <h1 class="skill-heading">SKILL</h1>

  <div class="skill-row">
    <div class="skill-category">Game Development</div>
    <ul class="skill-list">
      <li>Unity3D, CryEngine3, SDL</li>
      <li>GameBryo, ScaleForm</li>
      <li>UGUI, UniRx</li>
      <li>Cross-Platform Development</li>
    </ul>
  </div>

  <div class="skill-divider"></div>

  <div class="skill-row">
    <div class="skill-category">Programming Languages</div>
    <ul class="skill-list">
      <li>C++, C#</li>
      <li>TypeScript</li>
      <li>ActionScript, Python</li>
      <li>STL, WinApi</li>
    </ul>
  </div>

  <div class="skill-divider"></div>

  <div class="skill-row">
    <div class="skill-category">Tools & Environments</div>
    <ul class="skill-list">
      <li>Visual Studio, Jetbrain Rider, Xcode</li>
      <li>Git/GitHub, SVN, Perforce</li>
      <li>MSSQL, Stored Procedure</li>
      <li>REST API, WebRTC</li>
      <li>Electron, Slack, Jira</li>
    </ul>
  </div>
</div>

<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-info">
      <h3 class="footer-title">연락처</h3>
      <p class="footer-email">이메일: <a href="mailto:aquhm@naver.com">aquhm@naver.com</a></p>
      <p class="footer-github">GitHub: <a href="https://github.com/aquhm" target="_blank">github.com/aquhm</a></p>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2025 weight500. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<style>
/* 기본 스타일 리셋 및 폰트 설정 */
body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
  line-height: 1.6;
  margin: 0;
  padding: 0;
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

/* 히어로 섹션 */
.hero-section {
  display: flex;
  align-items: center;
  padding: 80px 40px;
  margin-bottom: 60px;
  overflow: hidden;
  position: relative;
}

.hero-content {
  flex: 1;
  padding-right: 40px;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #333;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 2.2rem;
  font-weight: 600;
  color: #2e95e5;
  margin: 0 0 20px 0;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #555;
  margin: 0 0 15px 0;
  max-width: 600px;
}

.hero-button {
  display: inline-block;
  background-color: #2e95e5;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 6px;
  margin-top: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero-button:hover {
  background-color: #1a82d5;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(46, 149, 229, 0.3);
  text-decoration: none;
  color: white;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.hero-image img {
  max-width: 100%;
  max-height: 400px;
}

/* 섹션 제목 */
.section-title {
  font-size: 2.4rem;
  margin: 80px 40px 5px;
  color: #333;
  font-weight: 700;
  display: flex;
  align-items: baseline;
}

.section-title::before {  
  color: #2e95e5;
  margin-right: 15px;
  font-weight: 600;
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  margin: 0 40px 40px;
}

/* 프로젝트 컨테이너 */
.projects-container {
  padding: 0 40px;
}

/* 프로젝트 아이템 스타일 */
.project-item {
  display: flex;
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border: 1px solid #eee;
  background-color: #fff;
  overflow: hidden;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: #333;
}

.project-item:hover .project-link {
  color: #2e95e5;
}

.project-content {
  flex: 1;
  padding-right: 40px;
}

.project-category {
  font-size: 1rem;
  color: #888;
  margin-bottom: 10px;
  font-weight: 500;
}

.project-title {
  font-size: 2.2rem;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.project-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin: 0 0 15px 0;
  font-weight: 500;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 20px 0;
  color: #666;
  max-width: 600px;
}

.project-period {
  display: block;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 20px;
}

.project-link {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  transition: color 0.3s;
}

.project-image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 450px;
  height: 300px;
  border-radius: 6px;
  flex-shrink: 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  background-color: #f8f8f8;
}

.project-item:hover .project-image img {
  transform: scale(1.05);
}

/* 스킬 섹션 스타일 */
.skills-section {
  margin: 60px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0 40px;
}

.skill-heading {
  font-size: 2.5rem;
  font-weight: 600;
  color: #4285F4;
  margin-bottom: 40px;
}

.skill-row {
  display: flex;
  margin-bottom: 20px;
}

.skill-category {
  width: 300px;
  font-size: 1.5rem;
  color: #888;
  padding-right: 20px;
  font-weight: 400;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  flex: 1;
}

.skill-list li {
  position: relative;
  padding-left: 20px;
  margin-right: 50px;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.5;
  flex-basis: 30%;
  color: #333;
}

.skill-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4285F4;
  font-weight: bold;
}

.skill-divider {
  height: 1px;
  background-color: #eee;
  margin: 30px 0;
}

/* 푸터 스타일 */
.site-footer {
  background-color: #f8f9fa;
  color: #555;
  padding: 60px 0;
  margin-top: 80px;
  border-top: 1px solid #eee;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.footer-email, .footer-github {
  margin: 10px 0;
  font-size: 0.95rem;
}

.footer-email a, .footer-github a {
  color: #2e95e5;
  text-decoration: none;
}

.footer-copyright {
  margin-top: 40px;
  font-size: 0.85rem;
  color: #888;
}

/* 반응형 디자인 */
@media (max-width: 1200px) {
  .project-item {
    flex-direction: column;
  }
  
  .project-content {
    padding-right: 0;
    padding-bottom: 30px;
  }
  
  .project-image {
    width: 100%;
    height: 350px;
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 992px) {
  .skill-row {
    flex-direction: column;
  }
  
  .skill-category {
    width: 100%;
    margin-bottom: 15px;
  }
  
  .skill-list li {
    flex-basis: 45%;
  }
}

@media (max-width: 768px) {
  .navigation-container {
    flex-direction: column;
    padding: 20px;
  }
  
  .logo {
    margin-bottom: 15px;
  }
  
  .main-navigation ul {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .navigation-button {
    margin-top: 15px;
  }

  .section-title {
    margin: 40px 20px 5px;
    font-size: 2rem;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .section-title::before {
    margin-bottom: 5px;
  }
  
  .section-description {
    margin: 10px 20px 30px;
  }
  
  .projects-container {
    padding: 0 20px;
  }
  
  .project-item {
    padding: 25px;
  }
  
  .project-title {
    font-size: 1.8rem;
  }
  
  .project-image {
    height: 250px;
  }
  
  .skills-section {
    padding: 0 20px 40px;
  }
  
  .skill-list li {
    flex-basis: 100%;
  }
}
</style>