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

function App() {
  return (
    <Router>

      <Header/>
    <div>
 <Switch>
        <Route exact path="/">
        
        <Home/>
        </Route>

        <Route exact path="/login">
        
        <Login/>
        </Route>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
