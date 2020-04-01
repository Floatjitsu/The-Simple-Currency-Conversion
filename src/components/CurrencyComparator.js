import React, {useState, useEffect} from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';
import currencyComparison from '../modules/currencyComparison';

const initialNameValues = {
	base: 'EUR',
	first: 'USD',
	second: 'CAD',
	third: 'DKK'
};

function CurrencyComparator() {

	const [sourceCurrencyValue, setSourceCurrencyValue] = useState(1.00);
	const [firstCurrencyValue, setFirstCurrencyValue] = useState(1.00);
	const [secondCurrencyValue, setSecondCurrencyValue] = useState(1.00);
	const [thirdCurrencyValue, setThirdCurrencyValue] = useState(1.00);

	useEffect(() => {
		 currencyComparison.initialize(initialNameValues.base, initialNameValues);
		 _convert();
	}, []);

	const sourceCurrency = {
		nameChange: function(currencyName) {
			console.log(currencyName);
			currencyComparison.setBaseCurrencyName(currencyName);
		},

		valueChange: function(currencyValue) {
			setSourceCurrencyValue(currencyValue);
		}
	}

	const onCompareButtonClick = () => {
		_convert();
	};

	const _convert = () => {
		currencyComparison.convert().then(result => {
			setFirstCurrencyValue((result.first.conversionRate * sourceCurrencyValue).toFixed(2));
			setSecondCurrencyValue((result.second.conversionRate * sourceCurrencyValue).toFixed(2));
			setThirdCurrencyValue((result.third.conversionRate * sourceCurrencyValue).toFixed(2));
		}).catch(err => console.log(err));
	};

	return (
		<div style={{display:'inline-flex', flexDirection:'column'}}>
			<div className='CurrencyComparisonInfoTitle'>
				Here you can compare up to 3 currencies against one base currency
			</div>
			<div className='CurrencyComparison'>
				<CurrencyInput
					readOnly={false}
					currencyValue={sourceCurrencyValue}
					defaultValue={initialNameValues.base}
					currencyNameInputChangeCallBack={sourceCurrency.nameChange}
					currencyValueInputChangeCallBack={sourceCurrency.valueChange}/>
				<div className='ComparedCurrencies'>
					<CurrencyInput
						readOnly={true}
						currencyValue={firstCurrencyValue}
						defaultValue={initialNameValues.first}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={true}
						currencyValue={secondCurrencyValue}
						defaultValue={initialNameValues.second}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={true}
						currencyValue={thirdCurrencyValue}
						defaultValue={initialNameValues.third}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
				</div>
			</div>
			<div style={{alignSelf:'flex-end'}}>
				<Button
					variant='contained'
					color='primary'
					style={{marginRight: 15}}
					onClick={onCompareButtonClick}>
					Compare
				</Button>
			</div>
		</div>
	);
}

export default CurrencyComparator;
