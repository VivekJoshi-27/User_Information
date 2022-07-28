import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import * as Icon from 'react-bootstrap-icons';


const Edituser = () => {

  const Navigate = useNavigate()


  const { _id } = useParams();
  const [userData, setuserData] = useState();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobNumber, setmobNumber] = useState();


  useEffect(() => {


    axios.get(`http://localhost:4000/user/${_id}`)
      .then(async (res) => {

        // console.log(res.data);          // in res(response) data will be in data therefore we use res.data for directly show in array//

        const rawData = await res.data[0];
        setuserData(rawData);
        console.log(rawData);
        setfirstName(rawData.firstName);
        setlastName(rawData.lastName);
        setmobNumber(rawData.mobNumber);

      }).catch((err) => { console.log(err) })
  }, [_id])



  console.log(userData);

  // To update user data with database //

  const updateHandler = (e) => {

    e.preventDefault();

    const dataObj = {
      firstName,
      lastName,
      mobNumber
    }

    console.log(dataObj);

    axios.put(`http://localhost:4000/user/${_id}`, dataObj);
    alert("User Updated Successfully");
    Navigate("/");

  }


  return (
    <>

      <form onSubmit={updateHandler}>
        <div className="row mt-3 formbox g-3">
          <div>
            <NavLink exact to={`/`}><button type="button" className='btn btn-outline-dark'><Icon.ArrowLeft /></button></NavLink>
            <h1 className='text-center'>Edit User</h1>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" onChange={(e) => setfirstName(e.target.value)} value={firstName} required />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e) => setlastName(e.target.value)} value={lastName} required />
          </div>
          <div className="col">
            <input type="Number" className="form-control" placeholder="Mobile Number" aria-label="Mobile Number" onChange={(e) => setmobNumber(e.target.value)} value={mobNumber} required />
          </div>
          <button type="submit" className="btn btn-success">Update</button>
        </div>
      </form>
    </>
  );
};

export default Edituser;