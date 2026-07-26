const blogCases = [
  {
    no: "01",
    industry: "인테리어 업체",
    period: "4개월 운영",
    metric: "월 블로그 문의",
    before: "3건",
    after: "11건",
    detail: "지역·평형별 시공 과정과 공정 정보를 축적해 단순 가격 문의보다 구체적인 견적 상담이 늘었습니다.",
    tags: ["콘텐츠 36건", "지역 키워드", "시공 과정 중심"],
    chats: [
      ["client", "팀장님, 요즘 블로그 보고 연락했다는 분들이 부쩍 늘었어요ㅎㅎ 지난주에도 두 분이나 견적 잡았네요.", "오후 2:18"],
      ["gumse", "확인해 보니 이번 달은 ‘30평 리모델링’ 관련 글에서 문의 연결이 가장 많았습니다.", "오후 2:21"],
      ["client", "제가 현장 사진만 보내드려도 알아서 잘 풀어주시니까 너무 편해요. 진작 맡길 걸 그랬어요.", "오후 2:24"],
    ],
  },
  {
    no: "02",
    industry: "중고 화물차 매매",
    period: "3개월 운영",
    metric: "월 검색 유입 문의",
    before: "5건",
    after: "18건",
    detail: "차량 제원만 나열하지 않고 구매자가 확인하는 조건과 실제 매물 정보를 함께 설계했습니다.",
    tags: ["콘텐츠 30건", "차종별 검색", "매물 정보 구조화"],
    chats: [
      ["client", "오늘도 5톤 윙바디 글 보고 연락 왔네요. 요즘 블로그 보고 오는 전화가 꽤 됩니다.", "오전 10:06"],
      ["gumse", "차종명으로 들어오는 검색이 늘고 있습니다. 지금처럼 매물별 특징이 잘 보이게 계속 발행하겠습니다.", "오전 10:09"],
      ["client", "예전엔 가격만 툭 물어보고 끊는 사람이 많았는데, 요즘은 차량 내용을 다 보고 전화하니까 얘기가 빨라요.", "오전 10:12"],
    ],
  },
  {
    no: "03",
    industry: "교육·학원",
    period: "5개월 운영",
    metric: "월 상담 문의",
    before: "7건",
    after: "16건",
    detail: "학부모가 검색하는 수업 방식·레벨 테스트·관리 과정 중심으로 콘텐츠를 재편했습니다.",
    tags: ["콘텐츠 45건", "학부모 검색 의도", "상담 전 신뢰 형성"],
    chats: [
      ["client", "최근 상담 오시는 학부모님들이 블로그에서 수업 방식이랑 관리 과정을 다 읽어보고 오시더라고요.", "오후 5:31"],
      ["gumse", "네, 단순 홍보 글보다 커리큘럼과 레벨 관리 내용을 설명한 글에서 상담 연결이 더 좋았습니다.", "오후 5:35"],
      ["client", "미리 이해하고 오시니까 상담할 때 같은 설명을 반복하지 않아도 되고, 등록 결정도 빨라진 느낌이에요.", "오후 5:38"],
    ],
  },
];

const placeCases = [
  {
    no: "01",
    industry: "미용실",
    period: "3개월 운영",
    metric: "월 네이버 예약",
    before: "26건",
    after: "47건",
    detail: "대표 이미지·시술 정보·검색 키워드를 정리하고 길찾기와 상세 탐색이 이어지는 흐름을 관리했습니다.",
    tags: ["대표 키워드 42위 → 9위", "길찾기 증가", "예약 전환"],
    chats: [
      ["client", "팀장님, 이번 주 네이버 예약이 왜 이렇게 빨리 차나 했어요. 신규 고객님들이 많이 들어왔네요!", "오전 11:42"],
      ["gumse", "검색 순위와 상세페이지 유입이 같이 오르면서 신규 예약 흐름도 좋아졌습니다.", "오전 11:45"],
      ["client", "첫 방문 고객님들이 플레이스 사진이 깔끔해서 골랐다고 하세요. 바꾼 보람이 있네요ㅎㅎ", "오전 11:48"],
    ],
  },
  {
    no: "02",
    industry: "음식점",
    period: "4개월 운영",
    metric: "월 예약·문의",
    before: "18건",
    after: "36건",
    detail: "메뉴·공간·운영 정보를 최신 상태로 정리하고 지역 검색 후 길찾기로 이어지는 행동 데이터를 축적했습니다.",
    tags: ["월 길찾기 310 → 790", "메뉴 정보 개선", "재방문 검색"],
    chats: [
      ["client", "요즘 주말 손님들한테 어떻게 알고 오셨냐고 물어보면 네이버 보고 왔다는 분이 진짜 많아요.", "오후 3:07"],
      ["gumse", "대표 메뉴 검색과 길찾기 반응이 같이 오르고 있습니다. 현재 구성을 유지하면서 사진을 더 보강하겠습니다.", "오후 3:10"],
      ["client", "전에는 거의 동네 손님이었는데 요즘은 차 타고 멀리서도 오네요. 확실히 달라졌습니다.", "오후 3:13"],
    ],
  },
  {
    no: "03",
    industry: "숙박·펜션",
    period: "4개월 운영",
    metric: "월 네이버 예약",
    before: "14건",
    after: "29건",
    detail: "객실별 사진과 이용 정보를 다시 구성하고 주변 여행지 검색부터 객실 비교·예약까지 이어지는 흐름을 정리했습니다.",
    tags: ["지역 숙소 검색 31위 → 7위", "객실 탐색 증가", "예약 전환"],
    chats: [
      ["client", "주말 예약만 들어오던 편이었는데 이번 달은 평일 객실도 꽤 찼어요. 네이버 보고 바로 예약했다는 손님도 많고요.", "오후 6:14"],
      ["gumse", "객실별 사진 순서를 바꾸고 주변 여행지 키워드를 보강한 뒤 상세페이지 체류와 예약 전환이 함께 올랐습니다.", "오후 6:18"],
      ["client", "손님들이 객실 차이를 미리 알고 오니까 현장에서 생기던 문의도 줄었어요. 사진 정리한 효과가 확실히 있네요.", "오후 6:22"],
    ],
  },
];

function ChatCase({ item, accent }: { item: typeof blogCases[number]; accent: "coral" | "mint" }) {
  return (
    <article className={`case-card ${accent}`}>
      <div className="case-head">
        <span>CASE {item.no}</span>
        <div><b>{item.industry}</b><small>{item.period}</small></div>
      </div>

      <div className="chat-shell">
        <div className="chat-bar"><i /><b>운영 담당자와의 대화</b></div>
        <div className="chat-body">
          {item.chats.map(([side, message, time]) => (
            <div className={`chat ${side}`} key={message}>
              <small>{side === "gumse" ? "금새인터랙티브" : `${item.industry} 대표`}</small>
              <p>{message}</p>
              <time>{time}</time>
            </div>
          ))}
        </div>
      </div>

      <div className="metric-box">
        <small>{item.metric}</small>
        <div><span>{item.before}</span><i>→</i><strong>{item.after}</strong></div>
        <p>{item.detail}</p>
      </div>
      <div className="case-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <nav>
        <a href="#top" className="brand"><img src="/gumse-logo-transparent.png" alt="금새인터랙티브" /></a>
        <div className="nav-links">
          <a href="#blog">블로그 사례</a>
          <a href="#place">플레이스 사례</a>
          <a href="#standard">선택 기준</a>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><i /> GUMSE CLIENT STORIES</p>
          <h1>좋은 마케팅회사는<br /><span>약속보다 기록을</span><br />남깁니다.</h1>
          <p>블로그 문의가 어떻게 늘었는지, 플레이스 검색이 어떻게 예약으로 이어졌는지. 결과만 자랑하지 않고 과정과 변화를 함께 보여드립니다.</p>
          <div className="hero-links">
            <a href="#blog">블로그 사례 보기 <span>↓</span></a>
            <a href="#place">플레이스 사례 보기 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-proof">
          <div className="proof-top"><small>금새의 운영 원칙</small><span>약속보다 과정</span></div>
          <div className="proof-score proof-principles">
            <div><b>정확한 진단</b><small>현재 상태부터 확인</small></div>
            <div><b>명확한 실행</b><small>범위와 일정을 투명하게</small></div>
            <div><b>결과 확인</b><small>데이터와 결과물로 보고</small></div>
          </div>
          <blockquote>“무조건 됩니다”보다<br /><strong>무엇을, 어떻게 했는지</strong>를<br />먼저 확인하세요.</blockquote>
          <div className="proof-line"><i /><i /><i /><i /><i /><i /></div>
        </div>
      </header>

      <section className="disclaimer">
        <b>사례 표기 안내</b>
        <p>고객 정보 보호를 위해 업체명은 공개하지 않으며, 실제 진행 고객 상담 내용을 바탕으로 재구성했습니다.</p>
      </section>

      <section id="blog" className="cases-section blog-section">
        <div className="section-head">
          <div><p>01 / BLOG CASES</p><h2>검색한 고객이<br /><span>문의하는 고객으로.</span></h2></div>
          <p>단순히 글 수를 늘리지 않습니다. 고객이 검색하는 질문에 답하고, 상담 전에 신뢰를 만드는 콘텐츠를 축적합니다.</p>
        </div>
        <div className="case-grid">{blogCases.map((item) => <ChatCase key={item.industry} item={item} accent="coral" />)}</div>
      </section>

      <section id="place" className="cases-section place-section">
        <div className="section-head">
          <div><p>02 / PLACE CASES</p><h2>검색되는 매장에서<br /><span>선택되는 매장으로.</span></h2></div>
          <p>순위 하나만 보지 않습니다. 검색·비교·상세 탐색·길찾기·예약까지 고객 행동이 이어지는 플레이스를 만듭니다.</p>
        </div>
        <div className="case-grid">{placeCases.map((item) => <ChatCase key={item.industry} item={item} accent="mint" />)}</div>
      </section>

      <section id="standard" className="standard">
        <div className="standard-copy">
          <p>03 / BEFORE YOU SIGN</p>
          <h2>달콤한 말보다<br /><span>확인할 수 있는 기준.</span></h2>
          <p>대행사는 계약 전 말이 아니라, 계약 후 남기는 결과물과 설명 방식으로 판단해야 합니다.</p>
        </div>

        <div className="warning-grid">
          <article><small>RED FLAG 01</small><h3>“절대 후회 없습니다.”</h3><p>모든 업종과 상황에서 같은 결과를 약속한다면 근거부터 확인해야 합니다.</p></article>
          <article><small>RED FLAG 02</small><h3>“무조건 다 됩니다.”</h3><p>순위·문의·매출은 경쟁도와 현재 상태에 따라 달라집니다. 보장보다 조건 설명이 먼저입니다.</p></article>
          <article><small>RED FLAG 03</small><h3>“이것저것 다 해드립니다.”</h3><p>범위가 모호하면 결과도 모호해집니다. 수량·일정·추가 비용이 계약 전에 보여야 합니다.</p></article>
          <article><small>RED FLAG 04</small><h3>“일단 장기계약부터 하세요.”</h3><p>긴 계약이 성과의 근거는 아닙니다. 현재 상태와 필요한 기간을 먼저 설명할 수 있어야 합니다.</p></article>
        </div>

        <div className="gumse-standard">
          <div className="standard-title"><small>WHY GUMSE</small><h3><span>그래서 금새는</span><span>다르게 설명합니다.</span></h3></div>
          <div className="standard-list">
            <article><span>01</span><div><h4>가능성과 한계를 함께 말합니다.</h4><p>할 수 있는 것과 보장할 수 없는 것을 구분하고, 현재 상태에 맞는 현실적인 방향을 제안합니다.</p></div></article>
            <article><span>02</span><div><h4>진행 범위를 시작 전에 확정합니다.</h4><p>콘텐츠 수량, 관리 항목, 일정과 비용을 명확히 해 “그건 별도입니다”라는 뒤늦은 설명을 줄입니다.</p></div></article>
            <article><span>03</span><div><h4>말이 아니라 결과물을 남깁니다.</h4><p>발행 콘텐츠, 관리 기록과 변화 데이터를 확인할 수 있게 정리해 운영 과정을 숨기지 않습니다.</p></div></article>
            <article><span>04</span><div><h4>장기계약보다 적합성을 먼저 봅니다.</h4><p>무조건 큰 상품을 권하지 않고, 목표와 상태에 필요한 범위부터 설명합니다.</p></div></article>
          </div>
        </div>
        <p className="manifesto">금새인터랙티브를 선택해야 하는 이유는<br /><strong>화려한 약속이 아니라, 숨기지 않는 운영과 계속 확인할 수 있는 결과물</strong>입니다.</p>
      </section>

      <section className="proposal-links">
        <div><p>RELATED PROPOSALS</p><h2>우리 매장에 필요한<br />운영 방식을 확인하세요.</h2></div>
        <div className="proposal-grid">
          <a href="https://proposal.gumse.net/blog/" target="_blank" rel="noopener noreferrer"><small>BLOG</small><b>블로그 지수관리 제안서</b><span>자세히 보기 ↗</span></a>
          <a href="https://proposal.gumse.net/place/" target="_blank" rel="noopener noreferrer"><small>PLACE</small><b>네이버 플레이스 육성 제안서</b><span>자세히 보기 ↗</span></a>
        </div>
      </section>

      <footer><img src="/gumse-logo-transparent.png" alt="금새인터랙티브" /><p>블로그 · 플레이스 · 브랜드 콘텐츠를 연결하는 온라인 마케팅 파트너</p><span>GUMSE INTERACTIVE © 2026</span></footer>
    </main>
  );
}
