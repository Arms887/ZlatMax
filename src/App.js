import './App.css';
import './global.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Login from './pages/Login';
import Register from './pages/Register';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <Router>
<div className="App">
  <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
