import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import ErrorPage from './pages/ErrorPage';
// import ErrorPage from "./pages/ErrorPage";
import MainPage from './pages/MainPage';
import Root from './pages/Root';
import './style.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path="auth" element={<AuthPage />} />
    </Route>
  )
);

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
