import React, { useEffect, useState } from 'react';
import CurrencyInput from '../../components/currencyInput/CurrencyInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrencies } from '../../store/currencies/selectors';
import { fetchCurrencies } from '../../store/currencies/thunks';

const Content = () => {
  const dispatch = useDispatch();
  const { currencies, status } = useSelector(selectCurrencies);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  useEffect(() => {
    if (!!currencies) {
      handleAmount1Change(1);
    }
  }, [currencies]);

  function handleAmount1Change(amount1) {
    setAmount2(
      format(
        (amount1 * currencies.rates[currency2]) / currencies.rates[currency1]
      )
    );
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(
      format(
        (amount1 * currencies.rates[currency2]) / currencies.rates[currency1]
      )
    );
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(
      format(
        (amount2 * currencies.rates[currency1]) / currencies.rates[currency2]
      )
    );
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(
      format(
        (amount2 * currencies.rates[currency1]) / currencies.rates[currency2]
      )
    );
    setCurrency2(currency2);
  }

  function format(number) {
    return number.toFixed(4);
  }

  return (
    <div className="content">
      <h1>Currency Converter</h1>
      {status === 'succeeded' && (
        <div>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            amount={amount1}
            currencies={Object.keys(currencies.rates)}
            currency={currency1}
          />
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            amount={amount2}
            currencies={Object.keys(currencies.rates)}
            currency={currency2}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
