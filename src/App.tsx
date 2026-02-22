

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Javascript  from './pages/Javascript'
import Coding from './pages/Coding'
import Angular from './pages/Angular'
import Common from './pages/Common'
import AppNavbar from './components/Navbar/AppNavbar'
function App() {

  return (
   <BrowserRouter>
   <AppNavbar />
    <Routes>
       <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/javascript" element={<Javascript />} />
      <Route path="/coding" element={ <Coding />} />
      <Route path="/angular" element={ <Angular />} />
      <Route path="/common" element={ <Common />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
