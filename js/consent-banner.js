(function () {
  const STORAGE_KEY = "lifi_consent_choice_v1";

  function sendConsentUpdate(state) {
    const granted = state === "granted";
    if (typeof window.gtag !== "function") {
      return;
    }
    window.gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
  }

  function createBanner() {
    const banner = document.createElement("aside");
    banner.className = "consent-banner";
    banner.id = "consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML =
      '<div class="consent-banner__inner">' +
      '<span class="consent-banner__badge">Little Fight NYC</span>' +
      '<p class="consent-banner__text"><strong>Privacy settings:</strong> We use analytics and ad signals to improve performance. You can accept or reject non-essential tracking.</p>' +
      '<div class="consent-banner__actions">' +
      '<button type="button" class="consent-btn consent-btn--primary" data-consent-action="accept">Accept</button>' +
      '<button type="button" class="consent-btn consent-btn--secondary" data-consent-action="reject">Reject</button>' +
      '<a class="consent-link" href="/privacy.html">Privacy Policy</a>' +
      "</div>" +
      "</div>";
    return banner;
  }

  function applyChoice(choice, banner) {
    localStorage.setItem(STORAGE_KEY, choice);
    sendConsentUpdate(choice);
    if (banner) {
      banner.hidden = true;
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let savedChoice = null;
    try {
      savedChoice = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      savedChoice = null;
    }

    if (savedChoice === "granted" || savedChoice === "denied") {
      sendConsentUpdate(savedChoice);
      return;
    }

    const banner = createBanner();
    document.body.appendChild(banner);

    banner.addEventListener("click", function (event) {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const action = target.getAttribute("data-consent-action");
      if (action === "accept") {
        applyChoice("granted", banner);
      } else if (action === "reject") {
        applyChoice("denied", banner);
      }
    });
  });
})();
