import Navbar from "./components/navbar/Navbar";
import Home from './components/navbar/Home/Home';
import Cabana from './components/navbar/Cabana';
import Pacotes from './components/navbar/Packages';
import Atividades from './components/navbar/Activities';
import Sobre from './components/navbar/About';
import Enviar_livro from "./components/navbar/Send_book";
import Login  from "./components/navbar/Login";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cabana' element={<Cabana/>}/>
    <Route path='/packages' element={<Pacotes/>}/>
    <Route path='/activities' element={<Atividades/>}/>
    <Route path='/about' element={<Sobre/>}/>
    <Route path='/send_book' element={<Enviar_livro/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>  </>
  )
}

export default App;