import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Button} from 'react-bootstrap'
function NavHeader() {
	const headerStyle ={ 
		margin : '20px',
		padding : '20px'
	}
	const pricingBtn = {
		display: 'inline-block',
		width: 'auto',
		height: '35px',
		background: '#f94100 repeat-x',
		textDecoration: 'none',
		textAlign: 'center',
		color: '#fff',
		fontFamily: 'Helvetica',
		fontSize: '15px',
		padding: '6px 17px 6px 16px',
		borderRadius: '1px 1px 1px 1px',
		boxShadow: '0 0 2px 1px #2e2e2e',
		lineHeight:'1.5',
		margin:'10px'

	}
	const pricingBtn2 = {
		display: 'inline-block',
		width: 'auto',
		height: '35px',
		background: '#4f4f4f repeat-x',
		textDecoration: 'none',
		textAlign: 'center',
		color: '#fff',
		fontFamily: 'Helvetica',
		fontSize: '15px',
		padding: '6px 17px 6px 16px',
		borderRadius: '1px 1px 1px 1px',
		boxShadow: '0 0 2px 1px #2e2e2e',
		lineHeight:'1.5',
		margin:'10px'

	}
		return (
			<div>
			
				<div style={headerStyle}>
					
				</div><br/>
				<Navbar fill bg="dark" variant="dark" expand="lg">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav fill >
							<Nav.Link className="d-inline p-2 bg-dark text-white"
								to="/">Home</Nav.Link>

							<Nav.Link className="d-inline p-2 bg-dark text-white"
								to="/takeatour">Products</Nav.Link>

							<Nav.Link className="d-inline p-2 bg-dark text-white"
								to="/pricing">Careeer</Nav.Link>

							<Nav.Link className="d-inline p-2 bg-dark text-white"
								to="/faq">Clients</Nav.Link>

							<Nav.Link className="d-inline p-2 bg-dark text-white"
								to="/contactus">Contact</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)
	}
export default NavHeader