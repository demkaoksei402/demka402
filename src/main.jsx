import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './components/history/history.jsx'
import Login from './components/log/log.jsx'
import Registr from './components/reg/reg.jsx'
import Zapis from './components/zapis/zapis.jsx'
import Price from './components/price/price.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/zapis",
    element: <Zapis/>,
  },
  {
    path: "/registration",
    element: <Registr/>,
  },
  {
    path: "/history",
    element: <History/>,
  },
  {
    path: "/price",
    element: <Price/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);