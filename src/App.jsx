import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home.jsx";

// Components
import CustomHeader from "./components/CustomHeader.jsx";

function App() {
  return (
    <Router>
      <CustomHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<p>gay</p>} />
      </Routes>
    </ Router>
  )
}

export default App;
