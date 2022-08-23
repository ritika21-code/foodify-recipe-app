import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (<Router>
    <Navbar />
    <div className="container main">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipe/>}/>
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
