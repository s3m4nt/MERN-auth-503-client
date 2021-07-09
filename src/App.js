import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'
import Welcome from './components/Welcome'
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect
} from 'react-router-dom'
import { 
  useState, 
  useEffect 
} from 'react'
import jwt from 'jsonwebtoken'

const App = () => {

// state that holds user data is the user is logged in
const [currentUser, setCurrentUser] = useState(null)

// if the jwt is valid and user navigates away from site automatically log them back in
useEffect(()=>{
  // get token from local storage
  const token = localStorage.getItem('jwtToken')
  // if check for token
  if(token){
    setCurrentUser(jwt.decode(token))
  } else {
    // else set user in state to be null 
    setCurrentUser(null)
  }

}, [])

// function to log the user out
const handleLogout = () => {
  // delete the jwt that's in local storage
if (localStorage.getItem('jwtToken')){
  localStorage.removeItem('jwtToken')

  // set user and state to be null
  setCurrentUser(null)
}}

  return (

    <Router>
      {/* <div className="mainContainer"> */}

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
              render={ props => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            <Route 
              path="/login"
              render={ props => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
            />

            {/* eventually we will do a condintional render here */}
            <Route 
            path="/profile"
            render={ props => currentUser ? <Profile {...props} currentUser={ currentUser } handleLogout={ handleLogout }/> : <Redirect to="/login" />}
          />
        </Switch>
        </div>
      {/* </div> */}
    </Router>
  );
}

export default App