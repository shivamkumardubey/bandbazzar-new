import React from 'react';
import style from './artistprof.css';

function artistprof(){
    return(
        <div>
            <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form >
                <h1>Personal Details</h1>
               
                
                <div className="row">
                    <div className="col">
            <input className="input" type="text" placeholder=" First Name"  name="firstname"   required />
            </div>
            <div className="col">
            <input className="input" type="text" placeholder="Last Name"  name="lastname"   required />
            </div>
            </div>
            <div className="row">
                    <div className="col">
                    <input className="input" type="text" placeholder=" Stage Name"      />
            </div>
            <div className="col">
            <input className="input" type="email" placeholder="Email"    required />
            </div>
            </div>


            <div className="row">
                    <div className="col">
                    <input className="input" type="number" placeholder=" Mobile NO."  required     />
            </div>
            <div className="col">
            <span><h5>Gender</h5></span>
            <label class="radio-inline">
      <input type="radio" name="optradio" checked></input>Male
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio" checked></input>Female
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio" checked></input>Other
    </label>
    

            </div>
            </div>
            <div className="row">
            <div className="col">
            <input className="input" type="text" placeholder=" Address"     required />
            </div>
            </div>
              
            <div className="row">
               
            <div className="col">
            <input className="input" type="text" placeholder="City" 
               required />
            </div>

            <div className="col">
            <input className="input" type="text" placeholder="State" required />
            </div>
            <div className="col">
            <input className="input" type="text" placeholder="Country" required />
            </div>
            </div>
            

            
            
            </form>
        </div>
            </div>      
        <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form >
            <h1>Profesional Details</h1>

            <div className="row">
                    <div className="col">
                      <label>What do u want to register as?</label>
            <input className="input" type="text" placeholder=" ex. Guitarist"    required />
            </div>
            <div className="col">
            <label>Other skill sets?</label>
            <input className="input" type="text" placeholder="skills"     required />
            </div>
            </div>
           
            <div className="row">
                    <div className="col">
                      <label>Standard duration of performance?</label>
            <input className="input" type="text" placeholder=" ex. 45 minutes"    required />
            </div>
            <div className="col">
            <label>Experience as a live performer?</label>
            <input className="input" type="text" placeholder="ex. 2years"     required />
            </div>
            </div>
           
            <div className="row">
                    <div className="col">
                      <label>tag line</label>
            <input className="input" type="text" placeholder=" tagline"    required />
            </div>
            <div className="col">
            <label>Experience as a live performer?</label>
            <input className="input" type="text" placeholder="ex. 2years"     required />
            </div>
            </div>

            <div className="row">
                    <div className="col">
                      <label> Description about your journey</label>
                      <textarea class="form-control" rows="5"></textarea>
            </div>
           
            </div>
            
            <div className="row">
                    <div className="col">
                    <button className="button right" type="submit" >Update</button>
            </div>
           
            </div>
            
          </form>
        </div>
        </div>
        </div>


        



        );
    }
    export default artistprof;