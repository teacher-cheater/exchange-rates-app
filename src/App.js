import s from './header.module.css';
import {useState} from "react";

function App() {

    let [inputTextValue, setInputTextValue] = useState('');
    let [, setSelectOpinion] = useState('');

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
                                <option value="" defaultValue >
                                    Choose one
                                </option>
                                <option value="Gryffindor"> Gryffindor</option>
                                <option value="Slytherin">Slytherin</option>
                                <option value="Hufflepuff">Hufflepuff</option>
                                <option value="Ravenclaw">Ravenclaw</option>
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

                    <div className="header__block-choice-2">
                        {/*<label className="header__school-choice">*/}
                        {/*    <p>School</p>*/}
                        {/*    <select name="school" className="header__school"*/}
                        {/*            onChange={(event) => setSelectOpinion(event.target.value)}>*/}
                        {/*        <option value="" defaultValue select='true'>*/}
                        {/*            Choose one*/}
                        {/*        </option>*/}
                        {/*        <option value="Gryffindor"> Gryffindor</option>*/}
                        {/*        <option value="Slytherin">Slytherin</option>*/}
                        {/*        <option value="Hufflepuff">Hufflepuff</option>*/}
                        {/*        <option value="Ravenclaw">Ravenclaw</option>*/}
                        {/*    </select>*/}
                        {/*</label>*/}
                        {/*<label className="header__name">*/}
                        {/*    <p>Name</p>*/}
                        {/*    <input*/}
                        {/*        placeholder="100.00"*/}
                        {/*        className="header__input-text"*/}
                        {/*        type="number"*/}
                        {/*        value={inputTextValue}*/}
                        {/*        onChange={(event) => setInputTextValue(event.target.value)}*/}
                        {/*    />*/}
                        {/*</label>*/}
                    </div>
                </form>
            </header>
        </div>
    );
}

export default App;
