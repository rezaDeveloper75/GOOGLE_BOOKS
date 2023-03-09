import React, { Component } from 'react';
import './searchSection.css';

const SearchSection = () => {
    return ( 
    <div className="search">
        <div className="s-left">
            <span>Today a reader</span>
            <span>Tomorrow a leader</span>
        </div>
        <div className="s-right">
            <span>An open book shop that you can access anywhere, anytime</span>
            <div className='s-holder'>
                <input className='s-box' type="text" placeholder='Type Somethings ...'/>
                <button className='s-btn'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Search</span>
                </button>
            </div>
        </div>
    </div> );
}
 
export default SearchSection;