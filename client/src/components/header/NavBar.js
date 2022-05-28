import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function NavBar (){
    const auth = useSelector(state => state.auth)
    const {user} = auth

return(
   
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/Student-Home">SLIIT Research Desk</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <FontAwesomeIcon icon="fa-solid fa-circle-user" />
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/a">Action</a>
            <a class="dropdown-item" href="/aa">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> */}
           
      </ul>
     
      <div class="dropdown">
 
</div>

      <h4><a href="/stdprofile">{user.name} Profile</a></h4>
      
      
      </div>
    
  </nav>
 
  

)
}