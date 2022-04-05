import React from 'react';

const CurrencyDisplay = ({ item }) => {
  return (
    <div className="header__group">
      <span>{item.ccy}</span>
      <div className="currency">
        <span>{item.buy}</span>
        <span>{item.sale}</span>
      </div>
    </div>
  );
};

export default CurrencyDisplay;
