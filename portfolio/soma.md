---
layout: portfolio-detail
title: Soma 프로젝트
permalink: /portfolio/soma/
description: WebRTC 기반 3D 아바타 가상 오피스 Soma. Unity로 Windows·macOS·Android·iOS 멀티 플랫폼 화상 협업 솔루션을 기획부터 상용화까지 개발했습니다.
image: /images/portfolio/soma_image1.webp
---

<div class="portfolio-header">
  <h1>Soma - WebRTC 기반 3D 아바타 가상 오피스</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/soma_image1.webp' | relative_url }}" alt="Soma 프로젝트 메인 이미지" width="600" height="600" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2021.04 - 2024.11</p>  
    <p><strong>개발 환경:</strong> Unity, C#, TypeScript, Electron, Python, Jetbrain Rider, Xcode</p>  
    <p><strong>플랫폼:</strong> Windows, macOS, Android, iOS</p>  
    <p><strong>개발 규모:</strong> 전체 15 ~ 20인 중 클라이언트 2~5인</p>
  </div>

  <div class="project-description">
    <p>Unity Engine 기반의 메타버스형 3D 가상 오피스 서비스를 기획 단계부터 출시까지 개발했습니다. Windows, macOS, Android, iOS 멀티 플랫폼을 지원하는 화상 통화 기반 재택근무 솔루션으로, 다수의 기업 고객을 대상으로 상용화했습니다. 초기부터 런칭까지 작업하며 게임적 요소와 업무용 서비스 가치를 융합한 경험을 쌓았습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>커뮤니케이션 시스템 구축</h3>
    <ul>
      <li>Agora SDK 기반 WebRTC 화상 솔루션 통합 개발</li>
      <li>물리 디바이스(웹캠, 마이크, 스피커) 제어 시스템 구현</li>
      <li>실시간 음성 채팅 및 Speech-to-Text 기능 연동</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>아키텍처 설계 및 프레임워크 개발</h3>
    <ul>
      <li>MV(R)P 아키텍처 기반 UI 프레임워크 설계</li>
      <li>Scene 관리 및 Game Framework 구축</li>
      <li>REST API 통신 및 Packet Handler 구조 설계</li>
      <li>체계적인 로깅 시스템 설계</li>
      <li>UniRx 기반의 반응형 프로그래밍 프로젝트 적용 주도</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>다수의 콘텐츠 및 UI/UX 개발</h3>
    <ul>
      <li>UGUI 기반 재사용 가능한 UI Component Kit 제작</li>
      <li>DOTween을 활용한 다이나믹한 UI 애니메이션 구현</li>
      <li>채팅, 인벤토리, 집중 모드, 팀 관리, 대시보드, 관리자창 다수의 주요 컨텐츠 시스템 개발</li>      
    </ul>
  </div>

  <div class="feature-section">
    <h3>크로스 플랫폼 지원</h3>
    <ul>
      <li>macOS, Windows 네이티브 플러그인 개발</li>
      <li>플랫폼별 native OS 알림 시스템 구현 (macOS Bundle, Windows DLL)</li>
      <li>디바이스 권한 관리 시스템 구축</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>기타 기능 구현</h3>
    <ul>
      <li>Barracuda 모델(ONNX) 활용한 실시간 얼굴 인식</li>
      <li>다양한 화면 공유 기능 개발 (화면, 카메라, 이미지, 유튜브, 화이트보드)</li>
      <li>다국어 지원 시스템</li>
      <li>하드웨어 벤치마크 기반 자동 그래픽 품질 최적화</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>화면 공유 시스템 구현</h3>
    <p>WebRTC 기반의 다양한 화면 공유 기능을 구현했습니다. Agora Sdk를 적용해서 사용자의 전체 화면, 특정 애플리케이션 창, 웹캠 화면등을 공유할 수 있었으며, 이미지, 유튜브 영상, 화이트보드 등 다양한 유형의 컨텐츠를 공유할 수 있는 시스템을 개발했습니다. 상호작용 기능을 활용하여 3D 오브젝트 상에 공유하는 기능도 구현하였습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>얼굴 인식 및 아바타 연동</h3>
    <p>Barracuda 모델(ONNX)을 활용해 실시간 얼굴 인식 기능을 구현했습니다. 사용자 얼굴을 실시간으로 인식하여 사용자 자리비움 여부를 감지하여 비대면 업무 환경에서도 대면 환경과 같이 자리비움 상태를 구현하였습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>Native 플러그인 작업</h3>
    <p>물리 디바이스 기기(웹캠, 마이크, 화면공유)들에 대한 사용 접근 권한으로 수행이 필요하여 macOS는 Objective-C 언어를 활용해 Bundle 작업을 진행했습니다. 그 이외에 Native 기능을 위해 windows dll 작업등을 진행하여 크로스플랫폼 대응을 하였습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>Soma 프로젝트는 기획 단계부터 런칭까지 참여한 의미 있는 경험이었습니다. 코로나19 팬데믹으로 인한 원격 근무 환경에서 시작된 이 프로젝트는 3D 아바타 기반의 영상 통화를 융합하여 새로운 가상 업무 공간을 제공하는 것이었습니다.</p>

    <p>개발 초기에는 게임 엔진을 활용한 업무용 서비스 구현이라는 독특한 접근 방식에 대한 의구심이 있었습니다. 그러나 회사 내부 직원들을 첫 번째 사용자로 삼아 실제 업무 환경에서 지속적으로 테스트하고 피드백을 수집함으로써, 게임적 요소(아바타 조작, 인터랙션)와 업무 기능(화면 공유, 화상 회의)을 효과적으로 융합할 수 있었습니다.</p>

    <p>특히 Windows, macOS, Android, iOS 등 다양한 플랫폼에서 일관된 사용자 경험을 사용성의 폭과 함께 실시간성을 높였습니다. 각 OS별 네이티브 기능(권한 관리, 알림 시스템, 하드웨어 접근)을 통합하는 과정에서 플랫폼 특화 지식을 크게 확장할 수 있었습니다.</p>

    <p>거기다 런쳐 유지보수를 진행하면서 Electron, Typescript 개발환경에 대한 시야도 넓힐 수 있었습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  

  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/soma_image2.webp' | relative_url }}" alt="커뮤니케이션 시스템" width="1466" height="769" loading="lazy" decoding="async">
        <p>커뮤니케이션 시스템</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/soma_image3.webp' | relative_url }}" alt="화면 공유 ux" width="605" height="341" loading="lazy" decoding="async">
        <p>화면 공유 ux</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/soma_image4.webp' | relative_url }}" alt="로비 아바타 선택" width="1600" height="901" loading="lazy" decoding="async">
        <p>로비 아바타 선택</p>
      </div>
    </div>
  </div>
<div class="video-container">
    <h3>프로젝트 소개 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/7iLVSo0nUUU?si=4zMUr9jXgQ1OC8h6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/digital_twin/' | relative_url }}">← 디지털 트윈 건물 관제</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/zigbang/' | relative_url }}">직방 3D 단지 투어 →</a>
</div>
