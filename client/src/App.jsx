
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Profile from './components/Profile'
 import PrivateRoute from './Layouts/PrivateRoute'

function App() {

  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/sign-in' element={<SignIn />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route element={<PrivateRoute />}>
      <Route path='/profile' element={<Profile />} />
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  
  )
}

export default App
