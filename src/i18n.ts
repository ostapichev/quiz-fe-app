import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  resources: {
    en: {
      translation: {
        description: {
          lang: 'English',
          greeting: 'Welcome to Our Platform',
          text:
            'We’re glad to have you here. ' +
            'Our goal is to provide you with a simple, fast, and reliable experience. ' +
            'Explore our features, discover new opportunities, and get the most out of our service. ' +
            'If you have any questions, ' +
            'feel free to contact our support team — we’re always happy to help. Let’s get started!',
        },
        buttons: {
          details: 'details',
        },
        form: {
          size: 'size items',
        },
        pages: {
          home: {
            title: 'Home',
            text: 'Home description',
          },
          users: {
            title: 'Users',
            text: 'List of users',
          },
          companies: {
            title: 'Companies',
            text: 'List of companies',
          },
          about: {
            title: 'About',
            text: 'About us',
          },
        },
      },
    },
    ua: {
      translation: {
        description: {
          lang: 'Українська',
          greeting: 'Ласкаво просимо до нашої платформи',
          text:
            'Ми раді вас бачити. ' +
            'Наша мета — забезпечити вам простий, швидкий та надійний досвід. ' +
            'Ознайомтеся з нашими функціями, відкрийте для себе нові можливості ' +
            'та отримайте максимум від нашого сервісу. Якщо у вас виникнуть запитання, ' +
            'звертайтеся до нашої служби підтримки — ми завжди раді допомогти. Почнемо!',
        },
        buttons: {
          details: 'детальніше',
        },
        form: {
          size: 'кількість елементів',
        },
        pages: {
          home: {
            title: 'Домашня',
            text: 'Опис домашньої сторінки',
          },
          users: {
            title: 'Користувачі',
            text: 'Список користувачів',
          },
          companies: {
            title: 'Компанії',
            text: 'Список компаній',
          },
          about: {
            title: 'Інформація',
            text: 'О нас',
          },
        },
      },
    },
  },
});

export default i18n;
