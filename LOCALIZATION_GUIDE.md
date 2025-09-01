# 클리닉 플레이트 로컬라이징 가이드

## 개요
클리닉 플레이트 웹사이트는 한국어(ko)와 영어(en)를 지원하는 다국어 시스템을 제공합니다.

## 설정된 기능

### 1. 언어 변경 시스템
- URL 파라미터: `?locale=ko` 또는 `?locale=en`
- 쿠키 기반 언어 설정 저장 (30일간 유지)
- 브라우저 새로고침 시에도 언어 설정 유지
- 언어 선택 드롭다운 레이블 자동 업데이트 (KR/EN)

### 2. 폴더 구조
```
static/home/
├── css/
│   ├── ko/pc/ (한국어 CSS)
│   └── en/pc/ (영어 CSS)
├── images/
│   ├── ko/pc/ (한국어 이미지)
│   └── en/pc/ (영어 이미지)
└── js/
    ├── ko/pc/ (한국어 스크립트)
    └── en/pc/ (영어 스크립트)
```

### 3. 번역 시스템
- `translations.js`: 각 언어별 번역 데이터
- `i18n.js`: 국제화 유틸리티 함수
- `data-i18n` 속성을 통한 HTML 요소 번역
- 언어 선택 드롭다운 자동 업데이트 기능

## 사용 방법

### 1. HTML 요소 번역
```html
<!-- 번역이 필요한 텍스트에 data-i18n 속성 추가 -->
<h1 data-i18n="main_title">클리닉 플레이트</h1>
<p data-i18n="main_description">설명 텍스트</p>
```

### 2. JavaScript에서 번역 사용
```javascript
// 번역 텍스트 가져오기
const title = window.i18n.t('main_title');

// 기본값과 함께 사용
const text = window.i18n.t('some_key', '기본 텍스트');
```

### 3. 언어 변경
```javascript
// 언어 변경 함수 호출
fncChangeLang('en'); // 영어로 변경
fncChangeLang('ko'); // 한국어로 변경
```

## 추가 설정 필요 사항

### 1. 번역 데이터 추가
새로운 텍스트를 추가할 때:

1. `static/home/js/ko/pc/translations.js`에 한국어 번역 추가
2. `static/home/js/en/pc/translations.js`에 영어 번역 추가
3. HTML 요소에 `data-i18n="키명"` 속성 추가

### 2. 언어별 리소스 파일
- **CSS**: 언어별 스타일 차이가 있는 경우 `en/pc/` 폴더에 CSS 파일 추가
- **이미지**: 언어별 이미지가 다른 경우 `en/pc/` 폴더에 이미지 파일 추가
- **JavaScript**: 언어별 로직이 다른 경우 `en/pc/` 폴더에 JS 파일 추가

### 3. SEO 최적화
- 각 언어별 메타 태그 업데이트
- 언어별 canonical URL 설정
- hreflang 태그 추가 (필요시)

## 예시

### 번역 데이터 추가
```javascript
// translations.js
const koTranslations = {
  "new_section_title": "새로운 섹션 제목",
  "new_section_content": "새로운 섹션 내용"
};
```

### HTML에서 사용
```html
<div class="new-section">
  <h2 data-i18n="new_section_title">새로운 섹션 제목</h2>
  <p data-i18n="new_section_content">새로운 섹션 내용</p>
</div>
```

## 주의사항

1. **번역 키 관리**: 일관된 네이밍 컨벤션 사용
2. **기본값 설정**: 번역이 없을 경우를 대비한 기본값 제공
3. **이미지 경로**: 언어별 이미지 경로 자동 변경 기능 활용
4. **캐시 관리**: 언어 변경 시 브라우저 캐시 고려

## 문제 해결

### 언어가 변경되지 않는 경우
1. 브라우저 캐시 삭제
2. 쿠키 확인
3. URL 파라미터 확인

### 언어 선택 드롭다운이 업데이트되지 않는 경우
1. 페이지 새로고침 확인
2. JavaScript 콘솔 에러 확인
3. 쿠키 설정 확인

### 번역이 표시되지 않는 경우
1. `data-i18n` 속성 확인
2. 번역 데이터에 키가 있는지 확인
3. JavaScript 콘솔 에러 확인
