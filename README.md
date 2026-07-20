# WWF Rangers 2 · Follow the Trace Mission Hub

한 링크에서 1년 동안 세 번의 참여 미션을 운영하기 위한 GitHub Pages용 정적 웹사이트입니다.

## 미션 구조

1. **MISSION 01 · TRACE**
   - 익명 `Ranger #001–#220`의 거북이 흔적을 세계지도에 표시
   - 가입 시 받은 레인저 번호를 입력하면 나의 거북이가 강조됨
2. **MISSION 02 · ACT**
   - 세 가지 Ocean Action 중 하나를 선택
   - Ocean Promise와 SNS·블로그용 인증 문구 생성
3. **MISSION 03 · INVESTIGATE**
   - 기존 ShellBank 지도 퀴즈를 세 번째 미션으로 분류
   - 8개 사건 파일과 별도 진행도 제공

## 파일

- `index.html`: 사이트 구조
- `app.css`: 전체 디자인과 반응형 스타일
- `app.js`: 지도, 220개 흔적, 미션, 퀴즈, 저장 기능

외부 라이브러리는 Leaflet 1.9.4와 OpenStreetMap 타일을 사용합니다. Google Fonts를 불러오지 못하는 환경에서는 시스템 글꼴로 표시됩니다.

## GitHub Pages 배포

1. 세 파일을 저장소 최상위 폴더에 업로드합니다.
2. GitHub 저장소의 `Settings → Pages`로 이동합니다.
3. `Deploy from a branch`를 선택하고 `main / root`를 지정합니다.
4. 생성된 Pages 주소 하나를 세 차례 미션에 공통으로 사용합니다.

## 운영 전 확인할 점

- 현재 `220명`은 캠페인 참여 규모를 시각화한 고정값입니다.
- 레인저 번호와 활동 기록은 브라우저 `localStorage`에만 저장됩니다.
- 실제 참여자별 고유 링크, 중앙 집계, 인증 이미지 업로드, 관리자 승인 기능이 필요하면 WWF의 CRM·참여 폼·개인정보 처리 절차와 별도 연동해야 합니다.
- 지도상의 경로는 참여 흔적을 표현한 캠페인 그래픽이며 실제 참여자 위치나 실제 바다거북 개체의 실시간 위치가 아닙니다.
- ShellBank 수치와 문구는 외부 공개 전 담당 부서의 최신 자료와 다시 대조합니다.

## 빠른 수정 위치

- 미션 이름과 설명: `app.js`의 `journeyMissions`
- 행동 챌린지: `app.js`의 `actions`
- ShellBank 퀴즈: `app.js`의 `cases`
- 220명 경로: `app.js`의 `traceRoutes`와 `for (let i = 0; i < 220; ...)`
- 색상과 반응형 레이아웃: `app.css`
