import { Content, UsersList } from '../Components';

export const UsersPage = () => {
  return (
    <Content
      greeting="Hello from Users page"
      description="Users page"
      modalTitle="Users"
      modalDescription="Users descriptions"
      component={<UsersList />}
    />
  );
};
