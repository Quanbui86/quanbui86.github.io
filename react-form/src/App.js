import logo from './logo.svg';
import './App.css';
import Root from './components/Root'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
const route = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/>}>
    <Route index element={ <HomePage/>}/>
    <Route path='register' element={ <Register/>}/>
    <Route path='Login' element={ <Login/>}/>
  </Route>
))
function App() {
  return (
    <div className="App">
      <RouterProvider router={ route }/>
    </div>
  );
}

export default App;
