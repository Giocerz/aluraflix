import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import NewVideoPage from './Pages/NewVideoPage/NewVideoPage'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/new' element={<NewVideoPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
