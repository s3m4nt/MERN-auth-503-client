import { useState } from 'react'
import Axios from 'axios'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Login(props) {
    // state for the controlled form
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for flash messages from the server
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        try{
            e.preventDefault()
            console.log('do axios call - from login.jsx line 16 🔥')
            // post to the backend with axios
            const requestBody = {
                email: email,
                password: password
            }
            console.log('my server url: ', process.env.REACT_APP_SERVER_URL, ' - from login.js line 22 🔥');

        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`, requestBody)
        console.log(response);
        // destructure the response 
        const {token} = response.data

        // save the response to localstorage
        localStorage.setItem('jwtToken', token)

        // decode the jwt token before we put it in state
        const decoded = jwt.decode(token)

        // set the user in App.js state
            props.setCurrentUser(decoded)
        }
        catch(err){
            if(err.response.status === 400){
                setMessage('from login.jsx : ',err.response.data.msg)
            } else {
                console.dir(err);
            }
        }
}

if(props.currentUser) return <Redirect to='/profile' component={ Profile } currentUser={props.currentUser}/>

    return(
<div>
    <h3>Login To Your Account</h3>

    <p>{message}</p>

    <form onSubmit={handleSubmit}>
        <label htmlFor={'email-input'}>email: </label>
            <input 
            id={'email-input'}
            type='email'
            placeholder='user@domain.com'
            onChange={e => setEmail(e.target.value)}
            value={email}
            />

        <label htmlFor={'password-input'}>password: </label>
            <input
            id='password-input'
            type='password'
            placeholder='password'
            onChange={e => setPassword(e.target.value)}
            value={password}
            />

            <input
            type='submit'
            value='login'
            />
    </form>
</div>
    )
}