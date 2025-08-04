import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageSetup = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
    
    // Set document direction for RTL languages
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
    
    // Set document language
    document.documentElement.lang = currentLang;
    
    // Set up language change handler
    const handleLanguageChange = (lng) => {
      document.documentElement.lang = lng;
      if (lng === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    };

    i18n.on('languageChanged', handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
};

export default useLanguageSetup;
