import s from "../../header.module.css";


export function CurrencyItems({inputTextValue, setInputTextValue, currency, setCurrency}){
    return(
    <form className={s.header}>
        <div className={s.header__block}>
            <label className={s.header__choice}>
                <select name="rates" className={s.header__rates}>
                    {currency.map(select => (
                        <option key={select} value={select}>{select}</option>
                    ))}
                </select>
            </label>
            <label className={s.header__inpt}>
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
    )
}
