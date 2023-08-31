import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './AddReview.css';
const Rating = () => {
    const [rating,setRating]=useState(null);
    const [hover,setHover] =useState(null);

    return (
        <div  className='flex justify-center m-10'>
             {[...Array(5)].map((star,index)=>{
            
            const currentRating =index+1;
            return (
                <label>
                    <input type="radio"
                     name="rating" 
                     value={currentRating}
                    onClick={()=>setRating(currentRating)}
                    />
                     <FaStar className='star'
                     rating={rating}
                       size={50}
                         color={currentRating <= (hover || rating) ? '#d1b520' : '#e4e5e9'}
                       onMouseEnter={()=> setHover(currentRating)}
                       onMouseLeave={()=>setHover(null)}
                       ></FaStar>
                </label>
           
            )
          })}
            
        </div>
    );
};

export default Rating;