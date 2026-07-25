# 금새인터랙티브 고객 사례 페이지

Netlify 배포에 맞춘 Next.js 정적 사이트입니다. 셸 빌드 스크립트를 사용하지 않으므로 GitHub 웹 업로드 과정에서 실행 권한이 사라져도 빌드에 영향을 받지 않습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인합니다.

## Netlify 배포

저장소를 Netlify에 연결하면 루트의 `netlify.toml` 설정이 자동 적용됩니다.

- Build command: `npm run build`
- Publish directory: `out`
- Node.js: `22`

빌드는 호스팅 환경 호환성을 위해 Next.js Webpack 빌드를 사용합니다.

Netlify 설정 화면에 기존 빌드 명령이나 배포 폴더가 저장돼 있다면 위 값으로 바꾸거나 비워서 `netlify.toml`을 사용하세요.

## 주요 수정 파일

- `app/page.tsx`: 후기 문구, 성과 수치, 업종, 제안서 링크
- `app/globals.css`: 전체 디자인과 반응형 스타일
- `app/layout.tsx`: 사이트 제목과 설명
- `public/gumse-logo-transparent.png`: 금새인터랙티브 로고

## 연결된 제안서

- 블로그: `https://proposal.gumse.net/blog/`
- 플레이스: `https://proposal.gumse.net/place/`
