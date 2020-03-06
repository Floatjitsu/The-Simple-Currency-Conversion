import React from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';

function CurrencyComparison() {
	return (
		<div style={{display:'inline-flex', flexDirection:'column'}}>
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
						readOnly={true}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={true}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
					<CurrencyInput
						readOnly={true}
						currencyValue={1}
						defaultValue={'EUR'}
						currencyNameInputChangeCallBack={null}
						currencyValueInputChangeCallBack={null}/>
					<div style={{marginTop:10}}/>
				</div>
			</div>
			<div style={{alignSelf:'flex-end'}}>
				<Button
					variant='contained'
					color='primary'
					style={{marginRight: 15}}>
					Compare
				</Button>
			</div>
		</div>
	);
}

export default CurrencyComparison;
