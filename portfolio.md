---
layout: page
title: 포트폴리오
permalink: /portfolio/
description: Unity·C++ 기반 게임 클라이언트와 3D 메타버스 서비스를 개발해 온 소프트웨어 엔지니어 김대호의 프로젝트 포트폴리오입니다.
image: /images/portfolio/soma_image1.webp
scripts:
  - /assets/js/project-filter.js
---

<div class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Full of Happiness</h1>
    <p class="hero-description">안녕하세요! 읽기 쉬운 코드를 지향하는 개발자 김대호입니다.</p>
    <p class="hero-description">C++, C# 기반의 게임 엔진 개발 경험을 바탕으로 PC와 모바일 플랫폼에서 11년 이상의 다양한 개발을 수행해왔습니다.</p>
    <p class="hero-description">다양한 프레임워크에 대한 관심이 많으며 도전하기를 좋아합니다.</p>
    <a href="#projects" class="hero-button">프로젝트 살펴보기</a>
  </div>
  <div class="hero-image">
    <img src="{{ '/images/programming.webp' | relative_url }}" alt="개발자 일러스트레이션" width="1000" height="1000" fetchpriority="high" decoding="async">
  </div>
</div>

<h1 id="projects" class="section-title">Works</h1>

<div class="projects-container">
  <a href="{{ '/portfolio/digital_twin/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">디지털 트윈 건물 관제 시스템</h2>
      <p class="project-subtitle">디지털 트윈 기반 건물 시뮬레이션 및 실시간 관제</p>
      <p class="project-description">건물 내외부를 디지털 트윈으로 구현해 시설물 상태를 실시간으로 모니터링·관제하는 SI 프로젝트입니다. 백엔드와 무관하게 동작하는 하이브리드 데이터 통신 구조와 멀티 사이트 운영 도구 Service Builder를 설계했습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/digital_twin_image1.webp' | relative_url }}" alt="디지털 트윈 건물 관제 시스템 미리보기" width="1280" height="720" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/soma/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">Soma</h2>
      <p class="project-subtitle">WebRTC 기반 3D 아바타 가상 오피스</p>
      <p class="project-description">Unity Engine 기반 메타버스형 3D 가상 오피스 서비스로, Windows, macOS, Android, iOS 멀티 플랫폼을 지원하는 화상 통화 기반 재택근무 솔루션입니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/soma_image1.webp' | relative_url }}" alt="Soma 프로젝트 미리보기" width="600" height="600" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/zigbang/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">직방 3D 단지 투어</h2>
      <p class="project-subtitle">Data Driven 방식의 아파트 단지 시뮬레이션</p>
      <p class="project-description">React Native 기반 직방 앱에 Unity Engine 모듈을 통합하여 3D 아파트 단지 시뮬레이션 서비스를 개발했습니다. 아파트 매물 정보 시각화 및 성능 최적화를 통해 모바일 환경에서도 원활하게 작동하는 서비스를 구현했습니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/zigbang_image2.webp' | relative_url }}" alt="직방 3D 단지 투어 미리보기" width="737" height="1479" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/makers_games/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C#, Unity 3D</div>
      <h2 class="project-title">쿼터뷰 모바일 전략 시뮬레이션</h2>
      <p class="project-subtitle">모바일 전략 시뮬레이션 게임</p>
      <p class="project-description">'Game of War'와 유사한 쿼터뷰 방식의 모바일 전략 시뮬레이션 게임을 개발했습니다. 프로젝트 초기부터 참여하여 핵심 성장 시스템 개발을 주도했으며, 데이터 기반 설계를 통해 확장성을 확보하고 기획자용 도구를 제작하여 개발 생산성을 향상시켰습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/maker_image1.webp' | relative_url }}" alt="쿼터뷰 모바일 전략 시뮬레이션 미리보기" width="1600" height="778" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/icarus/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C++, CryEngine3</div>
      <h2 class="project-title">이카루스 온라인</h2>
      <p class="project-subtitle">PC 3D Online MMORPG</p>
      <p class="project-description">국내에서 성공적으로 서비스 중이던 이카루스 온라인의 북미 런칭 프로젝트에 참여하여 Nexon America 플랫폼 연동 및 북미 시장에 특화된 기능 개발을 담당했습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/icarus_image1.webp' | relative_url }}" alt="이카루스 온라인 미리보기" width="822" height="406" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/iris/' | relative_url }}" class="project-item">
    <div class="project-content">
      <div class="project-category">C++, GameBryo</div>
      <h2 class="project-title">아이리스 온라인</h2>
      <p class="project-subtitle">PC 3D Online MMORPG</p>
      <p class="project-description">아이리스 온라인의 서비스 런칭 3개월 전 합류하여 상용화 준비 및 러시아 진출을 위한 현지화 작업을 담당했습니다. 초기에는 클라이언트 개발에 집중하다가 점차 서버 및 데이터베이스 작업까지 범위를 확장하여 풀스택 개발 경험을 쌓았습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/iris_image1.webp' | relative_url }}" alt="아이리스 온라인 미리보기" width="600" height="450" loading="lazy" decoding="async">
    </div>
  </a>
</div>

<h1 class="section-title">Personal Projects</h1>

<div class="projects-container" data-project-filter>
  <div class="project-filter" role="group" aria-label="언어별 프로젝트 필터" hidden>
    <button type="button" class="filter-chip is-active" data-filter="all" aria-pressed="true">전체</button>
    <button type="button" class="filter-chip" data-filter="cpp" aria-pressed="false">C++</button>
    <button type="button" class="filter-chip" data-filter="csharp" aria-pressed="false">C#</button>
    <button type="button" class="filter-chip" data-filter="typescript" aria-pressed="false">TypeScript</button>
    <button type="button" class="filter-chip" data-filter="dart" aria-pressed="false">Dart</button>
    <button type="button" class="filter-chip" data-filter="python" aria-pressed="false">Python</button>
  </div>
  <p class="visually-hidden" data-filter-status role="status" aria-live="polite"></p>

  <a href="{{ '/portfolio/puyo_puzzle/' | relative_url }}" class="project-item" data-lang="cpp">
    <div class="project-content">
      <div class="project-category">C++, SDL3</div>
      <h2 class="project-title">뿌요뿌요 퍼즐 게임</h2>
      <p class="project-subtitle">C++/SDL3 기반 네트워크 대전 퍼즐 게임</p>
      <p class="project-description">SDL3 라이브러리를 활용하여 네트워크 대전이 가능한 뿌요뿌요 스타일의 퍼즐 게임을 개발했습니다. P2P기반의 서버, 클라이언트 로직을 구현하였습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/puzzle_image1.webp' | relative_url }}" alt="뿌요뿌요 퍼즐 게임 미리보기" width="889" height="663" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/sheet_generator/' | relative_url }}" class="project-item" data-lang="csharp">
    <div class="project-content">
      <div class="project-category">C#, .NET</div>
      <h2 class="project-title">SheetGenerator</h2>
      <p class="project-subtitle">데이터 및 코드 생성 도구</p>
      <p class="project-description">구글 시트나 Excel 데이터를 바이너리 또는 JSON 형식으로 변환하고, 해당 데이터를 효율적으로 관리할 수 있는 C# 코드를 자동으로 생성하는 도구입니다. 게임 개발 및 응용 프로그램에서 자주 필요한 데이터 관리 솔루션입니다.</p>      
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/sheet_generator_image.webp' | relative_url }}" alt="SheetGenerator 미리보기" width="863" height="481" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/git_action_runner/' | relative_url }}" class="project-item" data-lang="csharp">
    <div class="project-content">
      <div class="project-category">C#, WPF</div>
      <h2 class="project-title">Git Action Runner</h2>
      <p class="project-subtitle">GitHub Actions 워크플로우 관리 도구</p>
      <p class="project-description">Windows 데스크톱 환경에서 GitHub Actions 워크플로우를 관리하는 GUI 애플리케이션입니다. 개발자 친화적인 인터페이스로 복잡한 CI/CD 파이프라인을 손쉽게 제어할 수 있도록 설계되었습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/git_action_runner_image1.webp' | relative_url }}" alt="Git Action Runner 미리보기" width="840" height="500" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/comment_temperature/' | relative_url }}" class="project-item" data-lang="typescript">
    <div class="project-content">
      <div class="project-category">TypeScript, Next.js</div>
      <h2 class="project-title">댓글온도</h2>
      <p class="project-subtitle">유튜브 댓글 분위기 분석 및 초안 제안 웹앱</p>
      <p class="project-description">유튜브 링크를 넣으면 그 영상 댓글이 어떤 분위기인지 보여주고, 어울리는 댓글 초안을 뽑아 주는 웹앱입니다. Claude Code 기반 에이전트 개발 하네스를 직접 설계해서 만들었고, 로컬 LLM을 내장한 Tauri 데스크탑 앱까지 확장했습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/comment_temperature_image1.webp' | relative_url }}" alt="댓글온도 미리보기" width="1228" height="1387" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/haruhoego/' | relative_url }}" class="project-item" data-lang="dart">
    <div class="project-content">
      <div class="project-category">Dart, Flutter</div>
      <h2 class="project-title">하루회고</h2>
      <p class="project-subtitle">사진·음성 기반 3분 회고 앱</p>
      <p class="project-description">사진 1장, 음성 30~60초, 텍스트 몇 줄로 하루를 돌아보면 AI가 회고 카드를 만들어 주는 Flutter 앱입니다. 회고 생성과 음성 전사를 온디바이스 Gemma·Whisper로 처리해서 기록이 기기 밖으로 나가지 않습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/haruhoego_image1.webp' | relative_url }}" alt="하루회고 미리보기" width="1080" height="2340" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/unity_build/' | relative_url }}" class="project-item" data-lang="python">
    <div class="project-content">
      <div class="project-category">Python, Tkinter</div>
      <h2 class="project-title">Unity Build Wizard</h2>
      <p class="project-subtitle">Unity 로컬 빌드 자동화 도구</p>
      <p class="project-description">Unity 헤드리스 빌드부터 Zip 압축, NAS 전달, Git 연동, 자동 스케줄까지 한 흐름으로 처리하는 Windows 데스크탑 도구입니다. 표준 라이브러리만 사용해 EXE 하나로 설치 없이 동작합니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/unity_build_image1.webp' | relative_url }}" alt="Unity Build Wizard 미리보기" width="1471" height="1732" loading="lazy" decoding="async">
    </div>
  </a>

  <a href="{{ '/portfolio/finance_sheet_updater/' | relative_url }}" class="project-item" data-lang="python">
    <div class="project-content">
      <div class="project-category">Python, AWS, Google API</div>
      <h2 class="project-title">금융 데이터 수집 및 저장 시스템</h2>
      <p class="project-subtitle">자동화된 금융 데이터 파이프라인</p>
      <p class="project-description">금융감독원의 금융상품 API, 환율 정보, 금속 시세 등 다양한 금융 데이터를 자동으로 수집하여 Google Sheets와 AWS S3에 저장하는 파이썬 기반 시스템을 개발했습니다.</p>
      <div class="project-link">프로젝트 보기 →</div>
    </div>
    <div class="project-image">
      <img src="{{ '/images/portfolio/finance_sheet_updater_image1.webp' | relative_url }}" alt="금융 데이터 수집 시스템 미리보기" width="1371" height="752" loading="lazy" decoding="async">
    </div>
  </a>
</div>

<div class="skills-section">
  <h1 class="skill-heading">SKILL</h1>

  <div class="skill-row">
    <div class="skill-category">Game Development</div>
    <ul class="skill-list">
      <li>Unity3D, CryEngine3, SDL</li>
      <li>GameBryo, ScaleForm</li>
      <li>UGUI, UniRx</li>
      <li>Cross-Platform Development</li>
    </ul>
  </div>

  <div class="skill-divider"></div>

  <div class="skill-row">
    <div class="skill-category">Programming Languages</div>
    <ul class="skill-list">
      <li>C++, C#</li>
      <li>TypeScript</li>
      <li>ActionScript, Python</li>
      <li>STL, WinApi</li>
    </ul>
  </div>

  <div class="skill-divider"></div>

  <div class="skill-row">
    <div class="skill-category">Tools & Environments</div>
    <ul class="skill-list">
      <li>Visual Studio, Jetbrain Rider, Xcode</li>
      <li>Git/GitHub, SVN, Perforce</li>
      <li>MSSQL, Stored Procedure</li>
      <li>REST API, WebRTC</li>
      <li>Electron, Slack, Jira</li>
    </ul>
  </div>
</div>
