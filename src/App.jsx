import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
