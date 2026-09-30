---
layout: portfolio-detail
title: 쿼터뷰 모바일 전략 시뮬레이션
permalink: /portfolio/makers_games/
description: Game of War 스타일의 쿼터뷰 모바일 전략 시뮬레이션 게임. 프로젝트 초기부터 소프트 런칭 직전까지 참여하며 핵심 성장 시스템 개발을 주도했습니다.
image: /images/portfolio/maker_image1.webp
---

<div class="portfolio-header">
  <h1>쿼터뷰 모바일 전략 시뮬레이션</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/maker_image1.webp' | relative_url }}" alt="쿼터뷰 모바일 전략 시뮬레이션 메인 이미지" width="1600" height="778" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2018.01 - 2020.10</p>
    <p><strong>개발 환경:</strong> Unity, C#, Visual Studio, REST API, GitHub, Jira, Slack</p>
    <p><strong>플랫폼:</strong> Android, iOS</p>
    <p><strong>개발 규모:</strong> 전체 25~30인 중 클라이언트 6인</p>
  </div>

  <div class="project-description">
    <p>모바일 전략 시뮬레이션 프로젝트의 초기 개발부터 소프트 런칭까지 참여하여 데이터 기반 시스템과 다양한 클라이언트 기능을 개발했습니다. MVC 및 이벤트 기반 아키텍처를 적용하여 비즈니스 로직과 UI를 분리하고, 반복적인 개발 및 테스트 작업을 효율화하기 위한 Editor 기반 개발 도구와 데이터 검증 도구를 구축했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>데이터 기반 시스템 및 상태 관리 아키텍처</h3>
    <ul>
      <li>이벤트 기반 아키텍처를 적용하여 데이터와 비즈니스 로직, UI를 분리하고 기능별 상태 및 객체 생명주기를 체계적으로 관리</li>
      <li>XML 기반 데이터를 활용하여 다양한 객체의 생성, 상태 변경, 레벨 변화 및 소멸 등의 생명주기를 관리하는 시스템 구현</li>
      <li>XML 기반 스킬·성장·자원·아이템·연맹 관련 데이터를 활용한 클라이언트 기능 개발</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>개발 및 테스트 도구 구축</h3>
    <ul>
      <li>Unity EditorWindow 기반의 개발·테스트 도구를 제작하여 테스트 환경 설정과 반복 작업을 간소화</li>
      <li>Excel 기반 기획 데이터를 XML로 변환하는 Serialize 도구를 유지보수하고 VBA Macro를 활용하여 Excel과 개발 도구 간 데이터 연동 작업을 자동화</li>
      <li>XML 데이터 무결성 검증 모듈을 구현하여 빌드 전 데이터 오류를 사전 검증하고 런타임 오류 발생 가능성을 감소시킴</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>콘텐츠 시스템 개발</h3>
    <ul>
      <li>데이터 기반의 연구, 재능, 연맹 연구, 스킬 트리 등 다양한 성장 콘텐츠 개발</li>
      <li>이벤트 기반 아키텍처를 활용하여 군주·영웅·병사·소환수 등의 성장 시스템과 객체 생명주기 구현</li>
      <li>월드 맵 이동·전투·정찰, 인벤토리·상점·아이템 강화, 연맹 및 가속 아이템 등 다양한 콘텐츠 시스템 개발</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>이벤트 기반 아키텍처를 적용하여 데이터와 비즈니스 로직, UI를 분리하고 기능 확장성과 유지보수성을 확보</li>
    <li>개발·테스트 도구와 데이터 검증 기능을 구축하여 반복적인 작업과 테스트 과정의 효율성 향상</li>
    <li>데이터 기반 구조를 통해 신규 기능 및 콘텐츠 추가에 유연하게 대응할 수 있는 클라이언트 시스템 구축</li>
    <li>프로젝트 초기 개발부터 소프트 런칭까지 클라이언트 기능 개발에 참여</li>
  </ul>
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
    <p>또한 기획자와의 협업을 위해 Unity Editor 테스트 도구와 Excel 데이터 변환·검증 흐름을 개선했습니다. 반복 작업을 줄이고 빌드 전 데이터 오류를 확인해 안정적인 콘텐츠 개발을 지원했습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maker_image1.webp' | relative_url }}" alt="게임 플레이 화면 1" width="1600" height="778" loading="lazy" decoding="async">
        <p>월드맵 화면</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maker_image2.webp' | relative_url }}" alt="게임 플레이 화면 2" width="1600" height="778" loading="lazy" decoding="async">
        <p>영지 화면</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/zigbang/' | relative_url }}">← 직방 3D 단지 투어</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/icarus/' | relative_url }}">이카루스 온라인 →</a>
</div>
