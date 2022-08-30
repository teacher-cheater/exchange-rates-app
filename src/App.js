import s from './header.module.css';
import {useState, useEffect} from "react";

function App() {

    let [inputTextValue, setInputTextValue] = useState('');
    let [curentcy, setCurentcy] = useState([]);
    let [, setSelectOpinion] = useState('');
    let [todayDate, setTodayDate] = useState([])

    const mainUrl = 'https://www.cbr-xml-daily.ru/latest.js';

    useEffect(() => {
    fetch(mainUrl)
        .then(response => response.json())
        .then(data => setCurentcy([data.base]))
        // .then(res => console.log(res))
    }, []);

    useEffect(() => {
        fetch(mainUrl)
            .then(response => response.json())
            // .then(res => setTodayDate([res.date]))
            .then(res=> console.log(res))
    }, []);

    return (
        <div className="App">
            <header>
                <h1 className={s.header__title}> Exchange rates </h1>
                <form className={s.header}>
                    <div className={s.header__block}>
                        <label className={s.header__choice}>
                            <div className={s.header__subtext}> Choice rates </div>
                            <select name="rates" className={s.header__rates}
                                    onChange={(event) => setSelectOpinion(event.target.value)}>
                                <option value=''>{curentcy}</option>
                            </select>
                        </label>
                        <label className={s.header__inpt}>
                            <div className={s.header__subtext}> Поле для ввода </div>
                            <input
                                placeholder="100.00"
                                className={s.header__input}
                                type="number"
                                value={inputTextValue}
                                onChange={(event) => setInputTextValue(event.target.value)}
                            />
                        </label>
                    </div>
                </form>
                <div className={s.main__date}>{todayDate}</div>
            </header>
        </div>
    );
}

export default App;
