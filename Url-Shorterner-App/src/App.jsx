import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerForm from './components/URLShorternerForm';
import StatsPage from './components/StatsPage';
import RedirectHandler from './components/RedirectHandler';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<URLShortenerForm />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<RedirectHandler />} />
      </Routes>
    </Router>
  );
}

export default App;
