import { useTranslation } from 'react-i18next';

import { Content } from '../components';

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Content
      title={t('description.greeting')}
      description={t('description.text')}
      modalTitle={t('pages.home.title')}
      modalDescription={t('pages.home.text')}
    />
  );
};
