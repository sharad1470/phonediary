import React from 'react';
import  './header.css';
const Header = () => {
    return (
        <div className='header absolute-center'>
            <div className='header-title absolute-center'>
                Phone Directory
                <i class="fa-solid fa-phone-volume absolute-center"></i>
            </div>
        </div>
    );
};

export default Header;