import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { HeaderWp } from "./components/HeaderWp";
import content from "./data/whitepace.json";
import { WhiteSpace } from "./components/pages/WhiteSpace";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/header" element={<HeaderWp content={content.header} />} />
        <Route path="/home" element={<WhiteSpace />} />
      </Routes>
    </Router>
  );
};
export default App;
