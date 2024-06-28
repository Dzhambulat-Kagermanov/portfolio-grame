import { NotFoundPage } from 'pages/404/'
import { AboutPage } from 'pages/About'
import { ContactsPage } from 'pages/Contacts'
import { HomePage } from 'pages/Home'
import { RouteProps } from 'react-router-dom'

export enum Routes {
  HOME = 'home',
  ABOUT = 'about',
  CONTACTS = 'contacts',
  NOT_FOUND = 'not_found',
}

export const RoutesPath: Record<Routes, string> = {
  [Routes.HOME]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.CONTACTS]: '/contacts',
  [Routes.NOT_FOUND]: '*',
}

export const routesConfig: Record<Routes, RouteProps> = {
  [Routes.HOME]: {
    path: RoutesPath[Routes.HOME],
    element: <HomePage />,
  },
  [Routes.ABOUT]: {
    path: RoutesPath[Routes.ABOUT],
    element: <AboutPage />,
  },
  [Routes.CONTACTS]: {
    path: RoutesPath[Routes.CONTACTS],
    element: <ContactsPage />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutesPath[Routes.NOT_FOUND],
    element: <NotFoundPage />,
  },
}
