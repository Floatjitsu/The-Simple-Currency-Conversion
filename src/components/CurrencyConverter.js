import React from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';

export default function CurrencyConverter() {

	const sourceCurrency = {
		nameChange: function(currencyName) {
			console.log('SOURCE: ' + currencyName);
		},

		valueChange: function(value) {
			console.log('SOURCE VALUE: ' + value);
		}
	};

	const targetCurrency = {
		nameChange: function(currencyName) {
			console.log('TARGET: ' + currencyName);
		},

		valueChange: function(value) {
			console.log('TARGET VALUE: ' + value);
		}
	};

	return (
		<div className='CurrencyConverter'>
			<CurrencyInput
				readOnly={false}
				defaultValue={'EUR'}
				currencyNameInputChangeCallBack={sourceCurrency.nameChange}
				currencyValueInputChangeCallBack={sourceCurrency.valueChange}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput
				readOnly={true}
				defaultValue={'USD'}
				currencyNameInputChangeCallBack={targetCurrency.nameChange}
				currencyValueInputChangeCallBack={targetCurrency.valueChange}/>
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
