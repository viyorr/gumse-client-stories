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

## 기존 GitHub 저장소를 업데이트할 때

GitHub 웹에서 새 파일을 업로드하면 기존 파일은 자동으로 삭제되지 않습니다. 이전 Sites 프로젝트에서 사용하던 아래 파일이나 폴더가 저장소에 남아 있다면 삭제하세요.

- `build/`
- `scripts/`
- `worker/`
- `tests/`
- `db/`
- `drizzle/`
- `examples/`
- `vite.config.ts`
- `drizzle.config.ts`
- `app/chatgpt-auth.ts`

이 전달본의 `tsconfig.json`에는 위 구형 파일을 TypeScript 검사에서 제외하는 설정도 포함되어 있습니다. 따라서 수정된 `tsconfig.json`을 반드시 GitHub에 함께 업로드해야 합니다.

Git을 사용하는 경우, 저장소에 실제로 존재하는 항목만 골라 삭제한 다음 커밋합니다.

```bash
git rm -r build scripts worker tests db drizzle examples
git rm vite.config.ts drizzle.config.ts app/chatgpt-auth.ts
git add .
git commit -m "Fix Netlify build configuration"
git push
```

삭제 명령에서 `pathspec` 오류가 나는 항목은 저장소에 없는 것이므로 건너뛰면 됩니다. 업로드 후 Netlify에서 `Clear cache and deploy site`로 다시 배포하세요.

## 주요 수정 파일

- `app/page.tsx`: 후기 문구, 성과 수치, 업종, 제안서 링크
- `app/globals.css`: 전체 디자인과 반응형 스타일
- `app/layout.tsx`: 사이트 제목과 설명
- `public/gumse-logo-transparent.png`: 금새인터랙티브 로고
- `public/og-client-stories-v4.png`: 카카오톡 링크 미리보기 이미지(1200×630)

## 카카오톡 미리보기

`app/layout.tsx`에 Open Graph 제목·설명·이미지가 연결되어 있습니다.
배포 후 카카오톡에 기존 미리보기가 남아 있으면 카카오 디버거에서 해당 URL의 캐시를 초기화한 뒤 다시 공유하세요.

## 연결된 제안서

- 블로그: `https://proposal.gumse.net/blog/`
- 플레이스: `https://proposal.gumse.net/place/`
