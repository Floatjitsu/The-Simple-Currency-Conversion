import React, {useState} from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';
import currencyConversion from '../modules/currencyConversion';

export default function CurrencyConverter() {

	const [sourceCurrencyName, setSourceCurrencyName] = useState('EUR');
	const [sourceCurrencyValue, setSourceCurrencyValue] = useState(1.00);

	const [targetCurrencyName, setTargetCurrencyName] = useState('USD');
	const [targetCurrencyValue, setTargetCurrencyValue] = useState(1.00);

	currencyConversion.initialize(sourceCurrencyName, targetCurrencyName);

	const sourceCurrency = {
		nameChange: function(currencyName) {
			setSourceCurrencyName(currencyName);
		},

		valueChange: function(value) {
			// console.log('SOURCE VALUE: ' + value);
			setSourceCurrencyValue(value);
		}
	};

	const targetCurrency = {
		nameChange: function(currencyName) {
			setTargetCurrencyName(currencyName);
		},

		valueChange: function(value) {
			// console.log('TARGET VALUE: ' + value);
		}
	};

	const onConvertButtonClick = () => {
		// setTargetCurrencyValue(13);
		currencyConversion.convert(100);
	};

	return (
		<div className='CurrencyConverter'>
			<CurrencyInput
				readOnly={false}
				currencyValue={sourceCurrencyValue}
				defaultValue={'EUR'}
				currencyNameInputChangeCallBack={sourceCurrency.nameChange}
				currencyValueInputChangeCallBack={sourceCurrency.valueChange}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput
				readOnly={true}
				currencyValue={targetCurrencyValue}
				defaultValue={'USD'}
				currencyNameInputChangeCallBack={targetCurrency.nameChange}
				currencyValueInputChangeCallBack={targetCurrency.valueChange}/>
			<div style={{marginTop: 10}}/>
			<Button
				variant='contained'
				color='primary'
				style={{marginRight: 15}}
				onClick={onConvertButtonClick}>
				Convert
			</Button>
		</div>
	);
};
