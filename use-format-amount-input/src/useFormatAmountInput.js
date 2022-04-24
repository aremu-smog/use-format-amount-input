import {useState} from "react"

export default function useFormatAmountInput (settings = {}) {
  const [amount, setAmount] = useState("")


  const handleAmountChange = (e) =>{
    const keyPressed = e.nativeEvent.data
		const keyPattern = /\d/

		if (keyPattern.test(Number(keyPressed)) || (keyPressed.includes(".") && !amount.includes("."))) {
			const amountValue = e.target.value.trim()
			const strippedAmount = amountValue.replaceAll(",", "")

      const amountValueArray = strippedAmount.split(".")

      const leftHandside = amountValueArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      const rightHandside = amountValueArray[1]

      let value = leftHandside

      if(amountValueArray.length === 2){
        value += `.${rightHandside}`
      }
		
			setAmount(value)
		}else{
      return
    }
  }


  return {
    amount,
    handleAmountChange
  };
}