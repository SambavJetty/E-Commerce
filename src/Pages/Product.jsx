import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import ProductDisplay from '../Components/ProductDisplay/productDisplay';
import BreadCrum from '../Components/BreadCrum/breadCrum';

const Product = () => {
  const { getAllProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Call getAllProducts and find the product by id
    getAllProducts()
      .then(products => {
        const foundProduct = products.find(e => e.id === Number(productId));
        setProduct(foundProduct);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, [productId, getAllProducts]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
      <RelatedProducts />
    </div>
  );
};

export default Product;
