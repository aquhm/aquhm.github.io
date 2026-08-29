---
layout: portfolio-detail
title: 마음테
permalink: /portfolio/maumte/
description: 사진 한 장과 몇 줄의 글로 하루를 돌아보는 Flutter 앱. MVP는 백엔드 없이 — 회고를 쓰는 LLM도, 읽어 주는 TTS도 기기 안에서 돕니다. 로컬과 원격을 갈아 끼울 수 있는 구조로 처음부터 설계했습니다.
image: /images/portfolio/maumte_preview.webp
---

<div class="portfolio-header">
  <h1>마음테 - 기기 안에서 도는 AI 회고 앱</h1>
</div>

<div class="portfolio-main-image">
  <img src="{{ '/images/portfolio/maumte_preview.webp' | relative_url }}" alt="마음테 — 오늘의 한 문장 연출 화면" width="1440" height="1080" fetchpriority="high" decoding="async">
</div>

<div class="project-section">
  <h2>프로젝트 개요</h2>

  <div class="project-details">
    <p><strong>개발 기간:</strong> 2026.05 - 진행 중 (Play 내부 테스트)</p>
    <p><strong>플랫폼:</strong> Android, iOS</p>
    <p><strong>개발 환경:</strong> Flutter, Dart, Riverpod, drift(SQLite), flutter_gemma(MediaPipe LiteRT), ONNX Runtime</p>
    <p><strong>개발 규모:</strong> 개인 프로젝트. 기획부터 배포·운영까지 전 과정</p>
    <p><strong>개발 방식:</strong> AI 에이전트(Claude Code) 주도 개발. 설계 문서를 먼저 확정하고 작은 단위로 구현·검증</p>
    <p><strong>랜딩페이지:</strong> <a href="https://www.jiteum.com/maumte" target="_blank" rel="noopener noreferrer">https://www.jiteum.com/maumte</a></p>
  </div>

  <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;background:#fff;border:1px solid #eee;border-radius:12px;padding:14px 18px;margin:16px 0 6px;">
    <a href="https://appdistribution.firebase.dev/i/41566751826e9f25" target="_blank" rel="noopener noreferrer" style="flex-shrink:0;">
      <img src="{{ '/images/portfolio/maumte_install_qr.png' | relative_url }}" alt="마음테 테스트 앱 설치 QR 코드" width="96" height="96" decoding="async" style="display:block;border-radius:6px;">
    </a>
    <div style="min-width:200px;flex:1;">
      <p style="margin:0 0 4px;"><strong><a href="https://appdistribution.firebase.dev/i/41566751826e9f25" target="_blank" rel="noopener noreferrer">테스트 앱 설치하기</a></strong></p>
      <p style="margin:0;font-size:0.85rem;color:#777;">비공개 테스트 중 — QR을 스캔하거나 링크에서 Google 계정으로 로그인하면 설치할 수 있습니다 (Android · 약 320MB)</p>
    </div>
  </div>

  <div class="project-description">
    <p>&nbsp;사진 한 장과 몇 줄의 글로 하루를 돌아보는 회고 앱입니다. 기록을 마치면 AI가 회고 카드를 만들어 주고, 기록이 쌓이면 주간 리포트나 발자취 달력에서 흐름이 보입니다.</p>
    <p><strong>가장 큰 결정은 "MVP는 백엔드 없이 로컬 기반으로 간다" 였습니다.</strong> 1인 개발이라 앱과 백엔드를 동시에 떠안는 건 무리라고 봤고, 서버를 세우는 건 사용자 반응과 추이를 보고 판단해도 늦지 않다고 생각했습니다. 그래서 첫 버전은 회고를 쓰는 LLM도, 읽어 주는 TTS도 기기 안에서 돌립니다. 다만 여기서 끝낼 생각은 아니라 <strong>로컬과 원격을 갈아 끼울 수 있는 구조를 처음부터 잡았습니다.</strong> 회고 생성은 인터페이스 하나 뒤에 온디바이스·클라우드 API·서버 함수 구현이 나란히 붙어 있고, 문구와 프롬프트, 가격 정책은 이미 원격에서 내려옵니다. 리텐션과 사용자 반응이 확인되면 클라우드 백엔드로 무게중심을 옮길 계획입니다.</p>
    <figure class="overview-diagram" style="margin:18px auto 6px;max-width:680px;overflow-x:auto;-webkit-overflow-scrolling:touch;">
      <svg viewBox="0 0 720 150" width="100%" style="min-width:600px;display:block;font-family:inherit;" role="img" aria-label="전체 흐름: 기획 → 시안 → 개발 → QA → 배포 → 운영 → 랜딩, 운영과 QA의 피드백이 다음 기획으로 되돌아감">
        <defs>
          <marker id="ov-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#8a8a8a"/>
          </marker>
          <marker id="ov-arw-dash" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#c98a5a"/>
          </marker>
        </defs>
        <!-- 피드백 루프: 운영 · QA → 다음 기획 -->
        <path d="M562,40 L562,18 L57,18 L57,37" stroke="#c98a5a" stroke-width="1.4" stroke-dasharray="5 4" fill="none" marker-end="url(#ov-arw-dash)"/>
        <rect x="214" y="9" width="192" height="17" rx="8" fill="#fff"/>
        <text x="310" y="21" font-size="10.5" fill="#b0753f" text-anchor="middle">사용자 반응 · QA 피드백 → 다음 기능 기획</text>
        <g>
          <rect x="11" y="40" width="92" height="44" rx="11" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="57" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">기획</text>
          <text x="57" y="106" font-size="11" fill="#666" text-anchor="middle">문제 · 경계 정의</text>
          <text x="57" y="121" font-size="11" fill="#666" text-anchor="middle">스펙 문서 작성</text>
          <text x="57" y="136" font-size="11" fill="#666" text-anchor="middle">수익화·법적 고지</text>
          <rect x="112" y="40" width="92" height="44" rx="11" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="158" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">시안</text>
          <text x="158" y="106" font-size="11" fill="#666" text-anchor="middle">HTML 시안</text>
          <text x="158" y="121" font-size="11" fill="#666" text-anchor="middle">브라우저 비교</text>
          <text x="158" y="136" font-size="11" fill="#666" text-anchor="middle">확정 후 구현</text>
          <rect x="213" y="40" width="92" height="44" rx="11" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="259" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">개발</text>
          <text x="259" y="106" font-size="11" fill="#666" text-anchor="middle">Flutter 앱</text>
          <text x="259" y="121" font-size="11" fill="#666" text-anchor="middle">운영 콘솔(Win)</text>
          <text x="259" y="136" font-size="11" fill="#666" text-anchor="middle">AI 에이전트 활용</text>
          <rect x="314" y="40" width="92" height="44" rx="11" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="360" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">QA</text>
          <text x="360" y="106" font-size="11" fill="#666" text-anchor="middle">Slack /build</text>
          <text x="360" y="121" font-size="11" fill="#666" text-anchor="middle">Firebase 배포</text>
          <text x="360" y="136" font-size="11" fill="#666" text-anchor="middle">실기기 · Linear</text>
          <rect x="415" y="40" width="92" height="44" rx="11" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="461" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">배포</text>
          <text x="461" y="106" font-size="11" fill="#666" text-anchor="middle">Codemagic</text>
          <text x="461" y="121" font-size="11" fill="#666" text-anchor="middle">Play 내부 테스트</text>
          <text x="461" y="136" font-size="11" fill="#666" text-anchor="middle">스토어 자산</text>
          <rect x="516" y="40" width="92" height="44" rx="11" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="562" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">운영</text>
          <text x="562" y="106" font-size="11" fill="#666" text-anchor="middle">콘솔 → R2 · HF</text>
          <text x="562" y="121" font-size="11" fill="#666" text-anchor="middle">빌드 없이 교체</text>
          <text x="562" y="136" font-size="11" fill="#666" text-anchor="middle">공지 · 문의</text>
          <rect x="617" y="40" width="92" height="44" rx="11" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="663" y="68" font-size="15" font-weight="600" fill="#333" text-anchor="middle">랜딩</text>
          <text x="663" y="106" font-size="11" fill="#666" text-anchor="middle">정적 HTML</text>
          <text x="663" y="121" font-size="11" fill="#666" text-anchor="middle">GitHub Pages</text>
          <text x="663" y="136" font-size="11" fill="#666" text-anchor="middle">jiteum.com/maumte</text>
        </g>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="103" y1="62" x2="111" y2="62" marker-end="url(#ov-arw)"/>
          <line x1="204" y1="62" x2="212" y2="62" marker-end="url(#ov-arw)"/>
          <line x1="305" y1="62" x2="313" y2="62" marker-end="url(#ov-arw)"/>
          <line x1="406" y1="62" x2="414" y2="62" marker-end="url(#ov-arw)"/>
          <line x1="507" y1="62" x2="515" y2="62" marker-end="url(#ov-arw)"/>
          <line x1="608" y1="62" x2="616" y2="62" marker-end="url(#ov-arw)"/>
        </g>
      </svg>
      <figcaption style="text-align:center;font-size:0.85rem;color:#777;margin-top:6px;">기획부터 랜딩까지 한 사람이 이어서 진행한 전체 흐름 — 앞 단계의 결정이 뒤 단계로, 운영과 QA의 피드백이 다시 기획으로 돌아옵니다.</figcaption>
    </figure>
  </div>
</div>

<div class="project-section">
  <h2>주요 기능 및 담당 업무</h2>

  <div class="feature-section">
    <h3>온디바이스 AI</h3>
    <ul>
      <li>Gemma 4 E2B(2.59GB) 모델을 기기 안에서 돌려 회고 카드 생성 — 글자가 나오는 대로 화면에 보여 주고, 도중에 취소할 수 있으며, 요청이 겹치면 한 번에 하나씩만 처리</li>
      <li>Supertonic TTS 모델을 연동해 회고 카드를 읽어 주는 나레이션 (ONNX Runtime)</li>
      <li>2.59GB 모델을 앱 안에서 내려받는 다운로드 관리 — 앱이 꺼져도 받던 곳부터 이어받고, 어떤 모델이 설치돼 있는지 기록해 관리</li>
      <li>회고 생성 방식은 인터페이스 하나로 추상화 — 지금은 온디바이스 모델을 쓰지만, 클라우드 API나 서버로 갈아 끼울 수 있도록 구현을 나란히 준비</li>
      <li>AI 생성이 실패하면 규칙 기반 생성기가 대신 카드를 만들어, 사용자에게 실패 화면을 보여 주지 않음</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>앱</h3>
    <ul>
      <li>회고 카드, 되묻기, 주간 리포트, 발자취 달력, 감정 은하, 뱃지 24종</li>
      <li>잉크 번짐 전환과 보케 배경 등 프래그먼트 셰이더 연출</li>
      <li>로컬 저장(drift). 백업/복원, 앱 잠금, 알림, i18n, 인앱 결제</li>
      <li>위기 문구를 분류하는 SafetyPolicy — 의료 서비스가 아니라는 경계를 코드로 유지</li>
    </ul>
  </div>

  <div class="feature-section">
    <h3>앱 밖</h3>
    <ul>
      <li>원격 운영 — 정적 JSON 매니페스트 한 장으로 문구·프롬프트·가격을 릴리스 없이 교체 (Cloudflare R2)</li>
      <li>운영 콘솔 — 게시 전용 Flutter Windows 데스크탑 앱. 앱과 스키마 파서를 공유</li>
      <li>CI/CD — PR 게이트(GitHub Actions), Slack <code>/build</code> 한 줄로 도는 QA 배포, 릴리스(Codemagic → Play)</li>
      <li>랜딩페이지(<a href="https://www.jiteum.com/maumte" target="_blank" rel="noopener noreferrer">www.jiteum.com/maumte</a>), 스토어 등록 자산, 법적 고지 3종</li>
    </ul>
  </div>
</div>

<div class="project-section">
  <h2>주요 기술 적용 경험</h2>

  <div class="challenge-section">
    <h3>앱 아키텍처</h3>
    <p>기능 단위로 폴더를 나누고, 각 기능 안을 domain·data·application·presentation 네 층으로 구성했습니다. domain에는 모델과 인터페이스만 두고, data가 실제 구현(로컬 DB·원격·테스트용 fake)을 맡으며, application의 Riverpod provider가 ViewModel 역할을 해서 화면은 상태를 구독하고 동작만 요청하는 단방향 흐름입니다. AI 클라이언트나 저장소 같은 외부 의존은 모두 인터페이스로 추상화해 주입하기 때문에, 개발·테스트 환경에서는 fake 구현으로 바꿔 끼워 백엔드나 권한 없이도 앱 전체를 돌릴 수 있습니다.</p>
    <figure class="arch-diagram" style="margin:18px auto 6px;max-width:680px;overflow-x:auto;-webkit-overflow-scrolling:touch;">
      <svg viewBox="0 0 720 614" width="100%" style="min-width:600px;display:block;font-family:inherit;" role="img" aria-label="마음테 앱 레이어 구조와 데이터 저장소: presentation → application → domain ← data, data 아래에 로컬 DB·미디어 파일·백업 zip, 오른쪽에 내려받기 전용 원격">
        <defs>
          <marker id="arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#8a8a8a"/>
          </marker>
          <marker id="arw-dash" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#c98a5a"/>
          </marker>
        </defs>

        <!-- 레이어 상자 -->
        <g font-size="15" font-weight="600" fill="#333" text-anchor="middle">
          <rect x="70" y="20" width="300" height="62" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="220" y="46">presentation</text>
          <text x="220" y="68" font-size="12.5" font-weight="400" fill="#666">화면 · 위젯</text>

          <rect x="70" y="146" width="300" height="62" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="220" y="172">application</text>
          <text x="220" y="194" font-size="12.5" font-weight="400" fill="#666">Riverpod provider · notifier (ViewModel 역할)</text>

          <rect x="70" y="272" width="300" height="62" rx="12" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="220" y="298">domain</text>
          <text x="220" y="320" font-size="12.5" font-weight="400" fill="#666">모델 + 인터페이스</text>

          <rect x="70" y="398" width="300" height="62" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="220" y="424">data</text>
          <text x="220" y="446" font-size="12.5" font-weight="400" fill="#666">Repository · Service 구현 (운영 / 테스트용 fake)</text>
        </g>

        <!-- 세로 흐름 화살표 -->
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="220" y1="82" x2="220" y2="144" marker-end="url(#arw)"/>
          <line x1="220" y1="208" x2="220" y2="270" marker-end="url(#arw)"/>
          <line x1="220" y1="398" x2="220" y2="336" marker-end="url(#arw)"/>
        </g>
        <g font-size="12" fill="#555">
          <rect x="236" y="104" width="118" height="20" rx="10" fill="#fff"/>
          <text x="295" y="118" text-anchor="middle">상태 구독 · 동작 요청</text>
          <rect x="236" y="230" width="92" height="20" rx="10" fill="#fff"/>
          <text x="282" y="244" text-anchor="middle">인터페이스 호출</text>
          <rect x="236" y="356" width="92" height="20" rx="10" fill="#fff"/>
          <text x="282" y="370" text-anchor="middle">인터페이스 구현</text>
        </g>

        <!-- 주입(DI) 점선: data 구현이 application 으로 주입 -->
        <path d="M70,429 C20,429 20,177 68,177" stroke="#c98a5a" stroke-width="1.4" stroke-dasharray="5 4" fill="none" marker-end="url(#arw-dash)"/>
        <text x="14" y="298" font-size="12" fill="#b0753f" transform="rotate(-90 14 298)" text-anchor="middle">주입 (DI) — 환경에 따라 구현 교체</text>

        <!-- 오른쪽 설명 -->
        <g font-size="12.5" fill="#555">
          <text x="400" y="44">Screen, Widget</text>
          <text x="400" y="62">상태를 구독하고 동작만 요청</text>

          <text x="400" y="170">상태 보관 · 유스케이스 조합</text>
          <text x="400" y="188">domain 인터페이스에만 의존</text>

          <text x="400" y="296">ReflectionEntry, WeeklyReport …</text>
          <text x="400" y="314">AiReflectionClient, ReflectionRepository</text>
        </g>

        <!-- 원격: 내려받기 전용 -->
        <rect x="440" y="398" width="220" height="62" rx="12" fill="#F6F6F6" stroke="#dcdcdc"/>
        <text x="550" y="422" font-size="13.5" font-weight="600" fill="#444" text-anchor="middle">원격 (내려받기 전용)</text>
        <text x="550" y="441" font-size="11.5" fill="#666" text-anchor="middle">설정 JSON · Cloudflare R2</text>
        <text x="550" y="455" font-size="11.5" fill="#666" text-anchor="middle">LLM · TTS 모델 · Hugging Face</text>
        <line x1="438" y1="429" x2="372" y2="429" stroke="#8a8a8a" stroke-width="1.6" marker-end="url(#arw)"/>
        <text x="405" y="422" font-size="11" fill="#555" text-anchor="middle">내려받기</text>

        <!-- 기기 안 저장소 -->
        <rect x="28" y="500" width="392" height="92" rx="12" fill="none" stroke="#d8d8d8" stroke-dasharray="4 4"/>
        <text x="224" y="607" font-size="11.5" fill="#888" text-anchor="middle">▲ 기기 안 저장소 — 일기 데이터는 여기에만 두고 서버로 보내지 않음</text>

        <line x1="220" y1="460" x2="220" y2="482" stroke="#8a8a8a" stroke-width="1.6"/>
        <line x1="95" y1="482" x2="345" y2="482" stroke="#8a8a8a" stroke-width="1.6"/>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="95" y1="482" x2="95" y2="516" marker-end="url(#arw)"/>
          <line x1="220" y1="482" x2="220" y2="516" marker-end="url(#arw)"/>
          <line x1="345" y1="482" x2="345" y2="516" marker-end="url(#arw)"/>
        </g>
        <text x="228" y="475" font-size="11" fill="#555">읽기 · 쓰기</text>

        <g font-size="12.5" font-weight="600" fill="#333" text-anchor="middle">
          <rect x="38" y="518" width="114" height="62" rx="10" fill="#fff" stroke="#cfe3cf"/>
          <text x="95" y="538">로컬 DB</text>
          <text x="95" y="554" font-size="11" font-weight="400" fill="#666">drift · SQLite</text>
          <text x="95" y="569" font-size="11" font-weight="400" fill="#666">회고 · 페이지 · 되묻기</text>

          <rect x="163" y="518" width="114" height="62" rx="10" fill="#fff" stroke="#cfe3cf"/>
          <text x="220" y="538">미디어 파일</text>
          <text x="220" y="554" font-size="11" font-weight="400" fill="#666">사진 · 앱 문서 폴더</text>
          <text x="220" y="569" font-size="11" font-weight="400" fill="#666">reflection_media/</text>

          <rect x="288" y="518" width="114" height="62" rx="10" fill="#fff" stroke="#cfe3cf"/>
          <text x="345" y="538">백업 zip</text>
          <text x="345" y="554" font-size="11" font-weight="400" fill="#666">DB 스냅샷 + 미디어</text>
          <text x="345" y="569" font-size="11" font-weight="400" fill="#666">내보내기 · 복원</text>
        </g>
      </svg>
      <figcaption style="text-align:center;font-size:0.85rem;color:#777;margin-top:6px;">기능(feature)마다 같은 네 층을 반복하고 의존은 domain 쪽으로만 향합니다. 일기 데이터는 기기 안(DB · 미디어 · 백업 zip)에만 두고, 원격에서는 설정과 모델을 내려받기만 합니다.</figcaption>
    </figure>

  </div>

  <div class="challenge-section">
    <h3>온디바이스 LLM 출력 검증 및 fallback 구조</h3>
    <p>기기에서 구동 가능한 소형 모델은 한국어 회고를 생성할 때 품질이 일정하지 않았습니다. 영어 문장이 섞이거나, 프롬프트의 placeholder를 그대로 출력하거나, JSON 형식이 깨지는 경우가 잦았습니다. 프롬프트 수정만으로는 한 케이스를 고치면 다른 케이스가 깨지는 일이 반복되어, 생성 품질에 의존하기보다 생성 이후의 검증 단계를 두텁게 가져가는 방향으로 전환했습니다. 한국어 비율, 어조, placeholder 에코, 금지 표현을 순서대로 검사하고 하나라도 통과하지 못하면 규칙 기반 생성기가 대신 카드를 만들도록 구성했습니다. 덕분에 사용자에게 AI 실패 화면이 노출되는 일 없이, 품질이 다소 낮더라도 항상 결과를 보여 줄 수 있었습니다.</p>
    <figure class="ai-diagram" style="margin:18px auto 6px;max-width:680px;overflow-x:auto;-webkit-overflow-scrolling:touch;">
      <svg viewBox="0 0 720 330" width="100%" style="min-width:600px;display:block;font-family:inherit;" role="img" aria-label="온디바이스 AI 처리 흐름: 기록 → 프롬프트 조립 → Gemma 추론 → 출력 검증 → (통과) 회고 카드 / (실패) 규칙 기반 생성 → 회고 카드 → 로컬 DB 저장·결과 화면 → 연출·TTS 나레이션. 모델 파일은 Hugging Face에서 앱 안으로 다운로드">
        <defs>
          <marker id="ai-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#8a8a8a"/>
          </marker>
          <marker id="ai-arw-dash" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#c98a5a"/>
          </marker>
        </defs>

        <!-- 1행: 기록 → 프롬프트 → 추론 → 검증 -->
        <g font-size="13.5" font-weight="600" fill="#333" text-anchor="middle">
          <rect x="20" y="20" width="130" height="60" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="85" y="46">기록</text>
          <text x="85" y="66" font-size="11.5" font-weight="400" fill="#666">사진 + 글</text>

          <rect x="185" y="20" width="150" height="60" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="260" y="44">프롬프트 조립</text>
          <text x="260" y="60" font-size="11" font-weight="400" fill="#666">원격 프롬프트 팩(R2)</text>
          <text x="260" y="73" font-size="11" font-weight="400" fill="#666">없으면 번들 폴백</text>

          <rect x="370" y="20" width="170" height="60" rx="12" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="455" y="42">Gemma 4 E2B 추론</text>
          <text x="455" y="58" font-size="11" font-weight="400" fill="#666">flutter_gemma · MediaPipe LiteRT</text>
          <text x="455" y="72" font-size="11" font-weight="400" fill="#666">토큰 스트리밍 · 생성 중 취소</text>

          <rect x="575" y="20" width="125" height="60" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="637" y="42">출력 검증</text>
          <text x="637" y="58" font-size="11" font-weight="400" fill="#666">한국어 비율 · 어조</text>
          <text x="637" y="72" font-size="11" font-weight="400" fill="#666">placeholder · JSON</text>
        </g>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="150" y1="50" x2="183" y2="50" marker-end="url(#ai-arw)"/>
          <line x1="335" y1="50" x2="368" y2="50" marker-end="url(#ai-arw)"/>
          <line x1="540" y1="50" x2="573" y2="50" marker-end="url(#ai-arw)"/>
        </g>

        <!-- 검증 → 통과 / 실패 -->
        <path d="M605,80 L605,116 L475,116 L475,148" stroke="#8a8a8a" stroke-width="1.6" fill="none" marker-end="url(#ai-arw)"/>
        <rect x="516" y="106" width="40" height="18" rx="9" fill="#fff"/>
        <text x="536" y="119" font-size="11.5" fill="#3a7d44" text-anchor="middle">통과</text>
        <line x1="668" y1="80" x2="668" y2="148" stroke="#8a8a8a" stroke-width="1.6" marker-end="url(#ai-arw)"/>
        <rect x="672" y="104" width="40" height="18" rx="9" fill="#fff"/>
        <text x="692" y="117" font-size="11.5" fill="#b04a3a" text-anchor="middle">실패</text>

        <!-- 2행: fallback → 카드 → 저장·화면 → 연출·TTS (오른쪽 → 왼쪽) -->
        <g font-size="13.5" font-weight="600" fill="#333" text-anchor="middle">
          <rect x="575" y="150" width="125" height="60" rx="12" fill="#F6F6F6" stroke="#dcdcdc"/>
          <text x="637" y="172">규칙 기반 생성</text>
          <text x="637" y="188" font-size="11" font-weight="400" fill="#666">fallback</text>
          <text x="637" y="201" font-size="11" font-weight="400" fill="#666">LLM 없이도 카드 보장</text>

          <rect x="400" y="150" width="150" height="60" rx="12" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="475" y="176">회고 카드</text>
          <text x="475" y="194" font-size="11" font-weight="400" fill="#666">AI 실패 화면 없음</text>

          <rect x="232" y="150" width="133" height="60" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="298" y="174">로컬 DB 저장</text>
          <text x="298" y="192" font-size="11" font-weight="400" fill="#666">결과 화면 표시</text>

          <rect x="20" y="150" width="160" height="60" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="100" y="172">연출 · TTS 나레이션</text>
          <text x="100" y="188" font-size="11" font-weight="400" fill="#666">Supertonic · ONNX Runtime</text>
          <text x="100" y="201" font-size="11" font-weight="400" fill="#666">잉크 번짐 · 보케 · 낭독</text>
        </g>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="575" y1="180" x2="552" y2="180" marker-end="url(#ai-arw)"/>
          <line x1="400" y1="180" x2="367" y2="180" marker-end="url(#ai-arw)"/>
          <line x1="232" y1="180" x2="182" y2="180" marker-end="url(#ai-arw)"/>
        </g>
        <text x="206" y="171" font-size="10.5" fill="#777" text-anchor="middle">음미하기</text>

        <!-- 모델 파일 -->
        <rect x="20" y="240" width="680" height="74" rx="12" fill="none" stroke="#d8d8d8" stroke-dasharray="4 4"/>
        <text x="360" y="264" font-size="13" font-weight="600" fill="#444" text-anchor="middle">모델 파일 — Hugging Face에서 앱 안으로 다운로드 (강제종료 후 이어받기)</text>
        <text x="360" y="284" font-size="11.5" fill="#666" text-anchor="middle">Gemma 4 E2B 2.59GB (LLM) · Supertonic 약 401MB (TTS)</text>
        <text x="360" y="302" font-size="11.5" fill="#666" text-anchor="middle">저사양 기기 메모리 때문에 연출로 넘어갈 때 LLM을 해제한 뒤 TTS를 올리는 순서를 고정</text>
      </svg>
      <figcaption style="text-align:center;font-size:0.85rem;color:#777;margin-top:6px;">온디바이스 AI 처리 흐름 — 생성이 실패해도 규칙 기반 생성으로 수렴해 사용자는 항상 카드를 받습니다.</figcaption>
    </figure>

  </div>

  <div class="challenge-section">
    <h3>추론 취소와 메모리 관리</h3>
    <p>회고 생성에는 수십 초가 걸리는데, 모바일 환경에서는 사용자가 그 사이에 화면을 떠나는 경우가 많습니다. 떠난 뒤에도 추론이 계속되면 배터리만 소모되므로, 생성 직전과 토큰을 받을 때마다 결과가 여전히 필요한지 확인하고 필요 없으면 네이티브 레벨(MediaPipe stopGeneration)까지 내려가 실제로 중단하도록 구현했습니다. Gemma가 수백 MB를 점유한 상태에서 TTS 모델까지 올리면 저사양 기기에서 버티지 못해, 연출로 넘어가는 시점에 LLM을 해제하고 TTS를 올리는 순서를 고정했습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>온디바이스 모델 선정과 성능 최적화</h3>
    <p>모델 선택부터 시행착오가 있었습니다. 처음에는 품질을 기대하고 한 단계 큰 Gemma E4B 모델로 시도했지만 실기기에서 감당하지 못해, 더 작은 E2B(2.59GB)로 내려 확정했습니다. 대신 작은 모델은 한국어 처리가 더 불안정해서, 회고에 영어 문장이 섞여 나오는 문제를 프롬프트의 한국어 규칙과 출력 단계의 영어 혼입 필터로 이중 방어했습니다. 성능도 실기기에서 여러 번 손봤습니다. 생성 연출 중에 화면 효과가 겹치면 프레임이 떨어져 연출 중 무거운 효과를 덜어냈고, 추론 엔진을 미리 로드해 첫 응답까지의 대기를 줄였으며, 주간 리포트처럼 오래 걸리는 생성은 사용자가 열기 전에 미리 만들어 두도록 바꿨습니다.</p>
  </div>

  <div class="challenge-section">
    <h3>추가 빌드 없이 반영되는 원격 설정</h3>
    <p>문구와 프롬프트, 글귀, 공지, 가격 정책처럼 자주 바뀌는 값은 앱에 고정하지 않고 JSON 데이터로 분리해 원격에서 내려받도록 연동했습니다. 설정 JSON은 Cloudflare R2에, LLM·TTS 모델 가중치는 Hugging Face에 올리고, 정적 JSON 매니페스트 한 장이 이들을 가리키도록 해 앱은 부팅 시 그 파일만 읽습니다. 덕분에 값을 고치거나 모델을 바꿀 때 추가 빌드나 스토어 심사 없이 바로 대응할 수 있습니다. 원격 설정이 실패하면 번들 기본값으로 조용히 돌아가 겉으로 드러나지 않기 때문에, 폐기한 주소가 코드에 되살아나면 테스트가 실패하도록 안전장치를 두었습니다.</p>
    <figure class="ops-diagram" style="margin:18px auto 6px;max-width:680px;overflow-x:auto;-webkit-overflow-scrolling:touch;">
      <svg viewBox="0 0 720 540" width="100%" style="min-width:600px;display:block;font-family:inherit;" role="img" aria-label="운영·배포 흐름: 운영 콘솔 → Cloudflare R2(매니페스트·설정 JSON) → 앱, Hugging Face(모델) → 앱. 코드는 PR 게이트(GitHub Actions) → main, Slack /build → 웹훅 → GitHub Actions → Firebase App Distribution → 테스트 폰, 버전 태그 → Codemagic → Google Play 내부 테스트">
        <defs>
          <marker id="ops-arw" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="#8a8a8a"/>
          </marker>
        </defs>

        <!-- 레인 1: 콘텐츠 · 설정 · 모델 -->
        <rect x="12" y="14" width="696" height="200" rx="12" fill="none" stroke="#d8d8d8" stroke-dasharray="4 4"/>
        <text x="24" y="33" font-size="12" fill="#888">콘텐츠 · 설정 · 모델 — 앱 빌드 없이 반영</text>

        <g font-size="13.5" font-weight="600" fill="#333" text-anchor="middle">
          <rect x="24" y="46" width="150" height="64" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="99" y="67">운영 콘솔</text>
          <text x="99" y="84" font-size="11" font-weight="400" fill="#666">Flutter Windows 앱</text>
          <text x="99" y="98" font-size="11" font-weight="400" fill="#666">편집 · 미리보기 · 게시</text>

          <rect x="212" y="46" width="230" height="64" rx="12" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="327" y="66">Cloudflare R2</text>
          <text x="327" y="83" font-size="11" font-weight="400" fill="#666">매니페스트 한 장 + 설정 JSON 팩</text>
          <text x="327" y="97" font-size="11" font-weight="400" fill="#666">프롬프트 · 글귀 · 문자열 · 공지 · 수익화</text>

          <rect x="480" y="46" width="216" height="64" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="588" y="66">앱 (기기)</text>
          <text x="588" y="83" font-size="11" font-weight="400" fill="#666">부팅 시 매니페스트 읽기 → 팩 내려받기</text>
          <text x="588" y="97" font-size="11" font-weight="400" fill="#666">실패하면 번들 기본값으로 폴백</text>

          <rect x="212" y="138" width="230" height="62" rx="12" fill="#F6F6F6" stroke="#dcdcdc"/>
          <text x="327" y="158">Hugging Face</text>
          <text x="327" y="175" font-size="11" font-weight="400" fill="#666">LLM · TTS 모델 가중치 (2.59GB · 401MB)</text>
          <text x="327" y="189" font-size="11" font-weight="400" fill="#666">콘솔의 모델 카탈로그가 버전 · URL 관리</text>
        </g>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="174" y1="78" x2="210" y2="78" marker-end="url(#ops-arw)"/>
          <line x1="442" y1="78" x2="478" y2="78" marker-end="url(#ops-arw)"/>
          <path d="M442,169 L588,169 L588,112" marker-end="url(#ops-arw)"/>
        </g>
        <text x="192" y="70" font-size="10.5" fill="#555" text-anchor="middle">게시</text>
        <text x="460" y="70" font-size="10.5" fill="#555" text-anchor="middle">읽기</text>
        <text x="515" y="186" font-size="10.5" fill="#555" text-anchor="middle">앱 안에서 다운로드 · 이어받기</text>

        <!-- 레인 2: 코드 CI/CD -->
        <rect x="12" y="232" width="696" height="292" rx="12" fill="none" stroke="#d8d8d8" stroke-dasharray="4 4"/>
        <text x="24" y="251" font-size="12" fill="#888">코드 — CI/CD 세 트랙</text>

        <g font-size="13" font-weight="600" fill="#333" text-anchor="middle">
          <!-- 트랙 1: PR 게이트 -->
          <rect x="24" y="266" width="100" height="56" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="74" y="290">Pull Request</text>
          <text x="74" y="308" font-size="11" font-weight="400" fill="#666">기능 브랜치</text>

          <rect x="160" y="266" width="210" height="56" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="265" y="288">GitHub Actions</text>
          <text x="265" y="304" font-size="11" font-weight="400" fill="#666">analyze · 전체 테스트 · 콘솔 테스트</text>
          <text x="265" y="316" font-size="11" font-weight="400" fill="#666">하나라도 깨지면 머지 불가</text>

          <rect x="406" y="266" width="110" height="56" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="461" y="290">main 머지</text>
          <text x="461" y="308" font-size="11" font-weight="400" fill="#666">PR 게이트 통과</text>

          <!-- 트랙 2: QA 배포 -->
          <rect x="24" y="356" width="110" height="56" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="79" y="379">Slack</text>
          <text x="79" y="397" font-size="11" font-weight="400" fill="#666">/build 한 줄</text>

          <rect x="160" y="356" width="110" height="56" rx="12" fill="#F6F6F6" stroke="#dcdcdc"/>
          <text x="215" y="379">웹훅 수신</text>
          <text x="215" y="397" font-size="11" font-weight="400" fill="#666">서명 검증 · 재전송 방지</text>

          <rect x="296" y="356" width="150" height="56" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="371" y="379">GitHub Actions</text>
          <text x="371" y="397" font-size="11" font-weight="400" fill="#666">QA APK 빌드 (arm64)</text>

          <rect x="472" y="356" width="120" height="56" rx="12" fill="#FBF2EB" stroke="#ecd4c0"/>
          <text x="532" y="379">Firebase</text>
          <text x="532" y="397" font-size="11" font-weight="400" fill="#666">App Distribution</text>

          <rect x="618" y="356" width="84" height="56" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="660" y="379">테스트 폰</text>
          <text x="660" y="397" font-size="11" font-weight="400" fill="#666">QR 설치</text>

          <!-- 트랙 3: 릴리스 -->
          <rect x="24" y="446" width="110" height="56" rx="12" fill="#F1EEFB" stroke="#d9d3f0"/>
          <text x="79" y="469">버전 태그</text>
          <text x="79" y="487" font-size="11" font-weight="400" fill="#666">git tag</text>

          <rect x="160" y="446" width="210" height="56" rx="12" fill="#EAF3FB" stroke="#cfe0f0"/>
          <text x="265" y="469">Codemagic</text>
          <text x="265" y="487" font-size="11" font-weight="400" fill="#666">AAB 빌드 · iOS 무서명 컴파일 검증</text>

          <rect x="406" y="446" width="150" height="56" rx="12" fill="#EEF6EE" stroke="#cfe3cf"/>
          <text x="481" y="469">Google Play</text>
          <text x="481" y="487" font-size="11" font-weight="400" fill="#666">내부 테스트 트랙</text>
        </g>
        <g stroke="#8a8a8a" stroke-width="1.6" fill="none">
          <line x1="124" y1="294" x2="158" y2="294" marker-end="url(#ops-arw)"/>
          <line x1="370" y1="294" x2="404" y2="294" marker-end="url(#ops-arw)"/>

          <line x1="134" y1="384" x2="158" y2="384" marker-end="url(#ops-arw)"/>
          <line x1="270" y1="384" x2="294" y2="384" marker-end="url(#ops-arw)"/>
          <line x1="446" y1="384" x2="470" y2="384" marker-end="url(#ops-arw)"/>
          <line x1="592" y1="384" x2="616" y2="384" marker-end="url(#ops-arw)"/>

          <line x1="134" y1="474" x2="158" y2="474" marker-end="url(#ops-arw)"/>
          <line x1="370" y1="474" x2="404" y2="474" marker-end="url(#ops-arw)"/>
        </g>
        <text x="604" y="376" font-size="10" fill="#555" text-anchor="middle">QR 알림</text>
      </svg>
      <figcaption style="text-align:center;font-size:0.85rem;color:#777;margin-top:6px;">운영·배포 흐름 — 문구·설정·모델은 운영 콘솔로 빌드 없이 반영하고, 코드는 PR 게이트 · QA 배포 · 릴리스 세 트랙으로 나갑니다.</figcaption>
    </figure>

  </div>

  <div class="challenge-section">
    <h3>AI 에이전트 활용 개발</h3>
    <p>개발 전반에 Claude Code 같은 AI 에이전트를 적극 활용했습니다. 기능마다 설계 문서를 먼저 정리하고 작은 단위로 나눠 에이전트에게 구현과 테스트를 맡겼으며, 결과는 테스트 스위트와 직접 리뷰로 검증했습니다. 덕분에 1인 개발로도 앱·운영 콘솔·CI/CD·랜딩페이지까지 범위를 넓힐 수 있었습니다.</p>
  </div>
</div>

<div class="project-section">
  <h2>프로젝트 회고 및 배운 점</h2>

  <div class="reflection-content">
    <p>마음테는 기획부터 개발, QA, 배포, 운영, 랜딩페이지까지 전 과정을 혼자 이어서 진행한 프로젝트였습니다. 조직에서는 역할별로 나뉘어 있던 단계를 한 사람이 맡다 보니, 앞 단계의 결정이 뒤 단계에 어떻게 영향을 주는지 직접 체감할 수 있었습니다. "MVP는 백엔드 없이 간다"는 결정 하나가 인프라 선택과 수익화 모델, QA 방식까지 연쇄적으로 결정했고, 그만큼 다음 단계에서 되돌릴 수 있도록 경계를 어디에 둘지가 중요하다는 것을 배웠습니다.</p>

    <p>감정을 기록하는 앱이라 기능도 기능이지만, 기록을 마친 뒤의 연출과 화면 흐름에 특히 신경을 썼습니다. 주요 화면은 시안으로 여러 방향을 비교한 뒤 옮겼고, 실기기에서 직접 써 보며 어색한 부분을 고치는 과정을 몇 번씩 거듭했습니다. 처음 만든 화면을 그대로 둔 경우가 거의 없을 만큼 수정이 잦았지만, 그 반복이 앱의 결을 만들었다고 생각합니다.</p>

    <p>온디바이스 AI는 예상보다 제약이 많았습니다. 클라우드 환경에서는 프롬프트 문제로 끝났을 일이 기기에서는 메모리, 발열, 취소, 모델 배포 문제로 이어졌습니다. 그러나 그 제약이 fallback 계층과 취소 경로 같은 설계를 만들어 냈고, 게임 개발에서 하드웨어 제약 속에 코드를 다듬던 경험과 맞닿아 있어 익숙하게 접근할 수 있었습니다.</p>

    <p>가장 어려웠던 것은 기능을 더하는 일보다 멈추는 판단이었습니다. 붙이고 싶은 기능은 끝이 없었지만, 초기에 문서로 정해 둔 "3분 안에 끝나는 회고"라는 경계에 기대어 여러 번 범위를 줄였습니다. 지금은 Play 내부 테스트를 진행하며 스토어 출시를 준비하고 있습니다.</p>
  </div>
</div>

<div class="portfolio-media-gallery">
  <h2>미디어 갤러리</h2>
  <div class="image-gallery">
    <h3>기록하고, 음미하기</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_home.webp' | relative_url }}" alt="마음테 홈 화면" width="720" height="1469" loading="lazy" decoding="async">
        <p>홈 — 오늘의 물음과 이번 주의 마음</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_compose.webp' | relative_url }}" alt="오늘의 기록 작성 화면" width="720" height="1469" loading="lazy" decoding="async">
        <p>사진과 글로 남기는 오늘의 기록</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_savor.webp' | relative_url }}" alt="음미하기 연출" width="720" height="1469" loading="lazy" decoding="async">
        <p>기기 안의 LLM이 쓴 글을 연출과 나레이션으로</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_galaxy.webp' | relative_url }}" alt="감정 은하 밤하늘" width="720" height="1469" loading="lazy" decoding="async">
        <p>감정 은하 — 한 달의 기록이 별이 되는 밤하늘</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_persona.webp' | relative_url }}" alt="기록 성향 리빌" width="720" height="1469" loading="lazy" decoding="async">
        <p>기록 성향 — 쌓인 기록으로 알아보는 나의 결</p>
      </div>
    </div>

    <h3>쌓인 기록 되짚기</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_trail_list.webp' | relative_url }}" alt="발자취 리스트" width="720" height="1469" loading="lazy" decoding="async">
        <p>리스트 — 내가 쓴 글이 그대로 미리보기로</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_trail_gallery.webp' | relative_url }}" alt="발자취 갤러리" width="720" height="1469" loading="lazy" decoding="async">
        <p>갤러리 — 사진으로 훑는 기록</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_trail_calendar.webp' | relative_url }}" alt="발자취 달력" width="720" height="1469" loading="lazy" decoding="async">
        <p>달력 — 기록한 날에 남는 잉크 스탬프</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_trail_calendar2.webp' | relative_url }}" alt="마음의 결 감정선" width="720" height="1469" loading="lazy" decoding="async">
        <p>마음의 결 — 한 달의 감정 흐름을 한 줄 곡선으로</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_reflect.webp' | relative_url }}" alt="돌아봄 표지" width="720" height="1469" loading="lazy" decoding="async">
        <p>돌아봄 — 연도별로 넘겨 보는 이야기 표지</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_reflect_story.webp' | relative_url }}" alt="주간 이야기" width="720" height="1469" loading="lazy" decoding="async">
        <p>주간 이야기 — 한 주를 한 편의 글로</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_badge.webp' | relative_url }}" alt="뱃지 여정" width="720" height="1469" loading="lazy" decoding="async">
        <p>기록 여정 — 24종의 뱃지</p>
      </div>
    </div>

    <h3>앱 운영</h3>
    <div class="gallery-grid">
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_slack.webp' | relative_url }}" alt="Slack에서 /build 로 QA 빌드를 요청하고 QR 알림을 받는 화면" width="1100" height="776" loading="lazy" decoding="async">
        <p>Slack <code>/build</code> → 빌드 → QR 설치 링크</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_github.webp' | relative_url }}" alt="GitHub Actions QA 배포 워크플로 실행 목록" width="1200" height="671" loading="lazy" decoding="async">
        <p>GitHub Actions — QA 배포 워크플로</p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_website1.webp' | relative_url }}" alt="마음테 랜딩페이지 히어로 섹션" width="1200" height="1076" loading="lazy" decoding="async">
        <p>랜딩페이지 — 정적 HTML, GitHub Pages · <a href="https://www.jiteum.com/maumte" target="_blank" rel="noopener noreferrer">www.jiteum.com/maumte</a></p>
      </div>
      <div class="gallery-item">
        <img src="{{ '/images/portfolio/maumte_website2.webp' | relative_url }}" alt="마음테 랜딩페이지 밤하늘 스크롤 섹션" width="1200" height="1083" loading="lazy" decoding="async">
        <p>스크롤을 따라 하루에서 한 달로</p>
      </div>
    </div>
  </div>
  <div class="video-container">
    <h3>직접 설치해 보기</h3>
    <div style="display:flex;align-items:center;gap:28px;flex-wrap:wrap;background:#fff;border-radius:12px;padding:20px 24px;">
      <a href="https://appdistribution.firebase.dev/i/41566751826e9f25" target="_blank" rel="noopener noreferrer" style="flex-shrink:0;">
        <img src="{{ '/images/portfolio/maumte_install_qr.png' | relative_url }}" alt="마음테 테스트 앱 설치 QR 코드" width="160" height="160" loading="lazy" decoding="async" style="display:block;border-radius:8px;">
      </a>
      <div style="min-width:220px;flex:1;">
        <p style="margin:0 0 8px;">현재 Google Play 비공개 테스트 중입니다. QR을 스캔하거나 아래 링크를 열고 Google 계정으로 로그인하면 테스터로 참여해 앱을 설치할 수 있습니다.</p>
        <p style="margin:0 0 8px;"><a href="https://appdistribution.firebase.dev/i/41566751826e9f25" target="_blank" rel="noopener noreferrer">테스트 앱 설치하기 (Firebase App Distribution)</a></p>
        <p style="margin:0;font-size:0.85rem;color:#777;">Android 전용 · arm64 기기(2018년 이후 대부분의 폰) 지원 · 설치 파일 약 320MB</p>
      </div>
    </div>
  </div>

  <div class="video-container">
    <h3>프로젝트 실행 영상</h3>
    <div class="video-embed">
      <iframe src="https://www.youtube.com/embed/XeTlVAgkgWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>

<div class="portfolio-nav">
  <a href="{{ '/portfolio/comment_temperature/' | relative_url }}">← 댓글온도</a>
  <a href="{{ '/portfolio/' | relative_url }}">프로젝트 목록</a>
  <a href="{{ '/portfolio/unity_build/' | relative_url }}">Unity Build Wizard →</a>
</div>
