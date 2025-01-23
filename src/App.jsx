import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Features from './pages/Features';
import LaunchArticle from './pages/LaunchArticle';
import Onboarding from './pages/Onboarding';
import Register from './pages/Register';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Tokenomics from './pages/Tokenomics';
import Login from './pages/admin/Login';
import HashKeyManager from './pages/admin/HashKeyManager';

const App = () => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="features" element={<Features />} />
        <Route path="launch" element={<LaunchArticle />} />
        <Route path="onboarding" element={<Onboarding />} />
        <Route path="register" element={<Register />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="team" element={<Team />} />
        <Route path="tokenomics" element={<Tokenomics />} />
        <Route path="admin">
          <Route path="login" element={<Login />} />
          <Route path="hashkey" element={<HashKeyManager />} />
        </Route>
      </Route>
    </Routes>
  </ErrorBoundary>
);

export default App;
