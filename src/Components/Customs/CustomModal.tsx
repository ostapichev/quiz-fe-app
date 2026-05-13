import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, IconButton, Modal, Stack } from '@mui/material';

import { CustomTypography } from '../Customs';

interface IProps {
  titleModal: string;
  descriptionModal: string;
}

const style = {
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: 1,
  borderColor: 'divider',
  borderRadius: 5,
  boxShadow: 24,
  left: '50%',
  pb: 1,
  position: 'absolute',
  pt: 1,
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    sm: 500,
    xs: '90%',
  },
} as const;

export const CustomModal = ({ titleModal, descriptionModal }: IProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            direction="column"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '95%',
              }}
            >
              <CustomTypography
                fontWeight="bold"
                text={titleModal}
                textAlign="left"
                variant="h5"
              />

              <IconButton
                onClick={closeModal}
                sx={{
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
              padding={2}
              text={descriptionModal}
              textAlign="justify"
              variant="subtitle1"
            />
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
