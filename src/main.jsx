import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import App from './App.jsx';
import RootLayout from './components/layout/RootLayout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Features from './pages/Features.jsx';
import LaunchArticle from './pages/LaunchArticle.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Register from './pages/Register.jsx';
import Roadmap from './pages/Roadmap.jsx';
import Team from './pages/Team.jsx';
import Tokenomics from './pages/Tokenomics.jsx';
import Login from './pages/admin/Login.jsx';
import HashKeyManager from './pages/admin/HashKeyManager.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
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
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
