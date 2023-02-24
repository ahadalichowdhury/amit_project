import React,{useState} from 'react'
import {Link, Navigate} from 'react-router-dom'
// import {auth} from '../../Config/Config'
//import {useHistory} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import AddProducts from './AddProducts'
import './login.css';
import {auth} from '../../Config/Config'
import { AiOutlineMail, FaFacebook } from "react-icons/fa";




export const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

  

    const handleLogin=(e)=>{
        if (email==="admin@gmail.com" && password === "admin@gmail.com") {  //jodi admin hoy      
            e.preventDefault();      
         setSuccessMsg('Admin Login Successfull');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate('/add-products');
            },3000)
        
        } 
        
        else {  // jodi admin na hoy
           e.preventDefault();
            auth.signInWithEmailAndPassword(email,password).then(()=>{
            setSuccessMsg('Login Successfull');
            setEmail('');   //sob gula text field ke 0 kore ibo
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate('../home'); 
                // ../home
            },3000)   //3 sec por success message dibo abong redirect hobe
        })
        
        .catch(error=>setErrorMsg(error.message));
        }
    }

    return (
        <div className="logincontainer1">
        <br></br>
        <div style={{ padding: "10px"}}>
        <h1 className='heading1'>Login</h1>
        
        
        {successMsg&&<>  
            <div >{successMsg}</div>
            <br></br>
        </>}
        
         <form className='mainform' onSubmit={handleLogin}>  
            <div >               
                <label className='emailLabel'>  Email</label>{/* <img className='emailimg' src={emailimg} alt="emailimg"></img> */}
                <input className='emailInput'  type="email"  placeholder='Email' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}>      
                </input>
            </div>             
            {/* ---------------------- */}
            <br/>
           <div >
           <label className='passLabel' >Password</label>
            <input className='passInput' type="password"  placeholder='Password' required
            onChange={(e)=>setPassword(e.target.value)} value={password}>
                
            </input>
            </div> 
           
           
            
            <br/>
            <div >
                <button className='loginbutton' type="submit">Log In</button>
                <br></br>    
            </div>
            <br></br>
            <br></br>
            <div>
                <p  style={{marginLeft:"15px",color:"black"}}>Don't have an account?<Link className='downsignup' to="/signup" >Signup</Link></p>
            </div>
                             
        </form>
        </div>
       
        {errorMsg&&
        <>   
            <br></br>
            <div className='error-msg'>{errorMsg}</div>                
        </>}

    </div>
    )
}

export default Login;