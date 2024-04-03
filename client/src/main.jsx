import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Company from './pages/Company';
import Suppliers from './pages/Suppliers';
import supplierData from '../src/suppliers';
import Signup from './pages/Signup';
import Store from './pages/Store';
import locationsData from '../src/locations.js';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home locations ={locationsData}/>,
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
        path: '/Signup',
        element: <Signup />,
      },
      {
        path: '/Suppliers',
        element: <Suppliers suppliers={supplierData}/>,
      },
      {
        path: '/Store',
        element: <Store />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

//test