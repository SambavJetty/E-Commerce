import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [wishlistItems, setWishlistItems] = useState({});

  useEffect(() => {
    const initializeProductsAndCart = async () => {
      try {
        const products = await getAllProducts();
        setAllProducts(products);

        // Initialize cartItems and wishlistItems with default values (quantity 0 for each product)
        const initialCart = {};
        const initialWishlist = {};
        products.forEach((product) => {
          initialCart[product.id] = 0;
          initialWishlist[product.id] = false; // Set wishlist to false by default
        });
        setCartItems(initialCart);
        setWishlistItems(initialWishlist);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Call the initialization function
    initializeProductsAndCart();
  }, []); 
  // PRODUCTS API call
  const getAllProducts = () => {
    return fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching all products:", error);
        throw error;
      });
  };

  const getSingleProduct = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching single product:", error);
        throw error;
      });
  };

  const getAllCategories = () => {
    return fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching categories:", error);
        throw error;
      });
  };

  const getProductsByCategory = (category) => {
    return fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching products by category:", error);
        throw error;
      });
  };

  const getLimitProducts = () => {
    return fetch(`https://fakestoreapi.com/products?limit=4`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching limited products:", error);
        throw error;
      });
  };
  const getSomeProducts = () => {
    return fetch(`https://fakestoreapi.com/products?limit=8`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching limited products:", error);
        throw error;
      });
  };

  const getSortedProducts = (sortOrder) => {
    return fetch(`https://fakestoreapi.com/products?sort=${sortOrder}`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching sorted products:", error);
        throw error;
      });
  };

  const addProduct = (product) => {
    return fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error adding product:", error);
        throw error;
      });
  };

  const updateProduct = (id, product) => {
    return fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error updating product:", error);
        throw error;
      });
  };

  const deleteProduct = (id) => {
    return fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error deleting product:", error);
        throw error;
      });
  };
  // Wishlist functions
  const addToWishlist = (itemId) => {
    setWishlistItems((prevWishlist) => ({
      ...prevWishlist,
      [itemId]: !prevWishlist[itemId], // Toggle between true/false
    }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevWishlist) => ({
      ...prevWishlist,
      [itemId]: false, // Set the item to false to remove it from wishlist
    }));
  };

  const getTotalWishlistItems = () => {
    let totalWishlistItems = 0;
    for (const item in wishlistItems) {
      if (wishlistItems[item]) { // Check if the item is true (added to wishlist)
        totalWishlistItems += 1;
      }
    }
    return totalWishlistItems;
  };

  // New function to get total cart items
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  

  // CART
  const getAllCarts = () => {
    return fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching all carts:", error);
        throw error;
      });
  };

  const getSingleCart = (id) => {
    return fetch(`https://fakestoreapi.com/carts/${id}`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching single cart:", error);
        throw error;
      });
  };

  const addToCart = async (itemId, userId = 5, quantity = 1, date = "2020-02-03") => {
    try {
      const response = await fetch('https://fakestoreapi.com/carts', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          date: date,
          products: [{ productId: itemId, quantity: quantity }],
        }),
      });
      const newCart = await response.json();
      setCartItems(prevCart => ({ ...prevCart, [itemId]: (prevCart[itemId] || 0) + quantity })); // Update the context's cart state
      console.log("Item added to cart:", newCart);
      return newCart;
    } catch (error) {
      console.error("Error adding to cart:", error);
      throw error;
    }
  };


  const updateCart = (id, cart) => {
    return fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error updating cart:", error);
        throw error;
      });
  };

  const deleteCart = (id) => {
    return fetch(`https://fakestoreapi.com/carts/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error deleting cart:", error);
        throw error;
      });
  };

  // USERS
  const getAllUsers = () => {
    return fetch('https://fakestoreapi.com/users')
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching users:", error);
        throw error;
      });
  };

  const getSingleUser = (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`)
      .then(res => res.json())
      .catch(error => {
        console.error("Error fetching single user:", error);
        throw error;
      });
  };

  const addUser = (user) => {
    return fetch('https://fakestoreapi.com/users', {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error adding user:", error);
        throw error;
      });
  };

  const updateUser = (id, user) => {
    return fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error updating user:", error);
        throw error;
      });
  };

  const deleteUser = (id) => {
    return fetch(`https://fakestoreapi.com/users/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error deleting user:", error);
        throw error;
      });
  };

  // LOGIN
  const userLogin = (username, password) => {
    return fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => {
        console.error("Error logging in:", error);
        throw error;
      });
  };

  // Context Value
  const contextValue = {
    allProducts,
    cartItems,
    getAllProducts,
    getSingleProduct,
    getAllCategories,
    getProductsByCategory,
    getLimitProducts,
    getSomeProducts,
    getSortedProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getAllCarts,
    getSingleCart,
    addToCart,
    getTotalCartItems,
    updateCart,
    deleteCart,
    getAllUsers,
    getSingleUser,
    addUser,
    updateUser,
    deleteUser,
    userLogin,
    addToWishlist,
    wishlistItems,
    removeFromWishlist,
    getTotalWishlistItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
