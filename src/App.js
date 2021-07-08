import './App.css';
import Login from ('./components/Login')
import Navbar from ('./components/Navbar')
import Profile from ('./components/Profile')
import Register from ('./components/Register')
import Welcome from ('./components/Welcome')
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Switch>
        
        <Route 
          exact path="/"
          component={Welcome}
        />


        <Route
        path="/register"
        render={ (props) => <Register {...props}  /> }
/>

        <Route
        path="/login"
        render={ (props) => <Login {...props}  /> }
/>
        <Route
        path="/profile"
        render={ (props) => <Profile {...props}  /> }
/>




        </Switch>
      </div>
    </Router>
  );
}

export default App;
