import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
function Signup(){
  const [name,setName]=useState('');
  const [uname,setUname]=useState('');
  const [userNid,setUserNid]=useState('');
  const [pass,setPass]=useState('');
  const [cPass,setCPass]=useState('');
  const [errorMsg, setErrorMsg]=useState('');
  const navigate=useNavigate();
  const handleSignup=(e)=>{
    e.preventDefault();
    setErrorMsg('');
    if(name===''||uname===''||userNid===''||pass===''||cPass===''){
    setErrorMsg("Please fill all fields.");
    return;}

    if(userNid.length!==10&&userNid.length!==17){
    setErrorMsg("NID must be 10 or 17 digits.");
    return;}

    if(pass.length<6){
    setErrorMsg("Password must be at least 6 characters.");
    return;}
    if(pass!==cPass){
    setErrorMsg("Passwords do not match.");
    return;}
    let aUsers=JSON.parse(localStorage.getItem('users'))||[];
    let isUserExist=aUsers.find(u=>u.username===uname);
    if(isUserExist){
    setErrorMsg("This username is already taken.");
    return;}

    let isNidExist=aUsers.find(u=>u.nid===userNid);
    if (isNidExist) {
        setErrorMsg("Account has already opened with this NID.");
        return;}
    
    const nUserObj={name:name,nid:userNid,username:uname,password:pass};
    aUsers.push(nUserObj);
    localStorage.setItem('users', JSON.stringify(aUsers)); 
    localStorage.setItem("loggedinName",name);
    navigate("/welcome");
  };

  return (
    <div className="container">
      <div className="logo">
         <img src="/secureballot_logo_dark.svg" alt="Logo"/>
      </div>
      <div className="form" style={{ position: 'relative', right: '0', width: '100%', padding: '40px' }}>
        <form onSubmit={handleSignup}>
          <h3>New Here!</h3>
          <p>Please create account</p>
          
          <div className="field">
            <label>Full Name:</label>
            <input type="text" placeholder="As per your NID" value={name} onChange={(e)=>setName(e.target.value)} required />
            <i className="fa-regular fa-user"></i>
          </div>
          
          <div className="field">
            <label>Username:</label>
            <input type="text" placeholder="Enter username" value={uname} onChange={(e) => setUname(e.target.value)} required />
            <i className="fa-regular fa-user"></i>
          </div>
          
          <div className="field">
            <label>NID:</label>
            <input type="text" placeholder="Enter 10 or 17 digits" maxLength="17" inputMode="numeric" value={userNid} onChange={(e) => setUserNid(e.target.value)} required />
            <i className="fa-regular fa-id-card"></i>
          </div>

          <div className="field">
            <label>Password:</label>
            <input type="password" placeholder="Minimum 6 characters" value={pass} onChange={(e) => setPass(e.target.value)} required />
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="field">
            <label>Confirm Password:</label>
            <input type="password" placeholder="Re-type password" value={cPass} onChange={(e) => setCPass(e.target.value)} required />
            <i className="fa-solid fa-lock"></i>
          </div>
          
          <button type="submit" className="submit">Sign up</button>
          
          {errorMsg&&<div className="error">{errorMsg}</div>}
          
          <p className="switch">
            Already have an account? <Link to="/login">Sign in</Link></p>
    </form>
    </div>
    </div>
);
}
export default Signup;