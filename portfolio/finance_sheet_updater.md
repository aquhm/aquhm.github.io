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
  <h1>금융 데이터 수집 및 저장 시스템</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ site.baseurl }}/images/portfolio/finance_sheet_updater_image1.png" alt="금융 데이터 수집 및 저장 시스템">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 환경:</strong> Python 3.10, AWS S3, Google Sheets API, Visual Studio Code, Git</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/_FinanceSheetUpdater" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/_FinanceSheetUpdater</a></p>
  </div>

  <div class="project-description">
    <p>금융감독원의 금융상품 API, 환율 정보, 금속 시세 등 다양한 금융 데이터를 자동으로 수집하여 Google Sheets와 AWS S3에 저장하는 파이썬 기반 시스템을 개발했습니다. 데이터 수집, 처리, 저장의 전체 과정을 자동화하여 최신 금융 정보에 쉽게 접근할 수 있는 환경을 구축했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>금융 데이터 수집 모듈 개발</h3>
    <ul>
      <li>금융감독원 오픈 API를 활용한 금융상품 정보 수집 구현</li>
      <li>한국수출입은행 API를 통한 최신 환율 데이터 자동 수집</li>
      <li>FinanceDataReader 라이브러리를 활용한 금속 및 원자재 시세 정보 수집</li>
      <li>비동기 요청 처리를 통한 데이터 수집 성능 최적화</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>Google Sheets 연동 시스템</h3>
    <ul>
      <li>Google API 서비스 계정을 활용한 인증 시스템 구현</li>
      <li>gspread 라이브러리를 활용한 데이터 자동 업데이트 기능 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>AWS S3 저장 시스템</h3>
    <ul>
      <li>boto3 라이브러리를 활용한 AWS S3 연동 모듈 개발</li>
      <li>JSON 및 CSV 형식의 데이터 자동 저장 및 업데이트 기능 구현</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>API 호출 최적화</h3>
    <p>금융감독원 API는 일일 요청 수 제한이 있어, 매번 요청하는 것이 아니라 일정 시간마다 요청한 데이타를 Google Sheets에 업로드 후 그 data를 json, csv로 변환해서 AWS s3에 업로드 하도록 하였습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>Python 생태계의 다양한 라이브러리와 API를 활용한 데이터 파이프라인 구축 경험을 쌓을 수 있었습니다. AWS 클라우드 서비스, Google Sheets API 연동 및 GitHub Action CI/CD를 Workflow 설정으로 데이터 수집, 변환, 업로드 등의 과정을 자동화할 수 있었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ site.baseurl }}/images/portfolio/finance_sheet_updater_image2.png" alt="구글 시트 데이터 시각화">
        <p>AWS S3 데이터 저장</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="/portfolio/git_action_runner">← Git Action Runner</a>
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