import React from 'react';
import CurrencyInput from './CurrencyInput';

function CurrencyComparison() {
	return (
		<div>
			<div className='CurrencyComparisonInfoTitle'>
				Here you can compare up to 3 currencies against one base currency
			</div>
			<div className='CurrencyComparison'>
				<CurrencyInput
					readOnly={false}
					currencyValue={1}
					defaultValue={'EUR'}
					currencyNameInputChangeCallBack={null}
					currencyValueInputChangeCallBack={null}/>
				<div className='ComparedCurrencies'>
					<CurrencyInput
						readOnly={false}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={false}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={false}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
				</div>
			</div>
		</div>
	);
}

export default CurrencyComparison;
