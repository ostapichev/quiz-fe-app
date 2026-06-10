import { useTranslation } from 'react-i18next';

import { CONTENT } from '../../constants';
import { useAppSelector } from '../../hooks';
import type { TContent } from '../../types';
import { SetSizeItems } from '../Commons';
import { CustomTypography } from '../Customs';

interface IProps {
  content: TContent;
}

export const ContentList = ({ content }: IProps) => {
  const { t } = useTranslation();

  const { valueCompanies, valueUsers } = useAppSelector(
    (state) => state.valueReducer,
  );

  const value = content === CONTENT.users ? valueUsers : valueCompanies;

  return (
    <>
      <CustomTypography variant="h6">{t('form.size')}</CustomTypography>
      <CustomTypography variant="h5">{value}</CustomTypography>
      <SetSizeItems contentType={content} />
    </>
  );
};
