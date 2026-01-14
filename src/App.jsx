import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import HowItWorks from './pages/HowItWorks';
import Checklist from './pages/Checklist';
import SEOPage from './pages/SEOPage';
import DIYGuidePage from './pages/DIYGuidePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/locations" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/fbi-background-check-korea" element={<SEOPage type="fbi" />} />
          <Route path="/visa-fingerprinting-korea" element={<SEOPage type="visa" />} />
          <Route path="/apostille-fingerprinting-korea" element={<SEOPage type="apostille" />} />
          <Route path="/diy-fbi-fingerprint-guide" element={<DIYGuidePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App

