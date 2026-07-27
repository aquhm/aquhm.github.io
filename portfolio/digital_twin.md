---
layout: portfolio-detail
title: 디지털 트윈 건물 관제 시스템
permalink: /portfolio/digital_twin/
description: 건물 내외부를 디지털 트윈으로 구현해 시설물 상태를 실시간 모니터링·관제하는 Unity SI 프로젝트. 백엔드와 무관하게 동작하는 하이브리드 데이터 통신과 멀티 사이트 운영 도구 Service Builder를 설계했습니다.
image: /images/portfolio/digital_twin_image1.webp
---

<div class="portfolio-header">
  <h1>디지털 트윈 건물 관제 시스템</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/digital_twin_image1.webp' | relative_url }}" alt="디지털 트윈 관제 메인 화면" width="1280" height="720" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2025.08 - 재직중 (이에이트)</p>
    <p><strong>개발 환경:</strong> Unity, C#, RESTful API, Kafka, Visual Studio, Git, Notion</p>
    <p><strong>플랫폼:</strong> Windows</p>
    <p><strong>개발 규모:</strong> 전체 10 ~ 12인 중 클라이언트 4 ~ 6인</p>
  </div>

  <div class="project-description">
    <p>&nbsp;주요 기업 사옥 같은 건물을 내외부까지 디지털 트윈으로 구현하고, 시설물 상태를 실시간으로 모니터링·관제하는 SI 프로젝트입니다. 현재 재직 중인 이에이트에서 클라이언트 파트를 담당하고 있습니다.</p>
    <p>SI 프로젝트는 시연이 곧 마일스톤입니다. 백엔드 개발 상황이나 현장 네트워크 사정에 시연이 좌우되지 않도록 데이터 통신 계층을 백엔드와 분리하는 데 가장 공을 들였습니다.</p>
    <p>또 하나의 축은 멀티 사이트입니다. 고객사 현장(사이트)마다 건물도 설비도 API 엔드포인트도 다른데 코드는 하나로 유지해야 합니다. 이 문제를 풀기 위해 사이트 구성부터 빌드까지 자동화하는 에디터 도구 Service Builder를 만들었습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>하이브리드 데이터 통신</h3>
    <ul>
      <li>API 통신 로직을 Command 패턴으로 추상화 — Remote API와 로컬 파일을 동일 인터페이스로 실행</li>
      <li>실시간 통신으로 받은 JSON을 로컬에 캐싱하고 통신 불가 시 사용하는 Fallback 메커니즘</li>
      <li>설정 파일로 실시간 모드와 캐시 모드를 동적 전환 (서버 점검, 오프라인 시연 대응)</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>실시간 데이터 시각화</h3>
    <ul>
      <li>시설물 상태·알림 정보를 Kafka, REST API로 수신해 3D 공간에 실시간 표시</li>
      <li>UniTask 비동기 처리와 UniRx 반응형 프로그래밍으로 수신 데이터 처리와 UI 반영</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>Visual Scripting 기반 콘텐츠 제작</h3>
    <ul>
      <li>GameCreator 기반 Visual Scripting 환경 구축 — 3D 오브젝트 인터랙션과 UI 연동 로직 컴포넌트화</li>
      <li>스크립트 기반 핵심 엔진 로직과 비주얼 스크립팅 기반 콘텐츠 로직 분리</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>Service Builder — 멀티 사이트 구성·빌드 자동화</h3>
    <ul>
      <li>사이트 분기 로직을 ScriptableObject 설정 에셋으로 외부화, 활성 사이트는 단일 출처(SSOT)로 관리</li>
      <li>매니저 배치, 데이터 베이크, system.ini 프로파일, 사이트별 빌드를 에디터 버튼 한 번으로 일괄 수행</li>
      <li>사이트별 빌드 씬·출력·옵션 관리와 CLI 빌드 지원</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>시연이 죽지 않는 클라이언트</h3>
    <p>SI에서 백엔드는 늘 클라이언트와 같이 개발 중이고, 시연 현장의 네트워크는 통제 밖입니다. 서버가 준비되기를 기다리거나 현장에서 연결이 끊겨 시연이 무너지는 상황을 구조적으로 막고 싶었습니다. 그래서 데이터 소스를 Command 패턴으로 추상화해 Remote API와 로컬 캐시가 같은 인터페이스로 실행되게 하고, 실시간 통신으로 받은 응답을 로컬에 쌓아 두게 했습니다. 서버가 내려가도 마지막 데이터로 전체 플로우가 그대로 돌고, 전환은 설정 파일 하나로 끝납니다. 백엔드 일정과 무관하게 개발과 시연이 굴러가는 게 이 프로젝트에서 가장 효과가 컸던 결정입니다.</p>
  </div>

  <div class="challenge-section">
    <h3>사이트 분기를 코드에서 걷어내기</h3>
    <p>사이트가 늘 때마다 분기문이 코드 곳곳에 박히는 미래가 뻔히 보였습니다. 그래서 분기를 코드가 아니라 설정으로 옮겼습니다. 사이트별 구성은 ScriptableObject 설정 에셋에 담고, 활성 사이트는 단일 출처 한 곳에서만 관리해 모든 서브시스템이 같은 값을 따르게 했습니다. 여기에 매니저 배치, 데이터 베이크, 환경 설정 파일, 빌드까지 버튼 하나로 묶으면서 신규 사이트 추가가 코드 수정 없이 설정과 베이크만으로 끝나는 구조가 됐습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>&nbsp;게임 개발에서 몸에 밴 에디터 도구화 습관이 SI에서 그대로 무기가 된다는 걸 확인하고 있습니다. 반복되는 세팅을 도구로 굳히면 실수가 줄고, 시연 준비에 들던 시간이 개발로 돌아옵니다. 진행 중인 프로젝트라 지금도 사이트가 추가될 때마다 도구가 함께 자라는 중입니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/digital_twin_image2.webp' | relative_url }}" alt="실시간 시설물 데이터 시각화" width="1280" height="720" loading="lazy" decoding="async">
        <p>시설물 상태의 3D 공간 실시간 시각화</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/digital_twin_image3.webp' | relative_url }}" alt="Service Builder 에디터 도구" width="1280" height="720" loading="lazy" decoding="async">
        <p>Service Builder — 사이트 구성·빌드 일괄 적용</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/soma/' | relative_url }}">Soma →</a>
</div>
