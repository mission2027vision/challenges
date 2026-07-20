const REPORT = "ShellBank: Marine Turtle Traceability Tool, Progress and Impact Report 2023/24";
const STORAGE_KEY = "shellbank-rangers-mission-hub-v3";
const LEGACY_KEY = "shellbank-rangers-progress-v2";

const journeyMissions = [
  { id: "trace", num: "01", verb: "TRACE", title: "나의 흔적 찾기", description: "Ranger ID와 220개의 거북이 흔적", icon: "🐢" },
  { id: "act", num: "02", verb: "ACT", title: "Ocean Action", description: "행동 하나를 선택하고 스탬프 획득", icon: "🌊" },
  { id: "investigate", num: "03", verb: "INVESTIGATE", title: "DNA 사건 수사", description: "ShellBank 세계지도 퀴즈 8개", icon: "🧬" }
];

const actions = [
  { id: "less-plastic", emoji: "♻️", title: "일회용품 하나 줄이기", description: "오늘 하루 일회용 컵·비닐·빨대 중 하나를 거절해요." },
  { id: "pick-three", emoji: "🧤", title: "쓰레기 세 개 줍기", description: "집 주변이나 산책길에서 쓰레기 세 개를 안전하게 수거해요." },
  { id: "share-signal", emoji: "📣", title: "Turtle Signal 공유하기", description: "배운 ShellBank 사실 하나를 친구나 SNS에 알려요." }
];

const cases = [
  {
    id: "dna-lab", icon: "🧬", title: "DNA 추적 실험실", location: "호주 · 글로벌 과학 네트워크", lat: -26.5, lng: 134.0, zoom: 4,
    story: "거북의 조직이나 등딱지 조각에서도 DNA를 추출할 수 있습니다. 유전형을 기준 데이터와 비교하면 어느 개체군에서 왔을 가능성이 높은지 추정하고, 보호 우선순위를 세울 수 있어요.",
    chips: [["6단계","DNA 추적 과정"],["3종","산란·해양·거래 데이터"],["2022","공식 출범"]],
    learnTitle: "유전형(haplotype)이란?", learn: "같은 종 안에서도 나타나는 DNA 서열의 변이형입니다. 특정 지역에서 자주 발견되는 유전형은 거북의 기원을 추정하는 단서가 됩니다.",
    page: "pp. 12–13, 18", question: "DNA 서열을 기준 데이터와 비교할 때 가장 직접적으로 추정할 수 있는 것은?",
    options: ["거북의 정확한 나이","가능성 높은 개체군 기원","알을 낳는 정확한 날짜"], answer: 1,
    explanation: "DNA 유전형을 기준 데이터와 대조하면 가능성 높은 개체군 기원을 추정할 수 있습니다."
  },
  {
    id: "indonesia", icon: "🏝️", title: "자바해 유전 보물찾기", location: "인도네시아 · 자바해", lat: -4.5, lng: 112.0, zoom: 5,
    story: "인도네시아 최초의 광범위한 대모거북 유전 연구에서 새로운 유전 집단과 산란 해변이 확인되며 세계 기준 데이터의 빈칸을 채웠습니다.",
    chips: [["5개","신규 유전 집단"],["9곳","신규 산란 해변"],["6곳","조사 산란지"]],
    learnTitle: "왜 산란 해변이 중요할까요?", learn: "암컷 바다거북은 태어난 해변으로 돌아오는 경향이 있습니다. 산란지 DNA는 다른 지역에서 발견된 개체의 고향을 추정하는 기준선이 됩니다.",
    page: "pp. 23–24", question: "이 연구로 새롭게 기준 데이터에 반영된 산란 해변은 몇 곳일까요?",
    options: ["5곳","6곳","9곳"], answer: 2,
    explanation: "신규 산란 해변은 9곳이며, 새로 구분된 유전 집단은 5개입니다."
  },
  {
    id: "png", icon: "🛰️", title: "태평양 이동경로 추적", location: "파푸아뉴기니 · Conflict Group & Kavieng", lat: -8.4, lng: 148.3, zoom: 5,
    story: "PNG 두 산란지의 대모거북을 유전 분석하고 일부 개체에는 위성 발신기를 달았습니다. 두 데이터를 연결하자 국경을 넘는 서식지 연결이 드러났어요.",
    chips: [["75마리","산란 암컷 표본"],["15마리","위성 추적"],["3가지","이동 전략"]],
    learnTitle: "두 도구를 함께 쓰는 이유", learn: "DNA는 많은 개체의 기원을 비교적 적은 비용으로 보여주고, 위성 추적은 실제 이동 경로를 상세히 보여줍니다.",
    page: "pp. 25–26", question: "산란 후 이동 경로를 직접 확인하기 위해 위성 추적한 거북은 몇 마리일까요?",
    options: ["15마리","75마리","150마리"], answer: 0,
    explanation: "75마리의 조직을 분석했고, 그중 15마리를 위성 추적했습니다."
  },
  {
    id: "uk-case", icon: "🔎", title: "압수품 DNA 수사", location: "영국 → 카리브해", lat: 51.5, lng: -0.1, zoom: 3,
    story: "영국 국경에서 압수된 대모거북 등딱지 조각을 분석했습니다. DNA와 압수 정보를 함께 해석하자 카리브해가 주요 기원 후보로 나타났습니다.",
    chips: [["58점","분석한 등딱지"],["48점","DNA 추출 성공"],["8종","대모거북 유전형"]],
    learnTitle: "수치로 보는 분석 성공률", learn: "48 ÷ 58 × 100 ≈ 82.8%. 오래되거나 가공된 야생동물 제품은 DNA가 손상될 수 있어 모든 시료에서 결과를 얻지는 못합니다.",
    page: "p. 27", question: "58점 가운데 DNA 추출에 성공한 표본은 몇 점이며, 성공률은 약 얼마일까요?",
    options: ["48점 · 약 83%","58점 · 100%","8점 · 약 14%"], answer: 0,
    explanation: "48점에서 DNA가 추출되어 성공률은 약 83%입니다."
  },
  {
    id: "hongkong", icon: "⚖️", title: "30년 항구 기록 수사", location: "홍콩", lat: 22.3, lng: 114.2, zoom: 7,
    story: "홍콩대학교와 정부 기관이 항구에서 장기간 압수된 대모거북 제품의 기원을 추적하는 연구를 추진했습니다. 과거 압수품도 거래망을 밝히는 단서가 됩니다.",
    chips: [["200점","분석 계획 표본"],["30년","압수 기간"],["1목표","거래망 기원 추적"]],
    learnTitle: "거래 데이터는 왜 보호될까요?", learn: "단속과 수사에 관련된 거래 데이터는 민감 정보를 보호하기 위해 제한적으로 관리됩니다.",
    page: "pp. 13, 30", question: "홍콩 항구에서 약 30년에 걸쳐 압수된 분석 계획 표본은 몇 점일까요?",
    options: ["120점","200점","500점 이상"], answer: 1,
    explanation: "홍콩 프로젝트는 압수 표본 200점을 분석해 불법 거래 제품의 기원을 추적할 계획입니다."
  },
  {
    id: "western-pacific", icon: "🌊", title: "서태평양 500+ 프로젝트", location: "솔로몬제도 · PNG · 피지 · 통가", lat: -15.0, lng: 171.0, zoom: 3,
    story: "서태평양에서 포획된 바다거북이 어느 산란 개체군과 연결되는지 확인하는 대규모 연구입니다. 연결성을 알아야 지속가능한 관리 기준을 세울 수 있어요.",
    chips: [["500+","분석 표본"],["4곳","대상 국가·지역"],["최대","ShellBank 적용 규모"]],
    learnTitle: "혼합 개체군 분석(MSA)", learn: "여러 산란지의 유전형 빈도를 기준으로, 먹이터에 섞여 있는 거북들이 어느 산란 개체군에서 왔는지 비율로 추정합니다.",
    page: "p. 30", question: "리포트에 제시된 서태평양 연구 대상 지역 묶음으로 맞는 것은?",
    options: ["한국·일본·중국·러시아","솔로몬제도·PNG·피지·통가","콜롬비아·토바고·영국·홍콩"], answer: 1,
    explanation: "솔로몬제도, 파푸아뉴기니, 피지, 통가의 500점 이상 표본을 분석하는 연구입니다."
  },
  {
    id: "database", icon: "📊", title: "두 종 데이터 대결", location: "글로벌 ShellBank 데이터베이스", lat: 18.0, lng: -38.0, zoom: 2,
    story: "ShellBank에는 대모거북과 푸른바다거북의 산란·해양·거래 데이터가 모입니다. 같은 지표를 비교하면 기준 데이터가 더 필요한 곳을 찾을 수 있어요.",
    chips: [["15,000+","전체 개체 데이터"],["47개","대모거북 유전 집단"],["56개","푸른바다거북 유전 집단"]],
    learnTitle: "숫자가 적으면 개체가 적다는 뜻?", learn: "아닙니다. 데이터 수는 연구와 표본 수집 정도에도 영향을 받습니다. 표본이 적은 곳은 우선 조사 후보일 수 있습니다.",
    page: "pp. 18, 20–21", question: "등록된 유전 집단 수가 더 많은 종과 두 종의 차이는?",
    options: ["대모거북 · 9개 더 많음","푸른바다거북 · 9개 더 많음","두 종이 47개로 같음"], answer: 1,
    explanation: "푸른바다거북 56개, 대모거북 47개로 차이는 9개입니다."
  },
  {
    id: "global-impact", icon: "🤝", title: "글로벌 협력망 완성", location: "28개 참여 국가", lat: 7.5, lng: 22.0, zoom: 2,
    story: "ShellBank는 연구자만의 데이터베이스가 아닙니다. 현장 보전가, 법 집행기관, 박물관, 지역사회와 정부가 표준화된 데이터로 함께 거북을 추적합니다.",
    chips: [["28개국","프로젝트 참여"],["5회","워크숍·훈련"],["12회","학회 발표"]],
    learnTitle: "협력이 정확도를 높이는 법", learn: "여러 지역이 같은 기준으로 표본을 수집하고 유전형 이름을 표준화하면 서로 다른 연구와 국경을 넘는 이동을 비교할 수 있습니다.",
    page: "pp. 9–10, 19", question: "2023–2024년 ShellBank 프로젝트에 참여한 국가는 몇 개국일까요?",
    options: ["7개국","28개국","120개국"], answer: 1,
    explanation: "28개국이 참여했고, 5회 워크숍·훈련과 12회 학회 발표가 소개됩니다."
  }
];

const traceRoutes = [
  { name: "서태평양", color: "#20b9b6", points: [[-4,106],[-7,130],[-8,148],[-17,178],[-27,153]] },
  { name: "북태평양", color: "#ff8b5e", points: [[13,121],[24,139],[35,146],[31,160],[22,172]] },
  { name: "인도양", color: "#7760d2", points: [[-28,32],[-13,49],[-4,73],[8,80],[5,95],[-4,112]] },
  { name: "대서양", color: "#178aa0", points: [[51,-1],[28,-16],[18,-64],[8,-56],[-10,-35]] },
  { name: "카리브해", color: "#f4b93b", points: [[10,-76],[17,-70],[22,-64],[25,-80],[20,-87]] }
];

let state = loadState();
let activeStage = "trace";
let activeCaseId = null;
let toastTimer;
let tileErrorShown = false;
const caseMarkers = {};
const traceMarkers = [];

if (!window.L) {
  document.getElementById("map").innerHTML = '<div style="padding:40px;color:#062f38;font-weight:700">지도를 불러오지 못했습니다. 인터넷 연결 후 새로고침해 주세요.</div>';
  throw new Error("Leaflet failed to load");
}

const map = L.map("map", {
  zoomControl: true,
  minZoom: 2,
  maxZoom: 9,
  zoomSnap: .25,
  worldCopyJump: true,
  preferCanvas: true,
  maxBounds: [[-72,-210],[82,210]],
  maxBoundsViscosity: .75
}).setView([9,18], 2.25);

const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
  maxZoom: 19,
  detectRetina: true,
  crossOrigin: true
}).addTo(map);

tileLayer.on("tileerror", () => {
  if (tileErrorShown) return;
  tileErrorShown = true;
  showToast("지도 타일 연결이 느립니다. 인터넷 연결을 확인해 주세요.");
});

L.control.scale({ imperial: false, position: "bottomright" }).addTo(map);

const oceanLabels = L.layerGroup().addTo(map);
[
  [9,151,"PACIFIC · 태평양"],[-17,73,"INDIAN · 인도양"],[8,-35,"ATLANTIC · 대서양"],[18,-70,"CARIBBEAN · 카리브해"],[-10,154,"WESTERN PACIFIC"]
].forEach(([lat,lng,label]) => L.marker([lat,lng], {
  interactive: false,
  icon: L.divIcon({ className: "ocean-label-icon", html: `<span class="ocean-label">${label}</span>`, iconSize: [150,20], iconAnchor: [75,10] })
}).addTo(oceanLabels));

const traceRouteLayer = L.layerGroup();
const traceMarkerLayer = L.layerGroup();
const caseRouteLayer = L.layerGroup();
const caseMarkerLayer = L.layerGroup();

traceRoutes.forEach(route => {
  L.polyline(route.points, { color: "#ffffff", weight: 7, opacity: .8, interactive: false }).addTo(traceRouteLayer);
  L.polyline(route.points, { color: route.color, weight: 3.5, opacity: .78, dashArray: "8 10", className: "trace-path" }).addTo(traceRouteLayer).bindTooltip(`${route.name} Ranger Trace`);
});

for (let i = 0; i < 220; i += 1) {
  const number = i + 1;
  const routeIndex = i % traceRoutes.length;
  const route = traceRoutes[routeIndex];
  const localIndex = Math.floor(i / traceRoutes.length);
  const t = (localIndex + .45) / 44;
  const point = interpolatePath(route.points, t);
  point[0] += (seeded(number * 2.17) - .5) * 3.1;
  point[1] += (seeded(number * 5.73) - .5) * 4.5;
  const marker = L.marker(point, { icon: makeRangerIcon(number), title: `Ranger #${String(number).padStart(3,"0")}` });
  marker.bindTooltip(`<b>Ranger #${String(number).padStart(3,"0")}</b><br>${route.name}의 흔적`, { direction: "top", offset: [0,-8] });
  marker.addTo(traceMarkerLayer);
  traceMarkers[number] = marker;
}

const caseRouteStyle = { color: "#ff765f", weight: 3.5, opacity: .82, dashArray: "7 9", className: "trace-path" };
L.polyline([[51.5,-.1],[11,-74.8]], caseRouteStyle).addTo(caseRouteLayer).bindTooltip("압수품 → 카리브해 기원 추정");
L.polyline([[-8.4,148.3],[-24,153]], { ...caseRouteStyle, color: "#087f8c" }).addTo(caseRouteLayer).bindTooltip("PNG → 동부 호주 이동 연결");
L.polyline([[-9.6,160.2],[-8.4,148.3],[-17.7,178.1]], { ...caseRouteStyle, color: "#7c63d5" }).addTo(caseRouteLayer).bindTooltip("서태평양 연결성 연구");

cases.forEach((item,index) => {
  const marker = L.marker([item.lat,item.lng], { icon: makeCaseIcon(item), title: `${index + 1}. ${item.title}`, keyboard: true, riseOnHover: true });
  marker.on("click", () => selectCase(item.id,true));
  marker.bindTooltip(`${index + 1}. ${item.title}`, { permanent: true, direction: "top", offset: [0,-24], className: "case-label" });
  marker.addTo(caseMarkerLayer);
  caseMarkers[item.id] = marker;
});

setTraceVisibility(state.traceVisible !== false);
renderAll();

function defaultState() {
  return { stageDone: [], caseDone: [], attempts: {}, xp: 0, rangerNo: "", rangerName: "", action: "", actionNote: "", traceVisible: true };
}

function loadState() {
  try {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (current && Array.isArray(current.stageDone) && Array.isArray(current.caseDone)) return { ...defaultState(), ...current };
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY));
    if (legacy && Array.isArray(legacy.completed)) {
      const valid = legacy.completed.filter(id => cases.some(item => item.id === id));
      return { ...defaultState(), caseDone: valid, attempts: legacy.attempts || {}, xp: Number(legacy.xp) || valid.length * 100, stageDone: valid.length === cases.length ? ["investigate"] : [] };
    }
  } catch (error) {
    console.warn("저장된 진행 정보를 불러오지 못했습니다.", error);
  }
  return defaultState();
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function seeded(value) {
  const x = Math.sin(value * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function interpolatePath(points,t) {
  const scaled = Math.max(0,Math.min(.9999,t)) * (points.length - 1);
  const index = Math.floor(scaled);
  const part = scaled - index;
  const a = points[index];
  const b = points[Math.min(points.length - 1,index + 1)];
  return [a[0] + (b[0] - a[0]) * part, a[1] + (b[1] - a[1]) * part];
}

function makeRangerIcon(number) {
  const mine = Number(state.rangerNo) === number;
  const rotation = Math.round((seeded(number * 9.2) - .5) * 40);
  return L.divIcon({
    className: "ranger-trace-icon",
    html: `<span class="ranger-turtle ${mine ? "mine" : ""}" style="--rotate:${rotation}deg" aria-hidden="true">🐢</span>`,
    iconSize: mine ? [30,30] : [18,18],
    iconAnchor: mine ? [15,15] : [9,9]
  });
}

function makeCaseIcon(item) {
  const done = state.caseDone.includes(item.id);
  const active = activeCaseId === item.id;
  return L.divIcon({ className: "case-marker", html: `<span class="case-marker-core ${done ? "done" : ""} ${active ? "active" : ""}"><span>${done ? "✓" : item.icon}</span></span>`, iconSize: [40,40], iconAnchor: [20,40] });
}

function setTraceVisibility(visible) {
  state.traceVisible = visible;
  if (visible) {
    if (!map.hasLayer(traceRouteLayer)) traceRouteLayer.addTo(map);
    if (!map.hasLayer(traceMarkerLayer)) traceMarkerLayer.addTo(map);
  } else {
    map.removeLayer(traceRouteLayer);
    map.removeLayer(traceMarkerLayer);
  }
  const button = document.getElementById("trace-toggle");
  if (button) button.setAttribute("aria-pressed", String(visible));
  saveState();
}

function renderAll() {
  syncStageThree();
  renderJourneyList();
  renderCaseList();
  updateProgress();
  refreshMapIcons();
  document.getElementById("case-section").hidden = activeStage !== "investigate";
}

function syncStageThree() {
  if (state.caseDone.length === cases.length && !state.stageDone.includes("investigate")) state.stageDone.push("investigate");
}

function renderJourneyList() {
  const list = document.getElementById("journey-list");
  list.innerHTML = "";
  journeyMissions.forEach(item => {
    const done = state.stageDone.includes(item.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `journey-item ${activeStage === item.id ? "active" : ""} ${done ? "done" : ""}`;
    const stageState = done ? "DONE" : item.id === "investigate" && state.caseDone.length ? `${state.caseDone.length}/8` : "OPEN";
    button.innerHTML = `<span class="journey-num">${done ? "✓" : item.num}</span><span class="journey-copy"><strong>${item.verb}</strong><b>${item.title}</b><small>${item.description}</small></span><span class="journey-state">${stageState}</span>`;
    button.addEventListener("click", () => selectStage(item.id,true));
    list.appendChild(button);
  });
}

function renderCaseList() {
  const list = document.getElementById("case-list");
  list.innerHTML = "";
  cases.forEach((item,index) => {
    const done = state.caseDone.includes(item.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `case-btn ${activeCaseId === item.id ? "active" : ""} ${done ? "done" : ""}`;
    button.textContent = done ? "✓" : item.icon;
    button.title = `${index + 1}. ${item.title}`;
    button.setAttribute("aria-label", `${index + 1}번 사건 ${item.title}${done ? ", 완료" : ""}`);
    button.addEventListener("click", () => selectCase(item.id,true));
    list.appendChild(button);
  });
  document.getElementById("case-progress").textContent = `${state.caseDone.length}/${cases.length}`;
}

function selectStage(id,openPanel = true) {
  activeStage = id;
  activeCaseId = id === "investigate" ? (activeCaseId || cases.find(item => !state.caseDone.includes(item.id))?.id || cases[0].id) : null;
  if (id === "investigate") {
    if (!map.hasLayer(caseRouteLayer)) caseRouteLayer.addTo(map);
    if (!map.hasLayer(caseMarkerLayer)) caseMarkerLayer.addTo(map);
  } else {
    map.removeLayer(caseRouteLayer);
    map.removeLayer(caseMarkerLayer);
  }
  renderAll();
  if (id === "investigate") {
    if (openPanel) selectCase(activeCaseId,true);
  } else {
    fitWorldMap();
    if (openPanel) renderStagePanel(id);
  }
}

function renderStagePanel(id) {
  if (id === "trace") renderTracePanel();
  if (id === "act") renderActionPanel();
  document.getElementById("mission-panel").classList.add("open");
}

function setPanel(kicker,title,subtitle,html) {
  document.getElementById("panel-kicker").textContent = kicker;
  document.getElementById("panel-title").textContent = title;
  document.getElementById("panel-subtitle").textContent = subtitle;
  document.getElementById("panel-body").innerHTML = html;
}

function renderTracePanel() {
  const done = state.stageDone.includes("trace");
  const safeName = escapeHTML(state.rangerName || "");
  setPanel("MISSION 01 · TRACE","🐢 나의 흔적 찾기","220명의 레인저가 하나의 바다를 따라 움직입니다.",`
    <p class="panel-story">지도 위 거북이 한 마리 한 마리는 개인정보를 노출하지 않은 <b>Ranger #001–#220</b>의 흔적입니다. 가입 시 받은 고유번호를 입력하면 220개의 흔적 중 나의 거북이가 밝아집니다.</p>
    <div class="data-chips"><div class="data-chip"><b>220명</b><span>Rangers 2 참여자</span></div><div class="data-chip"><b>5개</b><span>상징적 해역 경로</span></div><div class="data-chip"><b>1년</b><span>함께할 보전 여정</span></div></div>
    ${done ? `<div class="stamp-box"><strong>✓ TRACE STAMP 획득</strong>Ranger #${String(state.rangerNo).padStart(3,"0")}의 거북이가 지도에서 빛나고 있습니다.</div>` : `<div class="notice-box">지도상의 경로는 220명의 참여를 시각화한 캠페인 표현이며, 실제 개인 위치나 실제 개체의 실시간 위치를 뜻하지 않습니다.</div>`}
    <div class="field-grid">
      <div class="field-group"><label for="ranger-no">RANGER NUMBER</label><input class="field" id="ranger-no" type="number" min="1" max="220" inputmode="numeric" placeholder="1–220" value="${escapeHTML(String(state.rangerNo || ""))}"></div>
      <div class="field-group"><label for="ranger-name">DISPLAY NAME</label><input class="field" id="ranger-name" type="text" maxlength="20" placeholder="닉네임(선택)" value="${safeName}"></div>
    </div>
    <p class="privacy-note">프로토타입에서는 입력값이 현재 브라우저에만 저장되며 서버로 전송되지 않습니다. 실제 운영 시에는 WWF의 참여자 명단·개인정보 처리 기준과 연결해야 합니다.</p>
    <button class="primary-btn" id="complete-trace" type="button">${done ? "내 거북이 다시 찾기" : "내 거북이 흔적 밝히기"} →</button>`);
  document.getElementById("complete-trace").addEventListener("click", completeTraceMission);
}

function completeTraceMission() {
  const input = document.getElementById("ranger-no");
  const number = Number(input.value);
  if (!Number.isInteger(number) || number < 1 || number > 220) {
    input.focus();
    showToast("가입 시 받은 1–220 사이의 레인저 번호를 입력해 주세요.");
    return;
  }
  const first = !state.stageDone.includes("trace");
  state.rangerNo = number;
  state.rangerName = document.getElementById("ranger-name").value.trim();
  if (first) { state.stageDone.push("trace"); state.xp += 100; }
  saveState();
  refreshTraceIcons();
  renderAll();
  renderTracePanel();
  const marker = traceMarkers[number];
  if (marker) { map.flyTo(marker.getLatLng(),4,{ duration: .9 }); setTimeout(() => marker.openTooltip(),950); }
  showToast(first ? `Ranger #${String(number).padStart(3,"0")} TRACE Stamp 획득! +100 XP` : `Ranger #${String(number).padStart(3,"0")}의 흔적을 다시 찾았습니다.`);
  if (first) burstConfetti(28);
}

function renderActionPanel() {
  const done = state.stageDone.includes("act");
  const selected = actions.find(item => item.id === state.action);
  setPanel("MISSION 02 · ACT","🌊 Ocean Action","큰 결심 대신 오늘 가능한 행동 하나를 선택합니다.",`
    <p class="panel-story">참여 장벽을 낮추기 위해 세 가지 행동 중 <b>하나만</b> 선택합니다. 완료 후 받은 문구는 SNS·블로그·미션 인증 폼에 그대로 활용할 수 있습니다.</p>
    ${done ? `<div class="stamp-box"><strong>✓ OCEAN ACTION STAMP 획득</strong>${selected ? selected.title : "바다를 위한 행동"}을 나의 흔적으로 남겼습니다.</div>` : ""}
    <div class="action-options">${actions.map(item => `<button class="action-card ${state.action === item.id ? "selected" : ""}" type="button" data-action="${item.id}"><span class="emoji">${item.emoji}</span><span><strong>${item.title}</strong><small>${item.description}</small></span><i>${state.action === item.id ? "●" : "○"}</i></button>`).join("")}</div>
    <div class="field-group full"><label for="action-note">MY OCEAN PROMISE · 선택</label><input class="field" id="action-note" type="text" maxlength="42" placeholder="오늘 내가 바다를 위해 한 행동" value="${escapeHTML(state.actionNote || "")}"></div>
    <button class="primary-btn" id="complete-action" type="button">${done ? "인증 문구 업데이트" : "행동 완료하고 스탬프 받기"} →</button>
    ${done ? `<div class="share-copy" id="share-copy">${escapeHTML(makeShareText())}</div><button class="secondary-btn" id="copy-share" type="button">인증 문구 복사</button>` : ""}`);
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => {
    state.action = button.dataset.action;
    saveState();
    renderActionPanel();
  }));
  document.getElementById("complete-action").addEventListener("click", completeActionMission);
  const copy = document.getElementById("copy-share");
  if (copy) copy.addEventListener("click", () => copyText(makeShareText()));
}

function completeActionMission() {
  if (!state.action) { showToast("세 가지 Ocean Action 중 하나를 먼저 선택해 주세요."); return; }
  const first = !state.stageDone.includes("act");
  state.actionNote = document.getElementById("action-note").value.trim();
  if (first) { state.stageDone.push("act"); state.xp += 100; }
  saveState();
  renderAll();
  renderActionPanel();
  showToast(first ? "OCEAN ACTION Stamp 획득! +100 XP" : "인증 문구를 업데이트했습니다.");
  if (first) burstConfetti(28);
}

function makeShareText() {
  const action = actions.find(item => item.id === state.action);
  const note = state.actionNote ? `\n${state.actionNote}` : "";
  return `나는 오늘 바다거북의 편이 되었습니다. ${action ? action.emoji + " " + action.title : ""}${note}\n#WWFRangers #ShellBank #FollowTheTrace`;
}

function selectCase(id,moveMap = false) {
  const item = cases.find(entry => entry.id === id);
  if (!item) return;
  activeStage = "investigate";
  activeCaseId = id;
  if (!map.hasLayer(caseRouteLayer)) caseRouteLayer.addTo(map);
  if (!map.hasLayer(caseMarkerLayer)) caseMarkerLayer.addTo(map);
  renderAll();
  renderCasePanel(item);
  document.getElementById("mission-panel").classList.add("open");
  if (moveMap) map.flyTo([item.lat,item.lng],item.zoom,{ duration: .8 });
}

function renderCasePanel(item) {
  const index = cases.indexOf(item);
  const done = state.caseDone.includes(item.id);
  setPanel(`MISSION 03 · CASE ${String(index + 1).padStart(2,"0")}`,`${item.icon} ${item.title}`,item.location,`
    <div class="case-topline"><span>OCEAN DNA EXPEDITION</span><b>${done ? "SOLVED" : `${state.caseDone.length}/8 SOLVED`}</b></div>
    <p class="panel-story">${item.story}</p>
    <div class="data-chips">${item.chips.map(chip => `<div class="data-chip"><b>${chip[0]}</b><span>${chip[1]}</span></div>`).join("")}</div>
    <div class="learn-box"><strong>💡 ${item.learnTitle}</strong><p>${item.learn}</p></div>
    <p class="source-line">출처: <i>${REPORT}</i>, ${item.page}. 리포트 공개 시점 기준.</p>
    <div class="quiz-box"><small>DATA CHECK</small><h4>${item.question}</h4><div class="options">${item.options.map((option,optionIndex) => `<button class="option-btn" type="button" data-option="${optionIndex}" ${done ? "disabled" : ""}>${String.fromCharCode(65 + optionIndex)}. ${option}</button>`).join("")}</div><div class="feedback ${done ? "show good" : ""}" id="feedback">${done ? `✓ 해결 완료. ${item.explanation}` : ""}</div>${done ? `<button class="primary-btn" id="next-case" type="button">다음 사건 파일 →</button>` : ""}</div>`);
  if (!done) document.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => checkAnswer(item,Number(button.dataset.option),button)));
  const next = document.getElementById("next-case");
  if (next) next.addEventListener("click", () => goNextCase(item.id));
}

function checkAnswer(item,selected,button) {
  const feedback = document.getElementById("feedback");
  state.attempts[item.id] = (state.attempts[item.id] || 0) + 1;
  if (selected !== item.answer) {
    button.classList.add("wrong");
    button.disabled = true;
    feedback.className = "feedback show retry";
    feedback.textContent = "아직 단서가 맞지 않습니다. 데이터 카드의 숫자가 무엇을 뜻하는지 다시 확인해 보세요.";
    saveState();
    return;
  }
  const firstTry = state.attempts[item.id] === 1;
  const earned = firstTry ? 125 : 100;
  state.caseDone.push(item.id);
  state.xp += earned;
  const missionThreeComplete = state.caseDone.length === cases.length && !state.stageDone.includes("investigate");
  if (missionThreeComplete) { state.stageDone.push("investigate"); state.xp += 200; }
  saveState();
  document.querySelectorAll("[data-option]").forEach(option => { option.disabled = true; });
  button.classList.add("correct");
  feedback.className = "feedback show good";
  feedback.textContent = `✓ ${item.explanation} +${earned} XP${firstTry ? " · 첫 도전 보너스" : ""}`;
  const next = document.createElement("button");
  next.className = "primary-btn";
  next.type = "button";
  next.textContent = missionThreeComplete ? "MISSION 03 완주 확인 →" : "다음 사건 파일 →";
  next.addEventListener("click", () => missionThreeComplete ? completeJourneyCheck() : goNextCase(item.id));
  feedback.after(next);
  renderAll();
  showToast(missionThreeComplete ? "MISSION 03 해결! 완주 보너스 +200 XP" : `${item.title} 해결! +${earned} XP`);
  burstConfetti(missionThreeComplete ? 55 : 22);
  if (missionThreeComplete && state.stageDone.length === 3) setTimeout(openCertificate,1100);
}

function goNextCase(currentId) {
  const currentIndex = cases.findIndex(item => item.id === currentId);
  const next = cases.find((item,index) => index > currentIndex && !state.caseDone.includes(item.id)) || cases.find(item => !state.caseDone.includes(item.id));
  if (next) selectCase(next.id,true); else completeJourneyCheck();
}

function completeJourneyCheck() {
  if (state.stageDone.length === 3) openCertificate();
  else {
    const next = journeyMissions.find(item => !state.stageDone.includes(item.id));
    if (next) { selectStage(next.id,true); showToast(`${next.num} ${next.title} 미션을 완료하면 전체 여정이 완성됩니다.`); }
  }
}

function updateProgress() {
  const count = state.stageDone.length;
  const ratio = count / 3;
  document.getElementById("progress-text").textContent = `${count}/3`;
  document.getElementById("progress-ring").style.setProperty("--progress",`${ratio * 360}deg`);
  document.getElementById("progress-bar").style.width = `${ratio * 100}%`;
  document.getElementById("xp-text").textContent = `${state.xp} XP`;
  const ranks = [
    { at: 0, name: "새싹 레인저", next: "첫 번째 흔적을 남겨보세요" },
    { at: 1, name: "Trace Keeper", next: "Ocean Action으로 바다를 지켜보세요" },
    { at: 2, name: "Ocean Action Ranger", next: "MISSION 03 DNA 사건에 도전하세요" },
    { at: 3, name: "ShellBank Ranger", next: "세 번의 미션을 모두 완주했습니다" }
  ];
  const rank = [...ranks].reverse().find(item => count >= item.at);
  document.getElementById("rank-name").textContent = rank.name;
  document.getElementById("next-step").textContent = rank.next;
  document.getElementById("trace-counter-note").textContent = state.rangerNo ? `Ranger #${String(state.rangerNo).padStart(3,"0")}의 흔적이 빛나고 있어요` : "익명 Ranger #001–#220의 흔적";
}

function refreshMapIcons() {
  cases.forEach(item => caseMarkers[item.id].setIcon(makeCaseIcon(item)));
  refreshTraceIcons();
}

function refreshTraceIcons() {
  for (let number = 1; number <= 220; number += 1) traceMarkers[number].setIcon(makeRangerIcon(number));
}

function fitWorldMap() {
  const center = window.innerWidth < 700 ? [10,25] : [9,18];
  const zoom = window.innerWidth < 700 ? 2 : 2.25;
  map.flyTo(center,zoom,{ duration: .75 });
}

function openCertificate() {
  document.getElementById("certificate-name").value = state.rangerName || (state.rangerNo ? `Ranger #${state.rangerNo}` : "Ocean Ranger");
  document.getElementById("certificate-xp").textContent = `${state.xp} XP`;
  showModal("certificate-backdrop");
  burstConfetti(55);
}

function showModal(id) { document.getElementById(id).classList.add("open"); }
function closeModal(id) { document.getElementById(id).classList.remove("open"); }

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"),2800);
}

function burstConfetti(amount) {
  const colors = ["#ffd05a","#ff765f","#30c9c5","#ffffff","#7c63d5"];
  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * .7}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(),3500);
  }
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(() => showToast("인증 문구를 복사했습니다.")).catch(() => fallbackCopy(value));
  } else fallbackCopy(value);
}

function fallbackCopy(value) {
  const area = document.createElement("textarea");
  area.value = value;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  try { document.execCommand("copy"); showToast("인증 문구를 복사했습니다."); }
  catch (error) { showToast("복사하지 못했습니다. 문구를 직접 선택해 주세요."); }
  area.remove();
}

document.getElementById("start-button").addEventListener("click", () => { closeModal("intro-backdrop"); selectStage("trace",true); });
document.getElementById("jump-quiz").addEventListener("click", () => { closeModal("intro-backdrop"); selectStage("investigate",true); });
document.getElementById("brand-button").addEventListener("click", () => showModal("intro-backdrop"));
document.getElementById("help-button").addEventListener("click", () => showModal("intro-backdrop"));
document.getElementById("data-button").addEventListener("click", () => showModal("data-backdrop"));
document.getElementById("trace-toggle").addEventListener("click", () => setTraceVisibility(!state.traceVisible));
document.getElementById("fit-world").addEventListener("click", fitWorldMap);
document.getElementById("panel-close").addEventListener("click", () => document.getElementById("mission-panel").classList.remove("open"));
document.getElementById("print-button").addEventListener("click", () => window.print());
document.getElementById("reset-button").addEventListener("click", () => {
  if (!confirm("세 번의 미션, 8개 사건, XP 기록을 모두 초기화할까요?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = defaultState();
  activeStage = "trace";
  activeCaseId = null;
  map.removeLayer(caseRouteLayer);
  map.removeLayer(caseMarkerLayer);
  setTraceVisibility(true);
  renderAll();
  document.getElementById("mission-panel").classList.remove("open");
  fitWorldMap();
  showToast("새로운 1년의 여정을 시작할 준비가 됐습니다.");
});

document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => closeModal(button.dataset.close)));
document.querySelectorAll(".modal-backdrop").forEach(backdrop => backdrop.addEventListener("click", event => { if (event.target === backdrop) closeModal(backdrop.id); }));
document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  const modal = document.querySelector(".modal-backdrop.open");
  if (modal) closeModal(modal.id); else document.getElementById("mission-panel").classList.remove("open");
});
window.addEventListener("resize", () => map.invalidateSize());

selectStage("trace",false);
