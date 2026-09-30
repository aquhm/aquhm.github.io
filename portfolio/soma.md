---
layout: portfolio-detail
title: Soma 프로젝트
permalink: /portfolio/soma/
description: WebRTC 기반 3D 아바타 가상 오피스 Soma. 초기 개발부터 B2B 유료 런칭과 운영까지 참여하고 네이티브 플러그인과 멀티 플랫폼 기능을 개발했습니다.
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
    <p><strong>개발 환경:</strong> Unity, C#, Typescript, Electron, Python, Objective-C(iOS/macOS 플러그인), WebRTC(Agora SDK), REST API, WebSocket, Jira, ClickUp, Slack</p>
    <p><strong>플랫폼:</strong> Windows, macOS, Android, iOS</p>  
    <p><strong>개발 규모:</strong> 전체 8~15인 중 클라이언트 2~5인</p>
  </div>

  <div class="project-description">
    <p>프로젝트 초기부터 합류하여 Unity Engine을 활용하여 재택근무 시 활용할 수 있는 메타버스 아바타 3D 기반의 화상 통화(WebRTC) 가상 오피스 서비스를 작업하였습니다. Window, MacOS, Android, iOS 4개 PC/mobile 플랫폼을 지원하기 때문에 관련 macOS/ iOS의 경우에는 Objective-C로 native 플러그인 작업을 진행하였습니다. 그리고 PC의 경우 Launcher로 구동하는 구조여서 Electron framework와 typescript로 유지보수도 병행하였습니다. 재택을 도입하는 여러 업체를 대상으로 유료화 런칭 서비스하였습니다. REST API와 웹 소켓 통신으로 시스템과 콘텐츠에 따라 구분하여 처리되어 있습니다. 직접 개발한 프로젝트로 회사 업무도 진행하였기에 직원들의 VOC, feedback을 빠르게 수집 및 대응할 수 있었습니다. 초기부터 런칭까지 작업 및 기여했던 프로젝트로 기존 게임적인 value뿐만 아니라 업무에 필요한 서비스적인 value와 가치도 융합하여 다양한 방식으로 생각하고 경험하게 되었습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>커뮤니케이션 시스템 구축(Agora SDK 활용)</h3>
    <ul>
      <li>Agora SDK를 기반으로 미디어 디바이스 목록 관리, 변경 이벤트 처리, 화면 공유 기능을 UniRx 기반 반응형 아키텍처로 구현</li>
      <li>Barracuda ONNX Model 정보를 활용해 얼굴 인식 기능 연동</li>
      <li>수신하는 영상 RGBA Byte 정보를 메모리 풀링 기법 관리. 메모리 오버헤드를 최소화 및 GC 부담 줄이도록 구현</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>아키텍처 설계 및 프레임워크 개발</h3>
    <ul>
      <li>서비스 지향 아키텍처로 도메인 로직과 프레젠테이션 로직을 명확히 분리되도록 구성. 도메인별 로직을 서비스 캡슐화로 관심사 분리되도록 프로젝트 프레임워크 구성</li>
      <li>MVP 아키텍처를 적용한 제네릭 기반의 Presenter 구조를 통해 UI 생명주기를 관리하고, UniRx를 활용한 이벤트 기반 아키텍처로 UI 상태 전환을 관리하는 UI 프레임워크 설계</li>
      <li>UniTask 기반 REST API 비동기 처리. 타임아웃, 에러 핸들링, 재시도 메커니즘 구현 및 데이터 전송 시나리오(JSON, 멀티파트 폼, 파일 업로드)를 처리</li>
      <li>전략 패턴과 팩토리 패턴을 결합한 인터페이스를 설계하여, 패킷 타입별 등록 관리 및 동적으로 라우팅하는 시스템을 구축. 기능 추가시 코드 수정을 최소화 및 확장이 용이하도록 구성</li>
      <li>템플릿 메소드와 전략 패턴을 활용한 확장 가능한 로깅 아키텍처를 설계 RESTful API와 비동기 처리를 통해 이벤트 기반 구조로 다양한 사용자 인터렉션(앱 사용, 화면 전환, UI 조작)을 체계적으로 추적 및 데이터 기반 UX 개선에 기여</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>다수의 콘텐츠 및 UI/UX 개발</h3>
    <ul>
      <li>재사용 가능한 UI 요소들을 캡슐화 및 프리팹화한 UI KIT를 에디터에 통합 및 구성하여 디자인의 일관성을 유지 및 UI 개발 시간을 단축되도록 구성</li>
      <li>상태 패턴 활용하여 다양한 공유 타입(카메라, 화면, 이미지, 유튜브, 협업 보드)을 지원하는 크로스 플랫폼 화면 공유 시스템을 설계 및 새로운 공유 모드 추가 시 기존 코드 수정 없이 확장 가능한 구조를 구현</li>
      <li>로그인, 로비, 접속자, 대시보드, 집중모드, 그룹창, 인벤토리, 메뉴, 네비게이션, 온보딩, 채팅, 화면공유, 시스템 메시지, 팀관리 다수의 콘텐츠 작업</li>
      <li>DOTween을 활용한 UI연출처리 담당</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>크로스 플랫폼 지원</h3>
    <ul>
      <li>macOS, Windows 네이티브 플러그인 제작하여 OS 알림 시스템 구현 및 연동. (macOS Bundle, Windows DLL)</li>
      <li>웹캠, 마이크 등 하드웨어 디바이스의 유무와 접근 권한을 플랫폼별로 대응 처리하여 다양한 환경에서 안정적인 동작을 보장</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>최적화 및 기타 기능 구현</h3>
    <ul>
      <li>웹 크롤링과 벤치마크 데이터를 활용한 디바이스 성능 평가 시스템을 구현. 데스크톱 GPU, 안드로이드, iOS 기기별로 최소 사양 충족 여부를 판단하는 로직으로 플랫폼별 그래픽 품질 설정으로 일관된 사용자 경험 제공</li>
      <li>효율적인 리소스 관리를 위한 로컬 캐시 파일 시스템을 구현. 각종 이미지 캐시 데이터 관리하여 MD5 해시 기반 중복 파일 제거, 만료된 캐시 자동 정리를 구현하여 네트워크 트래픽 감소, 앱 성능 향상 및 오프라인 사용성을 개선</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>재택 근무를 도입하려는 다수의 기업 고객 확보를 통한 유료 서비스 런칭 성공</li>
    <li>실사용자 피드백을 기반으로 기능을 개선하고 서비스에 반영</li>
    <li>멀티 플랫폼 지원을 통한 폭넓은 접근성 확보</li>
  </ul>
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
