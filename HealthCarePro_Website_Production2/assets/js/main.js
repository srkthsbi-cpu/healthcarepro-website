(function () {
  "use strict";

  /* ---------------- Mobile menu ---------------- */
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");
  var menuClose = document.querySelector("[data-menu-close]");
  var overlay = document.querySelector("[data-menu-overlay]");
  var lastFocusedElement = null;

  function openMenu() {
    if (!mobileMenu) return;
    lastFocusedElement = document.activeElement;
    mobileMenu.classList.add("is-open");
    document.body.classList.add("menu-open");
    menuToggle && menuToggle.setAttribute("aria-expanded", "true");
    if (menuClose) menuClose.focus();
  }
  function closeMenu(restoreFocus) {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle && menuToggle.setAttribute("aria-expanded", "false");
    if (restoreFocus !== false && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    } else if (menuToggle) {
      menuToggle.focus();
    }
  }
  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", function () { closeMenu(); });
  if (overlay) overlay.addEventListener("click", function () { closeMenu(false); });

  document.addEventListener("keydown", function (e) {
    if (!mobileMenu || !mobileMenu.classList.contains("is-open")) return;
    if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      return;
    }
    if (e.key === "Tab") {
      var focusables = mobileMenu.querySelectorAll("a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex='-1'])");
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* Mobile submenu toggles */
  document.querySelectorAll("[data-submenu-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest("li");
      var submenu = li && li.querySelector(":scope > .mobile-submenu");
      if (!submenu) return;
      var isOpen = submenu.classList.contains("is-open");
      li.parentElement.querySelectorAll(".mobile-submenu.is-open").forEach(function (s) {
        s.classList.remove("is-open");
      });
      li.parentElement.querySelectorAll("li.is-open").forEach(function (l) {
        l.classList.remove("is-open");
        var b = l.querySelector("[data-submenu-toggle]");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        submenu.classList.add("is-open");
        li.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------------- Desktop mega menu ---------------- */
  function closeAllMegaMenus() {
    document.querySelectorAll(".main-nav li.is-open").forEach(function (l) {
      l.classList.remove("is-open");
      var b = l.querySelector("[data-mega-toggle]");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }
  document.querySelectorAll("[data-mega-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var li = btn.closest("li");
      var wasOpen = li.classList.contains("is-open");
      closeAllMegaMenus();
      if (!wasOpen) {
        li.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.addEventListener("click", closeAllMegaMenus);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllMegaMenus();
  });

  /* ---------------- Soft page transitions ---------------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduceMotion) {
    document.documentElement.classList.add("page-ready");
    window.addEventListener("pageshow", function () {
      document.documentElement.classList.remove("page-leaving");
      document.documentElement.classList.add("page-ready");
    });

    document.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest("a[href]");
      if (!link) return;
      var href = link.getAttribute("href");
      if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0 || link.target === "_blank") return;
      if (link.hasAttribute("download") || link.getAttribute("aria-disabled") === "true") return;
      var url;
      try { url = new URL(href, window.location.href); } catch (err) { return; }
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname && url.search === window.location.search) return;
      e.preventDefault();
      document.documentElement.classList.add("page-leaving");
      window.setTimeout(function () { window.location.href = url.href; }, 150);
    }, true);
  }

  /* ---------------- Cookie / local-storage preference ---------------- */
  var COOKIE_KEY = "hcp_cookie_consent";
  var cookieBanner = document.querySelector("[data-cookie-banner]");
  function getConsent() {
    try { return localStorage.getItem(COOKIE_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(COOKIE_KEY, value); } catch (e) { /* noop */ }
  }
  if (cookieBanner && !getConsent()) cookieBanner.classList.add("is-visible");
  document.querySelectorAll("[data-cookie-accept]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setConsent("accepted");
      cookieBanner && cookieBanner.classList.remove("is-visible");
    });
  });
  document.querySelectorAll("[data-cookie-reject]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setConsent("rejected-optional");
      cookieBanner && cookieBanner.classList.remove("is-visible");
    });
  });

  /* ---------------- Contact form validation + Web3Forms ---------------- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var successBox = form.querySelector("[data-form-success]");
      var errorBox = form.querySelector("[data-form-error]");
      var submitBtn = form.querySelector('button[type="submit"]');
      successBox && successBox.classList.remove("is-visible");
      errorBox && errorBox.classList.remove("is-visible");

      form.querySelectorAll("[data-field]").forEach(function (field) {
        var input = field.querySelector("input, textarea, select");
        var isCheckbox = input && input.type === "checkbox";
        var value = isCheckbox ? input.checked : (input ? input.value.trim() : "");
        var required = field.hasAttribute("data-required");
        var isValid = true;
        if (required) isValid = isCheckbox ? value === true : value.length > 0;
        if (isValid && input && input.type === "email" && value) isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (isValid && input && input.type === "tel" && value) isValid = value.replace(/[^0-9]/g, "").length >= 10;
        field.classList.toggle("has-error", !isValid);
        if (!isValid) valid = false;
      });

      if (!valid) {
        if (errorBox) {
          errorBox.textContent = "Lütfen işaretli alanları kontrol edin.";
          errorBox.classList.add("is-visible");
        }
        return;
      }

      if (!window.HCP_CONTACT_ENDPOINT || !window.HCP_WEB3FORMS_KEY) {
        if (errorBox) {
          errorBox.textContent = "Form bağlantısı şu anda kullanılamıyor. Lütfen WhatsApp veya e-posta ile bize ulaşın.";
          errorBox.classList.add("is-visible");
        }
        return;
      }

      var fd = new FormData(form);
      var payload = {
        access_key: window.HCP_WEB3FORMS_KEY,
        subject: "Health Care Pro - Yeni Bilgi Talebi",
        from_name: "Health Care Pro Web Sitesi"
      };
      fd.forEach(function (value, key) {
        if (key !== "subject") payload[key] = value;
      });
      var subjectField = form.querySelector('[name="subject"]');
      if (subjectField && subjectField.options && subjectField.selectedIndex >= 0) {
        payload.ilgilendiginiz_konu = subjectField.options[subjectField.selectedIndex].textContent.trim();
      }
      if ("kvkk" in payload) payload.kvkk = "Onaylandı";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.setAttribute("aria-busy", "true");
        submitBtn.textContent = "Gönderiliyor...";
      }

      fetch(window.HCP_CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.text().then(function (text) {
            var data = {};
            try { data = text ? JSON.parse(text) : {}; } catch (err) { data = {}; }
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (!result.ok || !result.data || result.data.success !== true) throw new Error("request-failed");
          if (successBox) {
            successBox.textContent = "Talebiniz başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.";
            successBox.classList.add("is-visible");
          }
          form.reset();
          form.querySelectorAll(".has-error").forEach(function (field) { field.classList.remove("has-error"); });
        })
        .catch(function () {
          if (errorBox) {
            errorBox.textContent = "Talebiniz gönderilemedi. Lütfen internet bağlantınızı kontrol edip tekrar deneyin veya WhatsApp/e-posta ile bize ulaşın.";
            errorBox.classList.add("is-visible");
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.removeAttribute("aria-busy");
            submitBtn.textContent = "Gönder";
          }
        });
    });
  }

  /* ---------------- Site search ---------------- */
  var searchInput = document.querySelector("[data-search-input]");
  var searchResults = document.querySelector("[data-search-results]");
  var searchForm = document.querySelector("[data-search-form]");

  function normalize(str) {
    return (str || "").toLocaleLowerCase("tr").replace(/ı/g, "i").replace(/[̇]/g, "");
  }

  function appendText(parent, tag, className, value) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = value;
    parent.appendChild(el);
    return el;
  }

  function runSearch(query) {
    if (!searchResults || !window.HCP_SEARCH_INDEX) return;
    var q = normalize(query.trim());
    searchResults.textContent = "";
    if (!q) return;
    var matches = window.HCP_SEARCH_INDEX.filter(function (item) {
      return normalize(item.title + " " + item.description).indexOf(q) !== -1;
    }).slice(0, 20);
    if (matches.length === 0) {
      var empty = appendText(searchResults, "p", "search-empty", "Aramanızla eşleşen içerik bulunamadı. ");
      var servicesLink = document.createElement("a");
      servicesLink.href = "/hizmetler/";
      servicesLink.textContent = "Hizmetlerimize";
      empty.appendChild(servicesLink);
      empty.appendChild(document.createTextNode(" veya "));
      var infoLink = document.createElement("a");
      infoLink.href = "/bilgi-merkezi/";
      infoLink.textContent = "Bilgi Merkezi'ne";
      empty.appendChild(infoLink);
      empty.appendChild(document.createTextNode(" göz atabilirsiniz."));
      return;
    }
    matches.forEach(function (item) {
      var link = document.createElement("a");
      link.className = "search-result";
      link.href = item.url;
      appendText(link, "span", "tag", item.type);
      appendText(link, "h4", "", item.title);
      appendText(link, "p", "", item.description);
      searchResults.appendChild(link);
    });
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      runSearch(searchInput.value);
    });
    searchInput.addEventListener("input", function () { runSearch(searchInput.value); });
    var params = new URLSearchParams(window.location.search);
    var initialQ = params.get("q");
    if (initialQ) {
      searchInput.value = initialQ;
      runSearch(initialQ);
    }
  }
})();
