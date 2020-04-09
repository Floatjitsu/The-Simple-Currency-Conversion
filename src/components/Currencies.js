import React, {useState} from 'react';
import currencies from '../data/currencies';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

let currencyNumber = 1;

function CurrencyItem(props) {
	return (
		<tr>
			<td> {currencyNumber++} </td>
			<td> <img src={props.value.flag_path} width='50' height='35' alt={props.value.country}/></td>
			<td> {props.value.name} </td>
			<td> {props.value.symbol_native} </td>
		</tr>
	);
}

export default function Currencies() {
	return (
		<div className='Currencies'>
			<div className='CurrenciesTitleText'>
				These are our available currencies
			</div>
			<div className='CurrenciesList'>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th> Nr. </th>
							<th> Country </th>
							<th> Name </th>
							<th> Symbol </th>
						</tr>
					</thead>
					<tbody>
						{currencies.map(element => <CurrencyItem value={element}/>)}
					</tbody>
				</Table>
			</div>
		</div>
	);
}
