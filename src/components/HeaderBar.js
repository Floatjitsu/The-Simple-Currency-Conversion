import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HeaderBar() {

	return (
		<Navbar expand='lg' variant='dark' bg='dark'>
		  <Navbar.Brand href='#home'>The Simple Currency Conversion</Navbar.Brand>
		  <Nav className='mr-auto'>
			  <Nav.Link href='#home'>Home</Nav.Link>
		  </Nav>
		</Navbar>
	);
};
