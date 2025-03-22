---
layout: page
title: Git Action Runner
permalink: /portfolio/git_action_runner/
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
  <h1>Git Action Runner</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image1.png" alt="Git Action Runner 메인 화면">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">      
    <p><strong>개발 환경:</strong> C#, .NET 9.0, WPF, Visual Studio 2022</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/GitActionRunner" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/GitActionRunner</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;Git Action Runner는 Windows 환경에서 GitHub Actions 워크플로우를 관리할 수 있는 데스크톱 애플리케이션입니다. 개발자들이 복잡한 CI/CD 파이프라인을 쉽게 모니터링하고 제어할 수 있도록 직관적인 인터페이스를 제공합니다. Personal Access Token 기반의 안전한 인증 시스템, 실시간 워크플로우 상태 모니터링, 브랜치 관리 등 다양한 기능을 통해 개발 생산성을 향상시킵니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>GitHub API 연동</h3>
    <ul>
      <li>Personal Access Token 기반 원클릭 인증 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>워크플로우 관리 시스템</h3>
    <ul>
      <li>실시간 워크플로우 실행 상태 모니터링 기능 구현</li>
      <li>리포지토리별 브랜치 선택 및 워크플로우 실행 기능 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>사용자 인터페이스 최적화</h3>
    <ul>
      <li>Windows 네이티브 알림 시스템 통합</li>
      <li>워크플로우 상태에 따른 시각적 피드백 제공</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>MVVM 아키텍처 구현</h3>
    <p>WPF MVVM 패턴 구조로 ViewModels에서 Commands와 Properties 바인딩을 통해 View와의 느슨한 결합을 유지하는데, 집중했습니다. 또한 Microsoft.Extensions.DependencyInjection을 활용한 의존성 주입 시스템을 구축하여 컴포넌트 간의 결합도를 낮추고 모듈화된 구조를 만들었습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>GitHub API 연동</h3>
    <p>Octokit.NET 라이브러리를 사용하여 GitHub API와 통합하는 과정에서 REST API 호출, 비동기 프로그래밍, 예외 처리 등의 스킬을 향상시켰습니다. </p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>프로젝트를 진행하면서 CI/CD 파이프라인 상태를 확인하기 위해 GitHub 웹 인터페이스를 여러 단계에 걸쳐 탐색해야 하는 번거로움을 경험했습니다. 이러한 불편함을 해소하고자 데스크톱 환경에서 직접 워크플로우를 모니터링할 수 있는 애플리케이션의 필요성을 인식하게 되었습니다. 특히 CI/CD 워크플로우가 완료되었을 때 Windows 네이티브 알림을 통해 즉시 결과를 확인할 수 있다면 개발 생산성이 크게 향상될 것으로 판단했습니다.</p>
    <p>GitHub API를 활용하여 워크플로우 상태 정보를  조회하고, WPF 프레임워크를 통해 이 정보를 실시간으로 시각화할 수 있었습니다.</p>    
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image3.png" alt="로그인 화면">
        <p>GitHub Personal Access Token을 통한 안전한 인증</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image1.png" alt="리포지토리 목록">
        <p>사용자 리포지토리 목록 및 워크플로우 상태 확인</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image4.png" alt="워크플로우 실행">
        <p>브랜치 선택 및 워크플로우 실행 관리</p>
      </div>
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/git_action_runner_image2.png" alt="실행 이력">
        <p>Windows Notification</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/sheet_generator">← Sheet Generator</a>
  <a href="/portfolio/">프로젝트 목록</a>
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