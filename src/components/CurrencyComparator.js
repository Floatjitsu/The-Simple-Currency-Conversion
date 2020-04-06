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

	const [baseCurrencyValue, setBaseCurrencyValue] = useState(1.00);
	const [firstCurrencyValue, setFirstCurrencyValue] = useState(1.00);
	const [secondCurrencyValue, setSecondCurrencyValue] = useState(1.00);
	const [thirdCurrencyValue, setThirdCurrencyValue] = useState(1.00);

	useEffect(() => {
		 currencyComparison.initialize(initialNameValues.base, initialNameValues);
		 _convert();
	}, []);

	const sourceCurrency = {
		nameChange: function(currencyName) {
			currencyComparison.setBaseCurrencyName(currencyName);
		},

		valueChange: function(currencyValue) {
			setBaseCurrencyValue(currencyValue);
		}
	}

	const onCompareButtonClick = () => {
		_convert();
	};

	const _convert = () => {
		currencyComparison.convert().then(result => {
			setFirstCurrencyValue(_formatCurrencyResultValue(result.first.conversionRate * baseCurrencyValue));
			setSecondCurrencyValue(_formatCurrencyResultValue(result.second.conversionRate * baseCurrencyValue));
			setThirdCurrencyValue(_formatCurrencyResultValue(result.third.conversionRate * baseCurrencyValue));
		});
	};

	const _formatCurrencyResultValue = value => {
		return value.toFixed(2);
	};

	return (
		<div style={{display:'inline-flex', flexDirection:'column'}}>
			<div className='CurrencyComparisonInfoTitle'>
				Here you can compare up to 3 currencies against one base currency
			</div>
			<div className='CurrencyComparison'>
				<CurrencyInput
					readOnly={false}
					currencyValue={baseCurrencyValue}
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
