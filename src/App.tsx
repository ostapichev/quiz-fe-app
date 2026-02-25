import { CssBaseline } from '@mui/material';

import { Greeting, Header } from './Components';
import { description, greeting } from './ets';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Greeting greeting={greeting} description={description} />
    </>
  );
};

export default App;
