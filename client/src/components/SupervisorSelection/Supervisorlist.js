import React , {useState, useEffect}from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

import { use } from 'express/lib/application'

import {fetchAllUsers, dispatchGetAllUsers} from '../../redux/actions/usersActions'




const initialState = {
  name: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function Supervisorlist() {
  const auth = useSelector(state => state.auth)
  

  const {user, isAdmin, isSTD} = auth





    const [crs, setCrs] = useState();
    const [userss, setUsers] = useState();
    
    useEffect(() => {
       const fetchUsersCr = async () => {
     const res = await fetch('http://localhost:5000/user/alldata');
       const data = await res.json();
       console.log(data);
       setCrs(data);
       };
       fetchUsersCr();  
    
    
    
    },[])



  




  return (
    <div>
    <div >
    <h1 className="text-center p-1 pb-2 mt-2"  style={{color: 'white',backgroundColor:'#C23A34' }}>Supervisors</h1>

  
    <div className='profile_page'>
 



            <div  className="col-right">
              
              

              <div  style={{overflowX:"auto"}} className="user-list">

                  {
                    crs?.map((cr , index) => (
                        <div className="user-list-item" key={cr.id}>
                            <div className = 'col-md-12'>
                            { cr.role === 2 ?
<div className='col-md-12'>
{/* <div className=''>
<div className='col-sm'>
<div class="container1 ">
<div class="card2">
<div  class="card-header text-center">
  <img  style={{  height: "200px", width: "200px", borderRadius: "20px 20px 20px 20px", objectFit: "cover", objectPosition: "50%"}}
    src={cr.avatar} alt="rover" />
</div>
<div class="card-body">
  <span class="tag tag-teal">Supervisor</span>
  <h4>
 Mr/Mrs.  {cr.name}
  </h4>
  <h8>
    {cr.job}
  </h8>
  <a>
    {cr.email}
  </a>
  
  <div class="user">
  <Link   to={`/requestsupervisor/${cr._id}/${cr.name}`}>
  <button className="btn btn-warning">                          
 Request Supervisors
  </button>
  </Link>
    
  </div>
</div>
</div>



</div>
</div>

 
</div> */}
<div className='container1 p-2'>


<div className="card3 p-2" key={cr.id}>


  
  <div className="col">
  


<h3 className="col-md card me-3 mt-1 mb-3 p-2" scope="row">

 {cr.name} </h3> 
 
    
 
  <span class="tag tag-teal">Supervisor</span>

<p className='mt-2' scope="row"> Email : {cr.email}</p>


 <a  >Interested Fields :
   <br /> 

<a style={{ color: 'white' , fontSize:"15px", textTransform:"uppercase"}} className="badge badge-pill badge-dark"  >
  {cr.job.replace(/,/g, ' | ')}
{/* {
  cr.job  
    ? cr.job.split(",").map(a => <p> {a} </p>) 
    : ""
} */}
</a>

</a>
<div className="row">

</div>

<div  className="row mt-2 mb-5">
  
<Link  className='mb-3' to={`/requestsupervisor/${cr._id}/${cr.name}`}>
  <button className="btn btn-warning">                          
 Request Supervisors
  </button>
  </Link>
  </div>
  </div>


  <div className="col mb-3">
<div  style={{marginTop:"-230px" , marginLeft:'300px'}}  className="col-left">


<div className="avatar">
<img src={cr.avatar} alt="" />


</div>
</div>
</div>

 </div>
  </div>
</div>

: ""
}




{/* <div className="col-md-8 card me-3 mt-1 mb-3 p-2" key={cr.id}>


  
  <div className="col">
  


<h3 scope="row">

 {cr.name} </h3> 
    
  <p scope="row"> {cr._id} </p> 
 

<p scope="row"> Email : {cr.email}</p>

 <p scope="row"> Area of experties : {cr.job}</p>
<div className="row">

</div>

<div  className="row mt-2">
  
  <Link   to={`/requestsupervisor/${cr._id}/${cr.name}`}>
  <button className="btn btn-warning">                          
 Request Supervisors
  </button>
  </Link>
  </div>
  </div>


  <div className="col">
<div  style={{marginTop:"-190px"}}  className="col-left">


<div className="avatar">
<img src={cr.avatar} alt="" />


</div>
</div>
</div>

 </div> */}
 

                                </div>
                                </div>

                  ))}
            
             
                
             
                   
                  
                
           

              </div>


            </div>


      
      </div>


      </div>
      </div>
  )
}

export default Supervisorlist