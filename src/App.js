import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'
import Welcome from './components/Welcome'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'

const App = () => {

// state that holds user data is the user is logged in
const [currentUser, setCurrentUser] = useState(null)

// if the jwt is valid and user navigates away from site automatically log them back in
useEffect(()=>{})

// function to log the user out
const handleLogout = () => {
  console.log('log the user out');
}

  return (
    <Router>
      <header>
        <Navbar currentUser={ currentUser } handleLogout={ handleLogout }/>
      </header>

      <div className="App">
        <Switch>
          <Route 
            exact path="/"
            component={Welcome}
          />

          <Route 
            path="/register"
            render={ props => <Register {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> }
          />

          <Route 
            path="/login"
            render={ props => <Login {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> }
          />

          {/* eventually we will do a condintional render here */}
          <Route 
            path="/profile"
            render={ props => <Profile {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} /> }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;