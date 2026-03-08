import fs from 'node:fs'
import path from 'node:path'

const docsRoot = path.resolve('docs')

const locales = [
  { key: 'ar', lang: 'ar-SA', name: 'العربية' },
  { key: 'de', lang: 'de-DE', name: 'Deutsch' },
  { key: 'es', lang: 'es-ES', name: 'Español' },
  { key: 'fr', lang: 'fr-FR', name: 'Français' },
  { key: 'he', lang: 'he-IL', name: 'עברית' },
  { key: 'hi', lang: 'hi-IN', name: 'हिंदी' },
  { key: 'id', lang: 'id-ID', name: 'Bahasa Indonesia' },
  { key: 'it', lang: 'it-IT', name: 'Italiano' },
  { key: 'ja', lang: 'ja-JP', name: '日本語' },
  { key: 'ko', lang: 'ko-KR', name: '한국어' },
  { key: 'nl', lang: 'nl-NL', name: 'Nederlands' },
  { key: 'pt', lang: 'pt-BR', name: 'Português' },
  { key: 'ru', lang: 'ru-RU', name: 'Русский' },
  { key: 'zh', lang: 'zh-CN', name: '简体中文' },
  { key: 'vi', lang: 'vi-VN', name: 'Tiếng Việt' },
  { key: 'tr', lang: 'tr-TR', name: 'Türkçe' },
  { key: 'pl', lang: 'pl-PL', name: 'Polski' },
  { key: 'uk', lang: 'uk-UA', name: 'Українська' },
  { key: 'zh-tw', lang: 'zh-TW', name: '繁體中文' },
  { key: 'th', lang: 'th-TH', name: 'ไทย' },
  { key: 'ro', lang: 'ro-RO', name: 'Română' },
]

const i18n = {
  ar: {
    accessibility: { title: 'إمكانية الوصول', desc: 'معلومات إمكانية الوصول لوثائق Dotfiles.', h1: 'إمكانية الوصول', kb: 'التنقل بلوحة المفاتيح مدعوم.', focus: 'مؤشرات التركيز مرئية.', motion: 'يتم احترام تفضيلات تقليل الحركة.', report: 'الإبلاغ عن مشاكل إمكانية الوصول' },
    privacy: { title: 'الخصوصية', desc: 'سياسة الخصوصية لوثائق Dotfiles.', h1: 'الخصوصية', minimal: 'جمع بيانات بحد أدنى.', logs: 'السجلات تُستخدم للموثوقية والأمان.', nosale: 'لا بيع للبيانات الشخصية.', contact: 'التواصل بشأن الخصوصية' },
    terms: { title: 'الشروط', desc: 'شروط استخدام وثائق Dotfiles.', h1: 'الشروط', license: 'المحتوى مقدم وفق ترخيص المستودع.', warranty: 'لا يوجد ضمان.', thirdparty: 'أسماء الأطراف الثالثة ملك لأصحابها.' },
    contact: { title: 'التواصل', desc: 'معلومات التواصل مع مشرفي Dotfiles.', h1: 'التواصل' },
  },
  de: {
    accessibility: { title: 'Barrierefreiheit', desc: 'Barrierefreiheitsinformationen für die Dotfiles-Dokumentation.', h1: 'Barrierefreiheit', kb: 'Tastaturnavigation wird unterstützt.', focus: 'Fokusindikatoren sind sichtbar.', motion: 'Einstellungen für reduzierte Bewegung werden respektiert.', report: 'Barrierefreiheitsprobleme melden' },
    privacy: { title: 'Datenschutz', desc: 'Datenschutzrichtlinie für die Dotfiles-Dokumentation.', h1: 'Datenschutz', minimal: 'Minimale Datenerfassung.', logs: 'Protokolle dienen der Zuverlässigkeit und Sicherheit.', nosale: 'Kein Verkauf persönlicher Daten.', contact: 'Datenschutzkontakt' },
    terms: { title: 'Nutzungsbedingungen', desc: 'Nutzungsbedingungen für die Dotfiles-Dokumentation.', h1: 'Nutzungsbedingungen', license: 'Inhalte stehen unter der Repository-Lizenz.', warranty: 'Keine Gewährleistung.', thirdparty: 'Drittanbieter-Namen sind Eigentum ihrer Inhaber.' },
    contact: { title: 'Kontakt', desc: 'Kontaktinformationen der Dotfiles-Betreuer.', h1: 'Kontakt' },
  },
  es: {
    accessibility: { title: 'Accesibilidad', desc: 'Información de accesibilidad para la documentación de Dotfiles.', h1: 'Accesibilidad', kb: 'Se admite la navegación por teclado.', focus: 'Los indicadores de enfoque son visibles.', motion: 'Se respetan las preferencias de movimiento reducido.', report: 'Informar problemas de accesibilidad' },
    privacy: { title: 'Privacidad', desc: 'Política de privacidad para la documentación de Dotfiles.', h1: 'Privacidad', minimal: 'Recopilación mínima de datos.', logs: 'Los registros se usan para confiabilidad y seguridad.', nosale: 'Sin venta de datos personales.', contact: 'Contacto de privacidad' },
    terms: { title: 'Términos', desc: 'Términos de uso para la documentación de Dotfiles.', h1: 'Términos', license: 'El contenido se proporciona bajo la licencia del repositorio.', warranty: 'Sin garantía.', thirdparty: 'Los nombres de terceros son propiedad de sus dueños.' },
    contact: { title: 'Contacto', desc: 'Información de contacto de los mantenedores de Dotfiles.', h1: 'Contacto' },
  },
  fr: {
    accessibility: { title: 'Accessibilité', desc: "Informations d'accessibilité pour la documentation Dotfiles.", h1: 'Accessibilité', kb: 'La navigation au clavier est prise en charge.', focus: 'Les indicateurs de focus sont visibles.', motion: 'Les préférences de mouvement réduit sont respectées.', report: "Signaler des problèmes d'accessibilité" },
    privacy: { title: 'Confidentialité', desc: 'Politique de confidentialité pour la documentation Dotfiles.', h1: 'Confidentialité', minimal: 'Collecte de données minimale.', logs: 'Les journaux sont utilisés pour la fiabilité et la sécurité.', nosale: 'Aucune vente de données personnelles.', contact: 'Contact confidentialité' },
    terms: { title: "Conditions d'utilisation", desc: "Conditions d'utilisation pour la documentation Dotfiles.", h1: "Conditions d'utilisation", license: 'Le contenu est fourni sous licence du dépôt.', warranty: 'Aucune garantie.', thirdparty: 'Les noms tiers restent la propriété de leurs détenteurs.' },
    contact: { title: 'Contact', desc: 'Informations de contact des mainteneurs Dotfiles.', h1: 'Contact' },
  },
  he: {
    accessibility: { title: 'נגישות', desc: 'מידע נגישות לתיעוד Dotfiles.', h1: 'נגישות', kb: 'ניווט מקלדת נתמך.', focus: 'מחווני מיקוד גלויים.', motion: 'העדפות תנועה מופחתת מכובדות.', report: 'דיווח על בעיות נגישות' },
    privacy: { title: 'פרטיות', desc: 'מדיניות פרטיות לתיעוד Dotfiles.', h1: 'פרטיות', minimal: 'איסוף נתונים מינימלי.', logs: 'לוגים משמשים לאמינות ואבטחה.', nosale: 'אין מכירת נתונים אישיים.', contact: 'יצירת קשר בנושא פרטיות' },
    terms: { title: 'תנאי שימוש', desc: 'תנאי שימוש לתיעוד Dotfiles.', h1: 'תנאי שימוש', license: 'התוכן מסופק תחת רישיון המאגר.', warranty: 'אין אחריות.', thirdparty: 'שמות צד שלישי הם רכוש בעליהם.' },
    contact: { title: 'יצירת קשר', desc: 'פרטי יצירת קשר עם מתחזקי Dotfiles.', h1: 'יצירת קשר' },
  },
  hi: {
    accessibility: { title: 'अभिगम्यता', desc: 'Dotfiles दस्तावेज़ीकरण के लिए अभिगम्यता जानकारी।', h1: 'अभिगम्यता', kb: 'कीबोर्ड नेविगेशन समर्थित है।', focus: 'फोकस संकेतक दृश्यमान हैं।', motion: 'कम गति वरीयताओं का सम्मान किया जाता है।', report: 'अभिगम्यता समस्याओं की रिपोर्ट करें' },
    privacy: { title: 'गोपनीयता', desc: 'Dotfiles दस्तावेज़ीकरण के लिए गोपनीयता नीति।', h1: 'गोपनीयता', minimal: 'न्यूनतम डेटा संग्रह।', logs: 'लॉग विश्वसनीयता और सुरक्षा के लिए उपयोग किए जाते हैं।', nosale: 'कोई व्यक्तिगत डेटा बिक्री नहीं।', contact: 'गोपनीयता संपर्क' },
    terms: { title: 'शर्तें', desc: 'Dotfiles दस्तावेज़ीकरण के उपयोग की शर्तें।', h1: 'शर्तें', license: 'सामग्री रिपॉजिटरी लाइसेंसिंग के तहत प्रदान की जाती है।', warranty: 'कोई वारंटी नहीं।', thirdparty: 'तृतीय-पक्ष नाम उनके मालिकों की संपत्ति हैं।' },
    contact: { title: 'संपर्क', desc: 'Dotfiles अनुरक्षकों की संपर्क जानकारी।', h1: 'संपर्क' },
  },
  id: {
    accessibility: { title: 'Aksesibilitas', desc: 'Informasi aksesibilitas untuk dokumentasi Dotfiles.', h1: 'Aksesibilitas', kb: 'Navigasi keyboard didukung.', focus: 'Indikator fokus terlihat.', motion: 'Preferensi gerakan berkurang dihormati.', report: 'Laporkan masalah aksesibilitas' },
    privacy: { title: 'Privasi', desc: 'Kebijakan privasi untuk dokumentasi Dotfiles.', h1: 'Privasi', minimal: 'Pengumpulan data minimal.', logs: 'Log digunakan untuk keandalan dan keamanan.', nosale: 'Tidak ada penjualan data pribadi.', contact: 'Kontak privasi' },
    terms: { title: 'Ketentuan', desc: 'Ketentuan penggunaan untuk dokumentasi Dotfiles.', h1: 'Ketentuan', license: 'Konten disediakan di bawah lisensi repositori.', warranty: 'Tidak ada garansi.', thirdparty: 'Nama pihak ketiga tetap milik pemiliknya.' },
    contact: { title: 'Kontak', desc: 'Informasi kontak pengelola Dotfiles.', h1: 'Kontak' },
  },
  it: {
    accessibility: { title: 'Accessibilità', desc: "Informazioni sull'accessibilità per la documentazione Dotfiles.", h1: 'Accessibilità', kb: 'La navigazione da tastiera è supportata.', focus: 'Gli indicatori di focus sono visibili.', motion: 'Le preferenze di movimento ridotto vengono rispettate.', report: "Segnala problemi di accessibilità" },
    privacy: { title: 'Privacy', desc: 'Informativa sulla privacy per la documentazione Dotfiles.', h1: 'Privacy', minimal: 'Raccolta dati minima.', logs: 'I log vengono utilizzati per affidabilità e sicurezza.', nosale: 'Nessuna vendita di dati personali.', contact: 'Contatto privacy' },
    terms: { title: "Termini d'uso", desc: "Termini d'uso per la documentazione Dotfiles.", h1: "Termini d'uso", license: 'Il contenuto è fornito sotto licenza del repository.', warranty: 'Nessuna garanzia.', thirdparty: 'I nomi di terze parti rimangono proprietà dei rispettivi titolari.' },
    contact: { title: 'Contatti', desc: 'Informazioni di contatto dei manutentori Dotfiles.', h1: 'Contatti' },
  },
  ja: {
    accessibility: { title: 'アクセシビリティ', desc: 'Dotfilesドキュメントのアクセシビリティ情報。', h1: 'アクセシビリティ', kb: 'キーボードナビゲーションがサポートされています。', focus: 'フォーカスインジケーターが表示されます。', motion: 'モーション軽減設定が尊重されます。', report: 'アクセシビリティの問題を報告' },
    privacy: { title: 'プライバシー', desc: 'Dotfilesドキュメントのプライバシーポリシー。', h1: 'プライバシー', minimal: '最小限のデータ収集。', logs: 'ログは信頼性とセキュリティのために使用されます。', nosale: '個人データの販売はありません。', contact: 'プライバシーに関するお問い合わせ' },
    terms: { title: '利用規約', desc: 'Dotfilesドキュメントの利用規約。', h1: '利用規約', license: 'コンテンツはリポジトリライセンスの下で提供されます。', warranty: '保証はありません。', thirdparty: 'サードパーティ名はその所有者の財産です。' },
    contact: { title: 'お問い合わせ', desc: 'Dotfilesメンテナーの連絡先情報。', h1: 'お問い合わせ' },
  },
  ko: {
    accessibility: { title: '접근성', desc: 'Dotfiles 문서의 접근성 정보.', h1: '접근성', kb: '키보드 탐색이 지원됩니다.', focus: '포커스 표시기가 표시됩니다.', motion: '줄어든 모션 설정이 존중됩니다.', report: '접근성 문제 신고' },
    privacy: { title: '개인정보 보호', desc: 'Dotfiles 문서의 개인정보 보호 정책.', h1: '개인정보 보호', minimal: '최소한의 데이터 수집.', logs: '로그는 안정성과 보안을 위해 사용됩니다.', nosale: '개인 데이터 판매 없음.', contact: '개인정보 보호 문의' },
    terms: { title: '이용약관', desc: 'Dotfiles 문서의 이용약관.', h1: '이용약관', license: '콘텐츠는 저장소 라이선스에 따라 제공됩니다.', warranty: '보증 없음.', thirdparty: '타사 명칭은 해당 소유자의 재산입니다.' },
    contact: { title: '연락처', desc: 'Dotfiles 관리자 연락처 정보.', h1: '연락처' },
  },
  nl: {
    accessibility: { title: 'Toegankelijkheid', desc: 'Toegankelijkheidsinformatie voor de Dotfiles-documentatie.', h1: 'Toegankelijkheid', kb: 'Toetsenbordnavigatie wordt ondersteund.', focus: 'Focusindicatoren zijn zichtbaar.', motion: 'Voorkeuren voor verminderde beweging worden gerespecteerd.', report: 'Toegankelijkheidsproblemen melden' },
    privacy: { title: 'Privacy', desc: 'Privacybeleid voor de Dotfiles-documentatie.', h1: 'Privacy', minimal: 'Minimale gegevensverzameling.', logs: 'Logs worden gebruikt voor betrouwbaarheid en beveiliging.', nosale: 'Geen verkoop van persoonlijke gegevens.', contact: 'Privacycontact' },
    terms: { title: 'Voorwaarden', desc: 'Gebruiksvoorwaarden voor de Dotfiles-documentatie.', h1: 'Voorwaarden', license: 'Inhoud wordt verstrekt onder de repositorylicentie.', warranty: 'Geen garantie.', thirdparty: 'Namen van derden blijven eigendom van hun houders.' },
    contact: { title: 'Contact', desc: 'Contactgegevens van de Dotfiles-beheerders.', h1: 'Contact' },
  },
  pt: {
    accessibility: { title: 'Acessibilidade', desc: 'Informações de acessibilidade para a documentação Dotfiles.', h1: 'Acessibilidade', kb: 'Navegação por teclado é suportada.', focus: 'Indicadores de foco são visíveis.', motion: 'Preferências de movimento reduzido são respeitadas.', report: 'Reportar problemas de acessibilidade' },
    privacy: { title: 'Privacidade', desc: 'Política de privacidade para a documentação Dotfiles.', h1: 'Privacidade', minimal: 'Coleta mínima de dados.', logs: 'Logs são usados para confiabilidade e segurança.', nosale: 'Sem venda de dados pessoais.', contact: 'Contato de privacidade' },
    terms: { title: 'Termos', desc: 'Termos de uso para a documentação Dotfiles.', h1: 'Termos', license: 'O conteúdo é fornecido sob a licença do repositório.', warranty: 'Sem garantia.', thirdparty: 'Nomes de terceiros permanecem propriedade de seus donos.' },
    contact: { title: 'Contato', desc: 'Informações de contato dos mantenedores do Dotfiles.', h1: 'Contato' },
  },
  ru: {
    accessibility: { title: 'Доступность', desc: 'Информация о доступности документации Dotfiles.', h1: 'Доступность', kb: 'Навигация с клавиатуры поддерживается.', focus: 'Индикаторы фокуса видимы.', motion: 'Настройки уменьшенного движения учитываются.', report: 'Сообщить о проблемах доступности' },
    privacy: { title: 'Конфиденциальность', desc: 'Политика конфиденциальности документации Dotfiles.', h1: 'Конфиденциальность', minimal: 'Минимальный сбор данных.', logs: 'Логи используются для надёжности и безопасности.', nosale: 'Персональные данные не продаются.', contact: 'Контакт по вопросам конфиденциальности' },
    terms: { title: 'Условия', desc: 'Условия использования документации Dotfiles.', h1: 'Условия', license: 'Контент предоставляется по лицензии репозитория.', warranty: 'Без гарантий.', thirdparty: 'Имена третьих сторон являются собственностью их владельцев.' },
    contact: { title: 'Контакты', desc: 'Контактная информация сопровождающих Dotfiles.', h1: 'Контакты' },
  },
  zh: {
    accessibility: { title: '无障碍', desc: 'Dotfiles 文档的无障碍信息。', h1: '无障碍', kb: '支持键盘导航。', focus: '焦点指示器可见。', motion: '尊重减少动画偏好。', report: '报告无障碍问题' },
    privacy: { title: '隐私', desc: 'Dotfiles 文档的隐私政策。', h1: '隐私', minimal: '最小化数据收集。', logs: '日志用于可靠性和安全性。', nosale: '不出售个人数据。', contact: '隐私联系' },
    terms: { title: '条款', desc: 'Dotfiles 文档的使用条款。', h1: '条款', license: '内容按仓库许可提供。', warranty: '不提供保证。', thirdparty: '第三方名称为其所有者的财产。' },
    contact: { title: '联系', desc: 'Dotfiles 维护者的联系信息。', h1: '联系' },
  },
  vi: {
    accessibility: { title: 'Khả năng tiếp cận', desc: 'Thông tin khả năng tiếp cận cho tài liệu Dotfiles.', h1: 'Khả năng tiếp cận', kb: 'Hỗ trợ điều hướng bàn phím.', focus: 'Chỉ báo tiêu điểm hiển thị.', motion: 'Tôn trọng tùy chọn giảm chuyển động.', report: 'Báo cáo vấn đề khả năng tiếp cận' },
    privacy: { title: 'Quyền riêng tư', desc: 'Chính sách quyền riêng tư cho tài liệu Dotfiles.', h1: 'Quyền riêng tư', minimal: 'Thu thập dữ liệu tối thiểu.', logs: 'Nhật ký được sử dụng cho độ tin cậy và bảo mật.', nosale: 'Không bán dữ liệu cá nhân.', contact: 'Liên hệ quyền riêng tư' },
    terms: { title: 'Điều khoản', desc: 'Điều khoản sử dụng cho tài liệu Dotfiles.', h1: 'Điều khoản', license: 'Nội dung được cung cấp theo giấy phép kho lưu trữ.', warranty: 'Không có bảo hành.', thirdparty: 'Tên bên thứ ba thuộc quyền sở hữu của chủ sở hữu.' },
    contact: { title: 'Liên hệ', desc: 'Thông tin liên hệ người bảo trì Dotfiles.', h1: 'Liên hệ' },
  },
  tr: {
    accessibility: { title: 'Erişilebilirlik', desc: 'Dotfiles belgeleri için erişilebilirlik bilgileri.', h1: 'Erişilebilirlik', kb: 'Klavye navigasyonu desteklenir.', focus: 'Odak göstergeleri görünürdür.', motion: 'Azaltılmış hareket tercihleri dikkate alınır.', report: 'Erişilebilirlik sorunlarını bildirin' },
    privacy: { title: 'Gizlilik', desc: 'Dotfiles belgeleri için gizlilik politikası.', h1: 'Gizlilik', minimal: 'Minimum veri toplama.', logs: 'Günlükler güvenilirlik ve güvenlik için kullanılır.', nosale: 'Kişisel veri satışı yoktur.', contact: 'Gizlilik iletişim' },
    terms: { title: 'Koşullar', desc: 'Dotfiles belgeleri için kullanım koşulları.', h1: 'Koşullar', license: 'İçerik depo lisansı altında sağlanır.', warranty: 'Garanti yoktur.', thirdparty: 'Üçüncü taraf adları sahiplerinin mülküdür.' },
    contact: { title: 'İletişim', desc: 'Dotfiles bakımcılarının iletişim bilgileri.', h1: 'İletişim' },
  },
  pl: {
    accessibility: { title: 'Dostępność', desc: 'Informacje o dostępności dokumentacji Dotfiles.', h1: 'Dostępność', kb: 'Nawigacja klawiaturą jest obsługiwana.', focus: 'Wskaźniki fokusa są widoczne.', motion: 'Preferencje ograniczenia ruchu są respektowane.', report: 'Zgłoś problemy z dostępnością' },
    privacy: { title: 'Prywatność', desc: 'Polityka prywatności dokumentacji Dotfiles.', h1: 'Prywatność', minimal: 'Minimalne zbieranie danych.', logs: 'Logi służą niezawodności i bezpieczeństwu.', nosale: 'Brak sprzedaży danych osobowych.', contact: 'Kontakt w sprawie prywatności' },
    terms: { title: 'Warunki', desc: 'Warunki użytkowania dokumentacji Dotfiles.', h1: 'Warunki', license: 'Treść udostępniana na licencji repozytorium.', warranty: 'Brak gwarancji.', thirdparty: 'Nazwy stron trzecich pozostają własnością ich właścicieli.' },
    contact: { title: 'Kontakt', desc: 'Dane kontaktowe opiekunów Dotfiles.', h1: 'Kontakt' },
  },
  uk: {
    accessibility: { title: 'Доступність', desc: 'Інформація про доступність документації Dotfiles.', h1: 'Доступність', kb: 'Навігація клавіатурою підтримується.', focus: 'Індикатори фокусу видимі.', motion: 'Налаштування зменшення руху враховуються.', report: 'Повідомити про проблеми доступності' },
    privacy: { title: 'Конфіденційність', desc: 'Політика конфіденційності документації Dotfiles.', h1: 'Конфіденційність', minimal: 'Мінімальний збір даних.', logs: 'Логи використовуються для надійності та безпеки.', nosale: 'Персональні дані не продаються.', contact: 'Контакт щодо конфіденційності' },
    terms: { title: 'Умови', desc: 'Умови використання документації Dotfiles.', h1: 'Умови', license: 'Контент надається за ліцензією репозиторію.', warranty: 'Без гарантій.', thirdparty: 'Назви третіх сторін є власністю їх власників.' },
    contact: { title: 'Контакти', desc: 'Контактна інформація супровідників Dotfiles.', h1: 'Контакти' },
  },
  'zh-tw': {
    accessibility: { title: '無障礙', desc: 'Dotfiles 文件的無障礙資訊。', h1: '無障礙', kb: '支援鍵盤導航。', focus: '焦點指示器可見。', motion: '尊重減少動畫偏好。', report: '回報無障礙問題' },
    privacy: { title: '隱私', desc: 'Dotfiles 文件的隱私政策。', h1: '隱私', minimal: '最小化資料收集。', logs: '日誌用於可靠性和安全性。', nosale: '不出售個人資料。', contact: '隱私聯繫' },
    terms: { title: '條款', desc: 'Dotfiles 文件的使用條款。', h1: '條款', license: '內容按儲存庫授權提供。', warranty: '不提供保證。', thirdparty: '第三方名稱為其所有者的財產。' },
    contact: { title: '聯繫', desc: 'Dotfiles 維護者的聯繫資訊。', h1: '聯繫' },
  },
  th: {
    accessibility: { title: 'การเข้าถึง', desc: 'ข้อมูลการเข้าถึงสำหรับเอกสาร Dotfiles', h1: 'การเข้าถึง', kb: 'รองรับการนำทางด้วยแป้นพิมพ์', focus: 'ตัวบ่งชี้โฟกัสมองเห็นได้', motion: 'เคารพการตั้งค่าลดการเคลื่อนไหว', report: 'รายงานปัญหาการเข้าถึง' },
    privacy: { title: 'ความเป็นส่วนตัว', desc: 'นโยบายความเป็นส่วนตัวสำหรับเอกสาร Dotfiles', h1: 'ความเป็นส่วนตัว', minimal: 'เก็บข้อมูลน้อยที่สุด', logs: 'บันทึกใช้สำหรับความน่าเชื่อถือและความปลอดภัย', nosale: 'ไม่ขายข้อมูลส่วนบุคคล', contact: 'ติดต่อเรื่องความเป็นส่วนตัว' },
    terms: { title: 'เงื่อนไข', desc: 'เงื่อนไขการใช้งานสำหรับเอกสาร Dotfiles', h1: 'เงื่อนไข', license: 'เนื้อหาให้บริการภายใต้สัญญาอนุญาตของที่เก็บ', warranty: 'ไม่มีการรับประกัน', thirdparty: 'ชื่อบุคคลที่สามเป็นทรัพย์สินของเจ้าของ' },
    contact: { title: 'ติดต่อ', desc: 'ข้อมูลติดต่อผู้ดูแล Dotfiles', h1: 'ติดต่อ' },
  },
  ro: {
    accessibility: { title: 'Accesibilitate', desc: 'Informații de accesibilitate pentru documentația Dotfiles.', h1: 'Accesibilitate', kb: 'Navigarea cu tastatura este suportată.', focus: 'Indicatorii de focus sunt vizibili.', motion: 'Preferințele de mișcare redusă sunt respectate.', report: 'Raportați probleme de accesibilitate' },
    privacy: { title: 'Confidențialitate', desc: 'Politica de confidențialitate pentru documentația Dotfiles.', h1: 'Confidențialitate', minimal: 'Colectare minimă de date.', logs: 'Jurnalele sunt folosite pentru fiabilitate și securitate.', nosale: 'Nu se vând date personale.', contact: 'Contact confidențialitate' },
    terms: { title: 'Termeni', desc: 'Termeni de utilizare pentru documentația Dotfiles.', h1: 'Termeni', license: 'Conținutul este furnizat sub licența depozitului.', warranty: 'Fără garanție.', thirdparty: 'Numele terților rămân proprietatea deținătorilor lor.' },
    contact: { title: 'Contact', desc: 'Informații de contact ale întreținătorilor Dotfiles.', h1: 'Contact' },
  },
}

function buildBody(localeKey, slug) {
  const t = i18n[localeKey]
  if (!t) return null
  const p = t[slug]
  if (!p) return null

  if (slug === 'accessibility') {
    return `# ${p.h1}\n\n- ${p.kb}\n- ${p.focus}\n- ${p.motion}\n\n${p.report}: [info@dotfiles.io](mailto:info@dotfiles.io).`
  }
  if (slug === 'privacy') {
    return `# ${p.h1}\n\n- ${p.minimal}\n- ${p.logs}\n- ${p.nosale}\n\n${p.contact}: [info@dotfiles.io](mailto:info@dotfiles.io).`
  }
  if (slug === 'terms') {
    return `# ${p.h1}\n\n- ${p.license}\n- ${p.warranty}\n- ${p.thirdparty}`
  }
  if (slug === 'contact') {
    return `# ${p.h1}\n\n- Maintainer: Sebastien Rousseau\n- Email: [info@dotfiles.io](mailto:info@dotfiles.io)\n- Repository: [dotfiles.github.io](https://github.com/sebastienrousseau/dotfiles.github.io)`
  }
  return null
}

const slugDefs = ['accessibility', 'privacy', 'terms', 'contact']

for (const locale of locales) {
  for (const slug of slugDefs) {
    const t = i18n[locale.key]?.[slug]
    if (!t) continue
    const dir = path.join(docsRoot, locale.key, slug)
    fs.mkdirSync(dir, { recursive: true })
    const outPath = path.join(dir, 'index.md')
    const canonical = `/${locale.key}/${slug}/`
    const body = buildBody(locale.key, slug)
    const content = `---
title: ${t.title} | Dotfiles (${locale.name})
description: ${t.desc}
lang: ${locale.lang}
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: ${t.title} page preview
canonical: ${canonical}
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: ${t.title}
pageType: legal
schemaType: WebPage
---

${body}
`
    fs.writeFileSync(outPath, content)
  }
}

console.log('Generated localized legal pages.')
