import React, {useState, useEffect} from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';
import currencyConversion from '../modules/currencyConversion';

export default function CurrencyConverter() {

	const [sourceCurrencyValue, setSourceCurrencyValue] = useState(1.00);
	const [targetCurrencyValue, setTargetCurrencyValue] = useState(1.00);
	const [exchangeRate, setExchangeRate] = useState(0.42);

	useEffect(() => {
		 currencyConversion.initialize('EUR', 'USD');
		 _convert();
	}, []);

	const sourceCurrency = {
		nameChange: function(currencyName) {
			currencyConversion.setSourceCurrency(currencyName);
		},

		valueChange: function(value) {
			setSourceCurrencyValue(value);
		}
	};

	const targetCurrency = {
		nameChange: function(currencyName) {
			currencyConversion.setTargetCurrency(currencyName);
		}
	};

	const onConvertButtonClick = () => {
		_convert();
	};

	const _convert = () => {
		currencyConversion.convert(sourceCurrencyValue).then(result => {
			setTargetCurrencyValue(result.convertedValue);
			setExchangeRate(result.exchangeRate)
		});
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
				currencyValueInputChangeCallBack={null}/>
			<div style={{marginTop: 10}}/>
			<div className='ButtonAndCourseContainer'>
				<p style={{marginLeft: 15}}>
					Rate: {exchangeRate}
				</p>
				<Button
					variant='contained'
					color='primary'
					style={{marginRight: 15}}
					onClick={onConvertButtonClick}>
					Convert
				</Button>
			</div>
		</div>
	);
};
