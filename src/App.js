import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

import Header from './components/Header';
import Profile from './components/Profile';
import Protectedroutes from './components/Auth/Protectedroutes';

function App(props) {


  const data="something"
  return (
    <>
   
    <Router>
    <Header/>
     
    <div>
 <Switch>
      
      
      <Route exact path="/">
        <Home/>
        </Route>

        {/**
         * 
         *         <Route exact path="/login"  component={()=><Login   />} />

         */}
       <Protectedroutes exact path="/profile"  component={()=><Profile   />} />

        
       
        <Route exact path="/login">
        <Login />
        </Route>
       
      </Switch>
    </div>
  </Router>
  </>
  );
}

export default App;
