import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Programs from './components/Programs'
import Details from './components/Details'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notFound/NotFound'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='programs' element={<Programs/>}/>
        <Route path='programs/:id' element={<Details/>} />
        <Route path='trainers' element={<Trainers />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App