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
    <p><strong>개발 기간:</strong> 2015.10 - 2018.01</p>
    <p><strong>개발 환경:</strong> CryEngine3, C++, WinAPI, STL, Visual Studio, ActionScript 3.0, Scaleform 4.0, Mantis, SVN</p>  
    <p><strong>플랫폼:</strong> Windows</p>  
    <p><strong>개발 규모:</strong> 전체 70~75인 중 클라이언트 6~8인</p>
  </div>

  <div class="project-description">
    <p>기존 온라인 게임의 북미 서비스 프로젝트에 참여하여 Nexon America 플랫폼 연동, 클라이언트 시스템 개발, 대규모 파일 패치 시스템 구축, UI/UX 개선 및 서비스 안정화 업무를 담당했습니다. 특히 멀티스레드 기반의 대용량 파일 처리와 네트워크 오류 대응 등 안정적인 클라이언트 서비스 운영을 위한 시스템 개발에 참여했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>대용량 파일 패치 시스템 설계 및 개발</h3>
    <ul>
      <li>멀티스레드 기반 Custom Patcher를 설계·구현하여 대규모 파일의 병렬 다운로드, 압축 해제 및 무결성 검증을 처리</li>
      <li>약 9만여 개의 파일을 대상으로 패치 데이터를 효율적으로 처리하고, 병렬 처리하여 대규모 패치 환경에 대응</li>
      <li>gzip 압축 해제 및 파일 무결성 검증 로직을 구현하여 패치 과정에서 발생할 수 있는 데이터 오류를 사전에 검증</li>
      <li>Nexon 패치 SDK와 연동하여 JSON 기반 패치 상태 정보를 전송하고 다운로드 및 적용 진행 상황을 관리</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>외부 플랫폼 및 시스템 연동</h3>
    <ul>
      <li>Nexon America 플랫폼과 클라이언트 간 연동 기능을 개발하고 북미 서비스 환경에 맞는 클라이언트 기능 구현</li>
      <li>국가별 서비스 환경과 요구사항에 맞춰 기존 클라이언트 시스템을 확장하고 기능을 적용</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>네트워크 오류 대응 및 서비스 안정화</h3>
    <ul>
      <li>네트워크 불안정으로 인한 소켓 연결 오류 발생 시 서비스 상태를 확인하고 재접속할 수 있도록 예외 처리 및 상태 복구 로직 구현</li>
      <li>로비 서버와 게임 서버 간 재진입 과정을 개선하여 네트워크 오류 발생 이후 사용자의 서비스 복귀 시간을 단축</li>
      <li>대용량 패치 과정에서 발생하는 파일 크기 제한 및 비정상 패치 문제를 분석하고, 일정 크기 단위로 파일을 분할 처리하는 방식으로 패치 시스템 안정화</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>클라이언트 기능 및 UI/UX 개발</h3>
    <ul>
      <li>사용자 인터랙션과 서비스 요구사항에 맞춘 다양한 클라이언트 기능 및 UI/UX 개발</li>
      <li>기존 시스템의 UI/UX를 개선하고 신규 기능 추가에 필요한 클라이언트 구조 및 화면 개발</li>
      <li>CPU·GPU 벤치마크 데이터를 활용하여 사용자 디바이스 성능을 평가하고, 시스템 사양에 따라 그래픽 품질을 자동 설정하는 기능 구현</li>
      <li>주요 구현: 액션 모드(크로스헤어·퀵슬롯·타겟 유지), UI 크기 조절·저사양 모드, 퀘스트 네비게이션, 3:3 PvP 전장·유물 쟁탈전·용병단 PvE 콘텐츠</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>로컬라이징 및 데이터 관리 시스템</h3>
    <ul>
      <li>Excel Automation Library를 활용하여 서비스 텍스트를 관리하는 데이터 처리 시스템 개발</li>
      <li>국가 및 서비스 환경에 따라 텍스트와 이미지 리소스를 자동으로 변경할 수 있는 로컬라이징 시스템 구현</li>
      <li>반복적인 로컬라이징 작업을 자동화하여 서비스 지역별 리소스 적용 및 유지보수 효율 향상</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>멀티스레드·병렬 처리 기반의 대용량 파일 패치 시스템을 구축하여 대규모 패치 데이터의 안정적인 배포 환경 구현</li>
    <li>파일 무결성 검증 및 네트워크 오류 복구 기능을 통해 클라이언트 서비스 안정성 향상</li>
    <li>Nexon America 플랫폼 연동 및 북미 서비스 환경에 맞춘 클라이언트 기능 개발을 통해 해외 서비스 런칭에 기여</li>
    <li>디바이스 성능 측정 및 자동 그래픽 설정 기능을 구현하여 다양한 사용자 환경에서의 서비스 품질 개선</li>
    <li>로컬라이징 데이터 처리 및 리소스 적용 과정을 자동화하여 반복적인 운영 작업의 효율성 향상</li>
  </ul>
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
