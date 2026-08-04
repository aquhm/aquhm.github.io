---
layout: portfolio-detail
title: Unity Build Wizard
permalink: /portfolio/unity_build/
description: Unity 로컬 빌드부터 압축, NAS 전달, Git 연동, 자동 스케줄까지 자동화하는 Python/Tkinter 데스크탑 도구입니다. 표준 라이브러리만으로 만들어 설치 없이 동작합니다.
image: /images/portfolio/unity_build_image1.webp
---

<div class="portfolio-header">
  <h1>Unity Build Wizard - 로컬 빌드 자동화 도구</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/unity_build_image1.webp' | relative_url }}" alt="Unity Build Wizard 마법사 화면" width="1471" height="1732" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2026.04</p>
    <p><strong>개발 환경:</strong> Python, Tkinter, PyInstaller, Unity CLI, Git</p>
    <p><strong>플랫폼:</strong> Windows</p>
    <p><strong>개발 규모:</strong> 개인 프로젝트</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/unity_local_build" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/unity_local_build</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;Unity 프로젝트의 로컬 빌드를 자동화하는 Windows 데스크탑 도구입니다. 빌드를 뽑고, 압축하고, 공유 폴더나 NAS에 올려 전달하는 루틴은 단순하지만 하루에도 몇 번씩 시간을 뜯어갑니다. 그 전체 파이프라인을 GUI 마법사 또는 CLI 한 번으로 끝내는 게 이 도구의 목적입니다.</p>
    <p>모든 팀에 젠킨스 같은 빌드 서버가 갖춰져 있는 건 아닙니다. CI 인프라를 구축하기 전 단계이거나 로컬 머신 자원에 여유가 있는 환경이라면, 별도 서버 없이 지금 쓰는 PC에서 작업과 동시에 빌드 자동화를 돌리는 편이 훨씬 빠릅니다. 이 도구는 정확히 그 지점을 노렸습니다.</p>
    <p>Git pull부터 Unity 헤드리스 빌드, Zip 패키징, 환경 설정 파일 교체, NAS 복사, 완료 알림까지 한 흐름으로 이어지고, 주기 실행을 걸어 두면 야간 빌드처럼 사람 없이도 돌아갑니다. 외부 라이브러리 없이 Python 표준 라이브러리만 사용해서, PyInstaller로 묶은 EXE 하나면 어느 PC에서든 설치 없이 동작합니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>빌드 파이프라인</h3>
    <ul>
      <li>Unity CLI 헤드리스 빌드 (-batchmode 기반), Clean Build·Development Build 옵션</li>
      <li>Unity 측 빌드 스크립트(LocalBuild.cs)를 대상 프로젝트에 자동 배포 — .meta 파일까지 생성해 사전 세팅 불필요</li>
      <li>타임스탬프 기반 출력 폴더와 이름 템플릿으로 빌드 결과물 정리</li>
      <li>빌드 전 git checkout·clean·pull, 빌드 후 git push 자동 실행</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>후처리와 전달</h3>
    <ul>
      <li>빌드 결과물 Zip 패키징 후 지정 폴더·NAS 공유 경로로 복사</li>
      <li>빌드 출력의 StreamingAssets/System.ini를 배포 환경용 파일로 교체</li>
      <li>완료·실패 시 Windows 풍선 알림, 클릭하면 앱 포커스</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>운영 편의</h3>
    <ul>
      <li>자동 스케줄 빌드 — N분 주기 또는 매일 지정 시각</li>
      <li>모든 실행 결과를 빌드 기록으로 영구 저장, GUI에서 결과·소요 시간·산출물 폴더 조회</li>
      <li>오래된 빌드 폴더·Zip 일괄 정리, 진행 중인 빌드 안전 취소</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>긴 외부 프로세스와 GUI를 함께 살리기</h3>
    <p>Unity 빌드는 수 분에서 수십 분짜리 외부 프로세스입니다. 이걸 GUI에서 그냥 돌리면 창이 얼어붙습니다. 빌드는 워커 스레드에서 subprocess로 돌리고 출력은 스트리밍으로 받되, Tkinter는 메인 스레드에서만 UI를 만질 수 있어서 로그를 큐에 쌓고 메인 루프가 주기적으로 비우는 구조로 풀었습니다. 취소는 threading.Event로 신호를 보내 스트리밍 루프가 감지하면 프로세스를 안전하게 종료합니다. 덕분에 수십 분짜리 빌드 중에도 로그가 실시간으로 흐르고 언제든 멈출 수 있습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>도구가 스스로 준비를 마치는 구조</h3>
    <p>Unity 헤드리스 빌드에는 프로젝트 안에 빌드 메서드 스크립트가 있어야 합니다. 이걸 사용자에게 "이 파일을 복사해 두세요"라고 시키는 순간 도구의 절반은 실패라고 봤습니다. 그래서 LocalBuild.cs를 도구에 번들하고 빌드 직전에 대상 프로젝트로 자동 복사하게 했습니다. Unity가 요구하는 .meta 파일까지 함께 만들어 줍니다. 의존성도 같은 이유로 표준 라이브러리만 고집했습니다. pip 설치가 필요 없고, EXE로 묶으면 Python조차 필요 없습니다. 팀 동료의 PC에 던져 주면 그걸로 끝나는 도구를 목표로 했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>&nbsp;게임 개발을 하다 보면 반복 작업을 도구로 만드는 일이 자연스럽게 몸에 뱁니다. SheetGenerator, Git Action Runner에 이어 이번엔 빌드 루틴 차례였습니다. 빌드를 걸어 두고 다른 일을 하다 알림으로 결과만 확인하는 흐름이 되면서, 하루 중 빌드를 기다리며 붙잡혀 있던 시간이 사라졌습니다.</p>
    <p>이런 도구는 화려할 필요가 없다는 걸 다시 확인했습니다. 기능을 늘리는 것보다 설치가 필요 없고, 사전 세팅이 없고, 실패하면 기록이 남는 쪽이 실제 사용 빈도를 결정했습니다. 작게 만들고 마찰을 없애는 데 들인 시간이 가장 남는 장사였습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/unity_build_image1.webp' | relative_url }}" alt="빌드 설정 마법사 1단계" width="1471" height="1732" loading="lazy" decoding="async">
        <p>1단계 — Unity 프로젝트와 빌드 출력 경로 설정</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/unity_build_image2.webp' | relative_url }}" alt="빌드 설정 마법사 2단계" width="1470" height="1731" loading="lazy" decoding="async">
        <p>2단계 — Zip 패키징·폴더/NAS 복사·Git Push 후처리 설정</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/unity_build_image3.webp' | relative_url }}" alt="빌드 설정 마법사 3단계" width="1472" height="1736" loading="lazy" decoding="async">
        <p>3단계 — 고급 옵션 지정과 최종 설정 검토</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/unity_build_image4.webp' | relative_url }}" alt="빌드 완료 화면" width="1471" height="1731" loading="lazy" decoding="async">
        <p>빌드 완료 — 소요 시간·진행 로그와 최근 성공 빌드 기록</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/haruhoego/' | relative_url }}">← 하루회고</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/finance_sheet_updater/' | relative_url }}">금융 데이터 수집 시스템 →</a>
</div>
