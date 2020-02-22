import React, {useState} from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';

export default function CurrencyConverter() {

	const [sourceCurrencyName, setSourceCurrencyName] = useState('EUR');
	const [targetCurrencyName, setTargetCurrencyName] = useState('USD');

	const sourceCurrency = {
		nameChange: function(currencyName) {
			setSourceCurrencyName(currencyName);
		},

		valueChange: function(value) {
			console.log('SOURCE VALUE: ' + value);
		}
	};

	const targetCurrency = {
		nameChange: function(currencyName) {
			setTargetCurrencyName(currencyName);
		},

		valueChange: function(value) {
			console.log('TARGET VALUE: ' + value);
		}
	};

	return (
		<div className='CurrencyConverter'>
			<CurrencyInput
				readOnly={false}
				defaultValue={sourceCurrencyName}
				currencyNameInputChangeCallBack={sourceCurrency.nameChange}
				currencyValueInputChangeCallBack={sourceCurrency.valueChange}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput
				readOnly={true}
				defaultValue={targetCurrencyName}
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
