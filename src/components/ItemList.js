import React from 'react';
import { useOrder } from '../context/OrderContext';

function ItemList() {
  const { items } = useOrder();

  return (
    <div className="p-4">
      <h2 className="font-bold text-lg">Items to Clean</h2>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.quantity} x {item.itemType} ({item.cleaningType})
            </li>
          ))}
        </ul>
      ) : (
        <p>No items added yet.</p>
      )}
    </div>
  );
}

export default ItemList;
