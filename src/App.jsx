import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import RootLayout from './components/layout/RootLayout';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Features = lazy(() => import('./pages/Features'));
const Roadmap = lazy(() => import('./pages/Roadmap'));
const Team = lazy(() => import('./pages/Team'));
const Tokenomics = lazy(() => import('./pages/Tokenomics'));
const Contact = lazy(() => import('./pages/Contact'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Register = lazy(() => import('./pages/Register'));
const AdminLogin = lazy(() => import('./pages/admin/Login'));
const AdminHashKeyManager = lazy(() => import('./pages/admin/HashKeyManager'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
      <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  </div>
);

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/team" element={<Team />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin">
              <Route path="login" element={<AdminLogin />} />
              <Route path="hash-keys" element={<AdminHashKeyManager />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}