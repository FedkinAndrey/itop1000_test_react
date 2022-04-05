import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyDisplay from '../currencyDisplay/CurrencyDisplay';

const Header = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchPB24Api = async () => {
      const response = await axios.get(
        'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
      );
      console.log(response.data);
      setState(response.data);
    };

    fetchPB24Api();
  }, []);

  return (
    <div className="header">
      <div className="container">
        {state !== null && (
          <div className="header__currency">
            <CurrencyDisplay item={state[0]} />
            <CurrencyDisplay item={state[1]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
