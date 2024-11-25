
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import Home from './component/Home'
import Cart from './component/Cart'
function App() {

  return (
    <BrowserRouter>
      <Header/>
<div className="App">
<Routes path="/" Component={Home} exact/>
<Routes path="/cart" Component={Cart}/>
</div>    </BrowserRouter>
  )
}

export default App
