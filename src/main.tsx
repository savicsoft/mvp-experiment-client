import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './styles.css';
import {
  Dashboard,
  DefaultView,
  GuestView,
  Login,
  NotFound,
  Profile,
  SignUp,
} from '@/pages';

// routing
const routing = createBrowserRouter([
  {
    path: '/',
    element: <DefaultView />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
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
    path: '*',
    element: <NotFound />,
  },
]);

//render

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routing} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
