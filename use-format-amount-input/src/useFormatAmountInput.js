import {useState} from "react"

export default function useFormatAmountInput (settings = {}) {
  const [amount, setAmount] = useState("")


  const handleAmountChange = (e) =>{
    const keyPressed = e.nativeEvent.data
		const keyPattern = /\d/

		if (keyPattern.test(Number(keyPressed))) {
			const amountValue = e.target.value.trim()
			const strippedAmount = amountValue.replaceAll(",", "")
			const amountString = strippedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			setAmount(amountString)
		}
  }


  return {
    amount,
    handleAmountChange
  };
}