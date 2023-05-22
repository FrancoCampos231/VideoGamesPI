
import  {Route, Router, useLocation} from 'react-router-dom';
import style from './Views/Landing/Landing.module.css'
import {Detail, Form, Home, Landing} from './Views/index'
import NavBar from './components/NavBar/Navbar';

function App() {

  const location = useLocation();
  return (
    <div>
      
      {location.pathname !== '/' && <NavBar/>}
      <Route exact path='/' render={() => <Landing/>}/>
      <Route exact path='/detail' render={() => <Detail/>}/>
      <Route exact path='/create' render={() => <Form/>}/>
      <Route path='/home' render={() => <Home/>}/>
      
    </div>
  );
}

export default App;
