/**
 * Centralised UI translations for nav bar, footer, and other chrome elements.
 * Content pages have their own per-locale markdown — this file covers only the
 * shared layout strings that appear on every page.
 */

export interface UiStrings {
  nav: {
    about: string
    functions: string
    paths: string
    aliases: string
    compatibility: string
    guides: string
  }
  footer: {
    documentation: string
    about: string
    functions: string
    paths: string
    aliases: string
    resources: string
    github: string
    issues: string
    releases: string
    legal: string
    accessibility: string
    privacy: string
    terms: string
    contact: string
    copyright: string
    privacyPolicy: string
    termsOfUse: string
  }
}

const en: UiStrings = {
  nav: { about: 'About', functions: 'Functions', paths: 'Paths', aliases: 'Aliases', compatibility: 'Compatibility', guides: 'Guides' },
  footer: { documentation: 'Documentation', about: 'About', functions: 'Functions', paths: 'Paths', aliases: 'Aliases', resources: 'Resources', github: 'GitHub', issues: 'Issues', releases: 'Releases', legal: 'Legal', accessibility: 'Accessibility', privacy: 'Privacy', terms: 'Terms', contact: 'Contact', copyright: 'Copyright', privacyPolicy: 'Privacy Policy', termsOfUse: 'Terms of Use' },
}

export const UI_STRINGS: Record<string, UiStrings> = {
  en,
  ar: {
    nav: { about: 'حول', functions: 'الدوال', paths: 'المسارات', aliases: 'الأسماء المستعارة', compatibility: 'التوافق', guides: 'الأدلة' },
    footer: { documentation: 'التوثيق', about: 'حول', functions: 'الدوال', paths: 'المسارات', aliases: 'الأسماء المستعارة', resources: 'الموارد', github: 'GitHub', issues: 'المشاكل', releases: 'الإصدارات', legal: 'قانوني', accessibility: 'إمكانية الوصول', privacy: 'الخصوصية', terms: 'الشروط', contact: 'اتصل بنا', copyright: 'حقوق النشر', privacyPolicy: 'سياسة الخصوصية', termsOfUse: 'شروط الاستخدام' },
  },
  de: {
    nav: { about: 'Über', functions: 'Funktionen', paths: 'Pfade', aliases: 'Aliase', compatibility: 'Kompatibilität', guides: 'Anleitungen' },
    footer: { documentation: 'Dokumentation', about: 'Über', functions: 'Funktionen', paths: 'Pfade', aliases: 'Aliase', resources: 'Ressourcen', github: 'GitHub', issues: 'Probleme', releases: 'Versionen', legal: 'Rechtliches', accessibility: 'Barrierefreiheit', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', contact: 'Kontakt', copyright: 'Urheberrecht', privacyPolicy: 'Datenschutzrichtlinie', termsOfUse: 'Nutzungsbedingungen' },
  },
  es: {
    nav: { about: 'Acerca de', functions: 'Funciones', paths: 'Rutas', aliases: 'Alias', compatibility: 'Compatibilidad', guides: 'Guias' },
    footer: { documentation: 'Documentacion', about: 'Acerca de', functions: 'Funciones', paths: 'Rutas', aliases: 'Alias', resources: 'Recursos', github: 'GitHub', issues: 'Problemas', releases: 'Versiones', legal: 'Legal', accessibility: 'Accesibilidad', privacy: 'Privacidad', terms: 'Terminos', contact: 'Contacto', copyright: 'Derechos de autor', privacyPolicy: 'Politica de privacidad', termsOfUse: 'Terminos de uso' },
  },
  fr: {
    nav: { about: 'A propos', functions: 'Fonctions', paths: 'Chemins', aliases: 'Alias', compatibility: 'Compatibilite', guides: 'Guides' },
    footer: { documentation: 'Documentation', about: 'A propos', functions: 'Fonctions', paths: 'Chemins', aliases: 'Alias', resources: 'Ressources', github: 'GitHub', issues: 'Problemes', releases: 'Versions', legal: 'Mentions legales', accessibility: 'Accessibilite', privacy: 'Confidentialite', terms: 'Conditions', contact: 'Contact', copyright: 'Droits d\'auteur', privacyPolicy: 'Politique de confidentialite', termsOfUse: 'Conditions d\'utilisation' },
  },
  he: {
    nav: { about: 'אודות', functions: 'פונקציות', paths: 'נתיבים', aliases: 'כינויים', compatibility: 'תאימות', guides: 'מדריכים' },
    footer: { documentation: 'תיעוד', about: 'אודות', functions: 'פונקציות', paths: 'נתיבים', aliases: 'כינויים', resources: 'משאבים', github: 'GitHub', issues: 'בעיות', releases: 'גרסאות', legal: 'משפטי', accessibility: 'נגישות', privacy: 'פרטיות', terms: 'תנאים', contact: 'צור קשר', copyright: 'זכויות יוצרים', privacyPolicy: 'מדיניות פרטיות', termsOfUse: 'תנאי שימוש' },
  },
  hi: {
    nav: { about: 'परिचय', functions: 'फंक्शन', paths: 'पथ', aliases: 'उपनाम', compatibility: 'संगतता', guides: 'गाइड' },
    footer: { documentation: 'प्रलेखन', about: 'परिचय', functions: 'फंक्शन', paths: 'पथ', aliases: 'उपनाम', resources: 'संसाधन', github: 'GitHub', issues: 'समस्याएं', releases: 'रिलीज़', legal: 'कानूनी', accessibility: 'सुगम्यता', privacy: 'गोपनीयता', terms: 'शर्तें', contact: 'संपर्क', copyright: 'कॉपीराइट', privacyPolicy: 'गोपनीयता नीति', termsOfUse: 'उपयोग की शर्तें' },
  },
  id: {
    nav: { about: 'Tentang', functions: 'Fungsi', paths: 'Jalur', aliases: 'Alias', compatibility: 'Kompatibilitas', guides: 'Panduan' },
    footer: { documentation: 'Dokumentasi', about: 'Tentang', functions: 'Fungsi', paths: 'Jalur', aliases: 'Alias', resources: 'Sumber Daya', github: 'GitHub', issues: 'Masalah', releases: 'Rilis', legal: 'Hukum', accessibility: 'Aksesibilitas', privacy: 'Privasi', terms: 'Ketentuan', contact: 'Kontak', copyright: 'Hak Cipta', privacyPolicy: 'Kebijakan Privasi', termsOfUse: 'Ketentuan Penggunaan' },
  },
  it: {
    nav: { about: 'Chi siamo', functions: 'Funzioni', paths: 'Percorsi', aliases: 'Alias', compatibility: 'Compatibilita', guides: 'Guide' },
    footer: { documentation: 'Documentazione', about: 'Chi siamo', functions: 'Funzioni', paths: 'Percorsi', aliases: 'Alias', resources: 'Risorse', github: 'GitHub', issues: 'Problemi', releases: 'Rilasci', legal: 'Legale', accessibility: 'Accessibilita', privacy: 'Privacy', terms: 'Termini', contact: 'Contatti', copyright: 'Diritti d\'autore', privacyPolicy: 'Informativa sulla privacy', termsOfUse: 'Condizioni d\'uso' },
  },
  ja: {
    nav: { about: '概要', functions: '関数', paths: 'パス', aliases: 'エイリアス', compatibility: '互換性', guides: 'ガイド' },
    footer: { documentation: 'ドキュメント', about: '概要', functions: '関数', paths: 'パス', aliases: 'エイリアス', resources: 'リソース', github: 'GitHub', issues: '問題', releases: 'リリース', legal: '法的情報', accessibility: 'アクセシビリティ', privacy: 'プライバシー', terms: '利用規約', contact: 'お問い合わせ', copyright: '著作権', privacyPolicy: 'プライバシーポリシー', termsOfUse: '利用規約' },
  },
  ko: {
    nav: { about: '소개', functions: '함수', paths: '경로', aliases: '별칭', compatibility: '호환성', guides: '가이드' },
    footer: { documentation: '문서', about: '소개', functions: '함수', paths: '경로', aliases: '별칭', resources: '리소스', github: 'GitHub', issues: '이슈', releases: '릴리스', legal: '법적 고지', accessibility: '접근성', privacy: '개인정보', terms: '약관', contact: '문의', copyright: '저작권', privacyPolicy: '개인정보처리방침', termsOfUse: '이용약관' },
  },
  nl: {
    nav: { about: 'Over', functions: 'Functies', paths: 'Paden', aliases: 'Aliassen', compatibility: 'Compatibiliteit', guides: 'Handleidingen' },
    footer: { documentation: 'Documentatie', about: 'Over', functions: 'Functies', paths: 'Paden', aliases: 'Aliassen', resources: 'Bronnen', github: 'GitHub', issues: 'Problemen', releases: 'Releases', legal: 'Juridisch', accessibility: 'Toegankelijkheid', privacy: 'Privacy', terms: 'Voorwaarden', contact: 'Contact', copyright: 'Auteursrecht', privacyPolicy: 'Privacybeleid', termsOfUse: 'Gebruiksvoorwaarden' },
  },
  pl: {
    nav: { about: 'O projekcie', functions: 'Funkcje', paths: 'Sciezki', aliases: 'Aliasy', compatibility: 'Kompatybilnosc', guides: 'Poradniki' },
    footer: { documentation: 'Dokumentacja', about: 'O projekcie', functions: 'Funkcje', paths: 'Sciezki', aliases: 'Aliasy', resources: 'Zasoby', github: 'GitHub', issues: 'Problemy', releases: 'Wydania', legal: 'Informacje prawne', accessibility: 'Dostepnosc', privacy: 'Prywatnosc', terms: 'Regulamin', contact: 'Kontakt', copyright: 'Prawa autorskie', privacyPolicy: 'Polityka prywatnosci', termsOfUse: 'Warunki uzytkowania' },
  },
  pt: {
    nav: { about: 'Sobre', functions: 'Funcoes', paths: 'Caminhos', aliases: 'Alias', compatibility: 'Compatibilidade', guides: 'Guias' },
    footer: { documentation: 'Documentacao', about: 'Sobre', functions: 'Funcoes', paths: 'Caminhos', aliases: 'Alias', resources: 'Recursos', github: 'GitHub', issues: 'Problemas', releases: 'Lancamentos', legal: 'Legal', accessibility: 'Acessibilidade', privacy: 'Privacidade', terms: 'Termos', contact: 'Contato', copyright: 'Direitos autorais', privacyPolicy: 'Politica de privacidade', termsOfUse: 'Termos de uso' },
  },
  ro: {
    nav: { about: 'Despre', functions: 'Functii', paths: 'Cai', aliases: 'Aliasuri', compatibility: 'Compatibilitate', guides: 'Ghiduri' },
    footer: { documentation: 'Documentatie', about: 'Despre', functions: 'Functii', paths: 'Cai', aliases: 'Aliasuri', resources: 'Resurse', github: 'GitHub', issues: 'Probleme', releases: 'Lansari', legal: 'Legal', accessibility: 'Accesibilitate', privacy: 'Confidentialitate', terms: 'Termeni', contact: 'Contact', copyright: 'Drepturi de autor', privacyPolicy: 'Politica de confidentialitate', termsOfUse: 'Termeni de utilizare' },
  },
  ru: {
    nav: { about: 'О проекте', functions: 'Функции', paths: 'Пути', aliases: 'Псевдонимы', compatibility: 'Совместимость', guides: 'Руководства' },
    footer: { documentation: 'Документация', about: 'О проекте', functions: 'Функции', paths: 'Пути', aliases: 'Псевдонимы', resources: 'Ресурсы', github: 'GitHub', issues: 'Проблемы', releases: 'Релизы', legal: 'Правовая информация', accessibility: 'Доступность', privacy: 'Конфиденциальность', terms: 'Условия', contact: 'Контакты', copyright: 'Авторские права', privacyPolicy: 'Политика конфиденциальности', termsOfUse: 'Условия использования' },
  },
  th: {
    nav: { about: 'เกี่ยวกับ', functions: 'ฟังก์ชัน', paths: 'เส้นทาง', aliases: 'นามแฝง', compatibility: 'ความเข้ากันได้', guides: 'คู่มือ' },
    footer: { documentation: 'เอกสาร', about: 'เกี่ยวกับ', functions: 'ฟังก์ชัน', paths: 'เส้นทาง', aliases: 'นามแฝง', resources: 'ทรัพยากร', github: 'GitHub', issues: 'ปัญหา', releases: 'รุ่น', legal: 'กฎหมาย', accessibility: 'การเข้าถึง', privacy: 'ความเป็นส่วนตัว', terms: 'เงื่อนไข', contact: 'ติดต่อ', copyright: 'ลิขสิทธิ์', privacyPolicy: 'นโยบายความเป็นส่วนตัว', termsOfUse: 'เงื่อนไขการใช้งาน' },
  },
  tr: {
    nav: { about: 'Hakkinda', functions: 'Fonksiyonlar', paths: 'Yollar', aliases: 'Takma Adlar', compatibility: 'Uyumluluk', guides: 'Rehberler' },
    footer: { documentation: 'Dokumantasyon', about: 'Hakkinda', functions: 'Fonksiyonlar', paths: 'Yollar', aliases: 'Takma Adlar', resources: 'Kaynaklar', github: 'GitHub', issues: 'Sorunlar', releases: 'Surumler', legal: 'Yasal', accessibility: 'Erisilebilirlik', privacy: 'Gizlilik', terms: 'Kosullar', contact: 'Iletisim', copyright: 'Telif hakki', privacyPolicy: 'Gizlilik Politikasi', termsOfUse: 'Kullanim Kosullari' },
  },
  uk: {
    nav: { about: 'Про проект', functions: 'Функцii', paths: 'Шляхи', aliases: 'Аліаси', compatibility: 'Сумісність', guides: 'Посібники' },
    footer: { documentation: 'Документація', about: 'Про проект', functions: 'Функцii', paths: 'Шляхи', aliases: 'Аліаси', resources: 'Ресурси', github: 'GitHub', issues: 'Проблеми', releases: 'Релізи', legal: 'Правова інформація', accessibility: 'Доступність', privacy: 'Конфіденційність', terms: 'Умови', contact: 'Контакти', copyright: 'Авторські права', privacyPolicy: 'Політика конфіденційності', termsOfUse: 'Умови використання' },
  },
  vi: {
    nav: { about: 'Gioi thieu', functions: 'Ham', paths: 'Duong dan', aliases: 'Bi danh', compatibility: 'Tuong thich', guides: 'Huong dan' },
    footer: { documentation: 'Tai lieu', about: 'Gioi thieu', functions: 'Ham', paths: 'Duong dan', aliases: 'Bi danh', resources: 'Tai nguyen', github: 'GitHub', issues: 'Van de', releases: 'Phat hanh', legal: 'Phap ly', accessibility: 'Tro nang', privacy: 'Quyen rieng tu', terms: 'Dieu khoan', contact: 'Lien he', copyright: 'Ban quyen', privacyPolicy: 'Chinh sach quyen rieng tu', termsOfUse: 'Dieu khoan su dung' },
  },
  zh: {
    nav: { about: '关于', functions: '函数', paths: '路径', aliases: '别名', compatibility: '兼容性', guides: '指南' },
    footer: { documentation: '文档', about: '关于', functions: '函数', paths: '路径', aliases: '别名', resources: '资源', github: 'GitHub', issues: '问题', releases: '发布', legal: '法律信息', accessibility: '无障碍', privacy: '隐私', terms: '条款', contact: '联系', copyright: '版权', privacyPolicy: '隐私政策', termsOfUse: '使用条款' },
  },
  'zh-tw': {
    nav: { about: '關於', functions: '函式', paths: '路徑', aliases: '別名', compatibility: '相容性', guides: '指南' },
    footer: { documentation: '文件', about: '關於', functions: '函式', paths: '路徑', aliases: '別名', resources: '資源', github: 'GitHub', issues: '問題', releases: '發布', legal: '法律資訊', accessibility: '無障礙', privacy: '隱私', terms: '條款', contact: '聯絡', copyright: '版權', privacyPolicy: '隱私權政策', termsOfUse: '使用條款' },
  },
}

/** Get UI strings for a locale key, falling back to English. */
export function getUiStrings(locale: string): UiStrings {
  return UI_STRINGS[locale] ?? en
}
