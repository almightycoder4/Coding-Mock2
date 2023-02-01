import { createContext, useState } from "react";
export const CartContext = createContext();
function CartContextProvider({ children }) {
  const [Cart, setCart] = useState([]);
  const addtoCart = (value) => {
    setCart(value);
  };

  return (
    <CartContext.Provider value={{ Cart, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
