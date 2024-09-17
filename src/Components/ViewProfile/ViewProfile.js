import React, { useState } from 'react';
import doctor from './../../assests/doctor.jpg';
import logo from './../../assests/logo.svg';
import Arrowleft from './../../assests/backArrow.svg';
import './ViewProfile.css';
const App = () =>{
    const [username_value,setusername_value] = useState();
    const [email_value,setemail_value] = useState();
    const [mobile_value,setmobile_value] = useState();
    const [spec_value,setspec_value] = useState();

    const username = (event) =>{
        setusername_value(event.target.value);
    }

    const email = (event) =>{
        setemail_value(event.target.value);
    }

    const mobile = (event) =>{
        setmobile_value(event.target.value);
    }

    const spec = (event) =>{
        setspec_value(event.target.value);
    }


    return(
        <>
        <div>
        <button className="back"><img className="backarrow" src={Arrowleft}></img></button>
        <h2 className="profile">Profile</h2>
         <div className="forms">
         <div className="container pic">
          <img src={doctor} className="photo"></img>
          <button className="pic_button">Change</button>
          </div>
          <div className="container-fluid">
          <div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Username</label>
  <input type="text" className="form-input" id="formGroupExampleInput" placeholder="Dr.Sumit Dadwal" onChange={username} value={username_value}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">E-mail</label>
  <input type="email" className="form-input" id="formGroupExampleInput2" placeholder="sumitdadwal01@gmail.com" onChange={email} value={email_value}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Phone Number</label>
  <input type="tel" className="form-input" id="formGroupExampleInput" placeholder="9988022333" onChange={mobile} value={mobile_value}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Specialist Of</label>
  <input type="text" className="form-input" id="formGroupExampleInput" placeholder="Orthology" onChange={spec} value={spec_value}/>
</div>
<div className="mb-3 add_label">
  <input type="text" className="form-input" id="formGroupExampleInput" placeholder="Add Label"/>
</div>
<button className="button1" type="button">Save</button>
  <button className="button2" type="button">Edit</button>
  <button className="button2" type="button">Share</button>
</div>
</div>
</div>
<img className="logo" src={logo}></img>
</>
);
}
export default App;
