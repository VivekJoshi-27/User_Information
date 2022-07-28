import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';
import Searchbar from './Searchbar';
import './Home.css'


const Home = () => {

    const[userData,setuserData]= useState([])

    useEffect( () => {
  
      axios.get("http://localhost:4000/user")
      .then(async(res) => {
  
        // console.log(res.data);          // in res(response) data will be in data therefore we use res.data for directly show in array//
  
        const rawData = await res.data; 
        setuserData(rawData);
  
      }).catch((err) => {console.log(err)})
    },[] )
  
    console.log(userData);

    // delete the user data from databse //

    const deletehandle = async(_id) => {
        await axios.delete(`http://localhost:4000/user/${_id}`)

        alert("User Deleted Successfully");

        const filterdata = userData.filter((row) => {
            return(
                row._id !== _id
            )
        })
        setuserData(filterdata);
    }

    const searchData = (value) => {
        const lowercaseValue = value.toLowerCase().trim()


        if(!lowercaseValue){
            setuserData(userData);
            window.location.reload();
        }
        else{

            const searchedData = userData.filter(item => {
                return(
                    Object.keys(item).some((key) => {
                        return(
                            item[key].toString().toLowerCase().includes(lowercaseValue)
                        )
                    })
                )
            })
            console.log(searchedData)
            setuserData(searchedData);
        }
    }

    const handleChange = (value) => {
        searchData(value)

    }
 
    return (

        <>

        <div className='d-flex m-3 justify-content-center sBar'>
            <Searchbar handleChange={handleChange}/>
            <NavLink exact to="/adduser"> 
                <button type="button" className="btn btn-info">Add user</button>
            </NavLink>
          
        </div>

        <div className='container'>
             
        <table className="table">
        <thead>
            <tr>
               <th scope="col">Sr.No</th>
               <th scope="col">First Name</th>
               <th scope="col">Last Name</th>
               <th scope="col">Mobile Number</th>
               <th scope="col">Actions</th>
            </tr>
        </thead>

        <tbody>
            {
            userData.map((row,index) => {
            const srno = index+1
            
            return(
            
            <tr>
              <th scope="row">{srno}</th>
              <td>{row.firstName.toUpperCase()}</td>
              <td>{row.lastName.toUpperCase()}</td>
              <td>{row.mobNumber}</td>
              <td><NavLink exact to={`/edituser/${row._id}`}><button  type="button" className="btn btn-warning"><Icon.PencilSquare /></button></NavLink>
              <button onClick={() => deletehandle(row._id)} type="button" className=" btn btn-danger op-btn" ><Icon.XLg/></button></td>
            </tr>

            )
            
            })
            }
        </tbody>
    </table>

        </div>

    
 

        </>
    );
};
export default Home;
