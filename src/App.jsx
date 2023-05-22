import {  useState } from 'react';

import './App.css';

function App() {
  // all the states 
  const [form , setForm] = useState({username:"", email:"" , password:"" , confirm__password:""})
  const [submit , setSubmit] = useState(false);
  const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false);
  const [allfield, setAllfield] = useState(false);


  const handleChange = (e) =>{
   setForm({...form ,[e.target.name]:e.target.value})
  }
  const handlePassword =(e)=>{
   if(!form.password.startsWith(e.target.value)){
    setPasswordDoNotMatch(true)
   }else{
    setPasswordDoNotMatch(false)
   }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.username === ''  || form.email==='' || form.password==='' || form.confirm__password===''){
     setAllfield(true)
     setPasswordDoNotMatch(false) 
     setSubmit(false)
    }else{
      if(form.password === form.confirm__password){
        setSubmit(true)
        setAllfield(false) 
      }else{
        setSubmit(false)
      }
    }

  }

  return (
    <>
    <h3>Frontend module 4 Test 1</h3>
     <form>
      <h1>SignUp</h1>
      <input type="text" placeholder='FULL NAME' id='name' name='username' onChange={handleChange} />
      <hr />
      <input type="text" placeholder='EMAIL' id='email' name='email' onChange={handleChange} />
     <hr />
      <input type="password" placeholder='PASSWORD' id='password' name='password' onChange={handleChange} />
     <hr />
      <input type="password" placeholder='CONFIRM PASSWORD' id='confirm__password' name='confirm__password' onChange={(e)=>{
        handlePassword(e);
        handleChange(e);

      }} />
    {passwordDoNotMatch &&   <p>Password do not match</p>}
    {allfield && <h3>All the field are mandatory</h3>}
    
    { submit && <h5>SuccessFully Submitted</h5>}
    <button  onClick={handleSubmit}>Signup</button>
    </form>
    
    </>

   

  );
}

export default App;