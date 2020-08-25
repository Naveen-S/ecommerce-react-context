import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm">
                <Link to="/" className="text-white">
                    <img src={logo} alt="logo" className="navbar-brand logo" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto nav-link">
                    <ButtonContainer>
                        <FontAwesomeIcon className="text-white" icon={faCartPlus} />
                        <span className="p-2">
                            my cart
                        </span>
                    </ButtonContainer>
                </Link>
                   
            </nav>
        )
    }
}

// styled components
const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.2rem;
background: transparent; 
border: 1px solid rgba(255, 255, 255, 0.5);
border-radius: 5px;
padding: 5px;
margin: 5px;
color:  rgba(255,255,255,.5);
cursor: pointer;
`
