import React, {useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import './auth.css';
import axios from 'axios';
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] =useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()


    const {email, password, err, success} = user


    const handeInputChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err:'', success:''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {

            const res = await axios.post('user/login', {email, password})
            setUser({...user, err:'', success:res.data.msg})

            localStorage.setItem('firstLogin', true)
            dispatch(dispatchLogin())
            localStorage.removeItem('firstLogin1')
            history.push('/staffhome')

        }catch(err) {
           err.response.data.msg &&  
           setUser({...user, err:err.response.data.msg, success:''})
        }

    }


  return (
    <div className="login_page">
        <h2>Staff Login</h2>
        {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Enter Email Address" id="email" 
                value={email} name="email" onChange={handeInputChange}/ >
                
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" id="password"
                value={password} name="password" onChange={handeInputChange}/>
            </div>
            <br />
            <div className="row" style={{marginTop:"-1rem"}}>
               <button type="submit">Login</button>
               &nbsp;
               &nbsp;
               &nbsp;
               <Link to="/forgot_password" style={{textDecoration: 'inherit'}}>Forgotten your Password?</Link>
            </div>


        </form>
        
        <p>New Staff Member? <Link to="/register" style={{ fontSize: '20px' ,textDecoration: 'inherit'}}>Register</Link></p>
     </div>
  )
}

export default Login