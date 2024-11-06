import React, { useContext, useEffect, useState } from 'react';
import Item from '../Components/Item/item'; // Ensure that the Item component is imported
import { ShopContext } from '../Context/ShopContext.jsx';
import './CSS/AllProducts.css'

const FlashSales = () => {
  const { getAllProducts } = useContext(ShopContext); // Get the method from context
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch limited products and update the state
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getAllProducts(); // Await the promise
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [getAllProducts]); // Include getLimitProducts in the dependency array

  return (
    <div className='all-products'>
      <div className='all-products-container'>
        <div className='all-products-main'>
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
      </div>
    </div>
  );
}

export default FlashSales;
