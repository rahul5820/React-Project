import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import About from './About'

const router=createBrowserRouter([{
  path: '/',
  element:<Layout/>,
  children:[

{
  path:"",
  element:<Home/> 

},
{
  path:"/About",
  children:<About/>

}

  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
