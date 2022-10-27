import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Catagory from './Components/Catagory/Catagory';
import CheckOut from './Components/CheckOut/CheckOut';
import Classes from './Components/Classes/Classes';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import News from './Components/News/News';
import Register from './Components/Register/Register';
import Main from './Layout/Main';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import ErrorPage from "./error-page";

 const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    errorElement: <ErrorPage />,
    children:[
      {
        path: '/',
        element: <Home></Home>,
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
      },
      {
        path:'/tutorial/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params}) => fetch(`https://easy-guidance-server.vercel.app/tutorial/${params.id}`)

      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
