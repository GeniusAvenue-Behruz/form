import React from 'react';
import QRCode from 'react-qr-code';

function Receipt({ items, prices }) {
  const total = items.reduce((acc, item) => {
    return acc + item.quantity * prices[item.itemType].price;
  }, 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.itemType}</span>
            <span>${prices[item.itemType].price.toFixed(2)}</span>
            <span>Qty: {item.quantity}</span>
          </li>
        ))}
      </ul>
      <div>Total: ${total.toFixed(2)}</div>
      <div className="qr-code">
        <QRCode value={`Total: ${total.toFixed(2)}`} />
      </div>
    </div>
  );
}

export default Receipt;
