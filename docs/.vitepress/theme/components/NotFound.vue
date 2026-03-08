<script setup lang="ts">
import { computed } from 'vue'

const messages: Record<string, { title: string; body: string; link: string }> = {
  en: { title: 'Page not found', body: 'The page you are looking for does not exist.', link: 'Return home' },
  ar: { title: 'الصفحة غير موجودة', body: 'الصفحة التي تبحث عنها غير موجودة.', link: 'العودة للرئيسية' },
  de: { title: 'Seite nicht gefunden', body: 'Die gesuchte Seite existiert nicht.', link: 'Zur Startseite' },
  es: { title: 'Pagina no encontrada', body: 'La pagina que buscas no existe.', link: 'Volver al inicio' },
  fr: { title: 'Page non trouvee', body: 'La page que vous recherchez n\'existe pas.', link: 'Retour a l\'accueil' },
  he: { title: 'הדף לא נמצא', body: 'הדף שאתה מחפש אינו קיים.', link: 'חזרה לדף הבית' },
  hi: { title: 'पृष्ठ नहीं मिला', body: 'जिस पृष्ठ की आप तलाश कर रहे हैं वह मौजूद नहीं है।', link: 'मुखपृष्ठ पर लौटें' },
  id: { title: 'Halaman tidak ditemukan', body: 'Halaman yang Anda cari tidak ada.', link: 'Kembali ke beranda' },
  it: { title: 'Pagina non trovata', body: 'La pagina che stai cercando non esiste.', link: 'Torna alla home' },
  ja: { title: 'ページが見つかりません', body: 'お探しのページは存在しません。', link: 'ホームに戻る' },
  ko: { title: '페이지를 찾을 수 없습니다', body: '찾고 있는 페이지가 존재하지 않습니다.', link: '홈으로 돌아가기' },
  nl: { title: 'Pagina niet gevonden', body: 'De pagina die u zoekt bestaat niet.', link: 'Terug naar home' },
  pt: { title: 'Pagina nao encontrada', body: 'A pagina que voce procura nao existe.', link: 'Voltar ao inicio' },
  ru: { title: 'Страница не найдена', body: 'Запрашиваемая страница не существует.', link: 'Вернуться на главную' },
  zh: { title: '页面未找到', body: '您查找的页面不存在。', link: '返回首页' },
  vi: { title: 'Khong tim thay trang', body: 'Trang ban dang tim khong ton tai.', link: 'Quay ve trang chu' },
  tr: { title: 'Sayfa bulunamadi', body: 'Aradiginiz sayfa mevcut degil.', link: 'Ana sayfaya don' },
  pl: { title: 'Strona nie znaleziona', body: 'Szukana strona nie istnieje.', link: 'Powrot na strone glowna' },
  uk: { title: 'Сторінку не знайдено', body: 'Сторінка, яку ви шукаєте, не існує.', link: 'Повернутися на головну' },
  'zh-tw': { title: '找不到頁面', body: '您查找的頁面不存在。', link: '返回首頁' },
  th: { title: 'ไม่พบหน้า', body: 'ไม่พบหน้าที่คุณกำลังมองหา', link: 'กลับหน้าแรก' },
  ro: { title: 'Pagina nu a fost gasita', body: 'Pagina pe care o cautati nu exista.', link: 'Inapoi acasa' },
}

const locale = computed(() => {
  if (typeof window === 'undefined') return 'en'
  const segments = window.location.pathname.split('/').filter(Boolean)
  const first = segments[0]
  return first && messages[first] ? first : 'en'
})

const msg = computed(() => messages[locale.value] ?? messages.en)
const homeLink = computed(() => `/${locale.value}/`)
</script>

<template>
  <div class="not-found">
    <p class="code">404</p>
    <h1 class="title">{{ msg.title }}</h1>
    <p class="body">{{ msg.body }}</p>
    <a class="home-link" :href="homeLink">{{ msg.link }}</a>
  </div>
</template>

<style scoped>
.not-found {
  padding: 4rem 1.5rem;
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.code {
  font-size: 4rem;
  font-weight: 700;
  color: var(--apple-text-secondary);
  margin: 0 0 0.5rem;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--apple-text-primary);
  margin: 0 0 0.75rem;
}

.body {
  color: var(--apple-text-secondary);
  margin: 0 0 1.5rem;
}

.home-link {
  color: var(--apple-link);
  font-weight: 500;
}

.home-link:hover {
  color: var(--apple-link-hover);
  text-decoration: underline;
}
</style>
