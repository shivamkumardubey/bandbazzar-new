import React from 'react';
import style from './crewpic.css';

function Crewpic(){
    return(
        <div>
             <div class="container" id="container">
        <div class="form-container sign-up-container">
        <h1>Profile Picture</h1>
       <form>
  <div class="custom-file col">
    <input type="file" class="custom-file-input input" id="customFile"></input>
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
  <h1>Cover Picture</h1>
  <div class="custom-file col">
    <input type="file" class="custom-file-input input" id="customFile"></input>
    <label class="custom-file-label" for="customFile">Choose file</label>
  </div>
  <div className="row">
                    <div className="col">
                    <button className="button right" type="submit" >Upload</button>
            </div>
            </div>
</form>
        </div>
        </div>
        </div>


        



        );
    }
    export default Crewpic;