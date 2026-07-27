---
layout: portfolio-detail
title: Git Action Runner
permalink: /portfolio/git_action_runner/
description: GitHub Actions 워크플로우를 Windows 데스크톱에서 제어하는 C#/WPF GUI 애플리케이션입니다.
image: /images/portfolio/git_action_runner_image1.webp
---

<div class="portfolio-header">
  <h1>Git Action Runner</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/git_action_runner_image1.webp' | relative_url }}" alt="Git Action Runner 메인 화면" width="840" height="500" fetchpriority="high" decoding="async">
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
        <img src="{{ '/images/portfolio/git_action_runner_image3.webp' | relative_url }}" alt="로그인 화면" width="400" height="332" loading="lazy" decoding="async">
        <p>GitHub Personal Access Token을 통한 안전한 인증</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/git_action_runner_image1.webp' | relative_url }}" alt="리포지토리 목록" width="840" height="500" loading="lazy" decoding="async">
        <p>사용자 리포지토리 목록 및 워크플로우 상태 확인</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/git_action_runner_image4.webp' | relative_url }}" alt="워크플로우 실행" width="780" height="500" loading="lazy" decoding="async">
        <p>브랜치 선택 및 워크플로우 실행 관리</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/git_action_runner_image2.webp' | relative_url }}" alt="실행 이력" width="451" height="160" loading="lazy" decoding="async">
        <p>Windows Notification</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/sheet_generator/' | relative_url }}">← Sheet Generator</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/comment_temperature/' | relative_url }}">댓글온도 →</a>
</div>
