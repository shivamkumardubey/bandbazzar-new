import React from 'react';
import style from './bandprof.css';

function Bandmedia(){
    return(
        <div>
            <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form >
                <h1>Upload Videos</h1>
               
                
                <div className="row">
                    <div className="col">
            <input className="input" type="text" placeholder=" Video link"     required />
            </div>
            
            </div>
          
            
            <div className="row">
                    <div className="col">
                    <button className="button right" type="submit" >Save</button>
            </div>
           
            </div>
            
          </form>
        </div>
        </div>
        </div>


        



        );
    }
    export default Bandmedia;