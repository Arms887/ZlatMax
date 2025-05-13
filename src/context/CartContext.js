import { createContext, useState, useContext, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const { t } = useTranslation();
  const knifecardarr = t('knifecards', { returnObjects: true });
  const lights = t('lights', { returnObjects: true });
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: t('add'),
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: t('adderror'),
    });
  };
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: t('remove'),
    });
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartItems = useMemo(() => {
    const combinedItems = [...knifecardarr, ...lights];
    return combinedItems.filter((item) => cart.includes(Number(item.id)));
  }, [cart, knifecardarr, lights]);
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    setTotalPrice(total);
  }, [cartItems]);
  const addToCart = (itemId) => {
    if (!cart.includes(itemId)) {
      setCart(prev => [...prev, itemId]);
      success();
    } else {
      error();
    }
  };

  const removeFromCart = (itemId) => {
    setCart(prev => prev.filter(id => id !== itemId));
    warning();
  };

  const isInCart = (itemId) => cart.includes(itemId);

  return (

    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, cartItems, totalPrice }}>
      {children}
      {contextHolder}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
