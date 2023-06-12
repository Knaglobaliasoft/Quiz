import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Startpage from './Pages/Startpage/Startpage';
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Joinquiz from './Pages/Joinquiz/Joinquiz';
import Playquiz from './Pages/Playquiz/Playquiz';
import Mainpage from './Pages/Mainpage/Mainpage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/joinquiz" element={<Joinquiz />} />
          <Route path="/playquiz" element={<Playquiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
