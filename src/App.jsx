
import './App.css'
import { useState } from 'react';
import Header  from './components/header/Header'
import Itens from './components/itens/Itens'

function App() {


  const [categoria, setCategoria] = useState("todos");
  return (
    <>
      <Header setCategoria={setCategoria} />
      <Itens categoria={categoria} />
    </>
  )
}

export default App
