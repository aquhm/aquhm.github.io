---
layout: portfolio-detail
title: 댓글온도
permalink: /portfolio/comment_temperature/
description: 유튜브 댓글 분위기를 분석해 댓글 초안을 제안하는 웹앱. Next.js·TypeScript로 만들고 Tauri로 로컬 LLM 데스크탑 앱까지 확장했으며, Claude Code 기반 에이전트 개발 하네스를 직접 설계했습니다.
image: /images/portfolio/comment_temperature_image1.webp
---

<div class="portfolio-header">
  <h1>댓글온도 - 유튜브 댓글 분위기 분석 및 초안 제안</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/comment_temperature_image1.webp' | relative_url }}" alt="댓글온도 메인 화면" width="1228" height="1387" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2026.06 - 2026.07</p>
    <p><strong>개발 환경:</strong> TypeScript, Next.js 15 (App Router), React 19, Tailwind CSS, Tauri 2, Zod, Vitest, Playwright</p>
    <p><strong>플랫폼:</strong> Web, Windows 데스크탑</p>
    <p><strong>개발 규모:</strong> 개인 프로젝트</p>
    <p><strong>개발 방식:</strong> Claude Code 기반 에이전트 주도 개발 — 계약 문서와 티켓, 슬래시 커맨드로 하네스 구성</p>
    <p><strong>GitHub:</strong> <a href="https://github.com/aquhm/comment-temperature" target="_blank" rel="noopener noreferrer">https://github.com/aquhm/comment-temperature</a></p>
  </div>

  <div class="project-description">
    <p>&nbsp;유튜브 영상 링크를 넣으면 그 영상 댓글이 대체로 어떤 분위기인지 보여주고, 거기에 어울리는 댓글 초안을 몇 개 뽑아 주는 웹앱입니다. 대신 달아주지는 않습니다. 사용자가 초안을 고쳐서 복사하는 것까지가 이 제품의 끝입니다.</p>
    <p>10년 넘게 Unity와 C++만 만지다가 웹을 처음부터 해 보고 싶어서 시작했습니다. 기획부터 배포까지 혼자 했고, 코드 대부분은 Claude Code로 썼습니다. 그래서 결과물만큼이나 <em>에이전트에게 일을 어떻게 시킬 것인가</em>를 실험한 기록이기도 합니다.</p>
    <p>기술적으로 신경 쓴 건 둘입니다. LLM 응답을 그대로 믿지 않는 구조, 그리고 고정비 없이 굴러가는 구조. 두 번째 때문에 로컬 LLM을 품은 데스크탑 앱까지 만들게 됐습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>AI 에이전트 개발 하네스</h3>
    <ul>
      <li>제품 경계·금지사항·API 계약·완료 기준을 문서로 고정하고, 작업을 완료 기준이 붙은 티켓으로 분해</li>
      <li>작업 종류별로 읽을 문서를 제한하는 Context Diet 규칙</li>
      <li>반복 작업은 슬래시 커맨드로 고정 — 응답 형식까지 통일</li>
      <li>문서로 막기 어려운 위험은 코드 구조 가드레일로 이중화</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>분석 파이프라인</h3>
    <ul>
      <li>URL 파싱 → 영상·댓글 조회 → 정제 → 분위기 분석 → 저장 단일 흐름, 단계별 실패는 error code로 수렴</li>
      <li>짧은 댓글·링크 위주·이모지 전용·반복·중복을 걸러내는 5가지 정제 규칙과 사유별 통계</li>
      <li>YouTube 공식 Data API만 사용, API 사용량·토큰 소비 기록</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>초안 생성과 안전성</h3>
    <ul>
      <li>말투 페르소나 5종 + 공통 자연스러움 규칙 (번역투·판박이 표현 차단, 이모지·느낌표 제한)</li>
      <li>생성 결과에 규칙 기반 후처리 — 외부 링크, 구독 유도, 과장, 공격적 표현 판정</li>
      <li>후처리 점수는 위험한 방향으로만 보정 — LLM의 낙관적인 자기 평가를 덮어쓰지 못하게</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>교체 가능한 백엔드</h3>
    <ul>
      <li>환경 변수만으로 LLM 백엔드 교체 (Ollama, LM Studio, Groq, DeepSeek 등 OpenAI 호환 계열)</li>
      <li>저장소 인터페이스 하나에 Supabase·SQLite·인메모리 3개 드라이버</li>
      <li>인메모리 드라이버 덕에 외부 서비스 없이 파이프라인 전체 테스트</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>로컬 LLM 데스크탑 앱 (Tauri)</h3>
    <ul>
      <li>llama.cpp 서버를 동봉한 Windows 포터블 빌드 — 별도 런타임 설치 불필요</li>
      <li>앱 안에서 GGUF 모델 다운로드, 모델 교체 시 엔진 재기동</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>정책·프라이버시</h3>
    <ul>
      <li>자동 게시를 의도적으로 배제한 복사형 UX — 댓글봇으로 오인될 여지 차단</li>
      <li>댓글 작성자 식별 정보는 조회 타입에서부터 제외, 내 데이터 삭제 API 제공</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>AI 에이전트에게 일을 시키는 구조 만들기</h3>
    <p>처음에는 그냥 채팅으로 시켰습니다. 세션이 길어지자 제품 범위가 슬금슬금 늘고, 어제 하지 말자고 정한 걸 오늘 다시 만들어 놓는 일이 반복됐습니다. 모델보다 제 쪽 문제였습니다. 매번 다른 맥락을 주고 있었으니까요. 그래서 프롬프트를 다듬는 대신 주변 구조를 만들었습니다. 경계와 계약을 문서로 고정하고, 작업은 검증 가능한 완료 기준이 붙은 티켓으로 쪼개고, 반복 흐름은 슬래시 커맨드로 굳혔습니다.</p>
    <p>쓰면서 제일 분명해진 건 <strong>문서로 금지한 것은 지켜지지 않을 수 있다</strong>는 점입니다. 그래서 위험한 기능은 코드 구조로 막았습니다. YouTube 쓰기 엔드포인트 래퍼를 아예 만들지 않고, HTTP 허용 목록을 YouTube API 주소로 묶고, 작성자 정보는 DTO 변환에서 떨어뜨렸습니다. 에이전트가 실수로 자동 게시 기능을 붙이려면 여러 계층을 동시에 뚫어야 합니다.</p>
  </div>

  <div class="challenge-section">
    <h3>비결정적인 LLM 출력 다루기</h3>
    <p>같은 입력으로 두 번 돌리면 형식도 품질도 달라집니다. 프롬프트를 고치다가 방향을 바꿔, 보장할 수 있는 범위를 넓혔습니다. Zod 스키마로 형식 이탈을 걸러내고, 규칙 기반 스코어러가 링크·홍보 유도·과장·공격 표현을 후처리로 잡습니다. 후처리는 점수를 위험한 쪽으로만 움직일 수 있습니다. LLM이 스스로 매긴 낙관적인 점수를 덮어쓰지 못하게 한 건데, 덕분에 모델이나 프롬프트를 바꿔도 안전성 하한선은 유지됩니다.</p>
  </div>

  <div class="challenge-section">
    <h3>인터페이스 먼저, 구현은 나중에</h3>
    <p>LLM 제공자와 데이터베이스는 개발 중에 바뀔 게 뻔했습니다. 그래서 인터페이스를 먼저 정하고 구현을 뒤에 붙였습니다. 실제로 클라우드 API에서 로컬 Ollama로, 다시 내장 llama.cpp로 옮기는 동안 호출부는 그대로였고 환경 변수와 구현체만 바뀌었습니다. 인메모리 저장소 덕에 외부 서비스 없이 파이프라인 전체가 테스트로 돕니다.</p>
  </div>

  <div class="challenge-section">
    <h3>로컬 LLM 엔진 임베딩</h3>
    <p>운영비를 없애려고 llama.cpp 서버를 앱에 동봉하고 Next.js가 뜰 때 같이 띄웠는데, 라우트에서 엔진에 연결이 안 됐습니다. 한참 헤맨 원인은 Next 개발 서버의 워커 격리였습니다. instrumentation과 라우트 핸들러가 <code>process.env</code>를 공유하지 않아서 한쪽에서 심은 동적 포트 번호가 다른 쪽에 보이지 않았던 겁니다. 동적 포트를 포기하고 고정 포트로 띄워 Provider 기본 주소와 맞췄습니다. 프로세스 제어는 주입식으로 분리해 부팅 로직 자체는 순수 함수로 테스트합니다.</p>
  </div>

  <div class="challenge-section">
    <h3>"AI가 쓴 티" 줄이기</h3>
    <p>초기 결과물은 문법은 멀쩡한데 죄다 비슷했습니다. "정말 좋은 영상이네요"가 페르소나만 바꿔서 계속 나왔습니다. 톤 이름만 넘기고 나머지를 모델에 맡긴 게 문제였습니다. 페르소나를 말투·길이·성격에 예시 문장까지 붙은 지침으로 바꾸고, 금지 표현과 이모지·느낌표 제한을 명시했습니다. 사용자가 영상에 대한 감상 포인트를 한마디 직접 넣게 한 것도 효과가 컸습니다. 구체적인 한마디가 들어가면 나머지 문장이 덜 뻔해집니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>&nbsp;게임 클라이언트만 만들다 웹 풀스택과 LLM 제품을 처음부터 끝까지 혼자 만들어 봤습니다. 인터페이스를 먼저 고정하는 습관은 스택이 바뀌어도 통했고, 백엔드가 세 번 바뀌는 동안 호출부를 지켜 줬습니다. LLM에 대해서는 프롬프트를 다듬는 것보다 결정론적으로 보장되는 범위를 넓히는 쪽이 효과적이라는 걸 배웠습니다. 클라이언트 입력을 믿지 않고 서버에서 검증하던 습관이 여기서 쓰일 줄은 몰랐습니다.</p>
    <p>개발 방식도 바뀌었습니다. 코드는 대부분 Claude Code가 썼고, 저는 무엇을 만들지 정하고 만들어진 걸 검증하는 데 시간을 썼습니다. 티켓을 잘게 쪼개고 완료 기준을 미리 못박는 일이 품은 가장 많이 들었는데 효과도 가장 컸습니다. 큰 덩어리를 한 번에 맡기면 그럴듯해 보이는데 검증이 안 되는 코드가 나오고, 그걸 되돌리는 게 처음부터 쪼개는 것보다 오래 걸렸습니다.</p>
    <p>제품 판단 중에는 자동 게시를 뺀 결정이 가장 어려웠습니다. 몇 시간이면 만들고 사용자도 편해지지만, 그 순간 이 앱은 댓글봇이 되고 플랫폼 정책에 걸리면 끝납니다. 전환율을 일부 포기하고 오래 갈 형태를 골랐습니다. 아직 MVP라서 사람들이 실제로 초안을 복사해 쓰는지 확인하는 게 다음 목표이고, 로컬 모델의 품질과 비용 사이 어디를 잡을지는 아직 답을 못 찾았습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기능 스크린샷</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/comment_temperature_image2.webp' | relative_url }}" alt="댓글 분위기 분석 결과" width="1230" height="1249" loading="lazy" decoding="async">
        <p>공개 댓글 정제 후 분위기 분석 결과</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/comment_temperature_image3.webp' | relative_url }}" alt="대댓글 초안 생성" width="1231" height="1391" loading="lazy" decoding="async">
        <p>방향·페르소나·길이를 골라 대댓글 초안 생성</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/comment_temperature_image4.webp' | relative_url }}" alt="안전성 지표가 붙은 초안 목록" width="1231" height="1385" loading="lazy" decoding="async">
        <p>초안마다 자연스러움·스팸 위험·과장도 지표 표시</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/comment_temperature_image5.webp' | relative_url }}" alt="데스크탑 앱 모델 관리" width="1226" height="854" loading="lazy" decoding="async">
        <p>데스크탑 앱의 로컬 LLM 모델 관리</p>
      </div>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/git_action_runner/' | relative_url }}">← Git Action Runner</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/maumte/' | relative_url }}">마음테 →</a>
</div>
