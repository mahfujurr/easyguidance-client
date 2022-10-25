import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Catagory from './Components/Catagory/Catagory';
import Classes from './Components/Classes/Classes';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import News from './Components/News/News';
import Register from './Components/Register/Register';
import Main from './Layout/Main';

 const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('https://easy-guidance-server.vercel.app/tutorial')
      },
      {
        path:'/classes',
        element:<Classes></Classes>,
      },
      {
        path:'/catagory/:id',
        element: <Catagory></Catagory>,
        loader: ({params}) => fetch(`https://easy-guidance-server.vercel.app/catagory/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <News></News>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
    
  }
 ]);
function App() {
  
 
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
