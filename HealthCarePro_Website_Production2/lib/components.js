const site = require("../data/site.js");
const nav = require("./nav.js");
const { esc, ul } = require("./util.js");
const { icon } = require("./layout.js");

function faqAccordion(items) {
  if (!items || items.length === 0) return "";
  return `<div class="accordion">
    ${items
      .map(
        (f, i) => `
    <details class="accordion-item"${i === 0 ? " open" : ""}>
      <summary class="accordion-item__q">${esc(f.q)}<span class="accordion-item__icon">+</span></summary>
      <div class="accordion-item__a"><p>${esc(f.a)}</p></div>
    </details>`
      )
      .join("")}
  </div>`;
}

function serviceCard(service) {
  return `<div class="card card--service">
    <h3><a href="${nav.serviceUrl(service)}">${esc(service.title)}</a></h3>
    <p>${esc(service.shortDescription)}</p>
    <a class="card__link" href="${nav.serviceUrl(service)}">Detaylı Bilgi →</a>
  </div>`;
}

function categoryCard(cat) {
  return `<div class="card">
    <div class="card__icon">${icon(cat.icon || "info")}</div>
    <h3><a href="${nav.categoryUrl(cat.slug)}">${esc(cat.title)}</a></h3>
    <p>${esc(cat.shortDescription)}</p>
    <a class="card__link" href="${nav.categoryUrl(cat.slug)}">Detaylı Bilgi →</a>
  </div>`;
}

function infoCategoryCard(cat) {
  return `<div class="card">
    <div class="card__icon">${icon("info")}</div>
    <h3><a href="${nav.infoCategoryUrl(cat.slug)}">${esc(cat.title)}</a></h3>
    <p>${esc(cat.description)}</p>
    <a class="card__link" href="${nav.infoCategoryUrl(cat.slug)}">İçerikleri Gör →</a>
  </div>`;
}

function articleCard(article) {
  return `<div class="card">
    <h3><a href="${nav.articleUrl(article)}">${esc(article.title)}</a></h3>
    <p>${esc(article.shortDescription)}</p>
    <a class="card__link" href="${nav.articleUrl(article)}">Devamını Oku →</a>
  </div>`;
}

function ctaBand({ heading, text, primary = { label: "İletişime Geçin", href: "/iletisim/" } } = {}) {
  return `
  <section class="section section--navy">
    <div class="container text-center">
      <h2>${esc(heading || "Sağlık süreciniz hakkında bilgi almak ister misiniz?")}</h2>
      <p style="max-width:620px;margin:0 auto 26px;">${esc(
        text ||
          "Uygun yaklaşım, kişinin klinik durumunun değerlendirilmesi sonrasında belirlenir. Sorularınız için bizimle iletişime geçebilirsiniz."
      )}</p>
      <div class="hero__ctas" style="justify-content:center;">
        <a class="btn btn--whatsapp" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">${icon("whatsapp")} WhatsApp'tan Ulaş</a>
        <a class="btn btn--ghost-light" href="${primary.href}">${esc(primary.label)}</a>
      </div>
    </div>
  </section>`;
}

function relatedServicesBlock(slugs) {
  if (!slugs || slugs.length === 0) return "";
  const items = slugs.map((s) => nav.getService(s)).filter(Boolean);
  if (items.length === 0) return "";
  return `<div class="side-card">
    <h4>İlgili Hizmetler</h4>
    <ul>${items.map((s) => `<li><a href="${nav.serviceUrl(s)}">${esc(s.title)}</a></li>`).join("")}</ul>
  </div>`;
}

function relatedArticlesBlock(slugs) {
  if (!slugs || slugs.length === 0) return "";
  const items = slugs.map((s) => nav.getArticle(s)).filter(Boolean);
  if (items.length === 0) return "";
  return `<div class="side-card">
    <h4>İlgili Bilgi Merkezi Yazıları</h4>
    <ul>${items.map((a) => `<li><a href="${nav.articleUrl(a)}">${esc(a.title)}</a></li>`).join("")}</ul>
  </div>`;
}

function ctaSideCard() {
  return `<div class="side-card side-card--cta">
    <h4>Bilgi Almak İster misiniz?</h4>
    <p>Sağlık süreciniz hakkında bilgi almak için bizimle iletişime geçebilirsiniz.</p>
    <div style="display:flex; flex-direction:column; gap:10px; margin-top:14px;">
      <a class="btn btn--whatsapp btn--sm btn--block" href="${site.whatsappHref}" target="_blank" rel="noopener noreferrer">${icon("whatsapp")} WhatsApp</a>
      <a class="btn btn--outline btn--sm btn--block" style="color:#fff;border-color:rgba(255,255,255,0.4);" href="/iletisim/">İletişime Geçin</a>
    </div>
  </div>`;
}

/* ---- Full body builder for a service page (20-section template) ---- */
function serviceBody(service) {
  const cat = nav.getCategory(service.categorySlug);
  const sections = [];

  sections.push(`<section><p>${esc(service.definition)}</p></section>`);

  if (service.symptoms && service.symptoms.length) {
    sections.push(`<section><h2>Belirtiler</h2>${ul(service.symptoms)}</section>`);
  }
  if (service.causes && service.causes.length) {
    sections.push(`<section><h2>Nedenleri ve Risk Faktörleri</h2>${ul(service.causes)}</section>`);
  }
  sections.push(`<section><h2>Kimler İçin Değerlendirilir?</h2><p>${esc(service.whoEvaluated)}</p></section>`);
  sections.push(`<section><h2>Tanı ve Değerlendirme Süreci</h2><p>${esc(service.diagnosis)}</p></section>`);
  if (service.treatmentOptions && service.treatmentOptions.length) {
    sections.push(`<section><h2>Uygulanabilecek Tedavi Yaklaşımları</h2>${ul(service.treatmentOptions)}</section>`);
  }
  sections.push(`<section><h2>İşlem Nasıl Gerçekleştirilir?</h2><p>${esc(service.procedure)}</p></section>`);
  if (service.preOp && service.preOp.length) {
    sections.push(`<section><h2>İşlem Öncesi Değerlendirme</h2>${ul(service.preOp)}</section>`);
  }
  if (service.postOp && service.postOp.length) {
    sections.push(`<section><h2>İşlem Sonrası Süreç</h2>${ul(service.postOp)}</section>`);
  }
  sections.push(`<section><h2>İyileşme Süreci</h2><p>${esc(service.recovery)}</p></section>`);
  if (service.risks && service.risks.length) {
    sections.push(`<section><h2>Olası Riskler ve Komplikasyonlar</h2>${ul(service.risks)}
      <div class="disclaimer-box">Her cerrahi ve tıbbi işlemin kendine özgü riskleri bulunur. Kişisel risk değerlendirmesi, hekiminiz tarafından sizin sağlık durumunuza göre yapılır.</div>
    </section>`);
  }
  sections.push(`<section><h2>Hangi Durumlarda Doktora Başvurulmalı?</h2><p>${esc(service.whenToSeeDoctor)}</p></section>`);

  if (service.faq && service.faq.length) {
    sections.push(`<section><h2>Sık Sorulan Sorular</h2>${faqAccordion(service.faq)}</section>`);
  }

  sections.push(`
    <div class="disclaimer-box">
      Bu sayfadaki bilgiler yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz. Kesin tanı ve
      tedavi kararı, hekiminizin sizi değerlendirmesi sonrasında belirlenir. Her hastanın klinik durumu farklıdır.
    </div>
  `);

  return sections.join("\n");
}

function articleBody(article) {
  const parts = [`<section><p>${esc(article.intro)}</p></section>`];
  (article.sections || []).forEach((s) => {
    parts.push(`<section><h2>${esc(s.h)}</h2><p>${esc(s.p)}</p></section>`);
  });
  if (article.faq && article.faq.length) {
    parts.push(`<section><h2>Sık Sorulan Sorular</h2>${faqAccordion(article.faq)}</section>`);
  }
  parts.push(`
    <div class="disclaimer-box">
      Bu içerik genel bilgilendirme amacıyla hazırlanmıştır ve tıbbi tavsiye yerine geçmez. Kişisel değerlendirme için
      lütfen bir hekimle görüşün.
    </div>
  `);
  return parts.join("\n");
}

module.exports = {
  faqAccordion,
  serviceCard,
  categoryCard,
  infoCategoryCard,
  articleCard,
  ctaBand,
  relatedServicesBlock,
  relatedArticlesBlock,
  ctaSideCard,
  serviceBody,
  articleBody,
};
