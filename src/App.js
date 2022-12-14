import s from './header.module.css';
import {useState, useEffect} from "react";

import {CurrencyItems} from './components/CurrencyItems/CurrencyItems.jsx'

function App() {

    const [currency, setCurrency] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState();
    const [convertibleCurrency, setConvertibleCurrency] = useState();
    const [currencyExchange, setCurrencyExchange] = useState();
    const [total, setTotal] = useState(10);
    const [totalCurrencyAmount, setTotalCurrencyAmount] = useState(true);
    const [todayDate, setTodayDate] = useState([]);

    const mainUrl = 'https://www.cbr-xml-daily.ru/latest.js';

    let toCurrency, fromCurrency;
    if(totalCurrencyAmount === true){
        fromCurrency = total;
        toCurrency = total / currencyExchange;
    } else {
        toCurrency = total;
        fromCurrency = total * currencyExchange;
    }

    //запрос на отображение базовой валюты
    useEffect(() => {
    fetch(mainUrl)
        .then(response => response.json())
        .then(data => {
            const currency = Object.keys(data.rates)[0]
            setTodayDate([data.date])
            setCurrency([data.base, ...Object.keys(data.rates)])
            setBaseCurrency(data.base)
            setConvertibleCurrency(currency)
            setCurrencyExchange(data.rates[currency])

        })
    }, []);

    function changeCurrency(event){
        setTotal(event.target.value)
    }

    return (
        <div className="App">
            <header>
                <h1 className={s.header__title}> Exchange rates </h1>
                <CurrencyItems
                    currency={currency}
                    // setCurrency={setCurrency}
                    selectCurrency={baseCurrency}
                    onChangeCurrency={(event => setBaseCurrency(event.target.value))}
                    sum={toCurrency}
                    setTotal={changeCurrency}
                >

                </CurrencyItems>

                <CurrencyItems
                    currency={currency}
                    // setCurrency={setCurrency}
                    selectCurrency={convertibleCurrency}
                    onChangeCurrency={(event => setConvertibleCurrency(event.target.value))}
                    sum={fromCurrency}
                    setTotal={changeCurrency}
                >

                </CurrencyItems>
                <div className={s.main__date}>{todayDate}</div>
            </header>
        </div>
    );
}

export default App;
