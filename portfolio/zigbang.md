---
layout: portfolio-detail
title: 직방 3D 단지 투어
permalink: /portfolio/zigbang/
description: React Native 기반 직방 앱에 Unity 모듈을 연동한 3D 아파트 단지 시뮬레이션. API 메타데이터 시각화, UI 개선과 모바일 성능 최적화를 담당했습니다.
image: /images/portfolio/zigbang_image2.webp
---

<div class="portfolio-header">
  <h1>직방 3D 단지 투어 - 실감형 부동산 가상 투어</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/zigbang_image2.webp' | relative_url }}" alt="직방 3D 단지 투어 메인 이미지" width="737" height="1479" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2020.11 - 2021.04</p>  
    <p><strong>개발 환경:</strong> Unity, C#, Visual Studio Code, REST API, Github, Jira, Slack</p>
    <p><strong>플랫폼:</strong> Android, iOS</p>
    <p><strong>개발 규모:</strong> 전체 6인 중 클라이언트 3~4인</p>
  </div>

  <div class="project-description">
    <p>React Native 기반 직방 앱에 Unity Engine을 연동하여 아파트 단지를 3D로 시뮬레이션하는 서비스를 개발했습니다. 런칭 3개월 전 합류하여 주로 사용자 경험 개선과 서비스 안정화에 주력했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>UI/UX 개발 및 연출 작업</h3>
    <ul>
      <li>UGUI 기반 전체 UI 시스템 개선 및 연출 작업</li>
      <li>REST API를 통해 수신한 Metadata정보 시각화 및 UX 구현</li>
      <li>로컬 캐시 정보를 활용하여 사용자 온보딩을 위한 튜토리얼 기능 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>성능 최적화</h3>
    <ul>
      <li>건물 객체의 활용되는 Material 정보를 Pooling으로 관리하여 객체 생성 시 지연을 최소화 및 메모리 최적화</li>
      <li>아파트 단지 다수의 주변 건물 3D Object Culling 처리를 통한 최적화 구현</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>직관적인 UI/UX 설계를 통한 서비스 완성도 향상</li>
    <li>효율적인 리소스 관리로 모바일 환경에서의 성능 최적화 달성</li>
    <li>실제 매물 정보와 3D 시뮬레이션의 성공적인 통합 구현</li>
  </ul>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>모바일 환경 최적화</h3>
    <p>다양한 기기에서 일관된 성능을 보장하기 위해 Object Pooling과 Culling 시스템을 세밀하게 조정했습니다. 특히 Object Material Pooling을 활용하여 생성 시 발생하는 지연을 최소화하고, 화면에 보이지 않는 주변 건물에 대한 효율적인 Culling 처리를 구현함으로써 저사양 모바일 기기에서도 원활한 성능을 확보했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>모바일 렌더링 최적화</h3>
    <p>아파트 단지 주변의 다수 건물을 Culling해 불필요한 렌더링을 줄이고, 건물 객체의 Material 정보를 Pooling해 객체 생성 지연과 메모리 사용을 줄였습니다.</p>
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
        <img src="{{ '/images/portfolio/zigbang_image1.webp' | relative_url }}" alt="호 상세 뷰" width="743" height="1408" loading="lazy" decoding="async">
        <p>호 상세 뷰</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/zigbang_image3.webp' | relative_url }}" alt="전경 뷰" width="737" height="1522" loading="lazy" decoding="async">
        <p>전경 뷰</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/zigbang_image4.webp' | relative_url }}" alt="매물정보 시각화" width="402" height="866" loading="lazy" decoding="async">
        <p>매물정보 시각화</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/Wtx45Vvjse4?si=nk1xs0PIVl2y_A99" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/soma/' | relative_url }}">← Soma</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/makers_games/' | relative_url }}">쿼터뷰 모바일 전략 시뮬레이션 →</a>
</div>
