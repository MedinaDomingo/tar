import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Header from './componentes/Header'

import Footer from './componentes/Footer';

function App() {

  return (
    <>

    <Header></Header>
    <Landing></Landing>
    <Footer></Footer>
    </>
  )
}

export default App
