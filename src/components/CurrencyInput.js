import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete'

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
							options={['EUR', 'USD']}
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
