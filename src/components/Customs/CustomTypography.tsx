import type { ReactNode } from 'react';

import { Typography, type TypographyProps } from '@mui/material';

interface IProps extends TypographyProps {
  children: ReactNode;
}

export const CustomTypography = ({ children, ...props }: IProps) => {
  return (
    <Typography gutterBottom {...props}>
      {children}
    </Typography>
  );
};
