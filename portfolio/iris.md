---
layout: portfolio-detail
title: 아이리스 온라인
permalink: /portfolio/iris/
description: PC 3D MMORPG 아이리스 온라인의 상용화와 러시아 현지화. Twitter OAuth 연동을 포함해 클라이언트·서버·DB 풀스택 개발을 수행했습니다.
image: /images/portfolio/iris_image1.webp
---

<div class="portfolio-header">
  <h1>아이리스 온라인</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/iris_image1.webp' | relative_url }}" alt="아이리스 온라인 메인 이미지" width="600" height="450" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2009.09 - 2011.05</p>  
    <p><strong>개발 환경:</strong> C++, WinAPI, STL, Visual Studio, MFC, GameBryo, Perforce</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>개발 규모:</strong> 전체 25~30인 중 클라이언트 4~5인</p>
  </div>

  <div class="project-description">
    <p>서비스 런칭 3개월 전 합류하여 상용화 및 러시아 진출을 위한 현지화 업무를 담당했습니다. 외부 SNS 서비스 연동, 사용자 및 콘텐츠 관련 기능 개발, 클라이언트·서버·DB 연계 개발 등을 수행했으며, 러시아 서비스 런칭 이후 패치 및 유지보수 업무를 진행했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>외부 SNS 서비스 연동</h3>
    <ul>
      <li>Twitcurl 라이브러리를 활용하여 Twitter 기능을 클라이언트에 연동</li>
      <li>게임 내 Twitter 로그인/로그아웃, 타임라인 조회, 트윗 작성, 리트윗, 팔로우 기능 구현</li>
      <li>게임 이벤트와 연동하여 Twitter 자동 알림 기능 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>사용자 및 콘텐츠 기능 개발</h3>
    <ul>
      <li>파티·길드·친구 등 사용자 간 커뮤니티 기능 개발 및 개선</li>
      <li>캐시 아이템 기능과 외형 변경, 탈것 기능 구현</li>
      <li>콘텐츠 단위의 서버·클라이언트·DB(MSSQL Stored Procedure) 연계 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>글로벌 서비스 대응</h3>
    <ul>
      <li>러시아 서비스 진출을 위한 클라이언트 현지화 및 런칭 업무 수행</li>
      <li>국가별 서비스에 필요한 패치 및 유지보수 업무 수행</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>Twitter API 및 Twitcurl 라이브러리를 활용한 외부 서비스 연동 기능 구현</li>
    <li>콘텐츠 단위의 서버·클라이언트·DB 연계 개발 경험 확보</li>
    <li>러시아 서비스 현지화 및 런칭, 이후 패치 및 유지보수 수행</li>
  </ul>
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
        <img src="{{ '/images/portfolio/iris_image2.webp' | relative_url }}" alt="컨텐츠" width="600" height="480" loading="lazy" decoding="async">
        <p>컨텐츠</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/iris_image3.webp' | relative_url }}" alt="" width="455" height="619" loading="lazy" decoding="async">트위터 연동 시스템">
        <p>트위터 연동 시스템</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/iris_image5.webp' | relative_url }}" alt="로비 캐릭터 화면" width="1024" height="768" loading="lazy" decoding="async">
        <p>로비 캐릭터 화면</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/koKhtPk20s4?si=mcemeQ2VktE1Kf4b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/icarus/' | relative_url }}">← 이카루스 온라인</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/puyo_puzzle/' | relative_url }}">뿌요뿌요 퍼즐게임 →</a>
</div>
