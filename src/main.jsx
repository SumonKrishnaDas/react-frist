import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './components/shop/shop.jsx'
import Home  from './components/Layout/Home.jsx'
import cartProductsLoader from './Loder/cartProductsLoader.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Order from './components/Orders/Order.jsx'
import Inventory from './Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'




const router = createBrowserRouter(
[
{



  path:'/',
  element: <Home> </Home>,
  children:[

{
  path:'shop',
  element:<Shop> </Shop>
},
{
path: 'order',
element:<Order> </Order>,
loader: cartProductsLoader

},

{
  path:'inventory',
  element:<Inventory> </Inventory>

},



{
 path:'login',
 element:<Login> </Login>


}

  ]
}


]
)






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
