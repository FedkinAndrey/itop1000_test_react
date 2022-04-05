import React from 'react';

const CurrencyInput = ({
  amount,
  currencies,
  currency,
  onAmountChange,
  onCurrencyChange,
}) => {
  return (
    <div className="group">
      <input
        type="text"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyInput;
