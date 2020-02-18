import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete'
import currencies from '../data/currencies';

export default function CurrencyInput(props) {

	const [currencyName, setCurrencyName] = useState(currencies.find(element => element.code === props.defaultValue));

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
						defaultValue={currencyName}
						options={currencies}
						getOptionLabel={option => option.code}
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
