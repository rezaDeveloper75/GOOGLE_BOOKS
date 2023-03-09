import React, { useState } from 'react';
import './searchSection.css';
import { useContext } from 'react';
import axios from 'axios';
import SearchContext from '../../context/searchcontext';
import BookDataContext from '../../context/bookDataContext';

const SearchSection = () => {

    const {value1, value2} = useContext(SearchContext);
    const [search,setSearch] = value1;
    const [bookData,setData] = value2;

    async function searchBook(){
        try {
            const res = await axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+':keyes&key=AIzaSyBZId_zTknwK4fk8jLt_qhAX8JZSpDVpIE'+'&maxResults=40');
            setData(res.data.items);
            console.log(bookData);
        } catch (err) {
            console.log(err)
        }   
    }

    return ( 
    <div className="search">
        <div className="s-left">
            <span>Today a reader</span>
            <span>Tomorrow a leader</span>
        </div>
        <div className="s-right">
            <span>An open book shop that you can access anywhere, anytime</span>
            <div className='s-holder'>
                <input className='s-box' type="text" placeholder='Type Somethings ...'
                value={search} onChange={onReasrch} />
                <button className='s-btn' onClick={searchBook}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <span>Search</span>
                </button>
            </div>
        </div>
    </div> );

    function onReasrch(e){
        const input = e.currentTarget;
        setSearch(input.value);
    }
}
 
export default SearchSection;