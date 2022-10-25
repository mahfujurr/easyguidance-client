import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Catagory from './Components/Catagory/Catagory';
import Classes from './Components/Classes/Classes';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import SingleClass from './Components/SingleClass/SingleClass';
import Main from './Layout/Main';

 const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://easy-guidance-server.vercel.app/tutorial')
      },
      {
        path:'/classes',
        element:<Classes></Classes>,
        children:[
          {
            path:'/classes',
            element:<SingleClass></SingleClass>
          }
        ]
      },
      {
        path:'/catagory/:id',
        element: <Catagory></Catagory>,
        loader: ({params}) => fetch(`https://easy-guidance-server.vercel.app/catagory/${params.id}`)
      },
      {
        path: '/news/:id',
        element: <News></News>
      }
      // {
      //   path:
      // }
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
