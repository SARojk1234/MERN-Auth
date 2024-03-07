
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Profile from './components/Profile'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  
  )
}

export default App
