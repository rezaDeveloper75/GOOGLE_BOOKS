import React, { useContext } from 'react';
import SearchContext from '../../context/searchcontext';
import './card.css';


const Card = () => {

    const {value1, value2} = useContext(SearchContext);
    const [search,setSearch] = value1;
    const [bookData,setData] = value2;
    console.log(bookData) 

    return ( 
        search ===""? <div>hii</div> :
        bookData.map((item)=>{
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let des = item.volumeInfo.description;
            if(des == undefined){
                des = "No description"
            }
            return(<>
                <div className="card">
                    <img src={thumbnail} alt="" />
                    <div className="c-title">
                        {item.volumeInfo.title.length < 30 ? item.volumeInfo.title : <span>{item.volumeInfo.title.slice(0,31)} ...</span>}
                    </div>
                    <div className="c-description">
                        {
                            des.length > 200 ? <span>{des.slice(0,51)} ...</span> : des
                        }
                    </div>
                    <div className="c-price">
                        $600.29
                    </div>
                    <div className="c-icons">
                        <a><i class="fa-regular fa-heart"></i></a>
                        <a><i class="fa-solid fa-download"></i></a>
                    </div>
                </div>
                </>)
        })
     );
}
 
export default Card;
