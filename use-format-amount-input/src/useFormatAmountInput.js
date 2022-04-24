import {useState} from "react"

export default function useFormatAmountInput (decimalPlaces = 0) {
  const [amount, setAmount] = useState("")

  const handleAmountChange = (e) =>{
    const keyPressed = e.nativeEvent.data

    
    const amountValue = e.target.value.trim()

    const cursorPosition = e.target.selectionStart
		const keyPattern = /\d/

		if (keyPattern.test(Number(keyPressed)) || (keyPressed.includes(".") && !amount.includes("."))) {
			const strippedAmount = amountValue.replaceAll(",", "")

      const amountValueArray = strippedAmount.split(".")

      const leftHandside = amountValueArray[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      const rightHandside = amountValueArray[1]

      if(decimalPlaces && rightHandside?.length > decimalPlaces){
        return
      }

      let value = leftHandside

      if(amountValueArray.length === 2){
        value += `.${rightHandside}`
      }
		
			setAmount(value)
		}else{
      return
    }

    setTimeout(()=>{
      const targetValue = e.target.value
      const noOfCommas = targetValue.match(/,/g)?.length ?? 0
      console.log(cursorPosition,targetValue.length, noOfCommas, targetValue)
      if((cursorPosition + noOfCommas)  === targetValue.length){   
        e.target.selectionStart = cursorPosition  + noOfCommas
        e.target.selectionEnd = cursorPosition  + noOfCommas
      }else{
        e.target.selectionStart = cursorPosition  
        e.target.selectionEnd = cursorPosition  
      }
    },0)
  }


  return {
    amount,
    handleAmountChange
  };
}