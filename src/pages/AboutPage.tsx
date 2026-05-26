import { useTranslation } from 'react-i18next';

import { Content } from '../components';

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Content
      title={t('pages.about.title')}
      description={t('pages.about.text')}
      modalTitle={t('pages.about.title')}
      modalDescription={t('pages.about.text')}
    />
  );
};
