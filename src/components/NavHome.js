import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import style from '../components/homepage/drop.css';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-weight:600;
    font-size:14px;
    &:hover {
        text-decoration:none;  
        color: #696969;
    }
  }
`
 
export default function NavHome() {
    // this.state={
    //     loginstatus:false
    // }
    
    const [state, setState] = useState({loginstatus:localStorage.getItem("usertoken"),name:localStorage.getItem("name")});
  
    // setState({ loginstatus:localStorage.getItem("usertoken") });
    function clickfunction(){
        localStorage.removeItem("usertoken");
        localStorage.removeItem("email");
        localStorage.removeItem("name")
        localStorage.removeItem("recoveryemail")
        window.location.href = "/";
    }
    return (
        
        
        <div>
                    
        <div className="container navh ">
                                       
          
        
                            </div>
        
        
        
        <div className="container ">
        
                        
                    <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand href="#home">  
                        <img src={require('../assets/icons/png.png')} alt="logo"
                        style={{height: '120px', width: '140px'}} />
                    </Navbar.Brand>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav auto-mr" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
           
        
          <div class="navbar-nav nav">
          <a href="Home" class="nav-item  nav-link" active-color="orange">Home</a>
          <a href="Fp1" class="nav-item nav-link" active-color="green">Band</a>
          <a href="artistmain" class="nav-item nav-link" active-color="blue">Artist</a>
          <a href="gmain" class="nav-item nav-link" active-color="red">Gigs</a>
          <a href="studiofiltermain" class="nav-item nav-link" active-color="rebeccapurple">Studio</a>
          <a href="option" class="nav-item nav-link" active-color="red">Shop</a>
          <a href="main" class="nav-item nav-link" active-color="red">Post Event</a>
          <a href="login" class="nav-item nav-link offset-md-1  " active-color="red"> Login/Signp</a>
          <span class="nav-indicator"></span>
        </div>
        
                              
            
          </Navbar.Collapse>
        </Navbar>
        
        </div>    
        <hr/>
        </div>
                        
    );
}
