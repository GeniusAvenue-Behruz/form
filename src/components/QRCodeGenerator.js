import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator({ content }) {
    const size = '100px'
  return (
    <div className="qr-code">
      <QRCode value={content} size={size}/>
    </div>
  );
}

export default QRCodeGenerator;
