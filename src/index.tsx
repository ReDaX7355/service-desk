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
import MainProvider from './context/MainProvider';
import TicketsPage from './pages/TicketsPage';
import ProfilePage from './pages/ProfilePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route path="tickets" element={<TicketsPage />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  </React.StrictMode>
);
