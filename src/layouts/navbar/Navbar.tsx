import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import "./Navbar.scss"
import Popup from '../../components/ui/popup/Popup';
import Login from "../../pages/login/Login"
import SignUp from "../../pages/signup/SignUp"
import Button from '../../components/ui/shared/button/Button';

const Navbar = () => {
const [showLoginPopup, setshowLoginPopup] = useState(false);
const [showSignUpPopup, setSignUpPopup] = useState(false)

const openLoginPopup = () => {
    setshowLoginPopup(true);
};
const openSignUpPopup = () => {
    setSignUpPopup(true)
}
const handleCloseModal = () => {
    setSignUpPopup(false)
    setshowLoginPopup(false);
};
return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link 
                        to="/"
                        className="nav-link"
                    >Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about"
                        className="nav-link"
                    >About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/contact"
                        className="nav-link"
                    >Contact
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='logInSignUpContainer'>
            <button className='logInButton' onClick={openLoginPopup}>
                Log In
            </button>
            {showLoginPopup && 
            <Popup 
                onClose={handleCloseModal}
                isOpen={openLoginPopup}
                children={<Login />}/>}
            {/* <Button
                text="SignUp"
                borderRadius="20px"
                backgroundColor="rgb(221 0 63)"
                onClick={openSignUpPopup}/> */}
            <button className='signInButton' onClick={openSignUpPopup}>
                Sign Up
            </button>
            {showSignUpPopup && <Popup onClose={handleCloseModal} isOpen={openSignUpPopup} children={<SignUp />}/>}
        </div>
    </header>
)
}

export default Navbar
