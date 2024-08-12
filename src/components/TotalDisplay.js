import React, { useEffect, useState } from 'react';
import { useOrder } from '../context/OrderContext';

function TotalDisplay() {
  const [total, setTotal] = useState(0);
  const { items, prices } = useOrder();

  useEffect(() => {
    if (prices && items && Object.keys(prices).length > 0) {
      const totalCost = items.reduce((acc, item) => {
        const itemPrice = prices[item.itemType]?.price || 0;  // Access the price attribute correctly
        return acc + itemPrice * item.quantity;
      }, 0);
      setTotal(totalCost);
    }
  }, [items, prices]);

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">Total Cost: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default TotalDisplay;
