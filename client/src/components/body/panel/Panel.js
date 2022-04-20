import React , {useState, useEffect}from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {isLength, isMatch} from '../../utils/notification/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import { use } from 'express/lib/application'

import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersActions'




const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function Panel() {
  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)
  const users = useSelector(state => state.users)

  const {user, isAdmin} = auth
  const [data, setData] = useState(initialState)

  const {name, password, cf_password, err, success} = data
  const [avatar, setAvatar] = useState(false)
  const [loading, setLoading] = useState(false)
  const [callback, setCallback] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
   
  
    if(isAdmin){
         fetchAllUsers(token).then(res => {
          dispatch(dispatchGetAllUsers(res))
        })
      }

    

  },[token, isAdmin, dispatch, callback])



  
  const handleDelete = async (id) => {
    try {
      if(window.confirm('Are you sure you want to delete this user?')){
        setLoading(true)
        await axios.delete(`/user/delete/${id}`,{
          headers: {Authorization: token}
        })

        setLoading(false)
        setCallback(!callback)
      }

    }catch(err) {
      setData({...data, err: err.response.data.msg, success: ''})
    }

  }



  return (
    <>
    <div>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
      {loading && <h3> loading....</h3>}
    </div>
    <div className="profile_page">
          



            <div className="col-right">
              <h2>{isAdmin ? "Users" : "MyOrders" }</h2>
              

              <div style={{overflowX:"auto"}} className="user-list">
              <table className="customers">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Role</th>
                    <th>Panel Member</th>
                    <th>Action</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    users.map(user => (
                      
                      <tr key={user._id}>
                        
                           <td>{user._id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{
                              user.role === 1
                              ? <p style={{color: 'Red', fontSize: '20px' , fontWeight: 'bold'}}>Admin</p> : ""
                             }
                             {
                              user.role === 2
                              ? <p  style={{color: 'Blue', fontSize: '20px' , fontWeight: 'bold'}}>Supervisor</p> : ""
                             }
                             {
                              user.role === 0
                              ? <p style={{color: 'green', fontSize: '20px' , fontWeight: 'bold'}}>Staff Member</p> : ""
                             }
                             {
                              user.role === 3
                              ?  <p style={{color: 'orange', fontSize: '20px' , fontWeight: 'bold'}}>Co-Supervisor</p> : ""
                             }
                            </td>
                          <td>
                            {
                              user.roledesc === 1
                              ? <i className="fa fa-check" title="Admin"></i>
                              : <i className="fa fa-times" title="User"></i>
                            }
                          </td>
                          <td>
                            <Link to={`/panel_edit/${user._id}`}>
                              <i className="fa fa-edit" title="Edit"></i>
                            </Link>
                            <i className="fa fa-trash" title="Delete"
                            onClick={()=> handleDelete(user._id)}></i>
                          </td>
                          
                        </tr>
                    ))
                  }
                  
                   
                  
                </tbody>
              </table> 

              </div>


            </div>


      
      </div>


      </>
  )
}

export default Panel