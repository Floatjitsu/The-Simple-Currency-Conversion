import React from 'react';
import CurrencyInput from './CurrencyInput';

export default function CurrencyConverter() {
	return (
		<div className='CurrencyConverter'>
			<CurrencyInput readOnly={false}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput readOnly={true}/>
		</div>
	);
};
