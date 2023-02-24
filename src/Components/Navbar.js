
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Images/logo.jpg'
//import {Icon} from 'react-icons-kit'
//import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import {auth} from '../Config/Config'
import {useNavigate} from 'react-router-dom'

export const Navbar = ({user,totalProducts}) => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
          navigate.push("/home");
        })
    }
    const sendSubmit = () => {
    navigate("/quiz");
};

    return (
        <div className='navbar' id='logout_section'>
            {/* <div className='leftside'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </div> */}
            <div className='rightside'>

                {!user&&<>
                    <div><Link className='navlink' to="/Signup"><span id="signupBTN">SIGN UP</span></Link></div>
                    <div><Link className='navlink' to="/Login"><span id="loginBTN">LOGIN</span></Link></div>
                </>} 

                {user&&<>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        {/* <Link className='navlink' to="cart">
                            <Icon icon={shoppingCart} size={20}/>
                        </Link> */}
                        {/* <span className='cart-indicator'>{totalProducts}</span> */}
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                     
                            
            </div>
        </div>

    )
}

export default Navbar;


































// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar;







































