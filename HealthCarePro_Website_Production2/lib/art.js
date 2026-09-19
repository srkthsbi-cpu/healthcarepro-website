function heroArt() {
  return `
  <svg viewBox="0 0 520 460" width="100%" height="auto" role="img" aria-label="Sağlık teknolojisi temalı soyut illüstrasyon">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#16b8c4"/>
        <stop offset="100%" stop-color="#1259b3"/>
      </linearGradient>
      <linearGradient id="g2" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#0e2a52"/>
        <stop offset="100%" stop-color="#1b6fd6"/>
      </linearGradient>
    </defs>
    <circle cx="270" cy="230" r="190" fill="url(#g2)" opacity="0.18"/>
    <path d="M90 260c0-90 70-165 165-165s160 75 160 165-70 150-160 150c-45 0-85-15-115-42-32 25-70 8-70-30 0-30 20-55 20-78z" fill="url(#g1)" opacity="0.16"/>
    <g transform="translate(140,120)">
      <rect x="90" y="0" width="40" height="150" rx="14" fill="url(#g1)"/>
      <rect x="15" y="55" width="190" height="40" rx="14" fill="url(#g1)"/>
    </g>
    <g stroke="#3fd0d6" stroke-width="2.4" fill="none" opacity="0.75">
      <path d="M60 340c30 0 30-40 60-40s30 40 60 40 30-40 60-40 30 40 60 40 30-40 60-40 30 25 50 25"/>
    </g>
    <circle cx="95" cy="115" r="7" fill="#3fd0d6"/>
    <circle cx="430" cy="150" r="10" fill="#ffffff" opacity="0.85"/>
    <circle cx="410" cy="330" r="6" fill="#3fd0d6"/>
    <circle cx="80" cy="360" r="5" fill="#ffffff" opacity="0.7"/>
  </svg>`;
}

function waveDivider(fill) {
  return `<svg viewBox="0 0 1440 60" width="100%" height="40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z" fill="${fill}"/></svg>`;
}

module.exports = { heroArt, waveDivider };
