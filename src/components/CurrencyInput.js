import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import currencies from '../data/currencies';

export default function CurrencyInput(props) {
	const defaultCurrencyName = currencies.find(element => element.code === props.defaultValue);

	const onCurrencyNameInputChange = (event, value) => {
		props.currencyNameInputChangeCallBack(value.code);
	};

	const onCurrencyValueInputChange = event => {
		props.currencyValueInputChangeCallBack(event.target.value);
	};

	return (
		<Container>
			<Row>
				<Col xs={3}>
				 	<TextField
						value={props.numberValue}
						type='number'
						variant='outlined'						
						inputProps={{readOnly: props.readOnly}}
						onChange={onCurrencyValueInputChange}
            			fullWidth />
				</Col>
				<Col xs={9}>
				 	<Autocomplete
						defaultValue={defaultCurrencyName}
						options={currencies}
						getOptionLabel={option => option.code}
						onChange={onCurrencyNameInputChange}
						renderOption={option => (
							<React.Fragment>
								<b>{option.code}</b>
								<span>&nbsp;&nbsp;</span>
								{option.name}
							</React.Fragment>
						)}
						renderInput={params => (
						  <TextField
							{...params}
							label="Currency"
							variant="outlined"
							fullWidth
							inputProps={{ ...params.inputProps }}
						  />
						)}
					  />
				</Col>
			</Row>
		</Container>
	);
}
