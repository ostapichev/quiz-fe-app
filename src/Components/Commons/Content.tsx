import type { ReactNode } from 'react';

import { Box, Container } from '@mui/material';

import { CustomModal, CustomTypography } from '../Customs';

interface IProps {
  greeting: string;
  description: string;
  modalTitle: string;
  modalDescription: string;
  component?: ReactNode;
}

export const Content = ({
  greeting,
  description,
  modalTitle,
  modalDescription,
  component,
}: IProps) => {
  return (
    <Container fixed>
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CustomTypography
          text={greeting}
          textAlign="center"
          padding={2}
          variant="h3"
        />
        <CustomTypography
          padding={2}
          text={description}
          textAlign="justify"
          variant="subtitle1"
        />
        {component}
        <CustomModal
          descriptionModal={modalDescription}
          titleModal={modalTitle}
        />
      </Box>
    </Container>
  );
};
