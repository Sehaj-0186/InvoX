import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Businesssection from './components/Businesssection'
import Customersection from './components/customersection'
import Customerdashboard from './components/Customerdashboard';
import Businessdashboard from './components/Businessdashboard';
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className='bg-zinc-950 h-full w-full !scroll-smooth'>
      <Navbar/>
      <Hero/>
      <Businesssection/>
      <Customersection/>
    </div>}/>
    <Route path="/dashboard" element={<Customerdashboard/>}/>
    <Route path="/dashboardbusiness" element={<Businessdashboard/>}/>

    </Routes>
    </Router>
    
  )
}

export default App
