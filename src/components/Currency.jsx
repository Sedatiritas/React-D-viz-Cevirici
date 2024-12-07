import { useState } from "react"
import axios from "axios" 
import "./currency.css"

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
  let API_KEY = "fca_live_soMbKGKImiKALE8aX3L0VRZHF7RezsuMSzq1pIx1"

const Currency = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("TRY")
  const [result, setResult] = useState(0)


  const exchange = async() => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const exchangeResult = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(exchangeResult);
  }
 

  return (
    <div className="currencyWrapper">
      <h2>Döviz Kuru Uygulaması</h2>

       <form >
          <input 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="amountInput"
            />
            
            <select onChange={(e) => setFromCurrency(e.target.value)} className="fromCurrencyOption">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>

            <span>→</span>

            <select onChange={(e) => setToCurrency(e.target.value)} className="toCurrencyOption">
                <option>TRY</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <input 
            onChange={(e) => setResult(e.target.value)}
            value={result}
            type="number" 
            className="resultInput"
            readOnly
             />

       </form>

      <button onClick={exchange} className="exchangeBtn">Çevir</button>
    </div>
  )
}

export default Currency