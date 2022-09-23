import React from 'react';
import './Navbar.css';
import Logo from '../../images/Logo.png';
function Navbar(){
    return(
        <div className='outgrow_navbar'>
            <div className='Navbar_logo'>
                <img src={Logo} alt="logo" className='Navbar_logo_img'/>
                <h1>OutGrow</h1>
            </div>
            <div>
                <ul className='Navbar_logo_ul'>
                    <li>Home</li>
                    <li>Templates</li>
                    <li>Resources</li>
                    <li>AboutUs</li>
                </ul>
            </div>
            <div className='Navbar_logo_btns'>
                <p >Login</p>
                <p className='Navbar_logo_login'>SignUp</p>
            </div>
        </div>
    );
}
export default Navbar;