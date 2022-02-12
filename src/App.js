import { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [colorWeight, setColorWeight] = useState('');
	const [list, setList] = useState(new Values('#f15025').all());
	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(colorWeight);
			setList(colors);
			setError(false);
		} catch (err) {
			setError(true);
			console.log(err.message);
		}
	};

	const handleColorChange = (e) => {
		setColor(e.target.value);
	};

	const handleColorWeightChange = (e) => {
		setColorWeight(+e.target.value);
	};

	return (
		<>
			<section className="container">
				<h3>Colors Generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						className={error ? 'error' : null}
						type="text"
						value={color}
						onChange={handleColorChange}
						placeholder="#f15025"
					/>
					<input
						type="number"
						placeholder="Set Color Weight"
						value={colorWeight}
						onChange={handleColorWeightChange}
					/>
					<button className="btn">Submit</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return (
						<SingleColor
							{...color}
							key={index}
							hex={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
