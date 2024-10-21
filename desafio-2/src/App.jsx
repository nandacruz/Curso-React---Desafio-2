import { useState } from 'react';
import './App.css';
import Challenge from './components/Challenge';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      <h1>Desafio 2</h1>
      <Challenge/>      
    </>
  )
}

export default App
