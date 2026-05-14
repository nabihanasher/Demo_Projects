import{BrowserRouter as Router, Routes, Route, Navigate}from"react-router-dom";
import'./demo_style.css';
import Login from "./Login";
import Signup from "./Signup";
import Welcome from "./Welcome";
function App(){
return( <Router>
  <Routes>
    <Route path="/"element={<Navigate to="/login"/>}/>
    <Route path="/login"element={<Login/>}/>
    <Route path="/signup"element={<Signup/>}/>
    <Route path="/welcome"element={<Welcome/>}/>
  </Routes>
</Router>);
}

export default App;