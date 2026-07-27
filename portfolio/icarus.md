---
layout: portfolio-detail
title: 이카루스 온라인
permalink: /portfolio/icarus/
description: PC 3D MMORPG 이카루스 온라인의 북미 런칭 프로젝트. Nexon America 플랫폼 연동과 북미 특화 UI/UX 개발을 담당했습니다.
image: /images/portfolio/icarus_image4.webp
---

<div class="portfolio-header">
  <h1>이카루스 온라인 - 북미 런칭 프로젝트</h1>  
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/icarus_image4.webp' | relative_url }}" alt="이카루스 온라인 메인 이미지" width="1024" height="769" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2015.10 - 2017.12</p>  
    <p><strong>개발 환경:</strong> CryEngine3, C++, WinApi, STL, Visual Studio, Action Script3.0, ScaleForm4.0, Mantis, SVN</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>개발 규모:</strong> 전체 70~75인 중 클라이언트 6~8인</p>
  </div>

  <div class="project-description">
    <p>국내에서 성공적으로 서비스 중이던 이카루스 온라인의 북미 런칭 프로젝트에 참여하여 Nexon America 플랫폼 연동 및 북미 시장에 특화된 기능 개발을 담당했습니다. 북미 유저들의 선호도와 사용 패턴을 고려한 다양한 시스템을 구현하여 성공적인 해외 진출에 기여했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>Nexon America 플랫폼 연동</h3>
    <ul>
      <li>MultiThread Custom Patcher CLI 개발 및 Nexon Launcher 연동</li>
      <li>안정적인 패치 시스템 구현으로 런칭 초기 이탈률 감소</li>
      <li>Nexon America 로그인 시스템 연동</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>북미 특화 UI/UX 개선</h3>
    <ul>
      <li>액션 모드 시스템 개발 (크로스헤어 모드, 퀵슬롯 추가, 타겟 유지 시스템)</li>
      <li>UI 크기 조절 옵션 및 저사양 모드 설정 구현</li>
      <li>퀘스트 네비게이션 시스템 개발 (목표 지점 방향 및 거리 표시)</li>
      <li>북미 징계 처리 표시 시스템 구현 (계정 제재 만료 기간 및 사유 표시)</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>게임 컨텐츠 개발 및 최적화</h3>
    <ul>
      <li>3:3 PvP 전장 시스템, 대규모 유물 쟁탈전 PvP 콘텐츠, 통합 던전 용병단 PvE 콘텐츠 구현</li>
      <li>캐시샵 시스템 개선 (캐시 타입 추가, 아이템 레벨 제한)</li>
      <li>아이템 강화 시스템 개선</li>
      <li>펫 길들이기/컬렉션 개선, 길드 가입/홍보</li>
      <li>대규모 UI/UX 개편 작업</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>시스템 안정화</h3>
    <ul>
      <li>네트워크 안정성 향상 (디스커넥 리커넥팅)</li>
      <li>CryPack 분할 패치 개선</li>      
    </ul>
  </div>

  <div class="feature-section">
    <h3>로컬라이징 시스템 개선</h3>
    <ul>
      <li>Excel Automation Library 기반 텍스트 관리 시스템 개발</li>
      <li>국가별 이미지 자동 교체 시스템 구현</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>CryPack 파일 분할 패치 시스템</h3>
    <p>CryEngine의 Pak 파일 제한용량(1.9GB) 초과 시 패치가 되지 않는 심각한 이슈가 있었습니다. 이를 해결하기 위해 제한용량 초과 시 신규 Pak 파일을 생성하고 자동으로 패치되는 시스템을 구현했습니다. 특히 다중 스레드 기반의 Custom Patcher를 개발하여 Nexon Launcher와 성공적으로 연동함으로써 패치 안정성과 속도를 크게 개선했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>네트워크 리커넥팅 시스템</h3>
    <p>네트워크 단절 시 기존에는 로비를 재진입해야 했던 불편함을 개선하기 위해, 서버 간 직접 리커넥팅 시스템을 구현했습니다. 이를 통해 로딩 시간을 단축하고 사용자 경험을 크게 향상시켰습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>이카루스 온라인의 북미 런칭 TF팀에 합류하여 글로벌 서비스 준비 과정에서 중요한 역할을 수행했습니다. 본 프로젝트에서 가장 가치 있었던 경험은 Nexon America의 플랫폼 연동을 통한 북미 서비스 런칭이었습니다.</p>

    <p>특히, 다중 스레드 기반의 Custom Patcher를 개발하는 과정에서 네트워크 프로그래밍과 멀티스레딩에 대한 심도 있는 지식을 습득할 수 있었으며, 이는 이후 프로젝트에서도 큰 자산이 되었습니다.</p>

    <p>Nexon America와의 지속적인 협업 과정에서 글로벌 서비스 개발에 대한 깊은 이해를 얻게 되었으며, 결과적으로 기존 국내 서비스보다 향상된 시스템을 구축하여 성공적인 북미 런칭을 달성했습니다. 이 경험은 글로벌 시장을 타겟으로 하는 게임 개발의 중요한 이정표가 되었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  

  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/icarus_image2.webp' | relative_url }}" alt="펠로우 소환수" width="1440" height="901" loading="lazy" decoding="async">
        <p>펠로우 소환수</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/icarus_image3.webp' | relative_url }}" alt="로비 캐릭터 선택" width="1599" height="896" loading="lazy" decoding="async">
        <p>로비 캐릭터 선택</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/icarus_image1.webp' | relative_url }}" alt="거점 콘텐츠" width="822" height="406" loading="lazy" decoding="async">
        <p>거점 콘텐츠</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/1mp1ZvCoS40?si=gyy_ZvbtjOkVKG8S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/makers_games/' | relative_url }}">← 쿼터뷰 모바일 전략 시뮬레이션</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/iris/' | relative_url }}">아이리스 온라인 →</a>
</div>
