import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadPrices = async () => {
    setIsLoading(true);
    setError(null);
    console.log("Attempting to load prices...");
    try {
      const response = await fetch('/price.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPrices(data);
      console.log("Prices loaded successfully:", data);
    } catch (error) {
      console.error("Failed to load prices:", error);
      setError("Failed to load item data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPrices();
  }, []);

  return (
    <OrderContext.Provider value={{ items, setItems, prices, isLoading, error }}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder() {
  return useContext(OrderContext);
}

export default OrderContext;
