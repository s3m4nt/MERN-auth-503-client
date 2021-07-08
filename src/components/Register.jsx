import {useState} from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { Redirect } from 'react-router-dom'
import Profile from './Profile'

export default function Register(props) {
    // state for the controlled form
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // state for the flash message from the server
    const [message, setMessage] = useState('')

    // function to handle form submission
    const handleSubmit = e => {
        e.preventDefault()
        console.log('submit the form 🏴󠁧󠁢󠁥󠁮󠁧󠁿');
    }
    // redirect if the user is logged in

    return(
        <div>
            <h3>Registration Form</h3>
            <form onSubmit={handleSubmit}>

<label htmlFor='name-input'>Name: </label>
<input                
id='name-input'
type='text'
placeholder='enter your name'
onChange={e => setName(e.target.value)}
value={name}
/>

<label htmlFor='email-input'>Email: </label>
<input                
id='email-input'
type='email'
placeholder='enter your email'
onChange={e => setEmail(e.target.value)}
value={email}
/>


<label htmlFor='password-input'>password: </label>
<input                
id='password-input'
type='password'
placeholder='desired password'
onChange={e => setPassword(e.target.value)}
value={password}
/>



                <input 

                type='submit'
                value='Make new account'
                />
            </form>
        </div>
    )
}