import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import { isLength, isMatch } from '../../utils/notification/validation/Validation'

const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}


function ResetPassword() {
    const [data, setData] = useState(initialState)
    const {token} = useParams()


    const {password, cf_password, err, success} = data

    const handeChangeInput = (e) => { 

        const {name, value} = e.target
        setData({...data, [name]: value, err: '', success: ''})

    }

    const hadleResetPass = async () => {
        if(isLength(password))
        return setData({...data, err: 'Password must be at least 6 characters', success: ''})
        if(!isMatch(password, cf_password))
        return setData({...data, err: 'Password Should be matched', success: ''})

        try {

            const res = await axios.post('/user/reset', {password}, { 
                headers: {Authorization: token}
            })

            return setData({...data, err: '', success: res.data.msg})


        }catch(err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }




    }
    


  return (
     <div className="fg_pass">
         <h2>Reset Password</h2>

         <div className="row">
             
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            </div>
            <br/>

            <div className="row">

            <label  htmlFor="password"> Enter Password </label>
             <input type="password" name="password" id="password" placeholder="password "value={password} 
            onChange={handeChangeInput}/> 

            <label  htmlFor="cf_password"> confirm Password </label>
             <input type="password" name="cf_password" id="cf_password" placeholder="cf_password "value={cf_password} 
            onChange={handeChangeInput}/> 


            <button onClick={hadleResetPass}>Verify Your Password</button>

            </div>
         </div>
  )
}

export default ResetPassword