import {useState} from 'react';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import '../assignment/assignment.css'

const CreateChatStudent = ({match}) => {
    const history = useHistory();
    const auth = useSelector(state => state.auth)
  console.log(auth)

  const {user, isLogged} = auth


  console.log(user._id)

  console.log(user.name)




const [superid, setSuperid] = useState(match.params.superid)
const [studentid, setStudentid] = useState(user._id)
const [studentname, setStudentname] = useState(user.name)
const [supername, setSupername] = useState(match.params.supername)
const [message, setMessage] = useState('')







function handleSubmit (e){
    e.preventDefault();


    const superchat ={
    
        studentid,
        superid,
         studentname,
        supername,
        message,
    
    }
        console.log(superchat);
                
        axios.post("http://localhost:8000/chat/",superchat).then(()=>{
            alert("Assigned Group Successfully")
            
        
        }).catch((err)=>{
            alert(err);
        })
    
    
    
}
    
return (
<div  className="assignment_page"style={{maxWidth:"500", margin:"auto"}}>

    <h1>Chat to Supervisor</h1>

{user.name}
{user._id}
   

    
    <div className="mb-3">
        <label htmlFor="name">Type Message Here</label>
        <input type="text" 
         
        placeholder="message"
        name = "message"
        value={message}
        onChange={(e)=>setMessage(e.target.value)}/> 
     </div>

   


     <div className="row">
        <button onClick={handleSubmit}> Send</button>
     </div>


</div>

);

};

export default CreateChatStudent