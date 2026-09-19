const fs = require("fs");
const path = require("path");

const site = require("./data/site.js");
const nav = require("./lib/nav.js");
const L = require("./lib/layout.js");
const C = require("./lib/components.js");
const { esc, ul, canonical } = require("./lib/util.js");
const { heroArt } = require("./lib/art.js");
const { banners } = require("./lib/banner.js");
const faqGeneral = require("./data/faq.js");

const OUT = path.join(__dirname, "dist");

function write(relPath, content) {
  const full = path.join(OUT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf8");
}

function writePage(urlPath, html) {
  // urlPath like "/hakkimizda/" -> dist/hakkimizda/index.html ; "/" -> dist/index.html
  const clean = urlPath === "/" ? "" : urlPath.replace(/^\/+|\/+$/g, "");
  const rel = clean === "" ? "index.html" : path.join(clean, "index.html");
  write(rel, html);
}

const allUrls = []; // for sitemap
function trackUrl(p) { allUrls.push(p); }

/* ===================================================================
   HOME PAGE
   =================================================================== */
function homePage() {
  const path_ = "/";
  const categoryCards = nav.categories.map(C.categoryCard).join("");

  const body = `
  ${banners()}

  <section class="hero">
    <div class="container hero__grid">
      <div>
        <span class="hero__eyebrow-badge">${L.icon("info")} Sağlık Bilgilendirme Platformu</span>
        <h1>${esc(site.siteName)}</h1>
        <p class="hero__tagline">${esc(site.tagline)}</p>
        <p class="lead">Sağlık hizmetlerine erişimde doğru bilgi, doğru yönlendirme ve kişiye özel değerlendirme yaklaşımı.</p>
        <div class="hero__ctas">
          <a class="btn btn--primary" href="/hizmetler/">Bilgi Al</a>
          <a class="btn btn--whatsapp" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">${L.icon("whatsapp")} WhatsApp'tan Ulaş</a>
          <a class="btn btn--ghost-light" href="/iletisim/">İletişime Geç</a>
        </div>
      </div>
      <div class="hero__art">${heroArt()}${C.obesityCenterBadge("obesity-center-badge--hero")}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="badge">Health Care Pro Nedir?</span>
        <h2>Sağlık hizmetlerinde doğru bilgi ve yönlendirme</h2>
        <p>Health Care Pro, İstanbul Avrupa Yakası'nda anlaşmalı özel hastanelerde sunulan sağlık hizmetleri hakkında
        güvenilir, anlaşılır ve objektif bilgi sunan bir platformdur. Amacımız, hastaların değerlendirme sürecine
        bilinçli şekilde katılmasını sağlamak ve doğru yönlendirme yapmaktır. Sitede yer alan içerikler bilgilendirme
        amaçlıdır; tanı ve tedavi kararı her zaman hekim değerlendirmesi sonrasında verilir.</p>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head section-head--center">
        <h2>Hizmet Kategorilerimiz</h2>
        <p>Genel cerrahiden obezite ve metabolik cerrahiye, proktolojiden varis tedavilerine kadar geniş bir yelpazede
        bilgilendirme sunuyoruz.</p>
      </div>
      <div class="cards-grid cards-grid--3">${categoryCards}</div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="badge">Öne Çıkan Sağlık Hizmetleri</span>
        <h2>Sık değerlendirilen konular</h2>
      </div>
      <div class="cards-grid cards-grid--3">
        ${["tup-mide-ameliyati", "hemoroid-tedavisi", "kolonoskopi", "varis-tedavisi", "safra-kesesi-ameliyati", "tiroid-cerrahisi"]
          .map((slug) => C.serviceCard(nav.getService(slug)))
          .join("")}
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head">
        <span class="badge">Obezite ve Metabolik Sağlık</span>
        <h2>Obezite ve metabolik cerrahi</h2>
        <p>Tüp mide, mide bypass, SASI bypass ve cerrahi dışı yöntemler dahil olmak üzere kilo yönetiminde
        değerlendirilen yaklaşımlar hakkında bilgi alın.</p>
      </div>
      <div class="cards-grid cards-grid--4">
        ${["tup-mide-ameliyati", "mide-bypass-ameliyati", "mide-balonu", "metabolik-saglik-ve-biyobelirtec-degerlendirmesi"]
          .map((slug) => C.serviceCard(nav.getService(slug)))
          .join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="badge">Proktoloji</span>
        <h2>Proktolojik hastalıklar</h2>
        <p>Hemoroid, anal fissür ve anal fistül gibi makat ve rektum bölgesi hastalıkları hakkında bilgilendirme.</p>
      </div>
      <div class="cards-grid cards-grid--3">
        ${["proktolojik-hastaliklar", "anal-fissur", "anal-fistul"].map((slug) => C.serviceCard(nav.getService(slug))).join("")}
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head">
        <span class="badge">Sindirim Sistemi</span>
        <h2>Sindirim sistemi ve endoskopik işlemler</h2>
        <p>Endoskopi, gastroskopi ve kolonoskopi gibi tanı yöntemleri ile kolon kanseri taramasının önemi hakkında bilgi.</p>
      </div>
      <div class="cards-grid cards-grid--4">
        ${["endoskopi", "gastroskopi", "kolonoskopi", "kolon-kanseri-taramasi"].map((slug) => C.serviceCard(nav.getService(slug))).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="badge">Varis Tedavileri</span>
        <h2>Varis tedavileri</h2>
        <p>Bacak varislerinin değerlendirilmesi ve skleroterapi dahil tedavi seçenekleri hakkında bilgi.</p>
      </div>
      <div class="cards-grid cards-grid--2">
        ${["varis-tedavisi", "skleroterapi-ile-varis-tedavisi"].map((slug) => C.serviceCard(nav.getService(slug))).join("")}
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head">
        <span class="badge">Genel Cerrahi</span>
        <h2>Genel cerrahi hizmetleri</h2>
        <p>Tiroid, safra kesesi, laparoskopik cerrahi ve kıl dönmesi gibi konularda bilgilendirme.</p>
      </div>
      <div class="cards-grid cards-grid--4">
        ${["tiroid-cerrahisi", "safra-kesesi-ameliyati", "laparoskopik-kapali-cerrahi", "kil-donmesi-tedavisi"].map((slug) => C.serviceCard(nav.getService(slug))).join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--center">
        <h2>Nasıl Çalışıyoruz?</h2>
        <p>Sağlık sürecinizde size doğru yönlendirmeyi sunmak için izlediğimiz adımlar.</p>
      </div>
      <div class="steps">
        <div class="step"><div class="step__num">1</div><div><h4>İletişime Geçin</h4><p>WhatsApp, telefon veya iletişim formu üzerinden bize ulaşın ve ilgilendiğiniz konuyu belirtin.</p></div></div>
        <div class="step"><div class="step__num">2</div><div><h4>Bilgilendirme</h4><p>İlgilendiğiniz hizmet hakkında genel bilgi ve yönlendirme sağlanır.</p></div></div>
        <div class="step"><div class="step__num">3</div><div><h4>Anlaşmalı Hastaneye Yönlendirme</h4><p>Anlaşmalı özel hastanelerdeki uygun değerlendirme süreci hakkında bilgi verilir.</p></div></div>
        <div class="step"><div class="step__num">4</div><div><h4>Hekim Değerlendirmesi</h4><p>Kesin tanı ve tedavi kararı, ilgili hekimin sizi değerlendirmesi sonrasında belirlenir.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head section-head--center">
        <h2>Neden Doğru Bilgi Önemli?</h2>
        <p style="max-width:720px;margin:0 auto;">Sağlıkla ilgili kararlar, güvenilir ve anlaşılır bilgiye dayanmalıdır.
        Health Care Pro olarak amacımız, hastaların sağlık süreçleri hakkında bilinçli sorular sorabilmesini ve
        değerlendirme sürecine hazırlıklı katılmasını desteklemektir. Kesin tıbbi karar her zaman hekim
        değerlendirmesine bağlıdır.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--center">
        <h2>Sık Sorulan Sorular</h2>
      </div>
      <div style="max-width:760px;margin:0 auto;">${C.faqAccordion(faqGeneral.slice(0, 5))}</div>
      <p class="text-center" style="margin-top:20px;"><a href="/sss/">Tüm soruları görüntüleyin →</a></p>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head section-head--center">
        <span class="badge">Bilgi Merkezi</span>
        <h2>Sağlık konularında bilgi merkezimiz</h2>
        <p>Obezite, proktoloji, sindirim sistemi ve daha fazlası hakkında kapsamlı içerikler.</p>
      </div>
      <div class="cards-grid cards-grid--4">
        ${nav.infoCategories.slice(0, 4).map(C.infoCategoryCard).join("")}
      </div>
      <p class="text-center" style="margin-top:24px;"><a href="/bilgi-merkezi/">Bilgi Merkezi'nin tamamını görüntüleyin →</a></p>
    </div>
  </section>

  ${C.ctaBand({})}
  `;

  writePage(
    path_,
    L.page({
      title: `${site.siteName} | ${site.tagline}`,
      description:
        "Health Care Pro, İstanbul Avrupa Yakası'nda anlaşmalı özel hastanelerde sunulan sağlık hizmetleri hakkında bilgilendirme ve yönlendirme platformudur.",
      path: path_,
      activeTop: "home",
      bodyContent: body,
      schemas: [L.organizationSchema(), L.websiteSchema()],
    })
  );
  trackUrl(path_);
}

/* ===================================================================
   ABOUT PAGE
   =================================================================== */
function aboutPage() {
  const p = "/hakkimizda/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Hakkımızda" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container" style="max-width:820px;">
      <h1>Hakkımızda</h1>
      <p>Health Care Pro, İstanbul Avrupa Yakası'nda anlaşmalı özel hastanelerde sunulan sağlık hizmetleri hakkında
      hastaları doğru bilgiyle buluşturmayı amaçlayan bir sağlık bilgilendirme ve yönlendirme platformudur.</p>
      <p>Genel cerrahi, proktoloji, gastroenteroloji, varis tedavileri ve obezite/metabolik cerrahi başta olmak üzere
      geniş bir hizmet yelpazesinde, hastaların değerlendirme sürecine bilinçli şekilde katılmasını destekleyecek
      içerikler sunuyoruz.</p>
      <h2>Yaklaşımımız</h2>
      <p>Sitemizde yer alan tüm sağlık içerikleri, bilgilendirme amacıyla hazırlanmıştır. İçeriklerde kesin tedavi
      garantisi veya abartılı ifadeler kullanılmaz; her hastanın klinik durumunun farklı olabileceği ve tedavi
      kararının hekim değerlendirmesine bağlı olduğu vurgulanır.</p>
      <h2>Hizmet Bölgesi</h2>
      <p>${esc(site.addressShort)} ${esc(site.addressLong)}</p>
      <div class="disclaimer-box">
        Health Care Pro bir hastane değildir; anlaşmalı özel hastanelerde sunulan hizmetler hakkında bilgilendirme ve
        yönlendirme sağlayan bir platformdur.
      </div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: "Hakkımızda | Health Care Pro",
      description: "Health Care Pro'nun yaklaşımı, hizmet bölgesi ve sağlık bilgilendirme platformu olarak amacı hakkında bilgi.",
      path: p,
      activeTop: "hakkimizda",
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   HİZMETLER INDEX
   =================================================================== */
function servicesIndexPage() {
  const p = "/hizmetler/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Hizmetler" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="section-head">
        <h1>Hizmetlerimiz</h1>
        <p>Anlaşmalı özel hastanelerde değerlendirilen genel cerrahi, proktoloji, gastroenteroloji, varis tedavileri,
        obezite/metabolik cerrahi ve diğer cerrahi hizmetler hakkında bilgi alın.</p>
      </div>
      <div class="cards-grid cards-grid--3">${nav.categories.map(C.categoryCard).join("")}</div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: "Hizmetlerimiz | Health Care Pro",
      description: "Genel cerrahi, proktoloji, gastroenteroloji, varis tedavileri ve obezite/metabolik cerrahi hizmet kategorilerine genel bakış.",
      path: p,
      activeTop: "",
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

function serviceCategoryPage(cat) {
  const p = nav.categoryUrl(cat.slug);
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Hizmetler", url: "/hizmetler/" }, { label: cat.title }];
  const services = nav.servicesByCategory(cat.slug);
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="section-head">
        <h1>${esc(cat.title)}</h1>
        <p>${esc(cat.description)}</p>
        ${cat.slug === "obezite-ve-metabolik-cerrahi" ? C.obesityCenterBadge("obesity-center-badge--category") : ""}
      </div>
      <div class="cards-grid cards-grid--3">${services.map(C.serviceCard).join("")}</div>
      <div class="disclaimer-box" style="margin-top:32px;">
        Bu sayfadaki hizmet açıklamaları genel bilgilendirme amaçlıdır. Her hastanın klinik durumu farklıdır ve
        tedavi kararı hekim değerlendirmesi sonrasında belirlenir.
      </div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: `${cat.title} | Health Care Pro`,
      description: cat.shortDescription,
      path: p,
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   SERVICE DETAIL PAGE
   =================================================================== */
function servicePage(service) {
  const cat = nav.getCategory(service.categorySlug);
  const p = nav.serviceUrl(service);
  const crumbs = [
    { label: "Ana Sayfa", url: "/" },
    { label: "Hizmetler", url: "/hizmetler/" },
    { label: cat.title, url: nav.categoryUrl(cat.slug) },
    { label: service.title },
  ];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="content-layout">
        <div class="content-main">
          <span class="badge">${esc(cat.title)}</span>
          ${cat.slug === "obezite-ve-metabolik-cerrahi" ? C.obesityCenterBadge("obesity-center-badge--service") : ""}
          <h1>${esc(service.title)}</h1>
          <p class="lead" style="color:var(--ink-500);font-size:1.05rem;">${esc(service.shortDescription)}</p>
          ${C.serviceBody(service)}
        </div>
        <aside class="sidebar">
          ${C.ctaSideCard()}
          ${C.relatedServicesBlock(service.relatedServices)}
          ${C.relatedArticlesBlock(service.relatedArticles)}
          <div class="side-card">
            <h4>Sık Sorulan Sorular</h4>
            <ul><li><a href="/sss/">Genel SSS sayfasını görüntüleyin</a></li></ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: `${service.title} | ${cat.title} | Health Care Pro`,
      description: service.shortDescription,
      path: p,
      bodyContent: body,
      schemas: [
        L.breadcrumbSchema(crumbs),
        L.faqSchema(service.faq),
      ],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   BİLGİ MERKEZİ INDEX + CATEGORY + ARTICLE
   =================================================================== */
function infoIndexPage() {
  const p = "/bilgi-merkezi/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Bilgi Merkezi" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="section-head">
        <h1>Bilgi Merkezi</h1>
        <p>Obezite, proktoloji, sindirim sistemi, kolon ve rektum, varis, metabolik sağlık ve cerrahi bilgiler
        hakkında kapsamlı, bilgilendirici içerikler.</p>
      </div>
      <div class="search-box">
        <form data-search-form action="/arama/" method="get">
          <label for="home-search" class="visually-hidden" style="position:absolute;left:-9999px;">Ara</label>
          <input type="search" id="home-search" name="q" placeholder="hemoroid, tüp mide, kolonoskopi...">
          <button type="submit" aria-label="Ara">${L.icon("info")}</button>
        </form>
      </div>
      <div class="cards-grid cards-grid--3" style="margin-top:32px;">${nav.infoCategories.map(C.infoCategoryCard).join("")}</div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: "Bilgi Merkezi | Health Care Pro",
      description: "Obezite, proktoloji, sindirim sistemi, kolon-rektum, varis ve metabolik sağlık konularında bilgilendirici sağlık içerikleri.",
      path: p,
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

function infoCategoryPage(cat) {
  const p = nav.infoCategoryUrl(cat.slug);
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Bilgi Merkezi", url: "/bilgi-merkezi/" }, { label: cat.title }];
  const articles = nav.articlesByCategory(cat.slug);
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="section-head">
        <h1>${esc(cat.title)}</h1>
        <p>${esc(cat.description)}</p>
        ${cat.slug === "obezite-ve-metabolik-cerrahi" ? C.obesityCenterBadge("obesity-center-badge--category") : ""}
      </div>
      ${
        articles.length
          ? `<div class="cards-grid cards-grid--3">${articles.map(C.articleCard).join("")}</div>`
          : `<p>Bu kategoride yakında yeni içerikler yayınlanacaktır.</p>`
      }
      <div class="disclaimer-box" style="margin-top:32px;">
        Bu sayfadaki içerikler genel bilgilendirme amaçlıdır ve tıbbi tavsiye yerine geçmez.
      </div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: `${cat.title} | Bilgi Merkezi | Health Care Pro`,
      description: cat.description,
      path: p,
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

function articlePage(article) {
  const cat = nav.getInfoCategory(article.categorySlug);
  const p = nav.articleUrl(article);
  const crumbs = [
    { label: "Ana Sayfa", url: "/" },
    { label: "Bilgi Merkezi", url: "/bilgi-merkezi/" },
    { label: cat.title, url: nav.infoCategoryUrl(cat.slug) },
    { label: article.title },
  ];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <div class="content-layout">
        <div class="content-main">
          <span class="badge">${esc(cat.title)}</span>
          <h1>${esc(article.title)}</h1>
          ${C.articleBody(article)}
        </div>
        <aside class="sidebar">
          ${C.ctaSideCard()}
          ${C.relatedServicesBlock(article.relatedServices)}
          ${C.relatedArticlesBlock(article.relatedArticles)}
        </aside>
      </div>
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: `${article.title} | Bilgi Merkezi | Health Care Pro`,
      description: article.shortDescription,
      path: p,
      bodyContent: body,
      schemas: [
        L.breadcrumbSchema(crumbs),
        L.articleSchema({ title: article.title, description: article.shortDescription, url: p }),
        L.faqSchema(article.faq),
      ],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   SSS (GENEL)
   =================================================================== */
function sssPage() {
  const p = "/sss/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Sık Sorulan Sorular" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container" style="max-width:820px;">
      <div class="section-head">
        <h1>Sık Sorulan Sorular</h1>
        <p>Health Care Pro hakkında en sık gelen sorular ve yanıtları. Hizmete özel sorular için ilgili hizmet
        sayfalarındaki SSS bölümlerine göz atabilirsiniz.</p>
      </div>
      ${C.faqAccordion(faqGeneral)}
    </div>
  </section>
  ${C.ctaBand({})}
  `;
  writePage(
    p,
    L.page({
      title: "Sık Sorulan Sorular | Health Care Pro",
      description: "Health Care Pro hakkında sık sorulan sorular: randevu, iletişim, hizmet bölgesi ve daha fazlası.",
      path: p,
      activeTop: "sss",
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs), L.faqSchema(faqGeneral)],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   İLETİŞİM
   =================================================================== */
function contactPage() {
  const p = "/iletisim/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "İletişim" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container contact-layout">
      <div>
        <h1>İletişim</h1>
        <p>Sağlık süreciniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz. Anlaşmalı hastaneler ve
        hizmet noktaları hakkında detaylı bilgi için WhatsApp veya telefon üzerinden ulaşabilirsiniz.</p>
        <div class="contact-info-grid" style="margin-top:28px;">
          <div class="contact-info-item">
            <div class="contact-info-item__icon">${L.icon("phone")}</div>
            <div><h4 style="margin-bottom:2px;">Telefon</h4><a href="${site.phoneHref}">${esc(site.phone)}</a></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item__icon">${L.icon("whatsapp")}</div>
            <div><h4 style="margin-bottom:2px;">WhatsApp</h4><a href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">${esc(site.whatsappNumber)}</a></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item__icon">${L.icon("mail")}</div>
            <div><h4 style="margin-bottom:2px;">E-posta</h4><a href="mailto:${site.email}">${esc(site.email)}</a></div>
          </div>
          <div class="contact-info-item">
            <div class="contact-info-item__icon">${L.icon("pin")}</div>
            <div><h4 style="margin-bottom:2px;">Hizmet Bölgesi</h4><p style="margin:0;">${esc(site.addressShort)}</p></div>
          </div>
        </div>
        <div class="footer-social" style="margin-top:24px;">
          <a href="${site.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style="border-color:var(--line);color:var(--navy-900);">${L.icon("instagram")}</a>
          <a href="${site.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="border-color:var(--line);color:var(--navy-900);">${L.icon("facebook")}</a>
          <a href="${site.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style="border-color:var(--line);color:var(--navy-900);">${L.icon("tiktok")}</a>
        </div>
      </div>
      <div>
        <div class="card" style="padding:28px;">
          <h2 style="margin-top:0;">Bilgi Talep Formu</h2>
          <div class="form-error-banner" data-form-error></div>
          <div class="form-success" data-form-success>Talebiniz alınmıştır.</div>
          <form data-contact-form novalidate>
            <div class="form-grid">
              <div class="field" data-field data-required>
                <label for="f-name">Ad Soyad</label>
                <input type="text" id="f-name" name="name" autocomplete="name" required>
                <span class="field-error">Lütfen adınızı ve soyadınızı girin.</span>
              </div>
              <div class="field" data-field data-required>
                <label for="f-phone">Telefon</label>
                <input type="tel" id="f-phone" name="phone" autocomplete="tel" inputmode="tel" required>
                <span class="field-error">Lütfen geçerli bir telefon numarası girin.</span>
              </div>
              <div class="field field--full" data-field data-required>
                <label for="f-email">E-posta</label>
                <input type="email" id="f-email" name="email" autocomplete="email" required>
                <span class="field-error">Lütfen geçerli bir e-posta adresi girin.</span>
              </div>
              <div class="field field--full" data-field data-required>
                <label for="f-subject">İlgilendiğiniz Konu</label>
                <select id="f-subject" name="subject" required>
                  <option value="">Seçiniz</option>
                  ${nav.categories.map((c) => `<option value="${esc(c.slug)}">${esc(c.title)}</option>`).join("")}
                  <option value="diger">Diğer</option>
                </select>
                <span class="field-error">Lütfen bir konu seçin.</span>
              </div>
              <div class="field field--full" data-field data-required>
                <label for="f-message">Mesaj</label>
                <textarea id="f-message" name="message" rows="4" required></textarea>
                <span class="field-error">Lütfen mesajınızı girin.</span>
              </div>
              <div class="field field--full" data-field data-required>
                <div class="checkbox-field">
                  <input type="checkbox" id="f-kvkk" name="kvkk" required>
                  <label for="f-kvkk">Kişisel verilerimin <a href="/kvkk/" target="_blank">KVKK Aydınlatma Metni</a> kapsamında işlenmesini kabul ediyorum.</label>
                </div>
                <span class="field-error">Devam etmek için KVKK onayı gereklidir.</span>
              </div>
              <input type="checkbox" name="botcheck" id="botcheck" class="botcheck" tabindex="-1" autocomplete="off">
            </div>
            <button class="btn btn--primary btn--block form-submit" type="submit" style="margin-top:18px;">Gönder</button>
            ${
              site.web3formsAccessKey
                ? `<p class="form-note">Bu form üzerinden gönderdiğiniz bilgiler tarafımıza iletilir. Hızlı yanıt için WhatsApp üzerinden de ulaşabilirsiniz.</p>`
                : `<p class="form-note">Bu form şu anda bir e-posta/CRM servisine bağlı değildir. Hızlı yanıt için WhatsApp
            üzerinden de ulaşabilirsiniz.</p>`
            }
          </form>
        </div>
      </div>
    </div>
  </section>
  `;
  writePage(
    p,
    L.page({
      title: "İletişim | Health Care Pro",
      description: "Health Care Pro ile telefon, WhatsApp, e-posta veya iletişim formu üzerinden iletişime geçin.",
      path: p,
      activeTop: "iletisim",
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

/* ===================================================================
   ARAMA (SEARCH)
   =================================================================== */
function searchPage() {
  const p = "/arama/";
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: "Arama" }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container">
      <h1>Arama</h1>
      <p>Hizmetlerimiz ve Bilgi Merkezi içeriklerimiz arasında arama yapın.</p>
      <div class="search-box" style="max-width:560px;">
        <form data-search-form>
          <label for="search-page-input" style="position:absolute;left:-9999px;">Ara</label>
          <input type="search" id="search-page-input" data-search-input placeholder="hemoroid, tüp mide, kolonoskopi, varis...">
          <button type="submit" aria-label="Ara">${L.icon("info")}</button>
        </form>
      </div>
      <div id="search-results" data-search-results></div>
    </div>
  </section>
  `;
  writePage(
    p,
    L.page({
      title: "Arama | Health Care Pro",
      description: "Health Care Pro hizmetleri ve Bilgi Merkezi içerikleri arasında arama yapın.",
      path: p,
      noindex: true,
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  // Not added to sitemap.xml: this page is noindex and Disallow'd in robots.txt.
}

/* ===================================================================
   LEGAL PAGES
   =================================================================== */
function legalPage({ slug, title, content }) {
  const p = `/${slug}/`;
  const crumbs = [{ label: "Ana Sayfa", url: "/" }, { label: title }];
  const body = `
  ${L.breadcrumbHtml(crumbs)}
  <section class="section" style="padding-top:8px;">
    <div class="container" style="max-width:780px;">
      <h1>${esc(title)}</h1>
      ${content}
    </div>
  </section>
  `;
  writePage(
    p,
    L.page({
      title: `${title} | Health Care Pro`,
      description: `Health Care Pro ${title} sayfası.`,
      path: p,
      bodyContent: body,
      schemas: [L.breadcrumbSchema(crumbs)],
    })
  );
  trackUrl(p);
}

function buildLegalPages() {
  legalPage({
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni",
    content: `
    <p><em>Son güncelleme: Eylül 2026</em></p>
    <p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında ${esc(site.siteName)}
    ("Veri Sorumlusu") tarafından işlenen kişisel verileriniz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.
    Bu metin genel bilgilendirme amaçlıdır ve kesin hukuki danışmanlık niteliği taşımaz; kurumunuza özel KVKK
    uyumluluğu için bir hukuk danışmanına başvurmanızı öneririz.</p>
    <h2>Veri Sorumlusu</h2>
    <p>Health Care Pro (HCP) — ${esc(site.email)} — ${esc(site.phone)}</p>
    <h2>İşlenen Kişisel Veriler</h2>
    <p>İletişim formu, e-posta veya WhatsApp üzerinden bizimle iletişime geçtiğinizde ad-soyad, telefon numarası,
    e-posta adresi ve mesaj içeriğinizde paylaştığınız bilgiler işlenebilir.</p>
    <h2>İşleme Amaçları</h2>
    <p>Kişisel verileriniz; talebinizin yanıtlanması, iletişim süreçlerinin yürütülmesi ve yasal yükümlülüklerin
    yerine getirilmesi amacıyla işlenir.</p>
    <h2>Haklarınız</h2>
    <p>KVKK'nın 11. maddesi kapsamında kişisel verilerinize ilişkin bilgi talep etme, düzeltilmesini veya
    silinmesini isteme gibi haklara sahipsiniz. Bu haklarınızı kullanmak için ${esc(site.email)} adresinden bizimle
    iletişime geçebilirsiniz.</p>
    `,
  });

  legalPage({
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    content: `
    <p>${esc(site.siteName)} olarak ziyaretçilerimizin gizliliğine önem veriyoruz. Bu politika, web sitemizi
    kullanırken kişisel verilerinizin nasıl işlendiğine dair genel bilgi vermek amacıyla hazırlanmıştır ve kesin
    hukuki danışmanlık yerine geçmez.</p>
    <h2>Toplanan Bilgiler</h2>
    <p>İletişim formu aracılığıyla bizimle paylaştığınız ad, telefon, e-posta ve mesaj bilgileri işlenebilir. Sitede
    analitik veya pazarlama amacıyla çerez kullanılmamaktadır; form tercihleri gibi temel site ayarları tarayıcı
    depolamasında tutulabilir.</p>
    <h2>Bilgilerin Kullanımı</h2>
    <p>Paylaştığınız bilgiler yalnızca talebinizi yanıtlamak amacıyla kullanılır ve üçüncü taraflarla
    pazarlama amacıyla paylaşılmaz.</p>
    <h2>Veri Güvenliği</h2>
    <p>Kişisel verilerinizin güvenliği için makul teknik ve idari tedbirler alınmaktadır.</p>
    <h2>İletişim Formu</h2>
    <p>İletişim formu üzerinden gönderilen bilgiler, talebinizin tarafımıza ulaştırılması amacıyla Web3Forms altyapısı üzerinden işlenebilir.</p>
    `,
  });

  legalPage({
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    content: `
    <p>Bu web sitesinde analitik veya pazarlama amacıyla çerez kullanılmamaktadır. Temel site tercihleri, gerektiğinde
    tarayıcının yerel depolama alanında tutulabilir.</p>
    <h2>Temel Site Depolaması</h2>
    <p>Çerez bildiriminin tercihinizi hatırlaması gibi temel işlevler için tarayıcı yerel depolaması kullanılabilir.</p>
    <h2>Analitik ve Pazarlama</h2>
    <p>Bu sitede analitik veya pazarlama çerezleri etkin değildir.</p>
    <h2>Tercihlerinizi Yönetme</h2>
    <p>Çerez tercihlerinizi tarayıcı ayarlarınızdan veya sitemizdeki çerez bildirimi üzerinden yönetebilirsiniz.</p>
    `,
  });

  legalPage({
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    content: `
    <p>Bu web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p>
    <h2>İçeriğin Amacı</h2>
    <p>Sitedeki tüm sağlık içerikleri yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye, tanı veya tedavi
    yerine geçmez. Kesin tanı ve tedavi kararı için mutlaka bir hekimle görüşülmelidir.</p>
    <h2>Fikri Mülkiyet</h2>
    <p>Sitedeki marka, logo ve içerikler ${esc(site.siteName)}'a aittir ve izinsiz kullanılamaz.</p>
    <h2>Sorumluluk Sınırlaması</h2>
    <p>${esc(site.siteName)}, site içeriğinin kullanımından doğabilecek doğrudan veya dolaylı zararlardan sorumlu
    tutulamaz.</p>
    `,
  });

  legalPage({
    slug: "yasal-uyari",
    title: "Yasal Uyarı",
    content: `
    <p>Bu web sitesinde yer alan bilgiler genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz.</p>
    <h2>Tıbbi Sorumluluk Reddi</h2>
    <p>Sitedeki hiçbir içerik, bir hekim muayenesinin veya profesyonel tıbbi değerlendirmenin yerine geçmez. Sağlık
    durumunuzla ilgili endişeleriniz varsa vakit kaybetmeden bir sağlık kuruluşuna başvurun.</p>
    <h2>İçerik Doğruluğu</h2>
    <p>İçeriklerin güncel ve doğru tutulması için özen gösterilmekle birlikte, tıp biliminin gelişen doğası nedeniyle
    ${esc(site.siteName)} bilgilerin eksiksizliğini garanti etmez.</p>
    `,
  });
}

/* ===================================================================
   404
   =================================================================== */
function notFoundPage() {
  const body = `
  <section class="error-page container">
    <p class="error-page__code">404</p>
    <h1>Aradığınız sayfa bulunamadı.</h1>
    <p style="max-width:520px;margin:0 auto;color:var(--ink-500);">Sağlık içeriklerimize göz atabilir veya ana sayfaya dönebilirsiniz.</p>
    <div class="error-page__actions">
      <a class="btn btn--primary" href="/">Ana Sayfaya Dön</a>
      <a class="btn btn--outline" href="/hizmetler/">Hizmetleri İncele</a>
      <a class="btn btn--outline" href="/bilgi-merkezi/">Bilgi Merkezi</a>
    </div>
  </section>
  `;
  const html = L.page({
    title: "Sayfa Bulunamadı (404) | Health Care Pro",
    description: "Aradığınız sayfa bulunamadı. Health Care Pro ana sayfasına dönebilir veya hizmetlerimize göz atabilirsiniz.",
    path: "/404/",
    noindex: true,
    bodyContent: body,
  });
  write("404.html", html);
}

/* ===================================================================
   SEARCH INDEX (JS data for client-side search)
   =================================================================== */
function buildSearchIndex() {
  const items = [];
  nav.allServices.forEach((s) => {
    items.push({ type: "Hizmet", title: s.title, description: s.shortDescription, url: nav.serviceUrl(s) });
  });
  nav.articles.forEach((a) => {
    items.push({ type: "Bilgi Merkezi", title: a.title, description: a.shortDescription, url: nav.articleUrl(a) });
  });
  nav.categories.forEach((c) => {
    items.push({ type: "Kategori", title: c.title, description: c.shortDescription, url: nav.categoryUrl(c.slug) });
  });
  write("assets/js/search-index.js", `window.HCP_SEARCH_INDEX = ${JSON.stringify(items)};`);
}

function buildSiteConfig() {
  // Externalized so the strict Content-Security-Policy (script-src 'self',
  // no 'unsafe-inline') in _headers does not need to allow inline scripts.
  write(
    "assets/js/site-config.js",
    `window.HCP_WHATSAPP_HREF = ${JSON.stringify(site.whatsappHref)};\n` +
      `window.HCP_EMAIL = ${JSON.stringify(site.email)};\n` +
      `window.HCP_CONTACT_ENDPOINT = ${JSON.stringify(site.contactEndpoint)};\n` +
      `window.HCP_WEB3FORMS_KEY = ${JSON.stringify(site.web3formsAccessKey)};\n`
  );
}

/* ===================================================================
   SITEMAP / ROBOTS / MANIFEST / HEADERS / REDIRECTS
   =================================================================== */
function buildSitemap() {
  const urls = allUrls
    .map((u) => `  <url><loc>${canonical(u)}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  write("sitemap.xml", xml);
}

function buildRobots() {
  write(
    "robots.txt",
    `User-agent: *\nAllow: /\nDisallow: /arama/\n\nSitemap: ${site.domain}/sitemap.xml\n`
  );
}

function buildManifest() {
  write(
    "site.webmanifest",
    JSON.stringify(
      {
        name: site.siteName,
        short_name: site.shortName,
        icons: [
          { src: "/assets/img/hcp-logo-mark-180.png", sizes: "180x180", type: "image/png" },
          { src: "/assets/img/hcp-logo-mark-512.png", sizes: "512x512", type: "image/png" },
        ],
        theme_color: "#0a1f3d",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
      },
      null,
      2
    )
  );
}

function buildHeadersFile() {
  // Cloudflare Workers Static Assets _headers file: security headers for every route
  write(
    "_headers",
    `/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self'; script-src-attr 'none'; connect-src 'self' https://api.web3forms.com; frame-src 'none'; object-src 'none'; worker-src 'self'; manifest-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
`
  );
}

function buildRedirectsFile() {
  write(
    "_redirects",
    `# Bilinen eski URL -> yeni URL yönlendirmeleri buraya eklenebilir.
# Örnek: /eski-sayfa/ /yeni-sayfa/ 301
`
  );
}

/* ===================================================================
   COPY STATIC ASSETS
   =================================================================== */
function copyAssets() {
  const srcCss = path.join(__dirname, "assets/css/style.css");
  const srcJs = path.join(__dirname, "assets/js/main.js");
  write("assets/css/style.css", fs.readFileSync(srcCss, "utf8"));
  write("assets/js/main.js", fs.readFileSync(srcJs, "utf8"));

  const imgSrcDir = path.join(__dirname, "assets/img");
  const imgFiles = [
    "hcp-logo-header.png",
    "hcp-logo-header@2x.png",
    "hcp-logo-mark-180.png",
    "hcp-logo-mark-512.png",
    "hcp-logo-favicon-32.png",
    "hcp-logo-favicon-16.png",
    "obezite-cerrahi-merkezi-amblem.png",
  ];
  imgFiles.forEach((f) => {
    const full = path.join(imgSrcDir, f);
    if (fs.existsSync(full)) {
      write(path.join("assets/img", f), fs.readFileSync(full));
    }
  });

  const favicoSrc = path.join(imgSrcDir, "favicon.ico");
  if (fs.existsSync(favicoSrc)) {
    write("favicon.ico", fs.readFileSync(favicoSrc));
  }
}

/* ===================================================================
   RUN
   =================================================================== */
function run() {
  if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true, force: true });

  homePage();
  aboutPage();
  servicesIndexPage();
  nav.categories.forEach(serviceCategoryPage);
  nav.allServices.forEach(servicePage);
  infoIndexPage();
  nav.infoCategories.forEach(infoCategoryPage);
  nav.articles.forEach(articlePage);
  sssPage();
  contactPage();
  searchPage();
  buildLegalPages();
  notFoundPage();

  copyAssets();
  buildSiteConfig();
  buildSearchIndex();
  buildSitemap();
  buildRobots();
  buildManifest();
  buildHeadersFile();
  buildRedirectsFile();

  console.log(`Generated ${allUrls.length} indexable pages + 404 page.`);
  console.log(`Services: ${nav.allServices.length}, Articles: ${nav.articles.length}, Categories: ${nav.categories.length}, Info categories: ${nav.infoCategories.length}`);
}

run();
