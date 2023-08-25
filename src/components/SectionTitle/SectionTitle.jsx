import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='md:w-4/12 text-center mx-auto mb-2'>
          <p className='text-yellow-600'>---{subHeading}---</p>
          <h3 className='uppercase  text-2xl border-y-2	'>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;