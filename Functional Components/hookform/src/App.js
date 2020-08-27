import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <div className="App">
      <form >

        <label>First Name:</label>
        <input type="text" onChange={ (e)=>setFirstName(e.target.value)} value = {firstName}></input><br></br>
        <label>Last Name:</label>
        <input type="text" onChange={ (e)=>setLastName(e.target.value)}></input><br></br>
        <label>Email:</label>
        <input type="email" onChange={ (e)=>setEmail(e.target.value)}></input><br></br>
        <label>Password:</label>
        <input type="password" onChange={ (e)=>setPassword(e.target.value)}></input><br></br>
        <label>Confirm Password:</label>
        <input type="password"></input><br></br>
      </form>

      <label>First Name: {firstName}</label><br></br>
        <label>Last Name:{lastName}</label><br></br>
        <label>Email:{email}</label><br></br>
        <label>Password:{password}</label><br></br>
    </div>


  );
}

export default App;
