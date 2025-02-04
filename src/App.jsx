import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Landingpage";
import Mainpage from "./pages/Mainpage";
import Jobinfopage from "./pages/Jobinfopage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jobs" element={<Mainpage />} />
        <Route path="/jobs-info" element={<Jobinfopage />} />
      </Routes>
    </Router>
  );
}

export default App;
