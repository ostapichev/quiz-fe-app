import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, IconButton, Modal, Stack } from '@mui/material';

import { CustomTypography } from '../Customs';

interface IProps {
  title: string;
  descriptionModal: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: 1,
  borderColor: 'divider',
  borderRadius: 5,
  boxShadow: 24,
  py: 1,
};

export const CustomModal = ({ title, descriptionModal }: IProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>{t('buttons.details')}</Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="column" sx={{ alignItems: 'center' }}>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '95%',
              }}
            >
              <CustomTypography
                id="modal-modal-title"
                align="left"
                variant="h5"
                sx={{ fontWeight: 'bold' }}
              >
                {title}
              </CustomTypography>

              <IconButton
                onClick={closeModal}
                sx={{
                  color: 'text.primary',
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'action.hover',
                  },
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Stack>

            <Divider flexItem />

            <CustomTypography
              id="modal-modal-description"
              align="justify"
              variant="subtitle1"
              sx={{ p: 2 }}
            >
              {descriptionModal}
            </CustomTypography>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
