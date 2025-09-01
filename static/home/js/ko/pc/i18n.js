// Internationalization (i18n) utility functions
class I18n {
    constructor() {
        this.currentLanguage = 'ko';
        this.translations = {};
    }

    // 언어 설정
    setLanguage(lang) {
        this.currentLanguage = lang;
        this.loadTranslations(lang);
    }

    // 번역 데이터 로드
    loadTranslations(lang) {
        // 동적으로 번역 스크립트 로드
        const script = document.createElement('script');
        script.src = `./static/home/js/${lang}/pc/translations.js`;
        script.onload = () => {
            this.translations = window.translations[lang] || {};
            this.updatePageContent();
        };
        document.head.appendChild(script);
    }

    // 텍스트 번역
    t(key, defaultValue = '') {
        return this.translations[key] || defaultValue || key;
    }

    // 페이지 내용 업데이트
    updatePageContent() {
        // data-i18n 속성이 있는 모든 요소 찾기
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translatedText = this.t(key);

            if (translatedText) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            }
        });

        // 제목 업데이트
        const titleElement = document.querySelector('title');
        if (titleElement) {
            titleElement.textContent = this.t('main_title', '클리닉 플레이트');
        }

        // 언어 선택 드롭다운 업데이트
        this.updateLanguageDropdown();

        // 메타 태그 업데이트
        this.updateMetaTags();
    }

    // 언어 선택 드롭다운 업데이트
    updateLanguageDropdown() {
        const langInput = document.querySelector('.dropdown_value input[role="combobox"]');
        if (langInput) {
            // 현재 언어에 따라 드롭다운 값 설정
            const displayValue = this.currentLanguage === 'en' ? 'EN' : 'KR';
            langInput.value = displayValue;
        }
    }

    // 메타 태그 업데이트
    updateMetaTags() {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = this.t('main_description');
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.content = this.t('main_title') + ' | ' + this.t('main_subtitle');
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.content = this.t('main_description');
        }
    }

    // 언어별 이미지 경로 반환
    getImagePath(path) {
        return path.replace('/ko/', `/${this.currentLanguage}/`);
    }

    // 언어별 CSS 경로 반환
    getCssPath(path) {
        return path.replace('/ko/', `/${this.currentLanguage}/`);
    }
}

// 전역 i18n 인스턴스 생성
window.i18n = new I18n();

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    const currentLang = getCurrentLanguage();
    window.i18n.setLanguage(currentLang);
});
