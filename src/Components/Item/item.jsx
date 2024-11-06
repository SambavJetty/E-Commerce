import React from 'react';
import './item.css';
import {Link} from 'react-router-dom'
import starsimg from '../Assets/stars.svg'

const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo(0,0);
  }
  return (
    <div className='item'>
      <div className='item-image'>
        <Link to={`/product/${props.id}`}><img onClick={scrollToTop} src={props.image} alt={props.name} /></Link>
      </div>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
            ${props.new_price}
        </div>
        <div className="item-prices-old">
            ${props.old_price}
        </div>
      </div>
      <div className='stars'>
          <img src={starsimg} alt="" />
          <p>(65)</p>
          
      </div>
    </div>
  )
}

export default Item
