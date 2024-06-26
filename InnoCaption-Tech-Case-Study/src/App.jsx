import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import { Box } from '@chakra-ui/react';

function App(){
  return (
  <Router>
    <Navbar />
    <Box as="main" pt="90px">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Box>
  </Router>
  );
}

export default App;
