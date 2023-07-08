/**
 *
 * Footer
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
    const infoLinks = [
        { id: 0, name: 'Contact Us', to: '/contact' },
        { id: 1, name: 'Sell With Us', to: '/sell' },
        { id: 2, name: 'Shipping', to: '/shipping' },
    ];

    const footerBusinessLinks = (
        <ul className='support-links'>
            <li className='footer-link'>
                <Link to='/dashboard'>Account Details</Link>
            </li>
            <li className='footer-link'>
                <Link to='/dashboard/orders'>Orders</Link>
            </li>
        </ul>
    );

    const footerLinks = infoLinks.map((item) => (
        <li key={item.id} className='footer-link'>
            <Link key={item.id} to={item.to}>
                {item.name}
            </Link>
        </li>
    ));

    return (
        <footer className='footer'>
            <Container>
                <div className='footer-content'>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Customer Service</h3>
                        </div>
                        <div className='block-content'>
                            <ul>{footerLinks}</ul>
                        </div>
                    </div>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Links</h3>
                        </div>
                        <div className='block-content'>
                            <ul>{footerLinks}</ul>
                        </div>
                    </div>
                    <div className='footer-block'>
                        <div className='block-title'>
                            <h3 className='text-uppercase'>Newsletter</h3>
                            <Newsletter />
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <span>© {new Date().getFullYear()} MERN Store</span>
                </div>
                <ul className='footer-social-item'>
                    <li>
                        <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
                            <span className='facebook-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
                            <span className='instagram-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
                            <span className='pinterest-icon' />
                        </a>
                    </li>
                    <li>
                        <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
                            <span className='twitter-icon' />
                        </a>
                    </li>
                </ul>
            </Container>
            <div className='header-info'>
                <Container>
                    <Row>
                        <Col md='4' className='text-center d-none d-md-block'>
                            <i className='fa fa-truck' />
                            <span>Free Shipping</span>
                        </Col>
                        <Col md='4' className='text-center d-none d-md-block'>
                            <i className='fa fa-credit-card' />
                            <span>Payment Methods</span>
                        </Col>
                        <Col md='4' className='text-center d-none d-md-block'>
                            <i className='fa fa-phone' />
                            <span>Call us 951-999-9999</span>
                        </Col>
                        <Col xs='12' className='text-center d-block d-md-none'>
                            <i className='fa fa-phone' />
                            <span> Need advice? Call us 951-999-9999</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
