import type { ReactNode } from 'react';

import { Container, Stack } from '@mui/material';

import { CustomModal, CustomTypography } from '../Customs';

interface IProps {
  title: string;
  description: string;
  modalDescription: string;
  modalTitle: string;
  children?: ReactNode;
}

export const Content = ({
  title,
  description,
  modalDescription,
  modalTitle,
  children = null,
}: IProps) => {
  return (
    <Container maxWidth="lg" fixed>
      <Stack
        sx={{
          alignItems: 'center',
          bgcolor: 'background.paper',
          minHeight: '100vh',
        }}
      >
        <CustomTypography align="center" variant="h3" sx={{ p: 2 }}>
          {title}
        </CustomTypography>
        <CustomTypography align="justify" variant="subtitle1" sx={{ p: 2 }}>
          {description}
        </CustomTypography>
        {children}
        <CustomModal descriptionModal={modalDescription} title={modalTitle} />
      </Stack>
    </Container>
  );
};
