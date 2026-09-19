function visual(kind) {
  const common = `
    <defs>
      <linearGradient id="bGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#54e1e4"/><stop offset="1" stop-color="#2d72d9"/></linearGradient>
      <linearGradient id="bGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".24"/><stop offset="1" stop-color="#ffffff" stop-opacity=".04"/></linearGradient>
      <filter id="bGlow"><feGaussianBlur stdDeviation="9" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>`;
  const base = `<circle cx="210" cy="190" r="148" fill="url(#bGrad)" opacity=".08"/><circle cx="210" cy="190" r="112" fill="none" stroke="#74e7ea" stroke-opacity=".22"/><circle cx="210" cy="190" r="78" fill="url(#bGlass)" stroke="#fff" stroke-opacity=".18"/>`;
  let art = '';
  if (kind === 'metabolic') art = `<path d="M170 120c-25 10-35 34-31 61 4 31 25 47 54 51 22 3 48-8 57-30 11-28-2-61-28-76-18-10-35-13-52-6z" fill="none" stroke="#fff" stroke-width="7" opacity=".88"/><path d="M188 128c12 10 20 24 20 39 0 13-5 25-14 34" fill="none" stroke="#54e1e4" stroke-width="6" stroke-linecap="round"/><circle cx="205" cy="171" r="8" fill="#54e1e4" filter="url(#bGlow)"/>`;
  else if (kind === 'surgery') art = `<rect x="164" y="130" width="92" height="92" rx="22" fill="none" stroke="#fff" stroke-width="7" opacity=".9"/><path d="M210 145v62M179 176h62" stroke="#54e1e4" stroke-width="12" stroke-linecap="round"/><path d="M125 245h170" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>`;
  else if (kind === 'proctology') art = `<circle cx="210" cy="180" r="54" fill="none" stroke="#fff" stroke-width="7" opacity=".88"/><ellipse cx="210" cy="180" rx="21" ry="30" fill="none" stroke="#54e1e4" stroke-width="7"/><path d="M164 239c18 12 38 18 46 18s28-6 46-18" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="3"/>`;
  else if (kind === 'gastro') art = `<path d="M180 126c-10 25-8 49 8 65 13 13 34 16 47 29 12 13 10 38-5 50-14 12-39 8-52-6-15-16-18-41-9-61 9-19 28-31 25-58-2-16-7-26-14-34" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/><circle cx="225" cy="206" r="9" fill="#54e1e4" filter="url(#bGlow)"/>`;
  else if (kind === 'veins') art = `<path d="M174 118v72c0 28 14 48 36 48s36-20 36-48v-72" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/><path d="M176 148l18 18-18 18M244 148l-18 18 18 18" fill="none" stroke="#54e1e4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M210 121v112" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>`;
  else art = `<circle cx="210" cy="180" r="58" fill="none" stroke="#fff" stroke-width="7"/><path d="M210 142v76M172 180h76" stroke="#54e1e4" stroke-width="7" stroke-linecap="round"/><circle cx="210" cy="180" r="12" fill="#fff" opacity=".9"/>`;
  return `<svg class="service-banner__visual" viewBox="0 0 420 380" role="img" aria-label="Sağlık hizmetleri temalı premium medikal illüstrasyon" focusable="false">${common}${base}${art}<circle cx="82" cy="92" r="5" fill="#54e1e4"/><circle cx="334" cy="94" r="7" fill="#fff" opacity=".65"/><circle cx="326" cy="284" r="4" fill="#54e1e4"/><path d="M58 302c42-18 72-18 108 0s70 18 108 0 67-18 108 0" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="2"/></svg>`;
}

function serviceBanner(slide) {
  return `<article class="service-banner" data-service-banner data-category="${slide.key}" data-href="${slide.href}" tabindex="0" aria-label="${slide.title} hizmetleri">
    <div class="service-banner__glow" aria-hidden="true"></div>
    <div class="container service-banner__inner">
      <div class="service-banner__copy">
        <span class="service-banner__eyebrow">Health Care Pro · ${slide.eyebrow}</span>
        <h2>${slide.title}</h2>
        <p>${slide.description}</p>
        <div class="service-banner__chips">${slide.services.map(s=>`<span>${s}</span>`).join('')}</div>
        <div class="service-banner__actions">
          <a class="service-banner__cta" href="${slide.href}">Hizmetleri İncele <span aria-hidden="true">↗</span></a>
          <button class="service-banner__pause" type="button" data-banner-pause aria-label="Banner otomatik geçişini durdur">Duraklat</button>
        </div>
      </div>
      <div class="service-banner__art">${visual(slide.kind)}</div>
    </div>
  </article>`;
}

const slides = [
  {key:'metabolic',kind:'metabolic',eyebrow:'Obezite & Metabolik Sağlık',title:'Kişiye özel değerlendirme, kapsamlı sağlık yaklaşımı.',description:'Obezite cerrahisi, tüp mide, bypass, revizyon, mide balonu ve mide botoksu hakkında güvenilir bilgilendirme.',services:['Obezite Cerrahisi','Tüp Mide','Mide Bypass','SASI Bypass','Revizyon Cerrahisi','Mide Balonu','Mide Botoksu','Metabolik Sağlık'],href:'/hizmetler/obezite-ve-metabolik-cerrahi/'},
  {key:'surgery',kind:'surgery',eyebrow:'Genel Cerrahi',title:'Cerrahi hizmetlerde modern ve kontrollü süreç.',description:'Hemoroid, kıl dönmesi, tiroid, safra kesesi, laparoskopik cerrahi ve jinekomasti konularında bilgi.',services:['Hemoroid','Lazer Hemoroid','Kıl Dönmesi','Lazer Kıl Dönmesi','Tiroid','Safra Kesesi','Laparoskopik','Jinekomasti'],href:'/hizmetler/genel-cerrahi/'},
  {key:'proctology',kind:'proctology',eyebrow:'Proktoloji',title:'Hassas şikâyetlerde doğru bilgi ve yönlendirme.',description:'Makat ve rektum bölgesi hastalıkları hakkında anlaşılır, objektif ve kapsamlı içerikler.',services:['Proktolojik Hastalıklar','Anal Fissür','Anal Fistül','Hemoroid Tedavileri'],href:'/hizmetler/proktoloji/'},
  {key:'gastro',kind:'gastro',eyebrow:'Sindirim Sistemi',title:'Sindirim sistemi sağlığında ileri tanısal yaklaşımlar.',description:'Endoskopi, gastroskopi, kolonoskopi ve erken teşhis hakkında kapsamlı sağlık bilgilendirmesi.',services:['Endoskopi','Gastroskopi','Kolonoskopi','Kolon Kanseri Taraması','Mide & Bağırsak Erken Teşhis'],href:'/hizmetler/gastroenteroloji/'},
  {key:'veins',kind:'veins',eyebrow:'Damar Sağlığı',title:'Varis tedavilerinde değerlendirme ve seçenekler.',description:'Bacak varislerinin değerlendirilmesi ve skleroterapi gibi tedavi seçenekleri hakkında bilgi.',services:['Varis Tedavisi','Skleroterapi ile Varis Tedavisi'],href:'/hizmetler/varis/'},
  {key:'other',kind:'other',eyebrow:'Diğer Cerrahi Hizmetler',title:'Sağlık yolculuğunuzda doğru bilgi, doğru iletişim.',description:'Anlaşmalı özel hastanelerde değerlendirilen diğer cerrahi hizmetler hakkında bilgilendirme.',services:['Sünnet'],href:'/hizmetler/diger-cerrahi-hizmetler/'}
];

function banners() { return `<section class="service-banners" data-banner-slider aria-label="Health Care Pro hizmetleri"><div class="service-banner__track">${slides.map(serviceBanner).join('')}</div><div class="service-banner__controls container"><div class="service-banner__dots" data-banner-dots aria-label="Banner seçimi"></div><button class="service-banner__autoplay" type="button" data-banner-autoplay aria-label="Banner otomatik geçişini durdur">Otomatik geçiş: Açık</button></div></section>`; }
module.exports = { banners };
