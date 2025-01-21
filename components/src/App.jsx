import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";

import { Home } from "./pages/Home";
import { Adidas } from "./pages/Adidas";
import { Nike } from "./pages/Nike";
import { Onsitsuka } from "./pages/Onsitsuka";
import { NewBalance } from "./pages/NewBalance";
import { NotFound } from "./pages/NotFound";

import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="adidas" element={<Adidas />} />
          <Route path="nike" element={<Nike />} />
          <Route path="onitsuka" element={<Onsitsuka />} />
          <Route path="newbalance" element={<NewBalance />} />
          <Route path="*" element={<NotFound />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
