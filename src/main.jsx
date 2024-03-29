import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Company from './pages/Company';
import Suppliers from './pages/Suppliers'
import supplierData from '../src/suppliers'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Company',
        element: <Company />,
      },
      {
        path: '/Login',
        element: <Login />,
      },
      {
        path: '/Suppliers',
        element: <Suppliers suppliers={supplierData}/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
