## useFormatAmountInput

Format amount, price, number fields in react

## Installation

```bash
yarn add use-format-amount-input
```

or if `npm` is your thing, do:

```bash
npm i use-format-amount-input
```

## Usage

```jsx
import {useFormatAmountInput} from "use-format-amount-input"

const Component = () => {

    const {amount, handleAmountChange} = useFormatAmountInput({decimalPlaces: 3})

    return <form>
    <input type="text" name="amount" value={amount} onChange={handleAmountChange} />
    <form>
}
```

### Params

You can pass an optional value to `useFormatInput()` which represents the number of decimal places you want to allow the user to be able to enter
