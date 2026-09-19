# Health Care Pro (HCP) — Web Sitesi

Production-ready, statik (build sonrası sunucu tarafı bağımlılığı olmayan) çok sayfalı web sitesi.
Next.js/React yerine **bağımlılıksız (zero-dependency) bir Node.js statik site üreteci** kullanıldı — bkz.
["Neden bu mimari?"](#neden-bu-mimari) bölümü. Sonuç, Cloudflare Pages'e doğrudan yüklenebilecek saf
HTML/CSS/JS dosyalarından oluşan bir `dist/` klasörüdür.

---

## İçindekiler

1. [Hızlı Başlangıç](#hızlı-başlangıç)
2. [Proje Yapısı](#proje-yapısı)
3. [Neden Bu Mimari?](#neden-bu-mimari)
4. [İçerik Nasıl Değiştirilir?](#i̇çerik-nasıl-değiştirilir)
5. [Yeni Hizmet / Blog Yazısı Ekleme](#yeni-hizmet--blog-yazısı-ekleme)
6. [Logo Değiştirme](#logo-değiştirme)
7. [WhatsApp / Telefon / Sosyal Medya Değiştirme](#whatsapp--telefon--sosyal-medya-değiştirme)
8. [Form Backend Entegrasyonu](#form-backend-entegrasyonu)
9. [SEO: Sitemap, Robots, Canonical, Schema](#seo-sitemap-robots-canonical-schema)
10. [Güvenlik Ayarları](#güvenlik-ayarları)
11. [Cloudflare Pages Deployment](#cloudflare-pages-deployment)
12. [Custom Domain Bağlama](#custom-domain-bağlama)
13. [QA / Test Süreci](#qa--test-süreci)
14. [Bilinen Sınırlamalar ve Eksik Bilgiler](#bilinen-sınırlamalar-ve-eksik-bilgiler)
15. [Deploy Sonrası Kontrol Listesi](#deploy-sonrası-kontrol-listesi)

---

## Hızlı Başlangıç

Bağımlılık **yoktur** (harici npm paketi kurulmaz), bu yüzden `npm install` çalıştırmanıza gerek yoktur —
yine de alışkanlık gereği çalıştırırsanız hata vermez, sadece yapacak bir şey bulamaz.

```bash
# 1) Siteyi üret (data/ klasöründeki içerikten dist/ klasörünü oluşturur)
npm run build
# eşdeğeri: node generate.js

# 2) Yerel önizleme sunucusu başlat (http://localhost:8080)
npm run serve
# eşdeğeri: node serve.js

# 3) Otomatik QA kontrollerini çalıştır (kırık link, HTML etiket dengesi, JSON-LD doğrulama)
npm run qa
```

`dist/` klasörü **üretilen** çıktıdır ve doğrudan bu haliyle herhangi bir statik barındırma servisine
(Cloudflare Pages, Netlify, Vercel static, S3, vb.) yüklenebilir.

---

## Proje Yapısı

```
/
├── data/                  # TÜM içerik burada — kod değil, veri
│   ├── site.js            # Marka bilgileri, telefon, e-posta, sosyal medya
│   ├── categories.js      # 6 hizmet kategorisi (Genel Cerrahi, Proktoloji, ...)
│   ├── services.js        # Hizmetler (1. yarı: Genel Cerrahi + Proktoloji)
│   ├── services-2.js      # Hizmetler (2. yarı: Gastroenteroloji, Varis, Obezite, Diğer)
│   ├── info-categories.js # Bilgi Merkezi'nin 7 kategorisi
│   ├── articles.js        # Bilgi Merkezi makaleleri (32 adet)
│   └── faq.js             # Genel SSS (site geneli)
│
├── lib/                   # Şablon/HTML üretim mantığı (kod)
│   ├── util.js            # HTML escape, canonical URL, liste yardımcıları
│   ├── nav.js             # Kategori/hizmet/makale ilişkilerini kuran navigasyon ağacı
│   ├── layout.js          # <head>, header, footer, schema.org üreticileri
│   ├── components.js      # Kart, accordion, breadcrumb, CTA gibi tekrar kullanılan parçalar
│   └── art.js             # Satır içi SVG illüstrasyonlar (hero görseli)
│
├── assets/                # Kaynak statik dosyalar (generate.js bunları dist/'e kopyalar)
│   ├── css/style.css      # Tüm site CSS'i (tasarım tokenleri dahil)
│   ├── js/main.js         # Mobil menü, mega menü, form doğrulama, arama, çerez banner'ı
│   └── img/                # Logo türevleri (header, favicon, mark)
│
├── generate.js            # ANA ÜRETEÇ — tüm sayfaları data/ ve lib/ kullanarak dist/'e yazar
├── serve.js                # Bağımlılıksız yerel önizleme sunucusu
├── qa-check.js             # Kırık link/asset, duplicate title/description, eksik alt, JSON-LD kontrolü
├── html-lint.js            # HTML etiket dengesi (açık/kapalı tag) kontrolü
├── package.json
│
└── dist/                   # ÜRETİLEN ÇIKTI (build sonrası oluşur) — Cloudflare Pages'e bu yüklenir
    ├── index.html, hakkimizda/, hizmetler/, bilgi-merkezi/, sss/, iletisim/, ...
    ├── assets/
    ├── sitemap.xml, robots.txt, site.webmanifest, favicon.ico
    └── _headers, _redirects   # Cloudflare Pages'e özel yapılandırma dosyaları
```

**Önemli:** `dist/` klasörünü elle düzenlemeyin — her `npm run build` çalıştırıldığında tamamen
silinip yeniden oluşturulur. Tüm değişiklikler `data/`, `lib/` veya `assets/` içinde yapılmalıdır.

---

## Neden Bu Mimari?

Next.js/React tabanlı bir proje `npm install` ile üçüncü taraf paketlerin indirilmesini gerektirir. Bunun
yerine, dışarıdan hiçbir pakete ihtiyaç duymayan bir yapı tercih edildi:

- **Sıfır bağımlılık:** Sadece Node.js'in kendi standart kütüphanesi kullanıldı (`fs`, `path`, `http`).
  Bu, projeyi `npm install` adımı olmadan da *her zaman* build edilebilir ve *her zaman* çalışır kılar;
  tedarik zinciri (npm paket) güvenlik riskini de ortadan kaldırır.
- **Veri/şablon ayrımı korundu:** Brief'in 26-27. maddelerinde istenen "hizmetleri component içine
  hard-code etmek yerine merkezi veri yapısında tutma" hedefi `data/services.js`, `data/articles.js` gibi
  dosyalarla birebir karşılanıyor — sadece React yerine düz JavaScript obje dizileri kullanılıyor.
- **Cloudflare Pages ile tam uyum:** Çıktı saf statik HTML/CSS/JS olduğundan build adımı Cloudflare
  Pages tarafında da tek komut (`node generate.js`) ile çalışır, sunucu tarafı runtime gerektirmez.
- İsterseniz ileride bu veri dosyalarını değiştirmeden bir Next.js/React projesine taşımak mümkündür;
  `data/*.js` dosyaları zaten çerçeve-bağımsız düz veridir.

---

## İçerik Nasıl Değiştirilir?

Tüm metinler `data/` klasöründedir. Örneğin ana sayfa metnini değiştirmek için `generate.js` içindeki
`homePage()` fonksiyonunu, hizmet açıklamalarını değiştirmek için `data/services.js` /
`data/services-2.js` dosyalarını, marka/iletişim bilgilerini değiştirmek için `data/site.js` dosyasını
düzenleyin. Her değişiklikten sonra `npm run build` çalıştırmanız yeterlidir.

---

## Yeni Hizmet / Blog Yazısı Ekleme

### Yeni hizmet eklemek için:
1. `data/services.js` veya `data/services-2.js` içine yeni bir obje ekleyin (mevcut örnekleri kopyalayıp
   düzenlemek en kolayıdır). Zorunlu alanlar: `slug`, `categorySlug` (mevcut bir kategori slug'ı olmalı),
   `title`, `shortDescription`, `definition`, `whoEvaluated`, `diagnosis`, `procedure`, `recovery`,
   `whenToSeeDoctor`. Diğer alanlar (`symptoms`, `causes`, `treatmentOptions`, `preOp`, `postOp`, `risks`,
   `faq`, `relatedServices`, `relatedArticles`) dizi/opsiyoneldir; boş bırakılırsa o bölüm sayfada
   otomatik olarak görünmez.
2. `npm run build` çalıştırın. Yeni sayfa otomatik olarak:
   - `/hizmetler/<categorySlug>/<slug>/` adresinde oluşur,
   - kategori sayfasında, ana menüde (mega menu + mobil menü), sitemap.xml'de ve arama indeksinde görünür,
   - breadcrumb ve schema.org (BreadcrumbList + FAQPage) otomatik eklenir.

### Yeni Bilgi Merkezi yazısı eklemek için:
Aynı mantıkla `data/articles.js` dosyasına yeni bir obje ekleyin (`slug`, `categorySlug` — mevcut bir
`data/info-categories.js` slug'ı olmalı —, `title`, `shortDescription`, `intro`, `sections: [{h, p}, ...]`).

### Yeni bir kategori eklemek için:
`data/categories.js` (hizmet kategorisi) veya `data/info-categories.js` (Bilgi Merkezi kategorisi)
dosyasına yeni bir obje ekleyin; ikon için `lib/layout.js` içindeki `ICONS` nesnesine yeni bir SVG
ekleyebilir veya mevcut ikonlardan birini (`surgery`, `proctology`, `gastro`, `veins`, `metabolic`,
`other`, `info`) kullanabilirsiniz.

⚠️ **Sahte bilgi eklemeyin:** Brief'in 43. maddesi gereği doktor ismi, hastane ismi, hasta yorumu, vaka
sayısı, başarı oranı, fiyat, ödül veya sertifika gibi doğrulanmamış bilgiler asla eklenmemelidir.

---

## Logo Değiştirme

1. Yeni logo dosyanızı `assets/img/` klasörüne koyun.
2. En kolayı: mevcut dosya adlarının (`hcp-logo-header.png`, `hcp-logo-header@2x.png`,
   `hcp-logo-mark-180.png`, `hcp-logo-mark-512.png`, `hcp-logo-favicon-32.png`,
   `hcp-logo-favicon-16.png`) üzerine aynı isim ve boyut oranlarıyla yeni logonuzu kaydedin. Farklı
   dosya adları kullanmak isterseniz `generate.js` içindeki `copyAssets()` fonksiyonundaki `imgFiles`
   dizisini güncelleyin.
3. `npm run build` çalıştırın.

---

## WhatsApp / Telefon / Sosyal Medya Değiştirme

Tüm bu bilgiler tek bir yerde toplanmıştır: **`data/site.js`**. İlgili alanı güncelleyip
`npm run build` çalıştırmanız yeterlidir; header, footer, floating WhatsApp butonu, iletişim sayfası ve
tüm CTA'lar otomatik güncellenir.

---

## Form Backend Entegrasyonu

İletişim formu (`/iletisim/`) şu anda **frontend doğrulaması tamamlanmış ama gerçek bir backend'e bağlı
olmayan** durumdadır — brief'in 13. maddesindeki talimata uygun olarak sahte bir "başarıyla gönderildi"
mesajı göstermez; bunun yerine WhatsApp/e-posta ile ulaşma seçeneği sunar.

Gerçek bir backend'e bağlamak için:

1. Bir form-alma servisi kurun (örnekler: kendi yazacağınız bir Cloudflare Worker, Formspree,
   Basin, veya herhangi bir e-posta/CRM API'si). Servis, JSON body kabul eden bir POST endpoint
   sağlamalıdır.
2. `data/site.js` içindeki `contactEndpoint: null` satırını gerçek URL ile değiştirin:
   ```js
   contactEndpoint: "https://your-worker.example.workers.dev/contact",
   ```
3. **Önemli — CSP güncellemesi:** `generate.js` içindeki `buildHeadersFile()` fonksiyonunda üretilen
   `_headers` dosyasındaki `Content-Security-Policy` başlığında `connect-src 'self'` tanımlıdır. Endpoint
   farklı bir alan adındaysa (`api.example.com` gibi) bu satırı
   `connect-src 'self' https://api.example.com;` şeklinde güncellemeniz gerekir, aksi hâlde tarayıcı
   isteği güvenlik politikası gereği engeller.
4. `npm run build` çalıştırın. `assets/js/main.js` içindeki form mantığı, `window.HCP_CONTACT_ENDPOINT`
   tanımlı olduğunda otomatik olarak `fetch()` ile JSON POST gönderir ve başarı/hata mesajlarını
   yönetir (bkz. `assets/js/main.js` → `data-contact-form` bölümü).

---

## SEO: Sitemap, Robots, Canonical, Schema

- **sitemap.xml**: `generate.js` her sayfa üretildiğinde otomatik olarak `trackUrl()` ile URL listesine
  eklenir; build sonunda `dist/sitemap.xml` olarak yazılır. `/arama/` sayfası ve `404.html` bilinçli
  olarak sitemap'e dahil edilmez (madde 37).
- **robots.txt**: `dist/robots.txt`, sitemap referansı ve `/arama/` disallow kuralıyla birlikte üretilir.
- **canonical**: Her sayfada `<link rel="canonical">` otomatik eklenir (`lib/util.js` → `canonical()`).
  Domain tekilleştirmesi (www/non-www, trailing slash) `data/site.js` içindeki tek `domain` değeri ve
  tüm URL'lerin sonunda `/` kullanılmasıyla sağlanır (madde 36). www/non-www ve zorunlu HTTPS yönlendirmesi
  Cloudflare Pages/DNS seviyesinde ayarlanmalıdır (bkz. [Custom Domain Bağlama](#custom-domain-bağlama)).
- **Open Graph / Twitter Card**: Her sayfada otomatik (`lib/layout.js` → `page()`).
- **Structured data (JSON-LD)**: `Organization` ve `WebSite` şeması ana sayfada; her sayfada
  `BreadcrumbList`; SSS içeren sayfalarda `FAQPage`; Bilgi Merkezi yazılarında `Article`. Yalnızca
  brief'te verilen gerçek bilgiler (isim, URL, e-posta, telefon, sosyal medya) kullanılır — uydurma
  doktor/hastane/rating/review/ödül/fiyat bilgisi **eklenmemiştir** (madde 28, 43).
- **Duplicate title/description** olmadığı `npm run qa` ile otomatik doğrulanır.

---

## Güvenlik Ayarları

`dist/_headers` dosyası (Cloudflare Pages tarafından otomatik okunur) şu başlıkları tüm sayfalara uygular:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- `Content-Security-Policy`: yalnızca kendi alan adına (`'self'`) ve Google Fonts'a (stil/font) izin
  verir; `script-src 'self'` — inline `<script>` etiketi **kullanılmamıştır** (tüm JS harici dosyalardan
  yüklenir), bu sayede `'unsafe-inline'` script iznine ihtiyaç yoktur.
- `Strict-Transport-Security` (HSTS, preload dahil).

Ek notlar:
- Form; XSS'e karşı `esc()` fonksiyonuyla HTML kaçışlaması, tarayıcı tarafı doğrulama ve (backend
  bağlandığında) JSON içerik tipiyle CSRF yüzeyini azaltacak şekilde tasarlanmıştır. Gerçek bir backend
  bağlarsanız, o backend'de de kendi CSRF/hız sınırlama önlemlerinizi almanız önerilir.
- Depoda hiçbir gerçek API anahtarı veya gizli bilgi yoktur (`contactEndpoint` varsayılan olarak `null`).
  İleride bir API anahtarı gerekirse bunu **asla** frontend koduna gömmeyin; bir sunucu tarafı proxy
  (Cloudflare Worker gibi) kullanın.
- Bağımlılık olmadığı için (`package.json` → `dependencies: {}`) tedarik zinciri (npm paket) güvenlik
  riski yoktur.

---

## Cloudflare Pages Deployment

1. Bu depoyu (ZIP içeriğini) bir Git deposuna yükleyin (GitHub/GitLab) **veya** Cloudflare Pages'in
   "Doğrudan Yükleme" (Direct Upload) seçeneğini kullanın.
2. **Git tabanlı deploy için:**
   - Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
   - **Build command:** `node generate.js`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 veya üzeri (Cloudflare Pages ayarlarında `NODE_VERSION` ortam değişkeni
     ile belirtebilirsiniz, örn. `18`).
   - Ortam değişkeni gerekmez (proje sıfır bağımlılıklıdır).
3. **Doğrudan yükleme için:** Önce yerelde `npm run build` çalıştırın, ardından yalnızca **`dist/`
   klasörünün içeriğini** (klasörün kendisini değil, içindekileri) Cloudflare Pages'in
   "Upload assets" ekranına sürükleyin.
4. Deploy sonrası Cloudflare otomatik olarak `dist/_headers` ve `dist/_redirects` dosyalarını okuyup
   uygular; ek bir yapılandırma gerekmez.

---

## Custom Domain Bağlama

1. Cloudflare Pages projenizde **Custom domains** sekmesine gidin ve `healthcarepro.com.tr` alan adını
   ekleyin.
2. Alan adınızın DNS yönetimi Cloudflare'de ise, önerilen CNAME/A kaydı otomatik olarak eklenir.
   Değilse, Cloudflare'in verdiği CNAME kaydını mevcut DNS sağlayıcınıza (alan adını satın aldığınız
   yer) ekleyin.
3. **www / non-www:** `data/site.js` içindeki `domain` değeri `https://healthcarepro.com.tr` (non-www)
   olarak ayarlanmıştır; tüm canonical/sitemap/OG URL'leri bununla tutarlıdır. `www.healthcarepro.com.tr`
   üzerinden gelen trafiği non-www'a yönlendirmek için Cloudflare Pages'in "Custom domains" ekranında
   hem `healthcarepro.com.tr` hem `www.healthcarepro.com.tr` ekleyip, www için bir "Redirect Rule"
   (301, non-www hedefe) tanımlayın.
4. HTTPS, Cloudflare Pages'te varsayılan olarak zorunludur (otomatik SSL sertifikası).

---

## QA / Test Süreci

Teslimden önce bu depo üzerinde otomatik olarak şu kontroller çalıştırılmış ve **tüm kontroller
geçmiştir**:

| Kontrol | Araç | Sonuç |
|---|---|---|
| Kırık iç link (`href`) | `qa-check.js` | 12.714 link tarandı, 0 kırık |
| Eksik/kırık asset (`src`) | `qa-check.js` | 516 kaynak tarandı, 0 kırık |
| Duplicate `<title>` | `qa-check.js` | 0 tekrar |
| Duplicate meta description | `qa-check.js` | 0 tekrar |
| Eksik `alt` metni | `qa-check.js` | 0 eksik |
| Geçersiz JSON-LD (schema.org) | `qa-check.js` | 0 hata |
| HTML etiket dengesi (açık/kapalı) | `html-lint.js` | 86 dosya, 0 sorun |
| JS syntax hatası | `node --check` | `main.js`, `generate.js`, `serve.js`, tüm `lib/`+`data/` dosyaları — hata yok |
| Her sayfada tek `<h1>` | manuel script | Tüm sayfalarda tam olarak 1 adet |
| `viewport` / `canonical` eksikliği | manuel script | 86/86 sayfada mevcut |

Bu kontrolleri tekrar çalıştırmak için: `npm run qa`

**Not — tarayıcı/görsel test sınırlaması:** Bu ortamda internet erişimi ve tarayıcı otomasyonu
(Chromium/Puppeteer) bulunmadığından, gerçek bir tarayıcıda piksel bazlı görsel test veya konsol
hata/network sekmesi kontrolü yapılamamıştır. Yukarıdaki testler kod/yapı seviyesindedir. Yayına
almadan önce Chrome DevTools ile en az bir kez manuel olarak mobil ve masaüstü görünümü, konsol
hataları ve Lighthouse/PageSpeed skorlarını kontrol etmenizi öneririz.

---

## Bilinen Sınırlamalar ve Eksik Bilgiler

Brief'te açıkça belirtildiği gibi hastane isimleri, doktor isimleri, hasta yorumları, vaka sayıları,
fiyatlar ve sertifikalar **verilmediği için bunlar uydurulmamıştır**. Aşağıdaki yerler gerçek bilgilerle
doldurulmayı beklemektedir:

- **`/kvkk/` sayfası:** `[ŞİRKET/KURUM UNVANI GİRİNİZ]` ve güncelleme tarihi placeholder olarak
  bırakılmıştır — gerçek tüzel kişilik unvanı ve MERSİS bilgisi eklenmelidir.
- **Hizmet bölgesi / hastane isimleri:** Sitede yalnızca "İstanbul Avrupa Yakası'nda, anlaşmalı özel
  hastanelerde hizmet." ifadesi kullanılmıştır; hastane isimleri paylaşılmadığı için eklenmemiştir.
- **İletişim formu backend'i:** Varsayılan olarak bağlı değildir (bkz.
  [Form Backend Entegrasyonu](#form-backend-entegrasyonu)).
- **Gizlilik Politikası / Kullanım Koşulları:** Genel şablon niteliğindedir; nihai yayın öncesi bir hukuk
  danışmanı tarafından gözden geçirilmesi önerilir (bu, sitenin kendisinde de belirtilmiştir).
- **Toplam hizmet sayısı:** Brief'in 5. maddesinde "27 hizmet sayfası" belirtilmiş, ancak 4. bölümdeki
  menü yapısında tek tek listelenen alt hizmetler toplamda **28** adettir (Genel Cerrahi 8 + Proktoloji 4
  + Gastroenteroloji 5 + Varis 2 + Obezite/Metabolik Cerrahi 8 + Diğer 1). Hiçbir hizmet atlanmamış,
  listelenen hizmetlerin tamamı (28) sayfa olarak oluşturulmuştur.

---

## Deploy Sonrası Kontrol Listesi

- [ ] `npm run build` hatasız tamamlandı
- [ ] `npm run qa` tüm kontrollerden geçti (0 kırık link/asset, 0 duplicate, 0 eksik alt)
- [ ] Cloudflare Pages build log'unda hata yok
- [ ] Canlı domain üzerinden ana sayfa, en az 3 hizmet sayfası, en az 2 Bilgi Merkezi yazısı açılıyor
- [ ] 404 sayfası çalışıyor (`/rastgele-var-olmayan-sayfa/` gibi bir adres deneyin)
- [ ] Favicon tarayıcı sekmesinde görünüyor
- [ ] WhatsApp, telefon (`tel:`) ve e-posta (`mailto:`) linkleri doğru numarayı/adresi açıyor
- [ ] Instagram/Facebook/TikTok linkleri doğru hesaba gidiyor
- [ ] Mobilde hamburger menü açılıp kapanıyor, ESC ile kapanıyor, arka plan scroll kilitleniyor
- [ ] Masaüstünde "Hizmetler" ve "Bilgi Merkezi" mega menüleri açılıyor
- [ ] FAQ accordion'lar açılıp kapanıyor
- [ ] Arama sayfası (`/arama/`) bir terim yazınca sonuç gösteriyor
- [ ] `https://healthcarepro.com.tr/sitemap.xml` ve `/robots.txt` canlıda erişilebilir
- [ ] Google Rich Results Test ile birkaç sayfanın JSON-LD şeması doğrulandı
- [ ] KVKK sayfasındaki `[ŞİRKET/KURUM UNVANI GİRİNİZ]` gerçek bilgiyle güncellendi
- [ ] İletişim formu backend'i bağlandıysa gerçek bir test gönderimi yapıldı
