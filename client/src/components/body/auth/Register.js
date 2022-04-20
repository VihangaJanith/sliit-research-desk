import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './auth.css';
import axios from 'axios';
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch, isRole} from '../../utils/notification/validation/Validation'
import Select from "react-dropdown-select";
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";



const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    role: '',
    job: '',
    err: '',
    success: '',

}



function Register() {
    const [user, setUser] =useState(initialState)
  
    const {name, email, password, cf_password, role, job, err, success} = user



    const handeInputChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err:'', success:''})
    }

    const handleSubmit = async e => {
        e.preventDefault()
       
            if(isEmpty(name) || isEmpty(password) || isEmpty(role) || isEmpty(job)) 
            return setUser({...user, err:"Please fill all fields", success:''})

            if(!isEmail(email) ) 
            return setUser({...user, err:"invalid email", success:''})

            if(isLength(password) )
            return setUser({...user, err:"Password must be atleast 6 charactors", success:''})

            if(!isMatch(password, cf_password) ) 
            return setUser({...user, err:"Passwords are not matched", success:''})

            

            if(!isRole(role) )
            return setUser({...user, err:"Select a valid role", success:''})




            try {

                const res = await axios.post('user/register', {
                    name, email, password,role, job
                })
                setUser({...user, err:'', success:res.data.msg})



        }catch(err) {
           err.response.data.msg &&  
           setUser({...user, err:err.response.data.msg, success:''})
        }

    }



  return (
      <div>
          {err && showErrMsg(err)}
        {success && showSuccessMsg(success)}
    <div className="login_page">
        
        <h2>Staff Member Registration</h2>
        

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Your Name" id="name"
                value={name} name="name" onChange={handeInputChange}/>
            </div>


            <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Enter Email Address" id="email"
                value={email} name="email" onChange={handeInputChange}/>
            </div>

            
        
            <div>
                <label htmlFor="role">Job Role</label>
                <input type="number" placeholder="Enter Your Job Role" id="role"
                value={role} name="role" onChange={handeInputChange}/>
                
                <em style={{fontSize:"12px",color:"crimson"}}>*Input 0 if you are a Staff Member</em> <br/>
            <em style={{fontSize:"12px",color:"crimson"}}>*Input 2 if you are a Supervisor</em>  <br/>
            <em style={{fontSize:"12px", color:"crimson"}}>*Input 3 if you are a Co-Supervisor</em>
            
            </div>


            

           
            
            
           

            <div>
                <label htmlFor="job">Job Description</label>
                <input type="text" placeholder="Enter Your Job Description" id="job"
                value={job} name="job" onChange={handeInputChange}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter Password" id="password"
                value={password} name="password" onChange={handeInputChange}/>
            </div>

            <div>
                <label htmlFor="cf_password">Password Confirmation</label>
                <input type="password" placeholder="Enter Password Again" id="cf_password"
                value={cf_password} name="cf_password" onChange={handeInputChange}/>
            </div>

            <div className="row">
               <button type="submit">Register</button>
               
            </div>


        </form>
        
                <p>Already registered? <Link to="login">Login</Link></p>
        
     </div>
     </div>
  )
}

export default Register