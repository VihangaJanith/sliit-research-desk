import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
function StudentHome() {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const users = useSelector(state => state.users)

  const {user} = auth

  

    const logout=()=>{
     const logout=localStorage.removeItem('firstLogin1')
     window.location.href = "/stdlogin";

    }
  



  return (
    <div className = "activite_page">
      <button onClick={logout}>Logout</button>
      <br></br>
      <h2>{user.name} Student Number is {user.studentNumber}</h2>

    </div>
  )
}

export default StudentHome