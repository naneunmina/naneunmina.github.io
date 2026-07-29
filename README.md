# naneunmina.github.io

GitHub Pages + Jekyll로 만든 개인 기술 블로그. `main` 브랜치에 push하면 자동으로 배포됨(별도 빌드 불필요).

## 게시 주기

- **회고**: 월 1회, 그 달의 감상/흐름 정리
- **SKALA 학습기록 / 프로젝트**: 정해진 주기 없이, 하나의 주제나 작업이 완결될 때마다 작성

매일 쓰지 않는다. 완결된 단위로 모아서 쓰는 게 기록으로서의 밀도가 더 높다.

## 새 글 쓰는 법

1. `_posts/` 폴더에 아래 파일명 규칙으로 `.md` 파일 생성

   ```
   yyyy-mm-dd-영문-슬러그.md
   예: 2026-07-27-blog-start.md
   ```

2. 파일 맨 위에 front matter 작성

   ```yaml
   ---
   layout: post
   title: "글 제목"
   category: SKALA 학습기록   # SKALA 학습기록 | 프로젝트 | 회고 중 하나
   ---
   ```

3. 그 아래에 마크다운으로 본문 작성

4. 커밋 후 push

   ```bash
   git add _posts/2026-07-27-blog-start.md
   git commit -m "post: 글 제목"
   git push
   ```

push 후 1~2분 내에 https://naneunmina.github.io 에 반영됨.
