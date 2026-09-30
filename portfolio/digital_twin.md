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
  <img src="{{ '/images/portfolio/digital_twin_image1.webp' | relative_url }}" alt="디지털 트윈 건물 관제 시스템" width="1000" height="750" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2025.08 - 재직중 (이에이트)</p>
    <p><strong>개발 환경:</strong> Unity, C#, JSON, REST API, Kafka, Git, Notion, Visual Studio, Rider, Claude Code</p>
    <p><strong>플랫폼:</strong> Windows</p>
    <p><strong>개발 규모:</strong> 전체 10~12인 중 클라이언트 4~6인</p>
  </div>

  <div class="project-description">
    <p>건물 내외부를 디지털 트윈으로 구현하여 실시간 모니터링 및 관제할 수 있는 시스템을 개발하고 있습니다. 대규모 데이터 시각화와 실시간 API 연동이 핵심인 프로젝트로, 백엔드 개발 상황이나 네트워크 환경에 구속받지 않고 안정적인 개발 및 시연이 가능한 데이터 통신 아키텍처를 구축하는 데 주력했습니다. 또한, Visual Scripting 도구를 활용하여 Presenter Layer 로직 구현 속도를 높이고 유지보수 효율성을 높였습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>하이브리드 데이터 통신 시스템 설계</h3>
    <ul>
      <li>REST API 통신 로직을 Command 패턴으로 추상화하여, 데이터 소스(Remote API vs Local File)에 관계없이 동일한 인터페이스로 기능을 실행할 수 있도록 설계</li>
      <li>백엔드 통신 불가 상황(서버 점검, 오프라인 시연 등)을 대비하여, 실시간 통신 시 획득한 JSON 데이터를 로컬 시스템에 캐싱하고 필요 시 호출하는 Fallback 메커니즘 구현</li>
      <li>별도의 JSON Config 파일 내 프로퍼티 설정에 따라 실시간 통신 모드와 캐시 데이터 모드를 동적으로 전환할 수 있는 기능을 구현하여 시연 및 테스트 안정성 확보</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>Visual Scripting을 통한 개발 생산성 향상</h3>
    <ul>
      <li>Visual Scripting SDK(GameCreator)를 활용한 UI 연동 로직을 컴포넌트화</li>
      <li>반복적인 UI 상호작용 및 로직을 Instruction Command 기반으로 작업하여 코드 복잡도를 낮추고, 프로토타이핑 및 기능 수정 작업의 효율 향상</li>
      <li>Visual Scripting 변수 생성 및 타입별 Get/Set 접근 코드를 자동 생성하는 코드 제너레이터를 구현, 문자열 키를 직접 다루던 접근 방식을 정적 API로 대체하여 문자열 오타로 인한 런타임 오류와 수작업 동기화 비용을 제거하고, IDE 자동완성·컴파일 타임 검증을 확보해 스크립트에서의 비주얼 스크립팅 연동 작업 효율 향상</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>디지털 트윈 데이터 연동 및 시각화</h3>
    <ul>
      <li>건물 내 시설물 상태 정보 및 각종 알림 정보를 Kafka, REST API를 통해 수신하여 3D 공간 내에 실시간으로 시각화</li>
      <li>각종 수신 데이터를 효율적으로 처리하고 UI에 반영하기 위한 비동기 처리(UniTask) 및 Reactive Programming(UniRx)으로 개선</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>멀티 사이트 운영을 위한 통합 빌드/구성 자동화 툴(Service Builder) 설계 및 개발</h3>
    <ul>
      <li>사업(사이트)마다 달라지는 기능·데이터·서버 엔드포인트·빌드 설정을 단일 ScriptableObject 설정 에셋으로 외부화하여, 사이트 추가 시 코드 수정 없이 설정만으로 대응 가능한 구조 확립</li>
      <li>서버 엔드포인트를 Play용·빌드용 프로파일로 분리 관리하고, 씬 목록(GUID)·제품명·빌드 옵션·git SHA 기록을 포함한 사이트별 빌드 파이프라인 자동화(CLI 진입점으로 CI 연동)</li>
      <li>씬 구성, 베이크, 환경설정, 사이트별 컨텐츠 노출 등 사이트 구성에 필요한 과정을 단일 버튼으로 수행하는 일괄 적용 기능 제공</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 성과</h2>
  <ul>
    <li>Command 패턴 기반의 백엔드 개발 의존성 분리를 통해 네트워크 환경과 무관한 독립적인 시연 및 테스트 환경 구축</li>
    <li>사업(사이트)별 분기를 설정 에셋(데이터)으로 외부화하여, 신규 현장 추가 시 코드 수정 없이 설정만으로 대응 가능한 구조 확보</li>
    <li>국내 대형 전자 제조사의 건물 3개 사이트를 디지털 트윈으로 구축해 실시간 관제에 적용</li>
  </ul>
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

<div class="portfolio-nav">
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/soma/' | relative_url }}">Soma →</a>
</div>
