import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Artworks from './pages/Artworks'
import About from './pages/About'
import Press from './pages/Press'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Edge from './pages/projects/Edge'
import Musea from './pages/projects/Musea'
import Mother from './pages/projects/Mother'
import Accom from './pages/projects/Accom'
import Edphoto from './pages/projects/Edphoto'
import Nonact from './pages/projects/Nonact'

function App() {

    const [menuActive, setMenuActive] = useState(false)

    function burgerClick() {
        setMenuActive(!menuActive)
        document.body.classList.toggle('show')
    }

    return (
        <BrowserRouter>

            <Header active={menuActive} clickFunc={burgerClick}/>

            <div className='main'>
                <div className='currpage'>
                    <div className='container'>

                        <Routes>
                            <Route path="/" element={<Artworks/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/press" element={<Press/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/non_action" element={<Nonact/>} />
                            <Route path="/the_edge_of_photo" element={<Edphoto/>} />
                            <Route path="/the_edge_of" element={<Edge/>} />
                            <Route path="/accomplices" element={<Accom/>} />
                            <Route path="/mother_africa" element={<Mother/>} />
                            <Route path="/music_of_the_sea" element={<Musea/>} />
                            <Route path="*" element={<Error/>} />
                        </Routes>

                    </div>
                </div>
            </div>

            <Footer/>

        </BrowserRouter>
    );
}

export default App;
