import React from 'react';
import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured-item  text-white pt-12 my-10 bg-fixed '>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'featured item'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center px-36 pb-20 pt-12 bg-slate-500 bg-opacity-40 '>
                <div>
                     <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 29,2028</p>
                    <p className='uppercase'>where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatibus quisquam consequuntur dolor provident molestias voluptates culpa expedita consectetur consequatur dicta earum, deserunt aut nulla. A ducimus libero eligendi aliquam!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-2">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;