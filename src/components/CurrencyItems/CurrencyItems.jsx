import s from "../../header.module.css";


export function CurrencyItems({
      onChangeCurrency,
      currency,
      selectCurrency,
      sum,
      setTotal
    }){
    return(
    <form className={s.header}>
        <div className={s.header__block}>
            <label className={s.header__choice}>
                {/*value = базовое значение валюты - рубль*/}
                <select
                    value={selectCurrency}
                    name="rates"
                    className={s.header__rates}
                    onChange={onChangeCurrency}
                >
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
                    value={sum}
                    onChange={setTotal}
                />
            </label>
        </div>
    </form>
    )
}
