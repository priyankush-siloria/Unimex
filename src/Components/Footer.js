import React from 'react';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


const Footer = () => {

    return (
        <div className='footer'>
            <Container>
            <div className=' d-flex justify-content-between align-items-center'>
                <p className='footer-text m-0'>Unimex 2022</p>
                <div className='social-icon'>
                    <ul className='s-icon m-0'>
                        <li><FaTwitter/></li>
                        <li><FaFacebookF/></li>
                        <li><FaFacebookF/></li>
                        <li><FaFacebookF/></li>
                    </ul>
                </div> 
            </div>
            </Container>
        </div>
    )
}

export default Footer;