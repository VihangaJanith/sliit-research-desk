 import React, {useState} from 'react'
 import axios from 'axios'
 import { isEmail } from '../../utils/notification/validation/Validation'
 import { showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
 
const initialState = {
    email: '',
    err: '',
    success: ''


}


 function ForgotPassword() {
    const [data, setData] = useState(initialState) 

    const {email, err, success} = data


    const handeChangeInput = (e) => { 

        const {name, value} = e.target
        setData({...data, [name]: value, err: '', success: ''})

    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Email is not valid', success: ''})
            
            try {
                const res = await axios.post('/user/forgot', {email})
                return setData({...data, err: '', success: res.data.msg})

            }catch(err){
                err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
            
            
        }
    }
     




   return (
     <div className="fg_pass">
         <h2>ForgotPassword</h2>

         <div className="row">
             
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            </div>
            <br/>

            <div className="row">
            <label > Email Address</label>

            <input type="email" name="email" id="email" placeholder="Email "value={email} 
            onChange={handeChangeInput}/> 
            <button onClick={forgotPassword}>Verify Your Email</button>

            </div>
         </div>
   )
 }
 
 export default ForgotPassword