---
layout: portfolio-detail
title: 하루회고
permalink: /portfolio/haruhoego/
description: 사진 1장, 음성 30~60초, 텍스트 몇 줄로 하루를 3분 만에 돌아보는 Flutter 회고 앱. 온디바이스 Gemma·Whisper로 네트워크 없이 AI 회고 카드를 만듭니다.
image: /images/portfolio/haruhoego_image1.webp
---

<div class="portfolio-header">
  <h1>하루회고 - 사진·음성 기반 3분 회고 앱</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/haruhoego_image1.webp' | relative_url }}" alt="하루회고 홈 화면" width="1080" height="2340" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2026.05 - 진행 중</p>
    <p><strong>개발 환경:</strong> Flutter, Dart, Riverpod, go_router, drift(SQLite), Supabase, flutter_gemma(MediaPipe), Whisper(ggml), Codemagic CI, Sentry</p>
    <p><strong>플랫폼:</strong> Android, iOS</p>
    <p><strong>개발 규모:</strong> 개인 프로젝트</p>
    <p><strong>개발 방식:</strong> Claude Code 기반 에이전트 주도 개발</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/maumte" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/maumte</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;사진 1장, 음성 30~60초, 텍스트 몇 줄. 이걸로 하루를 3분 만에 돌아보는 회고 앱입니다. 기록을 마치면 AI가 회고 카드를 만들어 주고, 기록이 쌓이면 7일 타임라인과 주간 리포트, 감정선 그래프로 흐름이 보입니다.</p>
    <p>일기 앱을 못 쓰는 이유는 쓸 게 없어서가 아니라 부담스러워서라고 생각했습니다. 그래서 입력 부담을 깎는 데서 시작했습니다. 사진은 감정을 판정하는 재료가 아니라 기억을 꺼내는 트리거고, 타이핑이 귀찮으면 말로 하면 됩니다.</p>
    <p>회고 생성과 음성 전사는 전부 기기 안에서 돕니다. 일기는 가장 사적인 데이터라 서버로 보내고 싶지 않았고, 개인 프로젝트라 API 고정비도 피하고 싶었습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>온디바이스 AI</h3>
    <ul>
      <li>flutter_gemma(MediaPipe) 추론 엔진 — 토큰 스트리밍, 생성 중 취소, 직렬 게이트</li>
      <li>온디바이스 Whisper(ggml) 음성 전사 — 녹음이 기기 밖으로 나가지 않음</li>
      <li>앱 안에서 모델을 내려받는 다운로드 관리자 (진행 상태 추적·재개)</li>
      <li>AiReflectionClient 하나에 구현 5개 — 온디바이스, OpenAI, Edge Function, 규칙 기반, fake. 실패는 전부 규칙 기반 fallback으로 수렴</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>회고 콘텐츠</h3>
    <ul>
      <li>일일 회고 카드, 후속 질문, 7일 타임라인, 주간 리포트</li>
      <li>감정선 그래프 커스텀 페인터, 뱃지 시스템</li>
      <li>잉크 번짐 전환, 보케 배경 등 프래그먼트 셰이더 연출</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>앱 제품화</h3>
    <ul>
      <li>로컬 우선 저장(drift) — Supabase 동기화는 선택</li>
      <li>백업/복원, 앱 잠금(생체 인증), 알림, 다국어, 인앱 결제</li>
      <li>위기 문구를 정규식으로 분류하는 SafetyPolicy — 진단·상담형 표현 금지. 의료 서비스가 아니라는 경계를 코드로 유지</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>개발 하네스</h3>
    <ul>
      <li>APP_ENV=harness로 실행하면 fake가 주입되어 백엔드·권한·네트워크 없이 앱 전체가 동작</li>
      <li>AI 회고 품질 회귀용 fixtures와 평가 루브릭</li>
      <li>UI 시안은 HTML 프리뷰로 먼저 확정하고 Flutter로 옮기는 워크플로</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>소형 온디바이스 모델과 싸우기</h3>
    <p>기기에서 돌릴 수 있는 모델은 작고, 작은 모델은 한국어 회고 생성에서 자주 흔들립니다. 영어가 섞여 나오고, 프롬프트의 placeholder를 그대로 돌려주고, JSON을 깨뜨립니다. 프롬프트로 눌러 보다가 접근을 바꿔 생성 이후를 두껍게 만들었습니다. 한국어 비율 가드, 어조 완화, placeholder 에코 감지, 금지 표현 검사를 통과해야 카드가 되고, 하나라도 걸리면 규칙 기반 fallback이 대신 카드를 만듭니다. 사용자에게 AI가 실패하는 순간은 없습니다. 조금 덜 똑똑한 카드가 나올 뿐입니다.</p>
  </div>

  <div class="challenge-section">
    <h3>모바일에서의 추론 취소</h3>
    <p>회고 생성에는 수십 초가 걸리는데 모바일 사용자는 수시로 화면을 떠납니다. 떠난 뒤에도 추론이 돌면 배터리만 태웁니다. 그래서 시작 직전과 토큰 사이마다 결과가 아직 필요한지 확인하고, 아니면 네이티브 레벨(MediaPipe stopGeneration)까지 실제로 끊습니다. 중단을 지원하지 않는 백엔드는 수신만 멈추는 걸로 구분해 처리했습니다. 게임에서 리소스 수명을 관리하던 감각이 가장 직접적으로 쓰인 부분입니다.</p>
  </div>

  <div class="challenge-section">
    <h3>백엔드 없이 도는 앱</h3>
    <p>AI 클라이언트도 저장소도 인터페이스를 먼저 정하고 구현을 뒤에 붙였습니다. 덕분에 개발 중 AI 백엔드를 몇 번을 갈아타도 화면 코드는 그대로였고, fake 구현을 조합하면 클론 직후 백엔드 없이 앱 전체가 돕니다. 테스트가 외부 상태에 물리지 않는 것도, 새 기기에서 바로 UX를 확인할 수 있는 것도 이 구조 덕입니다.</p>
  </div>

  <div class="challenge-section">
    <h3>시안은 HTML로, 구현은 Flutter로</h3>
    <p>혼자 만들면 디자이너가 없습니다. Flutter로 만들고 마음에 안 들어 갈아엎기를 반복하다가 순서를 바꿨습니다. 시안을 HTML로 먼저 뽑아 브라우저에서 여러 방향을 나란히 비교하고, 확정된 것만 Flutter로 옮깁니다. 에이전트가 HTML 시안을 몇 분이면 만들어 주니 갈아엎는 비용이 Flutter가 아니라 HTML 쪽에서 발생합니다. 홈 셸, 감정선, 페이월 같은 굵직한 화면이 전부 이 과정을 거쳤습니다. 코드 쪽도 비슷해서, 큰 기능은 설계 문서를 먼저 확정한 뒤에 코드를 시키고 작은 커밋 단위로 검증했습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>&nbsp;온디바이스 AI는 생각보다 제약이 많았습니다. 클라우드에서는 프롬프트 문제였던 것이 기기에서는 메모리, 발열, 취소, 모델 배포 문제가 됩니다. 그런데 그 제약이 설계를 만들었습니다. 모델을 못 믿으니 fallback 계층이 생겼고, 리소스가 아까우니 취소 경로가 생겼습니다. 게임 만들 때 하드웨어 제약이 코드를 단련시키던 것과 같은 구조라, 오랜만에 익숙한 종류의 싸움이었습니다.</p>
    <p>혼자 만드는 제품에서 가장 어려운 건 기능 추가가 아니라 멈추는 판단이었습니다. 리텐션 장치는 붙이자면 끝이 없어서, 처음에 문서로 박아 둔 "3분 안에 끝나는 회고"라는 경계에 기대어 여러 번 기능을 쳐냈습니다. 경계를 코드보다 먼저 세워 두면 에이전트만이 아니라 저 자신에게도 브레이크가 된다는 게 이 프로젝트의 발견입니다.</p>
    <p>지금은 스토어 출시와 소수 사용자 대상 7일 챌린지 테스트를 준비하고 있습니다. 온디바이스 모델의 회고 품질을 어디까지 끌어올릴 수 있을지는 계속 남아 있는 숙제입니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/haruhoego_image2.webp' | relative_url }}" alt="회고 작성 화면" width="1080" height="2340" loading="lazy" decoding="async">
        <p>사진·음성·텍스트로 3분 회고 작성</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/haruhoego_image3.webp' | relative_url }}" alt="AI 회고 카드" width="1080" height="2340" loading="lazy" decoding="async">
        <p>온디바이스 AI가 만든 회고 카드</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/haruhoego_image4.webp' | relative_url }}" alt="감정선 타임라인" width="1080" height="2340" loading="lazy" decoding="async">
        <p>발자취 — 감정선과 기록 타임라인</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/haruhoego_image5.webp' | relative_url }}" alt="온디바이스 모델 관리" width="1080" height="2340" loading="lazy" decoding="async">
        <p>앱 안에서 내려받는 온디바이스 모델 관리</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/comment_temperature/' | relative_url }}">← 댓글온도</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/unity_build/' | relative_url }}">Unity Build Wizard →</a>
</div>
