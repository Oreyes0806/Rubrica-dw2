
import './App.css'
import { Header } from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import { Index } from './Pages/Index'
import { CreateSportPage } from './Pages/CreateSportPage'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/createSport' element={<CreateSportPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
