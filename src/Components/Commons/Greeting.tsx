import { Box, Button, Container } from '@mui/material';

import { CustomTypography } from '../Customs';
import { HOST, PORT } from '../../ets';

interface IProps {
  greeting: string;
  description: string;
}

export const Greeting = ({ greeting, description }: IProps) => {
  return (
    <Container fixed>
      <Box
        sx={{
          alignItems: 'center',
          bgcolor: '#cfe8fc',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CustomTypography padding={2} variant="h3" text={greeting} />
        <CustomTypography padding={2} text={description} variant="subtitle1" />
        <CustomTypography
          padding={2}
          variant="subtitle2"
          text={`Host: ${HOST}, Port: ${PORT}`}
        />
        <Button variant="contained" color="success">
          Success
        </Button>
      </Box>
    </Container>
  );
};
