import { Content } from '../Components';
import { description, greeting } from '../ets';

export const HomePage = () => {
  return (
    <Content
      greeting={greeting}
      description={description}
      modalTitle="Home"
      modalDescription="Home description"
    />
  );
};
