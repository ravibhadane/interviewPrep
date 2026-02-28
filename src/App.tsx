
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Javascript  from './pages/Javascript'
import Coding from './pages/Coding'
import Angular from './pages/Angular'
import Common from './pages/Common'
import AppNavbar from './components/Navbar/AppNavbar'
import React from './pages/React'
import Htmlcss from "./pages/Htmlcss";
function App() {

  return (
   <BrowserRouter>
   <AppNavbar />
    <Routes>
       <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/coding" element={ <Coding />} />
      <Route path="/angular" element={ <Angular />} />
      <Route path='/react' element={ <React />} />
      <Route path="/htmlcss" element={ <Htmlcss />} />
      <Route path="/common" element={ <Common />} />      
    </Routes>
   </BrowserRouter>
  )
}

export default App
