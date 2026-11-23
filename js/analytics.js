// Google Analytics 4 - vul hieronder het meet-ID in (G-XXXXXXXXXX). Leeg = uit.
(function () {
    var GA_ID = 'G-MBST2DWX39';
    if (!GA_ID) return;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag('js', new Date());
    // Privacyvriendelijk: geen advertentiesignalen, geen personalisatie
    gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    // Conversies meten: klik op offerte-knoppen en verzonden formulieren
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href*="aanvraag"]');
        if (a) gtag('event', 'offerte_klik', { link_text: (a.textContent || '').trim().slice(0, 60), page_path: location.pathname });
    });
    if (/aanvraag-verzonden/.test(location.pathname)) gtag('event', 'generate_lead', { form: 'projectaanvraag' });
    var cf = document.getElementById('contactForm');
    if (cf) {
        var sm = document.getElementById('successMessage');
        if (sm && window.MutationObserver) new MutationObserver(function () {
            if (sm.style.display === 'block') gtag('event', 'generate_lead', { form: 'contact' });
        }).observe(sm, { attributes: true, attributeFilter: ['style'] });
    }
})();
