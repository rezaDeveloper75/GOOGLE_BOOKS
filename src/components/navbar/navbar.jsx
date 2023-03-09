import React from 'react';
import './navbar.css';

const Navbar = () => {
    return ( <div className="navbar">
        <div className="n-left">
            <span className='n-brand'>Google Books</span>
        </div>
        <div className="n-right">
            <div className="n-menu">
                <span className='menu-item active'>Shop</span>
                <span className='menu-item'>Categories</span>
                <span className='menu-item'>Collection</span>
                <span className='menu-item'>Author</span>
                <span className='menu-item'>Blog</span>
            </div>
            <div className="n-icons">
                <span><i class="fa-sharp fa-solid fa-bag-shopping"></i></span> 
                <span><i class="fa-solid fa-bars"></i></span>  
            </div>
        </div>
    </div> );
}
 
export default Navbar;