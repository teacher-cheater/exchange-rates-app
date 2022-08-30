import s from './header.module.css';
import {useState, useEffect} from "react";

import {CurencyItems} from './components/CurrencyItems/CurencyItems.jsx'

function App() {

    let [inputTextValue1, setInputTextValue1] = useState('');
    let [inputTextValue2, setInputTextValue2] = useState('');

    let [currentcy1, setCurrentcy1] = useState([]);
    let [currentcy2, setCurrentcy2] = useState([]);

    // let [, setSelectOpinion] = useState('');
    let [todayDate, setTodayDate] = useState([])

    const mainUrl = 'https://www.cbr-xml-daily.ru/latest.js';

    //запрос на отображение базовой валюты
    useEffect(() => {
    fetch(mainUrl)
        .then(response => response.json())
        .then(data => setCurentcy([data.base]))
    }, []);

    //запрос на отображение даты
    useEffect(() => {
        fetch(mainUrl)
            .then(response => response.json())
            .then(res => setTodayDate([res.date]))
            .then(res=> console.log(res))
    }, []);

    return (
        <div className="App">
            <header>
                <h1 className={s.header__title}> Exchange rates </h1>
                <CurencyItems
                    inputTextValue1={inputTextValue1}
                    setInputTextValue1={setInputTextValue1}
                    curentcy1={currentcy}
                    setCurentcy1={setCurrentcy}
                >

                </CurencyItems>
                <CurencyItems
                    inputTextValue2={inputTextValue2}
                    setInputTextValue2={setInputTextValue2}
                    curentcy2={currentcy2}
                    setCurentcy2={setCurrentcy2}
                >

                </CurencyItems>
                <div className={s.main__date}>{todayDate}</div>
            </header>
        </div>
    );
}

export default App;
