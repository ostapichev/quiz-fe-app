import { useTranslation } from 'react-i18next';

import { Content, ContentList } from '../components';
import { CONTENT } from '../constants';

export const CompaniesPage = () => {
  const { t } = useTranslation();

  return (
    <Content
      title={t('pages.companies.title')}
      description={t('pages.companies.text')}
      modalTitle={t('pages.companies.title')}
      modalDescription={t('pages.companies.text')}
    >
      <ContentList content={CONTENT.companies} />
    </Content>
  );
};
