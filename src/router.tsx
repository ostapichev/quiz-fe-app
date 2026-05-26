import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PAGE_LINK } from './constants';
import { MainLayout } from './layouts';
import {
  AboutPage,
  CompaniesPage,
  CompanyProfilePage,
  ErrorPage,
  HomePage,
  UserProfilePage,
  UsersPage,
} from './pages';

const { home, users, companies, about } = PAGE_LINK;

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={home} />,
      },
      {
        path: home,
        element: <HomePage />,
      },
      {
        path: users,
        element: <UsersPage />,
      },
      {
        path: `${users}/:userId`,
        element: <UserProfilePage />,
      },
      {
        path: companies,
        element: <CompaniesPage />,
      },
      {
        path: `${companies}/:companyId`,
        element: <CompanyProfilePage />,
      },
      {
        path: about,
        element: <AboutPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
