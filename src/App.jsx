import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Outlet } from 'react-router-dom';

const App = () => (
  <ErrorBoundary>
    <Outlet />
  </ErrorBoundary>
);

export default App;
