// 한국어 번역 데이터
const koTranslations = {
    // 메인 페이지
    "main_title": "클리닉 플레이트",
    "main_subtitle": "VVIP 프리미엄 헬스케어 클리닉",
    "main_description": "20여 년의 임상 경험과 최신 의학 연구를 기반으로, 세포 단위 정밀검진과 맞춤형 푸드테라피를 통해 VVIP 헬스케어 서비스를 제공합니다.",

    // 네비게이션
    "nav_home": "홈",
    "nav_about": "소개",
    "nav_service": "서비스",
    "nav_contact": "문의",

    // 서비스 섹션
    "service_title": "서비스",
    "service_premium": "프리미엄 헬스케어",
    "service_precision": "정밀검진",
    "service_foodtherapy": "푸드테라피",

    // 버튼
    "btn_more": "더보기",
    "btn_contact": "문의하기",
    "btn_reservation": "예약하기",

    // 푸터
    "footer_address": "주소",
    "footer_phone": "전화",
    "footer_email": "이메일",
    "footer_copyright": "© 2024 클리닉 플레이트. All rights reserved."
};

// 전역 번역 객체에 추가
if (typeof window.translations === 'undefined') {
    window.translations = {};
}
window.translations.ko = koTranslations;
