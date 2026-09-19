const site = require("../data/site.js");
const nav = require("./nav.js");
const { esc, canonical } = require("./util.js");

const ICONS = {
  surgery: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M4 4l7 7M20 4l-7 7M4 20l16-16M9 15l-4.5 4.5a2 2 0 1 1-3-3L6 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  proctology: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M9 12a3 3 0 1 1 6 0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  gastro: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M8 3c0 4-4 5-4 10a8 8 0 0 0 16 0c0-3-2-4-2-7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  veins: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M6 3v9a6 6 0 0 0 12 0V3M6 21v-4M18 21v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  metabolic: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M12 3v4M12 17v4M4.2 7l3.4 2M16.4 15l3.4 2M4.2 17l3.4-2M16.4 9l3.4-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.6"/></svg>',
  other: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" stroke-width="1.6"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" width="22" height="22"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 11v5M12 8v.01" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  whatsapp: '<svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.5.7 4.83 1.9 6.83L4 29l7.35-1.92a11.9 11.9 0 0 0 4.67.95h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.79.99 1.01-3.7-.24-.38a9.85 9.85 0 0 1-1.5-5.16c0-5.46 4.45-9.9 9.94-9.9 2.65 0 5.14 1.03 7.02 2.9a9.86 9.86 0 0 1 2.9 7c0 5.47-4.45 9.84-9.92 9.84zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.48.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="9.5" r="2.3" stroke="currentColor" stroke-width="1.5"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/><circle cx="17.3" cy="6.8" r="1.1" fill="currentColor"/></svg>',

  facebook: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.27-.04-1.2-.12-2.28-.12-2.25 0-3.8 1.37-3.8 3.9v2.5H8v3.1h2.62V21h2.88z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M14.5 2h2.7c.2 1.6 1.2 3 2.8 3.6v2.8a6.6 6.6 0 0 1-3.7-1.2v6.5a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.05v2.8a3.1 3.1 0 1 0 2.2 3V2z"/></svg>',
};

function icon(name) { return ICONS[name] || ""; }

/* ============== SCHEMA BUILDERS ============== */

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.siteName,
    alternateName: site.shortName,
    url: site.domain,
    logo: site.domain + "/assets/img/hcp-logo-mark-512.png",
    email: site.email,
    telephone: site.phone,
    sameAs: [site.instagram, site.facebook, site.tiktok],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.siteName,
    url: site.domain,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.domain}/arama/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.url ? canonical(item.url) : undefined,
    })),
  };
}

function faqSchema(items) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function articleSchema({ title, description, url, datePublished }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonical(url),
    publisher: { "@type": "Organization", name: site.siteName, logo: { "@type": "ImageObject", url: site.domain + "/assets/img/hcp-logo-mark-512.png" } },
    datePublished: datePublished || `${site.year}-01-01`,
  };
}

function schemaScripts(schemas) {
  return schemas
    .filter(Boolean)
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\u003c")}</script>`)
    .join("\n");
}

/* ============== BREADCRUMB ============== */

function breadcrumbHtml(items) {
  return `
  <nav class="breadcrumb container" aria-label="Breadcrumb">
    <ol>
      ${items
        .map((item, i) =>
          i === items.length - 1
            ? `<li aria-current="page">${esc(item.label)}</li>`
            : `<li><a href="${item.url}">${esc(item.label)}</a></li>`
        )
        .join("")}
    </ol>
  </nav>`;
}

/* ============== HEADER / MEGA MENU ============== */

function megaMenu() {
  return nav.navTree
    .map(
      (cat) => `
      <div>
        <a class="mega__cat-link" href="${nav.categoryUrl(cat.slug)}">${esc(cat.title)}</a>
        <ul>
          ${cat.services
            .map((s) => `<li><a href="${nav.serviceUrl(s)}">${esc(s.title)}</a></li>`)
            .join("")}
        </ul>
      </div>`
    )
    .join("");
}

function infoMegaMenu() {
  const nav2 = require("./nav.js");
  return `<div style="grid-column: 1 / -1; display:grid; grid-template-columns: repeat(2,1fr); gap: 20px;">
    ${nav2.infoCategories
      .map(
        (c) => `<a class="mega__cat-link" style="padding:6px 0; display:block;" href="${nav2.infoCategoryUrl(c.slug)}">${esc(c.title)}</a>`
      )
      .join("")}
  </div>`;
}

function desktopNav(activeTop) {
  return `
  <nav class="main-nav" aria-label="Ana menü">
    <ul>
      <li><a href="/" ${activeTop === "home" ? 'aria-current="page"' : ""}>Anasayfa</a></li>
      <li><a href="/hakkimizda/" ${activeTop === "hakkimizda" ? 'aria-current="page"' : ""}>Hakkımızda</a></li>
      <li>
        <button type="button" data-mega-toggle aria-expanded="false">Hizmetler <span class="chev">▾</span></button>
        <div class="mega">${megaMenu()}</div>
      </li>
      <li>
        <button type="button" data-mega-toggle aria-expanded="false">Bilgi Merkezi <span class="chev">▾</span></button>
        <div class="mega">${infoMegaMenu()}</div>
      </li>
      <li><a href="/sss/" ${activeTop === "sss" ? 'aria-current="page"' : ""}>Sık Sorulanlar</a></li>
      <li><a href="/iletisim/" ${activeTop === "iletisim" ? 'aria-current="page"' : ""}>İletişim</a></li>
    </ul>
  </nav>`;
}

function mobileNav() {
  return `
  <div class="mobile-menu" data-mobile-menu aria-hidden="true">
    <div class="mobile-menu__overlay" data-menu-overlay></div>
    <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Mobil menü">
      <div class="mobile-menu__top">
        <a href="/" aria-label="${esc(site.siteName)} anasayfa"><img src="/assets/img/hcp-logo-header.png" alt="${esc(site.siteName)}" width="120" height="60" style="height:34px;width:auto;"></a>
        <button class="mobile-menu__close" data-menu-close aria-label="Menüyü kapat">&times;</button>
      </div>
      <ul class="mobile-nav">
        <li><a href="/">Anasayfa</a></li>
        <li><a href="/hakkimizda/">Hakkımızda</a></li>
        <li>
          <button type="button" data-submenu-toggle aria-expanded="false">Hizmetler <span class="chev">▾</span></button>
          <ul class="mobile-submenu">
            ${nav.navTree
              .map(
                (cat) => `
              <li class="mobile-submenu-group">
                <div class="mobile-submenu-group__title">${esc(cat.title)}</div>
                <a href="${nav.categoryUrl(cat.slug)}" style="font-weight:700;">Tüm ${esc(cat.title)} Hizmetleri</a>
                ${cat.services.map((s) => `<a href="${nav.serviceUrl(s)}">${esc(s.title)}</a>`).join("")}
              </li>`
              )
              .join("")}
          </ul>
        </li>
        <li>
          <button type="button" data-submenu-toggle aria-expanded="false">Bilgi Merkezi <span class="chev">▾</span></button>
          <ul class="mobile-submenu">
            ${nav.infoCategories.map((c) => `<a href="${nav.infoCategoryUrl(c.slug)}">${esc(c.title)}</a>`).join("")}
          </ul>
        </li>
        <li><a href="/sss/">Sık Sorulanlar</a></li>
        <li><a href="/iletisim/">İletişim</a></li>
      </ul>
      <div style="margin-top:20px; display:flex; flex-direction:column; gap:10px;">
        <a class="btn btn--whatsapp btn--block" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">${icon("whatsapp")} WhatsApp'tan Ulaş</a>
        <a class="btn btn--outline btn--block" href="/iletisim/">İletişime Geç</a>
      </div>
    </div>
  </div>`;
}

function header(activeTop) {
  return `
  <header class="site-header">
    <div class="site-header__bar">
      <a class="brand" href="/" aria-label="${esc(site.siteName)} anasayfa">
        <img src="/assets/img/hcp-logo-header.png" srcset="/assets/img/hcp-logo-header.png 1x, /assets/img/hcp-logo-header@2x.png 2x" alt="${esc(site.siteName)} logo" width="120" height="60" style="height:38px;width:auto;">
      </a>
      ${desktopNav(activeTop)}
      <div class="header-actions">
        <a class="btn btn--outline btn--sm" href="/iletisim/">İletişim</a>
        <button class="hamburger" data-menu-toggle aria-expanded="false" aria-label="Menüyü aç">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  ${mobileNav()}`;
}

/* ============== FOOTER ============== */

function footer() {
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <img src="/assets/img/hcp-logo-header.png" alt="${esc(site.siteName)}" width="140" height="70" style="height:40px;width:auto;filter:brightness(0) invert(1);">
          <p>${esc(site.tagline)}</p>
          <p>${esc(site.addressShort)}</p>
          <div class="footer-social">
            <a href="${site.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">${icon("instagram")}</a>
            <a href="${site.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook">${icon("facebook")}</a>
            <a href="${site.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="TikTok">${icon("tiktok")}</a>
            <a href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">${icon("whatsapp")}</a>
            <a href="mailto:${site.email}" aria-label="E-posta">${icon("mail")}</a>
          </div>
        </div>
        <div>
          <h4>Kategoriler</h4>
          <ul>
            ${nav.categories.map((c) => `<li><a href="${nav.categoryUrl(c.slug)}">${esc(c.title)}</a></li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Bilgi Merkezi</h4>
          <ul>
            ${nav.infoCategories.map((c) => `<li><a href="${nav.infoCategoryUrl(c.slug)}">${esc(c.title)}</a></li>`).join("")}
            <li><a href="/sss/">Sık Sorulan Sorular</a></li>
          </ul>
        </div>
        <div>
          <h4>İletişim</h4>
          <ul>
            <li><a href="mailto:${site.email}">${esc(site.email)}</a></li>
            <li><a href="${site.phoneHref}">${esc(site.phone)}</a></li>
            <li><a href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">WhatsApp ile yazın</a></li>
            <li>${esc(site.addressShort)}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${site.year} ${esc(site.siteName)}. Tüm hakları saklıdır.</span>
        <div class="footer-legal-links">
          <a href="/kvkk/">KVKK</a>
          <a href="/gizlilik-politikasi/">Gizlilik Politikası</a>
          <a href="/cerez-politikasi/">Çerez Politikası</a>
          <a href="/kullanim-kosullari/">Kullanım Koşulları</a>
          <a href="/yasal-uyari/">Yasal Uyarı</a>
          <a href="/iletisim/">İletişim</a>
        </div>
      </div>
    </div>
  </footer>`;
}

function cookieBanner() {
  return `
  <div class="cookie-banner" data-cookie-banner role="dialog" aria-label="Çerez tercihleri">
    <p>Sitemiz temel işlevler için tarayıcı depolamasını kullanabilir. Analitik veya pazarlama amaçlı çerezler kullanılmaz. Detaylar için <a href="/cerez-politikasi/">Çerez Politikası</a> sayfamızı inceleyebilirsiniz.</p>
    <div class="cookie-banner__actions">
      <button class="btn btn--primary btn--sm" data-cookie-accept type="button">Anladım</button>
      <button class="btn btn--outline btn--sm" data-cookie-reject type="button">Kapat</button>
    </div>
  </div>`;
}

function waFloat() {
  return `<a class="wa-float" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp'tan bize ulaşın">${icon("whatsapp")}</a>`;
}

/* ============== DOCUMENT SHELL ============== */

function page({
  title,
  description,
  path,
  activeTop = "",
  bodyContent,
  schemas = [],
  ogImage,
  noindex = false,
}) {
  const url = canonical(path);
  const img = ogImage || site.domain + "/assets/img/hcp-logo-mark-512.png";
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="${noindex ? "noindex, nofollow" : "index, follow"}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.siteName)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:locale" content="tr_TR">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${img}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/hcp-logo-favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/hcp-logo-favicon-16.png">
<link rel="apple-touch-icon" href="/assets/img/hcp-logo-mark-180.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/style.css">
${schemaScripts(schemas)}
</head>
<body>
<div class="page-transition" data-page-transition aria-hidden="true"><span class="page-transition__line"></span></div>
<a class="skip-link" href="#main">İçeriğe geç</a>
${header(activeTop)}
<main id="main">
${bodyContent}
</main>
${footer()}
${cookieBanner()}
${waFloat()}
<script src="/assets/js/site-config.js" defer></script>
<script src="/assets/js/search-index.js" defer></script>
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

module.exports = {
  icon,
  page,
  breadcrumbHtml,
  organizationSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  articleSchema,
};
