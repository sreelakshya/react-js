import React, {useState} from 'react';
import './App.css';

function App() {
  const [name , setName] = useState('');
  const [Department , setDepartment] = useState('');
  const [MailId , setMailId] = useState('');
  const [confPassword , setConfPassword] = useState('');
  const [password , setPassword] = useState('');
  
  const handleChange =(e)=>{
  setName(e.target.value);
  }
  const handleAgeChange =(e)=>{
  setDepartment(e.target.value);
  }
  const handleMailIdChange =(e)=>{
  setMailId(e.target.value);
  }
  const handleConfPasswordChange =(e)=>{
    setConfPassword(e.target.value);
  }
  const handlePasswordChange =(e)=>{
  setPassword(e.target.value);
  }
  
  const handleSubmit=(e)=>{
  if(password!==confPassword)
  {
    alert("password Not Match");
  }
  else{
    alert('A form was submitted with Name :"' + name +
    '" ,Department:"'+Department +'" and MailId :"' + MailId + '"');
  }
  e.preventDefault();

  }
return (
  <div className="App">
  <header className="App-header">
  <form onSubmit={(e) => {handleSubmit(e)}}>
  {}
  <h2> Simple form using react(CB131)</h2>
  <h3> Signup Form </h3>
    <label >
    Name:
    </label><br/>
    <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
    {}
    <label >
    Department:
    </label><br/>
    <input type="text" value={Department} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
      {}
    <label>
    MailId:
    </label><br/>
    <input type="MailId" value={MailId} required onChange={(e)=> {handleMailIdChange(e)}} /><br/>
    {}
    <label>
    Password:
    </label><br/>
    <input type="password" value={password} required onChange={(e)=> {handlePasswordChange(e)}} /><br/>
      {}
    <label>
    Confirm Password:
    </label><br/>
    <input type="password" value={confPassword} required onChange={(e)=> {handleConfPasswordChange(e)}} /><br/>
        {}
    <input type="submit" value="Submit"/>
  </form>
  </header>
  </div>
);
}

export default App;
