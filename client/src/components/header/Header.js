import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import axios from 'axios'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'



export default function 
Header() {
  const auth = useSelector(state => state.auth)
  console.log(auth)

  const {user, isLogged} = auth

  const handleLogout = async () => {
      try{

        await axios.get('/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/";


      }catch(err){
         window.location.href = "/";
      }

  }

  const userLink = () => {
  return  <li className="drop-nav">
    <Link to="#"className="drop-nav-link" style={{ color: 'white', textDecoration: 'inherit'}}>
    {user.name}
    &nbsp;
    <i class="fas fa-angle-down"></i>
      
    </Link>

    <Link to="/profile" className="avatar">
     
    <img src={user.avatar}/>
    <hr style={{
        display: "inherit",
        marginTop: "inherit",
        marginBottom: "inherit",
        marginLeft: "inherit",
        marginRight: "inherit",
       
        borderWidth: "inherit",
        borderColor: "inherit",
        color: "inherit",
            backgroundColor: "white",
            height: 2
        }}/>
    </Link>
    
    <ul className="dropdown">
      
    {/* <hr style={{
        display: "block",
        marginTop: "0.5em",
        marginBottom: "0.5em",
        marginLeft: "auto",
        marginRight: "auto",
       
        borderWidth: "100%",
        borderColor: "white",
        color: "inherit",
            backgroundColor: "white",
            height: 2
        }}/> */}
      <li><Link to="/profile"style={{ color: 'white', textDecoration: 'inherit'}}>Profile</Link> </li>
      <hr style={{
        display: "inherit",
        marginTop: "inherit",
        marginBottom: "inherit",
        marginLeft: "inherit",
        marginRight: "inherit",
       
        borderWidth: "inherit",
        borderColor: "inherit",
        color: "inherit",
            backgroundColor: "white",
            height: 2
        }}/>
      <li> <Link to="/"onClick={handleLogout} style={{ color: 'white', textDecoration: 'inherit'}}>Logout</Link>
      </li>

    </ul>
  </li>
  
  }
const transForm ={
  transform: isLogged ? "translateY(-5px)" : 0 
}



  return (

    <div>
      
    

<header>




<div style={{textDecoration: 'none'}} className="logo">

    <h1> SLIIT ResearchDesk</h1>

</div>

<ul style={transForm} >
  
   

    {
    isLogged 
    ?
     userLink() 
     :<li> <Link to="/login"style={{ color: 'white', fontSize: '20px' ,textDecoration: 'inherit'}}><i href="/login" className="fa-solid fa-cart-shopping"></i>Sign</Link> </li>
     
     }

    
</ul>


</header>

{/* <div>

<Navbar sticky="true" bg="dark" expand="lg" >
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-end" style={{ width: "100%" }}>
        <Nav.Link style={{color: 'white', textDecoration: 'inherit'}}href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

    
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div> */}



</div>
  )
}
