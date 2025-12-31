/**
 * Simple i18n handler for Minecraft Coding Hub
 */

async function loadLanguage(lang) {
    // Determine path based on where we are (root or subfolder)
    const prefix = window.i18nPathPrefix || '../../';
    const filePath = `${prefix}locales/${lang}.json`;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Could not load ${lang} translation`);
        
        const translations = await response.json();
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerHTML = translations[key];
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
    } catch (error) {
        console.error("Translation Error:", error);
    }
}

function changeLanguage(lang) {
    loadLanguage(lang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    loadLanguage(savedLang);
}
