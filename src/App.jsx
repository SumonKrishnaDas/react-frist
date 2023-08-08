import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import  Shop from'./components/shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
   
<div>


<Header>   </Header>
<Shop> </Shop>

    </div>
  );
}

export default App
