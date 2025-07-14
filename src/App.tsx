import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";
import content from "./data/content.json";
import { Nexcent } from "./components/pages/Nexcent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/nexcent" replace />} />
        <Route path="/header" element={<Header content={content.header} />} />
        <Route path="/nexcent" element={<Nexcent />} />
      </Routes>
    </Router>
  );
};

export default App;
