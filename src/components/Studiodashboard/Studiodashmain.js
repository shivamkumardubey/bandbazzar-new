import React from 'react';
import Footer from '../homepage/Footer';
import Studionav from './Studionav';
import Studioprofiledash from './Studioprofiledash';

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

function Studiodashmain() {
    return(
        
        <div className="FilterPage1">
           
           
            <div className="row" style={{margin: '0',padding: '0'}}>
            <div className="col-md-3" style={filterStyle}>
                <Studionav />
            </div>
            <div className="col-md-9" style={searchStyle}>
                <Studioprofiledash />
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Studiodashmain;