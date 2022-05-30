import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import "./Group.css";
import axios from 'axios';

const Group = (props) => {
    const history = useHistory();

    const { _id, student_id1, student_id2, student_id3, student_id4, groupname, groupid } = props.group;

    const deleteHandler = async () => {
        await axios
            .delete(`http://localhost:8000/groups/${_id}`)
            .then((res) => res.data)
            .then(() => {
                alert("Your Group has been Deleted Successfully!")
                history.push("/creategroup")
            })
          
    };

    return (
        <div>
            <form className='card col-md-6 mt-3 mb-3'>
                <h2>Group Registration Form</h2>
                <h6>Student ID of Member 1</h6>

            
                <input 
                    type="text"
                    value={student_id1}
                    name="student_id1"
                    required />

                <h6>Student ID of Member 2</h6>
                <input
                   
                    type="text"
                    value={student_id2}
                    name="student_id2"
                    required />

                <h6>Student ID of Member 3</h6>
                <input
                
                    type="text"
                    value={student_id3}
                    name="student_id3"
                    required />

                <h6>Student ID of Member 4</h6>
                <input
               
                    type="text"
                    value={student_id4}
                    name="student_id4"
                    required />

                <h6>Group Name</h6>
                <input
               
                    value={groupname}
                    type="text"
                    name="groupname"
                    required />


                    <h6>Group ID</h6>
                <input
               
                    value={groupid}
                    type="text"
                    name="groupid"
                    required />

                <br />
                <Link to={`/assigngroupid/${_id}`}  className='btn btn-warning  fa fa-edit mb-2'>  Update</Link>
                <button onClick={deleteHandler} className='btn btn-danger fa fa-trash mb-2'>  Delete</button>
            </form >  
        </div> 
    )
}

export default Group;