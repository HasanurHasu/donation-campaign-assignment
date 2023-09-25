import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Donation from './components/Donation/Donation';
import Home from './components/Home/Home';
import DonateDetails from './components/DonateDetails/DonateDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => (fetch('/public/donation.json'))
      },
      {
        path: '/donation',
        element: <Donation />
      },
      {
        path: '/donate/:id',
        element: <DonateDetails></DonateDetails>,
        loader: () => (fetch('/public/donation.json'))
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
