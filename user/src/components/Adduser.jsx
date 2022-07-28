import axios from 'axios';
import React, { useState } from 'react';
import './Adduser.css';
import {useNavigate , NavLink} from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';


const Adduser = () => {


      const Navigate = useNavigate()

    const[firstName , setfirstName]= useState("")
    const[lastName , setlastName]= useState("")
    const[mobNumber , setmobNumber]= useState()

    
    const submitHandler = (e) =>{
        e.preventDefault();

        const dataObj ={
            firstName,
            lastName,
            mobNumber
        }

        console.log(dataObj); 

        axios.post("http://localhost:4000/user", dataObj);

        setfirstName("");
        setlastName("");
        setmobNumber();

        alert("User Added Successfully");
         Navigate("/");

    }



    return (
     <>

     <form onSubmit={submitHandler}>
         <div className="row mt-3 formbox g-3">
          <div>
            <NavLink exact to={`/`}><button type="button" className='btn btn-outline-dark'><Icon.ArrowLeft/></button></NavLink>
              <h1 className='text-center'>Add User</h1>
            </div>
           <div className="col">
             <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setfirstName(e.target.value)} value={firstName} required/>
           </div>
           <div className="col">
             <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setlastName(e.target.value)} value={lastName} required/>
           </div>
           <div className="col">
             <input type="Number" className="form-control" placeholder="Mobile Number" aria-label="Mobile Number" onChange={(e) => setmobNumber(e.target.value)} value={mobNumber} required/>
           </div>
           <button type="submit" className="btn btn-success">Submit</button>
         </div>
         
    </form>

    </>

    );
}

export default Adduser;