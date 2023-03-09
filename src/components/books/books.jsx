import React from 'react';
import Card from '../card/card';
import './books.css';

const Books = () => {
    return ( 
        <div>
            <span className="result">Search result</span>
            <div className="books">
                <Card/>
            </div>
        </div>
        
        );
}
 
export default Books;