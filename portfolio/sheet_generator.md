---
layout: page
title: SheetGenerator
permalink: /portfolio/sheet_generator/
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
  <h1>SheetGenerator</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/sheet_generator_image.png" alt="SheetGenerator 메인 이미지">
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
  <a href="/portfolio/puyo_puzzle">← 뿌요 퍼즐게임</a>
  <a href="/portfolio/">프로젝트 목록</a>
  <a href="/portfolio/git_action_runner">Git Action Runner →</a>
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
  margin-bottom: 2.5em;
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
  object-fit: cover;
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