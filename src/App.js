import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>

      <Header/>
    <div>
 

 
      <Switch>
        <Route path="/">
        
        <Home/>
        </Route>
       
      </Switch>
    </div>
  </Router>
  );
}

export default App;
