import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const appTitle = 'The Simple Currency Conversion';

export default function HeaderBar() {

	return (
		<Navbar expand='lg' variant='dark' bg='dark'>
		  <Navbar.Brand href='#home'>
		  	<img
				src={logo}
				width='30'
				height='30'
				className="d-inline-block align-top"
        		alt={appTitle} />
				{appTitle}
		  </Navbar.Brand>
		  <Nav className='mr-auto'>
			  <Nav.Link href='#home'>Home</Nav.Link>
			  <Nav.Link href='#about'>About</Nav.Link>
		  </Nav>
		</Navbar>
	);
};
