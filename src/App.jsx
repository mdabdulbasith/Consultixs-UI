import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollToTop from './Components/ScrollToTop';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation();
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    setHideNavbar(path === '/admin');
    console.log("🧭 Current Path:", location.pathname);
    console.log("🚫 Hide Navbar?", path === '/admin');
  }, [location]);

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-white text-2xl py-10">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
