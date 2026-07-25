# 금새인터랙티브 고객 사례 페이지

블로그·플레이스 운영 사례와 마케팅회사 선택 기준을 소개하는 반응형 랜딩페이지입니다.

## 실행 환경

- Node.js 22.13 이상
- Next.js 16
- React 19
- Tailwind CSS 4
- Vinext / Vite

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인합니다.

## 배포용 빌드

```bash
npm run build
```

## 주요 수정 파일

- `app/page.tsx`: 후기 문구, 성과 수치, 업종, 제안서 링크
- `app/globals.css`: 전체 디자인, 제목 크기, 반응형 스타일
- `app/layout.tsx`: 사이트 제목과 설명
- `public/gumse-logo-transparent.png`: 금새인터랙티브 로고

## 연결된 제안서 주소

- 블로그: `https://proposal.gumse.net/blog/`
- 플레이스: `https://proposal.gumse.net/place/`

## 참고

고객 후기와 성과 수치는 실제 확인된 자료에 맞춰 `app/page.tsx`에서 수정해 사용하세요.
