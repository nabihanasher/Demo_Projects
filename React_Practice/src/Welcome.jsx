import {useEffect,useState} from'react';
import {useNavigate}from'react-router-dom';

function Welcome() {
    const[username,setUname]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        const stname=localStorage.getItem('loggedinName');
        if(!stname){
            navigate('/login');}
        else{
            setUname(stname);
        }
        },[navigate]);

  const handleLogout=()=>{
    localStorage.removeItem('loggedinName');
    navigate('/login');
  };

const handleDelete=()=>{
  const loggedinName=localStorage.getItem('loggedinName');
  let users = JSON.parse(localStorage.getItem('users'))||[];
  users = users.filter(u => u.name!==loggedinName);
  localStorage.setItem('users',JSON.stringify(users));
  localStorage.removeItem('loggedinName');
  navigate('/login');
};

  return (
    <div className="container"style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh'}}>
    <div className="card">
    <div className="logo">
        <img src="/secureballot_logo_dark.svg" alt="logo" style={{ width: '100px' }}/>
    </div>
        <h2>Welcome, {username}!</h2>
        <p>You have successfully logged in to the Voting Portal.</p>
    <button onClick={handleLogout} className="submit">Sign out</button>
    <button onClick={handleDelete} className="submit">Delete Account</button>
    </div>
</div>
  );
}
export default Welcome;