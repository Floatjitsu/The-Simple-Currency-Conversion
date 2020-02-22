import React from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';

export default function CurrencyConverter() {

	const sourceCurrencyNameChange = currencyName => {
		console.log('SOURCE: ' + currencyName);
	};

	const targetCurrencyNameChange = currencyName => {
		console.log('TARGET: ' + currencyName)
	};

	return (
		<div className='CurrencyConverter'>
			<CurrencyInput
				readOnly={false}
				defaultValue={'EUR'}
				inputChangeCallBack={sourceCurrencyNameChange}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput
				readOnly={true}
				defaultValue={'USD'}
				inputChangeCallBack={targetCurrencyNameChange}/>
			<div style={{marginTop: 10}}/>
			<Button
				variant='contained'
				color='primary'
				style={{marginRight: 15}}>
				Convert
			</Button>
		</div>
	);
};
