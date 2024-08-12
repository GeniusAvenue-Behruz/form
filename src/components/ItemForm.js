import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';

function ItemForm() {
  const [itemType, setItemType] = useState('t-shirt'); // default selection
  const [cleaningType, setCleaningType] = useState('aqua');
  const [quantity, setQuantity] = useState(1);
  const { setItems, prices } = useOrder();

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems(currentItems => [
      ...currentItems,
      { itemType, cleaningType, quantity: parseInt(quantity, 10) }
    ]);
    setItemType('t-shirt');
    setCleaningType('aqua');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="grid grid-cols-5 gap-4">
        {Object.entries(prices).map(([key, {image}]) => (
          <button key={key} type="button" onClick={() => setItemType(key)}
                  className={`p-2 border-2 ${itemType === key ? 'border-blue-500' : 'border-transparent'}`}>
            <img src={image} alt={key} className=" max-w-[100px] w-full h-auto" />
          </button>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cleaningType">
          Cleaning Type
        </label>
        <select
          id="cleaningType"
          value={cleaningType}
          onChange={(e) => setCleaningType(e.target.value)}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="aqua">Aqua Cleaning</option>
          <option value="dry">Dry Cleaning</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          min="1"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Item
      </button>
    </form>
  );
}

export default ItemForm;
