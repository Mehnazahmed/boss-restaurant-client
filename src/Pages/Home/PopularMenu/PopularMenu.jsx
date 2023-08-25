import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] =useMenu();
    const popular= menu.filter(item=>item.category ==='popular')
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category ==='popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <section className='mb-12' >
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
             <div className='grid md:grid-cols-2 gap-6 mt-6'>
                {
                    popular.map(item=><MenuItems
                    key={item._id}
                    item={item}
                    ></MenuItems>)
                }
             </div>
             <button className="btn btn-outline border-0 border-b-4 mt-2 ">view full menu</button>

            
        </section>
    );
};

export default PopularMenu;