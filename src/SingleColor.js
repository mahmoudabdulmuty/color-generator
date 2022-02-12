import { useEffect, useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ index, rgb, weight, hex, type }) => {
	const [alert, setAlert] = useState(false);
	const bg = rgb.join(',');
	const styles = { backgroundColor: `rgb(${bg})` };
	const hexColor = rgbToHex(...rgb);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 1000);
		return () => {
			clearTimeout(timeout);
		};
	}, [alert]);
	return (
		<article
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexColor);
			}}
			className={`color ${type === 'shade' && 'color-light'}`}
			style={styles}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">#{hex}</p>
			{alert && <p className="alert">Copied to Clipboard</p>}
		</article>
	);
};

export default SingleColor;
