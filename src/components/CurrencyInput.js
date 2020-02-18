import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete'
import currencies from '../data/currencies';

export default function CurrencyInput(props) {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<Col sm={2}>
				 	<TextField
						type='number'
						variant='outlined'
						defaultValue={'1.00'}
						inputProps={{readOnly: props.readOnly}}
            			fullWidth />
				</Col>
				<Col sm={5}>
				 	<Autocomplete
						options={currencies}
						getOptionLabel={option => option.code}
						renderOption={option => option.code}
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
