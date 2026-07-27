---
layout: portfolio-detail
title: 뿌요뿌요 퍼즐 게임
permalink: /portfolio/puyo_puzzle/
description: C++와 SDL3로 개발한 네트워크 대전 뿌요뿌요 스타일 퍼즐 게임. P2P 기반 서버·클라이언트 로직을 직접 구현했습니다.
image: /images/portfolio/puzzle_image1.webp
---

<div class="portfolio-header">
  <h1>뿌요뿌요 퍼즐 게임</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/puzzle_image1.webp' | relative_url }}" alt="뿌요뿌요 게임 플레이 화면" width="889" height="663" fetchpriority="high" decoding="async">
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
        <img src="{{ '/images/portfolio/puzzle_image2.webp' | relative_url }}" alt="로그인 화면" width="642" height="480" loading="lazy" decoding="async">
        <p>로그인 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/puzzle_image3.webp' | relative_url }}" alt="캐릭터 선택 화면" width="889" height="665" loading="lazy" decoding="async">
        <p>캐릭터 선택 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/puzzle_image4.webp' | relative_url }}" alt="게임 플레이 화면" width="642" height="480" loading="lazy" decoding="async">
        <p>게임 플레이 화면</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 데모 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/c-e-KC9jHfY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/iris/' | relative_url }}">← 아이리스 온라인</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/sheet_generator/' | relative_url }}">Sheet Generator →</a>
</div>
