import s from './header.module.css';
import {useState, useEffect} from "react";

import {CurrencyItems} from './components/CurrencyItems/CurrencyItems.jsx'

function App() {

    let [inputTextValue, setInputTextValue] = useState('');
    // let [inputTextValue2, setInputTextValue2] = useState('');

    let [currency, setCurrency] = useState([]);
    // let [currencySelect, setCurrencySelect] = useState([]);

    // let [, setSelectOpinion] = useState('');
    let [todayDate, setTodayDate] = useState([])

    const mainUrl = 'https://www.cbr-xml-daily.ru/latest.js';
    // const mainUrl = 'https://cdn.cur.su/api/latest.json';
    console.log(setCurrency)

    //запрос на отображение базовой валюты
    useEffect(() => {
    fetch(mainUrl)
        .then(response => response.json())
        .then(data => setCurrency([data.base, ...Object.keys(data.rates)]))
    }, []);

    //запрос на отображение даты
    useEffect(() => {
        fetch(mainUrl)
            .then(response => response.json())
            .then(res => setTodayDate([res.date]))
            // .then(res=> console.log([Object.keys(res.rates)][0]))
    }, []);

    return (
        <div className="App">
            <header>
                <h1 className={s.header__title}> Exchange rates </h1>
                <CurrencyItems
                    inputTextValue={inputTextValue}
                    setInputTextValue={setInputTextValue}
                    currency={currency}
                    setCurrency={setCurrency}
                >

                </CurrencyItems>
                <CurrencyItems
                    inputTextValue={inputTextValue}
                    setInputTextValue={setInputTextValue}
                    currency={currency}
                    setCurrency={setCurrency}
                >

                </CurrencyItems>
                <div className={s.main__date}>{todayDate}</div>
            </header>
        </div>
    );
}

export default App;
