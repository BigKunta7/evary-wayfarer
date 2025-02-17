
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Membership from './pages/Membership';
import EarlyAccess from './pages/EarlyAccess';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/early-access" element={<EarlyAccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
