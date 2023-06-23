import { BrowserRouter as Router, Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import React, {useEffect} from 'react';

//page & layout imports
import Homepage from "./pages/Homepage";
import Canteen from "./pages/Canteen";

function App() {
  useEffect(() => {
    document.title = 'ZŠ Trávníčkova';
  }, []);

  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="jidelna/" element={<Canteen />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
