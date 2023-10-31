import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import SignUp from './pages/SignUp';
import GuestView from './pages/GuestView';
import DefaultView from './pages/DefaulView';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const Routing = createBrowserRouter([
  {
    path: '/',
    element: <GuestView />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
    ],
  },
  {
    path: '/',
    element: <DefaultView />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default Routing;
