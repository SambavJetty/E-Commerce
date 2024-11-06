import React from 'react';
import arrow_icon from '../Assets/breadcrum_arrow.png';
import './breadCrum.css'

const Breadcrum = (props) => {
    const { product = {} } = props;
    const { id } = product;  // Destructure the name directly from product

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt='arrow icon'/> SHOP <img src={arrow_icon} alt='arrow icon'/>productId: {id}
        </div>
    );
}

export default Breadcrum;
