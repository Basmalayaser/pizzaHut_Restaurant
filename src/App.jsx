
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {

      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    
  const routes =createBrowserRouter([{
    path:"",element:<Layout/>,children:[
      {index:true , element:<Home/>},
      {path:"about", element:<About/>},
      {path:"menu", element:<Menu/>},
      {path:"contact", element:<Contact/>},
      {path:"*",element: <NotFound/>}
      
    ]
  }])


  return (
    <>
       <RouterProvider router={routes}/>
    </>
  )
}

export default App
