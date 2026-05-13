import { createBrowserRouter, Navigate } from 'react-router-dom';

import { PageLinks } from './ets';
import { MainLayout } from './Layouts';
import {
  AboutPage,
  CompaniesPage,
  CompanyProfilePage,
  ErrorPage,
  HomePage,
  UserProfilePage,
  UsersPage,
} from './Pages';

const { HOME, USERS, COMPANIES, ABOUT } = PageLinks;

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={HOME} />,
      },
      {
        path: HOME,
        element: <HomePage />,
      },
      {
        path: USERS,
        element: <UsersPage />,
      },
      {
        path: `${USERS}/:userId`,
        element: <UserProfilePage />,
      },
      {
        path: COMPANIES,
        element: <CompaniesPage />,
      },
      {
        path: `${COMPANIES}/:companyId`,
        element: <CompanyProfilePage />,
      },
      {
        path: ABOUT,
        element: <AboutPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
