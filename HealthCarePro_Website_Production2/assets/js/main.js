(function () {
  "use strict";

  /* ---------------- Mobile menu ---------------- */
  var menuToggle = document.querySelector("[data-menu-toggle]");
  var mobileMenu = document.querySelector("[data-mobile-menu]");
  var menuClose = document.querySelector("[data-menu-close]");
  var overlay = document.querySelector("[data-menu-overlay]");

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
    menuToggle && menuToggle.setAttribute("aria-expanded", "true");
    if (menuClose) menuClose.focus();
  }
  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
    menuToggle && menuToggle.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.focus();
  }
  if (menuToggle) menuToggle.addEventListener("click", openMenu);
  if (menuClose) menuClose.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenu && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  /* Mobile submenu toggles */
  document.querySelectorAll("[data-submenu-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var li = btn.closest("li");
      var submenu = li.querySelector(".mobile-submenu");
      var isOpen = submenu.classList.contains("is-open");
      // close siblings
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

  /* ---------------- Cookie banner ---------------- */
  var COOKIE_KEY = "hcp_cookie_consent";
  var cookieBanner = document.querySelector("[data-cookie-banner]");
  function getConsent() {
    try { return localStorage.getItem(COOKIE_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(COOKIE_KEY, value); } catch (e) { /* noop */ }
  }
  if (cookieBanner && !getConsent()) {
    cookieBanner.classList.add("is-visible");
  }
  document.querySelectorAll("[data-cookie-accept]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setConsent("accepted");
      cookieBanner.classList.remove("is-visible");
    });
  });
  document.querySelectorAll("[data-cookie-reject]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setConsent("rejected-optional");
      cookieBanner.classList.remove("is-visible");
    });
  });

  /* ---------------- Contact form validation ---------------- */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var successBox = form.querySelector("[data-form-success]");
      var errorBox = form.querySelector("[data-form-error]");
      successBox && successBox.classList.remove("is-visible");
      errorBox && errorBox.classList.remove("is-visible");

      form.querySelectorAll("[data-field]").forEach(function (field) {
        var input = field.querySelector("input, textarea, select");
        var isCheckbox = input && input.type === "checkbox";
        var value = isCheckbox ? input.checked : (input ? input.value.trim() : "");
        var required = field.hasAttribute("data-required");
        var isValid = true;

        if (required) {
          if (isCheckbox) isValid = value === true;
          else isValid = value.length > 0;
        }
        if (isValid && input && input.type === "email" && value) {
          isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        }
        if (isValid && input && input.type === "tel" && value) {
          isValid = value.replace(/[^0-9]/g, "").length >= 10;
        }

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

      /*
       * Bu formun varsayılan durumda gerçek bir backend entegrasyonu yoktur.
       * window.HCP_CONTACT_ENDPOINT (bkz. data/site.js > contactEndpoint)
       * tanımlandığında form bu endpoint'e JSON POST eder. Tanımlı değilse,
       * sahte bir "başarıyla gönderildi" mesajı GÖSTERİLMEZ; kullanıcıya
       * WhatsApp/e-posta ile ulaşma seçeneği sunulur. Bkz. README.md >
       * "Form Backend Entegrasyonu".
       */
      if (window.HCP_CONTACT_ENDPOINT) {
        var payload = {};
        new FormData(form).forEach(function (value, key) { payload[key] = value; });
        var submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.disabled = true;

        fetch(window.HCP_CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
          .then(function (res) {
            if (!res.ok) throw new Error("request-failed");
            if (successBox) successBox.classList.add("is-visible");
            form.reset();
          })
          .catch(function () {
            if (errorBox) {
              errorBox.textContent = "Talebiniz gönderilemedi. Lütfen WhatsApp veya e-posta ile bize ulaşın.";
              errorBox.classList.add("is-visible");
            }
          })
          .finally(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
        return;
      }

      if (errorBox) {
        errorBox.innerHTML =
          'Bu form şu anda bir e-posta/CRM servisine bağlı değildir. Bilgi talebinizi doğrudan iletmek için lütfen ' +
          '<a href="' + (window.HCP_WHATSAPP_HREF || "#") + '">WhatsApp</a> veya ' +
          '<a href="mailto:' + (window.HCP_EMAIL || "") + '">e-posta</a> ile bize ulaşın.';
        errorBox.classList.add("is-visible");
      }
    });
  }

  /* ---------------- Site search ---------------- */
  var searchInput = document.querySelector("[data-search-input]");
  var searchResults = document.querySelector("[data-search-results]");
  var searchForm = document.querySelector("[data-search-form]");

  function normalize(str) {
    return (str || "")
      .toLocaleLowerCase("tr")
      .replace(/ı/g, "i")
      .replace(/[̇]/g, "");
  }

  function runSearch(query) {
    if (!searchResults || !window.HCP_SEARCH_INDEX) return;
    var q = normalize(query.trim());
    if (!q) {
      searchResults.innerHTML = "";
      return;
    }
    var matches = window.HCP_SEARCH_INDEX.filter(function (item) {
      return normalize(item.title + " " + item.description).indexOf(q) !== -1;
    }).slice(0, 20);

    if (matches.length === 0) {
      searchResults.innerHTML =
        '<p class="search-empty">Aramanızla eşleşen içerik bulunamadı. ' +
        '<a href="/hizmetler/">Hizmetlerimize</a> veya <a href="/bilgi-merkezi/">Bilgi Merkezi\'ne</a> göz atabilirsiniz.</p>';
      return;
    }
    searchResults.innerHTML = matches
      .map(function (item) {
        return (
          '<a class="search-result" href="' + item.url + '">' +
          '<span class="tag">' + item.type + "</span><h4>" + item.title + "</h4>" +
          "<p>" + item.description + "</p></a>"
        );
      })
      .join("");
  }

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      runSearch(searchInput.value);
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      runSearch(searchInput.value);
    });
    // Support ?q= param on the dedicated search page
    var params = new URLSearchParams(window.location.search);
    var initialQ = params.get("q");
    if (initialQ) {
      searchInput.value = initialQ;
      runSearch(initialQ);
    }
  }
})();
