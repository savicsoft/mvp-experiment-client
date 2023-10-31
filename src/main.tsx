import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './Routing';
import { RouterProvider } from 'react-router-dom';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Routing} />
  </StrictMode>,
);
