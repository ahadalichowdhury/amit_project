import React,{useState} from 'react'
import {auth,fs} from '../../Config/Config'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './Signup.css';


const Signup = () => {

    const navigate = useNavigate();
    const [fullName, setFullname]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleSignup=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((credentials)=>{  //video 3 er 8 min

            fs.collection('users').doc(credentials.user.uid).set({    //video 3 er 10 min
                FullName: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setSuccessMsg('Successfully Signup');
                setFullname('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    navigate('/');
                },3000)
            }).catch(error=>setErrorMsg(error.message));
        }).catch((error)=>{
            setErrorMsg(error.message)
        })
    }

    return (
        <div className='signupcontainer1'>
            <br></br>
            <br></br>
            <div  >
            <h1 className="signupheading">Sign Up</h1>
            
            {successMsg&&<>
                <div >{successMsg}</div>
                <br></br>
            </>}
            <form  className='signupmainform' autoComplete="off" onSubmit={handleSignup}>                <label className='fullnameLabel'>Full Name</label> 
                <input className='fullnameInput'  type="text"  placeholder='e.g.abc' required
                 onChange={(e)=>setFullname(e.target.value)} value={fullName}></input>
                <br></br>

                <label className='emailLabel' >Email</label>
                <input className='emailInput' type="email"  placeholder= 'amit12@gmail.com' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label className='passwordLabel' >Password</label>
                <input className='passwordInput' type="password"  placeholder='password' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <br></br>
                <div className='btn-box'>
                    <button className='signupButton' type="submit">Sign Up</button>
                    <br></br>
                </div>
                <div >
                    <span>Already have an account? <Link to="/login">login</Link></span>
                </div>     
            </form>
            </div>
            
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    )
}

export default Signup;