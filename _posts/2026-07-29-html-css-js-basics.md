---
layout: post
title: "HTML, CSS, JS 기초 정리"
category: 학습기록
---

프론트엔드를 처음 접할 때 꼭 알아야 하는 HTML/CSS/JS 기본 개념을 정리했다. 이미 알고 있는 사람보다는, 처음 시작하는 사람이 훑어보기 좋게 쓰려고 한다.

## HTML

### 태그는 역할별로 나뉜다

HTML 태그는 크게 문서 구조, 메타데이터, 텍스트/콘텐츠, 리스트, 테이블, 폼, 미디어, 시맨틱 태그로 나눌 수 있다. 각 태그가 "화면에 뭘 그리는가"보다 "어떤 역할을 하는가"로 나뉜다는 걸 알면 외우기 편하다.

### 메타데이터 태그

눈에 보이지는 않지만 문서를 동작하게 만드는 태그들이다.

- `<meta>`: 검색엔진 노출, 문자 인코딩 등 브라우저 동작에 영향을 준다
- `<link>`: CSS 파일을 문서에 연결한다
- `<script>`: JS 파일을 문서에 연결한다
- `<form>`: 사용자 입력을 서버로 전송한다

### id, class 속성

`id`는 요소 하나를 가리키는 고유 식별자이고, `class`는 여러 요소에 재사용할 수 있는 이름표다. CSS나 JS에서 특정 요소를 골라낼 때 이 둘을 기준으로 삼는 경우가 많다.

### 블록 요소 vs 인라인 요소

- 블록 요소: 한 줄 전체를 차지한다 (`div`, `p`, `h1` 등)
- 인라인 요소: 콘텐츠 크기만큼만 차지한다 (`span`, `a`, `strong` 등)

### img vs picture

- `<img>`: 이미지 하나를 보여준다
- `<picture>`: 화면 크기나 조건에 따라 다른 이미지를 보여줄 수 있다 (반응형 이미지에 사용)

### Semantic HTML

`header`, `nav`, `aside`, `footer`, `main` 같은 태그는 이름 자체가 역할을 설명해준다. `div`만 잔뜩 쓴 문서보다 훨씬 읽기 쉽고, 검색엔진이나 스크린리더도 구조를 더 잘 이해할 수 있다.

### 반응형 웹

`viewport` 메타 태그로 디바이스 화면 너비를 기준으로 잡고, 크기는 픽셀 고정값 대신 `%`, `vw`, `vh` 같은 상대 단위로 지정하는 게 기본 원칙이다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## CSS

### CSS를 적용하는 3가지 방법

1. **Inline** — 엘리먼트에 `style` 속성으로 직접 지정
2. **Internal** — `<head>` 안에 `<style>` 태그로 작성
3. **External** — 별도 CSS 파일을 `<link>`로 연결

실무에서는 대부분 External 방식을 쓴다. 유지보수가 압도적으로 편하기 때문이다.

### 셀렉터

가상 클래스는 콜론 하나(`:hover`, `:first-child`), 가상 요소는 콜론 두 개(`::before`, `::after`)로 표기한다.

### transform, transition, animation

- `transform`: 이동·회전·확대/축소·기울이기 같은 형태 변형 (`translate`, `rotate`, `scale`, `skew`)
- `transition`: 속성값이 바뀔 때 그 변화를 부드럽게 처리
- `animation`: `@keyframes`로 단계를 정의하고 `animation` 속성으로 적용

```css
.box {
  transition: transform 0.2s ease;
}
.box:hover {
  transform: scale(1.05);
}
```

### CSS 변수

`--변수명`으로 값을 선언하고 `var(--변수명)`으로 불러 쓴다. 색상, 여백처럼 반복되는 값을 한 곳에서 관리할 때 유용하다.

```css
:root {
  --main-color: #3459e6;
}
button {
  color: var(--main-color);
}
```

## JavaScript

### 변수 선언: var, let, const

| 키워드 | 범위 | 재할당 | 재선언 |
|---|---|---|---|
| var | 함수 범위 | 가능 | 가능 |
| let | 블록 범위 | 가능 | 불가능 |
| const | 블록 범위 | 불가능 | 불가능 |

지금은 특별한 이유가 없다면 `const`를 기본으로 쓰고, 값이 바뀌어야 할 때만 `let`을 쓰는 게 일반적이다. `var`는 옛날 코드에서나 볼 수 있다.

### 데이터 타입

- Primitive(원시) 타입: string, number, bigint, boolean, undefined, null, symbol
- Reference(참조) 타입: object, array, function

`symbol`은 조금 낯설 수 있는데, 호출할 때마다 항상 새로운 고유값을 만들어내는 타입이다.

### 비교 연산자

`==`는 느슨한 비교로 형변환 후 값만 비교하고, `===`는 엄격한 비교로 타입까지 같아야 `true`가 된다. 예상치 못한 버그를 줄이려면 `===`를 기본으로 쓰는 게 안전하다.

### 반복문: for...in vs for...of

- `for...in`: 객체의 속성(키)을 순회
- `for...of`: 배열, 문자열, Map, Set 같은 이터러블의 값을 순회

### 함수

매개변수(parameter)는 함수를 정의할 때 적는 이름이고, 인수(argument)는 함수를 호출할 때 실제로 넘기는 값이다.

원시 타입은 값이 복사되어 전달되고(call by value), 객체/배열은 참조가 공유되어 전달된다(call by sharing) — 그래서 객체의 프로퍼티를 바꾸면 원본에도 반영되지만, 매개변수 자체를 다른 값으로 재할당하는 건 원본에 영향을 주지 않는다.

### 배열, 오브젝트

배열은 `map`, `filter`, `reduce` 같은 메서드와 스프레드 연산자(`...`)를 자주 쓴다. 오브젝트는 `obj.name`처럼 프로퍼티에 접근하고 `obj.method()`처럼 메서드를 호출한다.

```js
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

### 호이스팅

- `var`는 선언부만 끌어올려지고 초기값은 `undefined`다
- `let`, `const`는 호이스팅은 되지만 초기화 전까지 접근할 수 없다 (Temporal Dead Zone)
- 함수 선언식은 전체가 호이스팅되지만, 함수 표현식은 변수 호이스팅 규칙을 따른다

### 자주 쓰는 내장 객체

- `Date`: 날짜/시간을 다룬다
- `Set`: 중복을 허용하지 않는 값의 집합. 배열 중복 제거에 자주 쓰인다
- `Map`: 키-값 쌍을 저장하며, 키로 어떤 타입이든 쓸 수 있다
- `Math`: `Math.random()`, `Math.floor()` 등
- `RegExp`: 특정 패턴의 문자열을 검사·추출·치환한다

### DOM과 이벤트 핸들러

`document.querySelector` 같은 메서드로 요소를 선택하고 조작하는 걸 DOM 제어라고 한다. 이벤트를 등록하는 방법은 크게 세 가지다.

1. HTML 속성 방식 (`<button onclick="...">`)
2. DOM 프로퍼티 방식 (`el.onclick = ...`, 핸들러를 하나만 등록 가능)
3. `addEventListener` (여러 핸들러를 등록할 수 있어 가장 권장되는 방식)

```js
const button = document.querySelector('#save');
button.addEventListener('click', () => {
  console.log('저장됨');
});
```

---

이 정도가 HTML/CSS/JS를 처음 시작할 때 기본으로 알아야 하는 개념들이다. 각 항목은 결국 실제로 코드를 짜보면서 손에 익혀야 진짜 이해가 되는 것 같다.
