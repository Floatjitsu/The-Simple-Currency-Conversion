import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const appTitle = 'The Simple Currency Conversion';

export default function HeaderBar() {

	return (
		<Navbar expand='lg' variant='dark' bg='dark'>
		  <Navbar.Brand href='/'>
		  	<img
				src={logo}
				width='30'
				height='30'
				style={{marginRight: 10}}
				className="d-inline-block align-top"
        		alt={appTitle} />
				{appTitle}
		  </Navbar.Brand>
		  <Nav className='mr-auto'>
			<Link to='/about'>
				<Nav.Link href='#about'>About</Nav.Link>
			</Link>
		  </Nav>
		</Navbar>
	);
};
