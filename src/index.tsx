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
import { QueryClient, QueryClientProvider } from 'react-query';
import SearchTickets from './pages/SearchTickets';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path="auth" element={<AuthPage />} />{' '}
      {
        // Переименовать auth
      }
      <Route path="tickets" element={<TicketsPage />} />
      <Route path="search_tickets" element={<SearchTickets />} />
      <Route path="profile" element={<ProfilePage />} />
    </Route>
  )
);

// Clear the existing HTML content
document.body.innerHTML = '<div id="root"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('root') as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <RouterProvider router={router} />
      </MainProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
