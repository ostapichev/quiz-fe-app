import { CompaniesList, Content } from '../Components';

export const CompaniesPage = () => {
  return (
    <Content
      greeting="Hello from Companies page"
      description="Companies content"
      modalTitle="Companies"
      modalDescription="Companies description"
      component={<CompaniesList />}
    />
  );
};
