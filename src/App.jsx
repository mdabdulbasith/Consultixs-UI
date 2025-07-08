import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import AIConsulting from './Pages/services/AIConsulting';
import Cloud from './Pages/services/cloud';
import Webdevelopment from './Pages/services/webdevelopment';
import ITSolutions from './Pages/services/ITSolutions';
import Marketing from './Pages/services/Marketing';
import Realestate from './Pages/services/Realestate';
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
        <Route path="/services/AIConsulting" element={<AIConsulting />} />
        <Route path="/services/Cloud" element={<Cloud />} />
        <Route path="/services/webdevelopment" element={<Webdevelopment />} />
        <Route path="/services/ITSolutions" element={<ITSolutions />} />
        <Route path="/services/Marketing" element={<Marketing />} />
        <Route path="/services/Realestate" element={<Realestate />} />
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
