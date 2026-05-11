
function getusers(){ const data= localStorage.getItem("users");
	if(data){
		return JSON.parse(data);
	}
	else{
		return[];
	}
}

function saveusers(users){
	localStorage.setItem("users",JSON.stringify(users));
}

const container=document.querySelector('.container');


function showsignup(){
container.classList.add('active');}

function showlogin(){
container.classList.remove('active');}

function login(){
	const username=document.getElementById("username").value;
	const password=document.getElementById("pwd").value;
	const users= getusers();
	const matched= users.find(function(u){ return u.username===username && u.password===password;});
	
	
	if(matched){
		localStorage.setItem("loggedinName", matched.name);
		localStorage.setItem("loggedinUname", matched.username);
	    window.location.href="demo_welcome.html";
		}
	else{
	showerror("Invalid Name or Password. Please try again.");
	}
 }


function signup(){
	const name=document.getElementById("fullname").value;
	const username=document.getElementById("nusername").value;
	const nid=document.getElementById("nid").value;
	constemail=document.getElementById("email").value;
	const password=document.getElementById("npwd").value;
	const confirm=document.getElementById("cnpwd").value;
	
	if(!name||!username||!nid||!password||!confirm){
		showsError("Please fill all fields.","serror");
		return;
	}
	if(nid.length!==10&&nid.length!==17){
		showsError("NID must be 10 or 17 digits.","serror");
		return;
	}
	if(password.length<6){
		showsError("Password must be at least 6 characters.","serror");
		return;
	}
	if(password!==confirm){
		showsError("Passwords do not match.","serror");
		return;
	}
	const users=getusers();
	if(users.find(function(u){ return u.username===username;}))
		{showsError("This username is already taken.","serror");
		return;
	}
	if(users.find(function(u){ return u.nid===nid;}))
		{showsError("Account has already opened with this NID.","serror");
		return;
	}

	const nuser={name:name,nid:nid,username:username,email:email,password:password };

	users.push(nuser);
	saveusers(users);
	const msg= document.getElementById("sucMsg");
	msg.style.display="block";
	setTimeout(function(){
	msg.style.display="none";
	showlogin();	
	},3500);		
}

function showerror(msg, errorid="error"){
	const errMsg=document.getElementById(errorid);
	errMsg.textContent=msg;
	errMsg.style.display="block";
}
function showsError(msg, errorid="serror" ){
	const errMsg=document.getElementById(errorid);
	errMsg.textContent=msg;
	errMsg.style.display="block";
}
