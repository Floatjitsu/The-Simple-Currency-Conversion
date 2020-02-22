import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import currencies from '../data/currencies';

export default function CurrencyInput(props) {
	const defaultCurrencyName = currencies.find(element => element.code === props.defaultValue);
	const [currencyName, setCurrencyName] = useState();

	const onCurrencyNameInputChange = (event, value) => {
		// setCurrencyName(value);
		props.inputChangeCallBack(value);
	};

	return (
		<Container>
			<Row>
				<Col xs={3}>
				 	<TextField
						type='number'
						variant='outlined'
						defaultValue={'1.00'}
						inputProps={{readOnly: props.readOnly}}
            			fullWidth />
				</Col>
				<Col xs={9}>
				 	<Autocomplete
						defaultValue={defaultCurrencyName}
						options={currencies}
						getOptionLabel={option => option.code}
						onInputChange={onCurrencyNameInputChange}
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
