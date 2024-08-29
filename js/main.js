$(document).ready(function() {
    let currentLang = 'pt';

    // Load translations from JSON file
    $.getJSON('translations.json', function(translations) {

        function applyTranslations() {
            $('[data-translate]').each(function() {
                const translateKey = $(this).data('translate');
                $(this).html(translations[currentLang][translateKey]);
            });

            // Update the button text and image
            let buttonText;
            let flagSrc;

            if (currentLang === 'en') {
                buttonText = 'Português';
                flagSrc = '/img/flag.svg'; // Path to the Portuguese flag image
            } else {
                buttonText = 'English';
                flagSrc = '/img/flag_en.svg'; // Path to the English flag image
            }

            $('#languageButton').html(`<img src="${flagSrc}" alt="flag">${buttonText} <i class="bi bi-chevron-down"></i>`);
        }

        // Apply initial translations
        applyTranslations();

        // Toggle language on button click
        $('#languageButton').click(function() {
            currentLang = currentLang === 'en' ? 'pt' : 'en';
            applyTranslations();
        });
    });
});
