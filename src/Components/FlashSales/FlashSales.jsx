import React, { useContext, useEffect, useState } from 'react';
import './FlashSales.css';
import flashHeaderimg from '../Assets/flashHeader.svg';
import Item from '../Item/item'; // Ensure that the Item component is imported
import { ShopContext } from '../../Context/ShopContext.jsx';
import allProductsimg from '../Assets/allProducts.svg';
import { Link } from 'react-router-dom';

const FlashSales = () => {
  const { getLimitProducts } = useContext(ShopContext); // Get the method from context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch limited products and update the state
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getLimitProducts(); // Await the promise
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getLimitProducts]); // Include getLimitProducts in the dependency array

  return (
    <div className='flashsales'>
      <div className='flashsales-container'>
        <div className='flashsales-header'>
          <img src={flashHeaderimg} alt="Flash Sales Header" />
        </div>
        <div className='flashsales-main'>
          {products.map(product => (
            <Item
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.title} // Assuming product title is used as name
              new_price={product.price} // Use appropriate price properties
              old_price={product.price+14.8} // Example: Set an old price; adjust as needed
            />
          ))}
        </div>
        <Link to='/allproducts'><img src={allProductsimg} alt="" /></Link>
        <div className='flashsales-tail'>
           <hr />
        </div>
      </div>
    </div>
  );
}

export default FlashSales;
