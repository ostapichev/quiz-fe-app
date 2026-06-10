import { useTranslation } from 'react-i18next';

import { Content, ContentList } from '../components';
import { CONTENT } from '../constants';

export const UsersPage = () => {
  const { t } = useTranslation();

  return (
    <Content
      title={t('pages.users.title')}
      description={t('pages.users.text')}
      modalTitle={t('pages.users.title')}
      modalDescription={t('pages.users.text')}
    >
      <ContentList content={CONTENT.users} />
    </Content>
  );
};
