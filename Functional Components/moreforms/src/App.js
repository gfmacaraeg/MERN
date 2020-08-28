import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <div className="App">
      <form >

        <label>First Name:</label>
        <input type="text" onChange={ (e)=>setFirstName(e.target.value)} value = {firstName}></input><br></br>
        {firstName.length >= 2 ? '': <p style={{color:"red"}}>First name must be atleast 2 characters</p>}
        <label>Last Name:</label>
        <input type="text" onChange={ (e)=>setLastName(e.target.value)}></input><br></br>
        {lastName.length >= 2 ? '': <p style={{color:"red"}}>Last name must be atleast 2 characters</p>}
        <label>Email:</label>
        <input type="email" onChange={ (e)=>setEmail(e.target.value)}></input><br></br>
        {email.length >= 2 ? '': <p style={{color:"red"}}>Email must be atleast 2 characters</p>}
        <label>Password:</label>
        <input type="password" onChange={ (e)=>setPassword(e.target.value)}></input><br></br>
        {password.length >= 8 ? '': <p style={{color:"red"}}>Password must be atleast 8 characters</p>}
        {password === confirm ? '': <p style={{color:"red"}}>Password must match</p>}
        <label>Confirm Password:</label>
        <input type="password" onChange={ (e)=>setConfirm(e.target.value)}></input><br></br>
      </form>

      <label>First Name: {firstName}</label><br></br>
        <label>Last Name:{lastName}</label><br></br>
        <label>Email:{email}</label><br></br>
        <label>Password:{password}</label><br></br>
    </div>


  );
}

export default App;
