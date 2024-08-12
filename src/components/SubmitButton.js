import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import { useOrder } from '../context/OrderContext'; // Import the useOrder hook

function SubmitButton() {
    const { items, prices } = useOrder(); // Get items and prices from OrderContext

    const [receiptId, setReceiptId] = useState(null);
    const [total, setTotal] = useState(null);

    const handleSubmit = () => {
        const total = items.reduce((acc, item) => acc + item.quantity * prices[item.itemType].price, 0);
        const uniqueId = generateUniqueId();
        // saveReceipt({ items, total, uniqueId });
        setReceiptId(uniqueId);
        setTotal(total)
    };
    const Print = () => {
        //console.log('print');  
        let printContents = document.getElementById('printable-area').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }

    const generateUniqueId = () => {
        return Date.now().toString(); // Simple timestamp-based ID
    };


    return (
        <div>
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-3 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            {receiptId && (
                <div>
                <div id="printable-area" className="flex flex-col items-center p-6 border border-gray-400 rounded-lg shadow-lg bg-white">
                    <div className="w-full flex justify-between items-center mb-4">
                        <img src="path_to_logo.png" alt="Company Logo" className="h-12" />
                        <div className="text-right text-sm">
                            <p className="font-semibold text-gray-700">NEO Cleaning</p>
                            <p className="text-gray-600">Cho'lpon ko'chasi, Tashkent, 100000, Toshkent city</p>
                            <p className="text-gray-600">Phone: (998) 94 213 81 68</p>
                            <p className="text-gray-600">Email: info@neo-drycleaning.com</p>
                        </div>
                    </div>
                    <p className="text-lg font-bold text-gray-800">Receipt ID: <code>{receiptId}</code></p>
                    <p className="mt-5 mb-4 text-lg font-bold text-gray-800">Items:</p>
                    <ul className="list-disc pl-5">
                        {items.map((item, index) => (
                            <li key={index} className="mb-3 hover:bg-gray-100 p-2 rounded">
                                <span className="text-md font-semibold text-gray-700">{item.itemType}:</span> ${prices[item.itemType].price.toFixed(2)} x {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-5 text-lg font-bold text-gray-800">Total: ${total.toFixed(2)}</p>
                    <div className="mt-4">
                        <QRCodeGenerator content={receiptId} />
                    </div>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" onClick={Print}>Print Receipt</button>
            </div>            
            )}
        </div>
    );
}

export default SubmitButton;
