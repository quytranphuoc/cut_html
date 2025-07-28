import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Header } from './components/Header';
import content from './data/content.json';
import Hero from './components/Hero';
import { Home } from './components/pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/header" element={<Header content={content.header}/>} />
        <Route path="/hero" element={<Hero slides={content.hero.slides}/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App; 