import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

//page & layout imports
import Homepage from "./pages/Homepage";
import Canteen from "./pages/Canteen";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="jidelna/" element={<Canteen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
