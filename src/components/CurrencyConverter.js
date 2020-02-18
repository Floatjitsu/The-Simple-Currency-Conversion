import React from 'react';
import CurrencyInput from './CurrencyInput';
import Button from '@material-ui/core/Button';

export default function CurrencyConverter() {
	return (
		<div className='CurrencyConverter'>
			<CurrencyInput readOnly={false}/>
			<div style={{marginTop: 10}}/>
			<CurrencyInput readOnly={true}/>
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
