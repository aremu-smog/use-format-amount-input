import { useFormatAmountInput } from "use-format-amount-input"

export default function Index() {
	const { amount, strippedAmount, handleAmountChange } = useFormatAmountInput({
		decimalPlaces: 3,
		separator: ".",
	})

	return (
		<main>
			<style jsx global>{`
				body {
					font-family: sans-serif;
					padding: 0;
					margin: 0;
					background-color: #282c34;
					min-height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.app {
					background-color: white;
					width: 100%;
					width: 350px;
					padding: 1em;
					border-radius: 0.5em;
					color: #282c34;
				}

				h1 {
					font-size: 1.8em;
				}

				input {
					display: block;
					width: 100%;
					padding: 1em;
					margin: 1em 0;
					border: 1px solid #282c34;
					outline: none;
					border-radius: 0.5em;
					box-sizing: border-box;
					transition: border 0.5s;
				}

				input:hover {
					border: 1px solid #61dafb;
				}

				footer p {
					font-size: 0.9em;
					margin-top: 2em;
				}

				footer p,
				footer a {
					color: #282c34;
				}
			`}</style>

			<section className='app'>
				<h1>Enter amount below</h1>

				<form>
					<input
						type='text'
						name='amount'
						onChange={handleAmountChange}
						value={amount}
						placeholder='Enter amount here'
					/>
				</form>
				<p>
					<small>Stripped amount: {strippedAmount}</small>
				</p>
				<footer>
					<p>
						Made by{" "}
						<a
							href='https://twitter.com/aremu_smog'
							target='_blank'
							rel='noreferrer'>
							Aremu Smog
						</a>{" "}
						|{" "}
						<a
							href='https://github.com/aremu-smog/use-format-amount-input/tree/main/use-format-amount-input'
							target='_blank'
							rel='noreferrer'>
							GitHub Repo
						</a>
					</p>
				</footer>
			</section>
		</main>
	)
}
