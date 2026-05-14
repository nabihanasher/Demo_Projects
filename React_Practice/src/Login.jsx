import {useState} from 'react';
import{useNavigate,Link}from'react-router-dom';
function Login(){
    const[username,setUname]=useState('');
    const[password,setpasword]=useState('');
    const[error,seterror]=useState('');
    const navigate=useNavigate();
    const handleLogin=(e)=>{ e.preventDefault();
        let users=JSON.parse(localStorage.getItem('users'))||[];
        const matched=users.find((u) => u.username === username && u.password === password);
        if(matched){
		localStorage.setItem("loggedinName", matched.name);
        navigate("/welcome");}
	    else{
	    seterror("Invalid Name or Password. Please try again.");
	}
};
return(
    <div className="container">
  <div className="logo">
  <img src="/secureballot_logo_dark.svg" alt="logo"/>
  </div>

  <div className="form login"style={{ position: 'relative', right: '0', width: '100%', padding: '40px' }}>
  <form onSubmit={handleLogin}>
  <h3>Welcome</h3>
  <p>Sign in to access the voting portal</p>
  
  <div className="field">
  <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUname(e.target.value)}required/>
  <i className="fa-regular fa-user"></i>
  </div>
  
  <div className="field">
  <input type="password" placeholder="Enter password"value={password} onChange={(e)=>setpasword(e.target.value)}required/>
  <i className="fa-solid fa-lock"></i>
  </div>
  
  <button type="submit" className="submit">Sign in</button>

  {error&&<div className="error" style={{ display: 'block' }}>{error}</div>}
  
  <div className="forgot">
  <a href="#">Forgot Password?</a></div>
  
  <p className="switch"> Don't have an account? <Link to="/signup">Sign up</Link></p>
   </form>
  </div>
  </div>
);
 }
export default Login;

