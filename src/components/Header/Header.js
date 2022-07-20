import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
import userImage from '../../Images/userImage.png'
const Header=()=>{
    return (
        <div className='header'>
           <Link to='/'>
           <div className='logo'>Logo</div>
           </Link>
           <div className='user-image'>
                <img src={userImage} alt='user' />
           </div>

        </div> 
    )
}

export default Header;