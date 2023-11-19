import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Error from './pages/Error/error';
import Prestation from './pages/Prestations/prestation';
import APropos from './pages/A propos/a_propos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/prestation" element={<Prestation />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
