import s from "../../header.module.css";


export function CurrencyItems({
      inputTextValue,
      setInputTextValue,
      currency,
      baseCurrency,
      convertibleCurrency
    }){
    return(
    <form className={s.header}>
        <div className={s.header__block}>
            <label className={s.header__choice}>
                {/*value = базовой значение валюты - рубль*/}
                <select value={baseCurrency} name="rates" className={s.header__rates}>
                    {/*перебор и добавление стран в выпадющий список*/}
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
                    value=''
                    onChange={(event) => convertibleCurrency(event.target.value)}
                />
            </label>
        </div>
    </form>
    )
}
