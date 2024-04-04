import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
// import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App(){
  return (
  <Router>
    <Navbar />
    <Box as="main" pt="100px">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
