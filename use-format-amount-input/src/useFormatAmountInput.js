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
      const hasCommas = (/,/g).test(targetValue)
      const inputType = e.nativeEvent.inputType

      const isDeleting = inputType === "deleteContentBackward" || inputType === "deleteContentForward" || inputType === "deleteContent" || inputType === "deleteByCut"

 
      if(hasCommas && ((cursorPosition + 1)  === targetValue.length) && !isDeleting){   
        e.target.selectionStart = cursorPosition  + 1
        e.target.selectionEnd = cursorPosition  + 1
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