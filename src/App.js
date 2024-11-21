import './App.css';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';


function App() {
  let router=createBrowserRouter([
    {
      path:'',
      element:<RootLayout/>,
    
  
      
    }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}/>
    
      
    </div>
  );
}

export default App;
