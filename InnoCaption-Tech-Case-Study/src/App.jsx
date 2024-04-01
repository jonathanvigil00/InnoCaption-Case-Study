import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';

function App(){
  return (
 <Router>
    <Routes>
      <Route path="/" element={<RootLayout><Dashboard /></RootLayout>} />
      <Route path="/Cart" element={<RootLayout><Cart /></RootLayout>} />
    </Routes>
 </Router>
  );
}

export default App;
