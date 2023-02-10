import "./style.css";
import { currencies } from '../currencies';
import { Result } from "./Result";
import { useState } from "react";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");


    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <h1 className="form__header">
                Currency converter
            </h1>
            <p className="form__instruction">
                Please enter the <strong>correct data</strong>. Start by select a currency and enter data.
            </p>
            <p>
                <label>
                    <span className="form__labelText ">
                        How much ?
                    </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        placeholder="Your amount"
                        className="form__field"
                        type="number"
                        step="0.01"
                        required />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Your currency:
                    </span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.short}
                            </option>
                        )))}
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Calculate</button>
            </p>
            <p className="form__info">
                Rates has been downloaded from website nbp.pl
            </p>
            <Result result={result} />
        </form>
    );
}

export default Form;