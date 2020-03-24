import React from 'react';
import Footer from '../homepage/Footer';
import Artistnav from './Artistnav';
import Artistmedia from './Artistmedia';

const filterStyle = {
    margin: '0',
    padding: '2%',
    paddingTop: '1%',
    backgroundColor: '#fafafa'
}

const searchStyle = {
    float: 'right',
    margin: '0',
    padding: '2%'
}

function Artistmediamain() {
    return(
        
        <div className="FilterPage1">
           
           
            <div className="row" style={{margin: '0',padding: '0'}}>
            <div className="col-md-3" style={filterStyle}>
                <Artistnav />
            </div>
            <div className="col-md-9" style={searchStyle}>
                <Artistmedia />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Artistmediamain;