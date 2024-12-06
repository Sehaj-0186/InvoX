import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Businesssection from './components/Businesssection'
import Customersection from './components/Customersection'
import Customerdashboard from './components/Customerdashboard';
import Businessdashboard from './components/Businessdashboard';
import { useRef } from 'react';
function App() {

  const businessSectionRef = useRef<HTMLDivElement>(null);
  const customerSectionRef = useRef<HTMLDivElement>(null);

  // Scroll handler for the first button
  const handleFirstButtonClick = () => {
    if (businessSectionRef.current) {
      businessSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondButtonClick = () => {
    if (customerSectionRef.current) {
      customerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThirdButtonClick = () => {
    if (customerSectionRef.current) {
      customerSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='bg-zinc-950 h-full w-full !scroll-smooth'
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
        }}>
      <Navbar firstbutton="Create Business" secondbutton='Customer Login' thirdbutton='Contact us'  onFirstButtonClick={handleFirstButtonClick} onSecondButtonClick={handleSecondButtonClick} onThirdButtonClick={handleThirdButtonClick} />
      <Hero/>
      <div ref={businessSectionRef}>
                <Businesssection />
              </div>
      <div ref={customerSectionRef}><Customersection/></div>
      
    </div>}/>
    <Route path="/dashboard" element={<Customerdashboard/>}/>
    <Route path="/dashboardbusiness" element={<Businessdashboard/>}/>

    </Routes>
    </Router>
    
  )
}

export default App
