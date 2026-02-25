import { Typography } from '@mui/material';

import type { ITypographyProps } from '../../types';

interface IProps {
  fontWeight?: string;
  padding?: number;
  text: string;
  variant: ITypographyProps;
}
export const CustomTypography = ({
  fontWeight,
  padding,
  text,
  variant,
}: IProps) => {
  return (
    <Typography
      variant={variant}
      fontWeight={fontWeight}
      p={padding}
      gutterBottom
    >
      {text}
    </Typography>
  );
};
