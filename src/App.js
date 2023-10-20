import './App.css';
import Navcomp from "./components/Navcomp";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Details from './components/Details';
import Counter from './components/counter/Counter';
function App() {
  return (
    <Router>
      <div className="App">
        <Navcomp />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Features" element={<Features />}></Route>
          <Route path="/Pricing" element={<Pricing />}></Route>
          <Route path="/Counter" element={<Counter />}></Route>
          <Route path="/:title/:id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
