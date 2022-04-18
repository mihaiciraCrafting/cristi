import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Street from './Components/Street/Street';
import LandingOverlay from './Components/LandingOverlay/LandingOverlay';
import Nature from './Components/Nature/Nature';
import Portrait from './Components/Portrait/Portrait';
import Eveniment from './Components/Eveniment/Eveniment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingOverlay />
                <Header />
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />

          <Route path="/street" element={<Street />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/eveniment" element={<Eveniment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
