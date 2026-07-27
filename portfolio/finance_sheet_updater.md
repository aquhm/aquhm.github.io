---
layout: portfolio-detail
title: 금융 데이터 수집 및 저장 시스템
permalink: /portfolio/finance_sheet_updater/
description: 금융감독원 API, 환율, 금속 시세 등 금융 데이터를 자동 수집해 Google Sheets와 AWS S3에 저장하는 Python 데이터 파이프라인입니다.
image: /images/portfolio/finance_sheet_updater_image1.webp
---

<div class="portfolio-header">
  <h1>금융 데이터 수집 및 저장 시스템</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/finance_sheet_updater_image1.webp' | relative_url }}" alt="금융 데이터 수집 및 저장 시스템" width="1371" height="752" fetchpriority="high" decoding="async">
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
        <img src="{{ '/images/portfolio/finance_sheet_updater_image2.webp' | relative_url }}" alt="구글 시트 데이터 시각화" width="1600" height="676" loading="lazy" decoding="async">
        <p>AWS S3 데이터 저장</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/unity_build/' | relative_url }}">← Unity Build Wizard</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
</div>
