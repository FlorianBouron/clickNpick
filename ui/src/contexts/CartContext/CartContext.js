import React, { useState } from 'react';

const CartContext = React.createContext({
  products: [],
  addToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);

  const addToCart = (product) => {
    const hasProductInList = !!productsList.find((_product) => product.id === _product.id);

    if (hasProductInList) {
      setProductsList(productsList.map((_product) => {
        if (product.id === _product.id) {
          return product;
        }
        return _product;
      }));
    } else {
      setProductsList([...productsList, product]);
    }
  };

  return (
    <CartContext.Provider value={{ products: productsList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
