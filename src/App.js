import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Catagory from './Components/Catagory/Catagory';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Main from './Layout/Main';

 const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://t20-worldcup-2022-server.vercel.app/news')
      },
      {
        path:'/catagory/:id',
        element: <Catagory></Catagory>,
        loader: ({params}) => fetch(`https://t20-worldcup-2022-server.vercel.app/catagory/${params.id}`)
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
