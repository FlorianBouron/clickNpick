import React, { useState } from 'react';

export const CartContext = React.createContext({
  products: [],
  addToCart: () => {},
});

export default ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    // setProductsList((currentProductList) => {
    //   const prodIndex = currentProductList.findIndex(
    //     (p) => p.id === productId,
    //   );
    //   const newStatus = !currentProductList[prodIndex].isCartItem;
    //   const updatedProduct = [...productsList];
    //   updatedProduct[prodIndex] = {
    //     ...currentProductList[prodIndex], isCartItem: newStatus,
    //   };
    //   return updatedProduct;
    // });
  };

  return (
    <CartContext.Provider value={{ products: productsList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
