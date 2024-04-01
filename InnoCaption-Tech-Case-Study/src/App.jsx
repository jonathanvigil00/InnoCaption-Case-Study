import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App(){
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </Router>
  );
}

export default App;
