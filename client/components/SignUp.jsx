import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    if(password === cPassword){
    fetch('http://localhost:3000/user/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
  })
  .then((res)=> {
    if(res.ok) return res.json()
    console.log('server error')
  })
  .then((data)=> {
    if(data){
      setUsername(data.username)
      navigate("/AddCluster");
    } 
    setUsername('')
    setPassword('')
  })
  .catch((e)=> {
    console.log(e)
  })
    
  }
  else{
    alert("Password's don't match")
    setUsername('')
    setPassword('')
    setCpassword('')
  }

};

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');



  return (
    <div className="loginContainer">
      <div id="loginform">
        <h1 className="title">Create your Kubilyze Account</h1>
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} name="username" onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" value={password} name="password" onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Confirm Password:</label>
          <input type="text" id="password" value={cPassword} name="password" onChange={(e)=> setCpassword(e.target.value)}/>
        </div>
        <div className="submit">
          <button onClick={handleLoginClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}
