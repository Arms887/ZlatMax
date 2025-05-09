import './App.css';
import './global.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
<div className="App">
  <Header />
       <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
