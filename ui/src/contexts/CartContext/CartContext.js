import React, { useState, useEffect, useMemo } from 'react';

// constants
import { CART } from '../../constants/routerConstants';

const CartContext = React.createContext({
  products: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const defaultState = useMemo(() => {
    const cartState = localStorage.getItem(CART);
    if (cartState) {
      return JSON.parse(cartState);
    }
    return {};
  }, []);


  const [productsList, setProductsList] = useState(defaultState);

  const addToCart = (product) => {
    const { id } = product;
    if (productsList) {
      setProductsList((prevState) => ({ ...prevState, [id]: product }));
    } else {
      setProductsList(({ [id]: product }));
    }
  };

  const removeFromCart = (id) => {
    if (productsList[id]) {
      const productsListCopy = { ...productsList };
      delete productsListCopy[id];

      setProductsList(productsListCopy);
    }
  };

  useEffect(() => {
    if (productsList) {
      localStorage.setItem(CART, JSON.stringify(productsList));
    }
  }, [productsList]);

  return (
    <CartContext.Provider value={{ products: productsList, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
