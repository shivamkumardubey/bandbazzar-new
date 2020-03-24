import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import style from './crewnav.css';
import { Link } from "react-router-dom";
class Crewnav extends React.Component {
    render(){
    return(
        <div>
   <div className="ml-auto">
<div class="wrapper">
  
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="profile sidebar__profile"><img class="profile__avatar" src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg"/>
        <div class="profile__name">Kimi Raikkonen</div>
      </div>
      
    </div>
    <div class="sidebar__body">
      <div class="menu sidebar__menu">
        <a class="menu__item" href="/Crewdashmain">
          <div class="menu__icon"><i data-feather="home"></i></div>
          <div class="menu__title">Profile Details</div></a>
          <a class="menu__item" href="/Crewpicmain">
          <div class="menu__icon"><i data-feather="image"></i></div>
          <div class="menu__title">Profile picture</div></a>
          <a class="menu__item" href="/Crewmediamain">
          <div class="menu__icon"><i data-feather="file-text"></i></div>
          <div class="menu__title">Video/showreel</div></a>
          <a class="menu__item" href="#">
          <div class="menu__icon"><i data-feather="users"></i></div>
          <div class="menu__title">Reset password</div></a>
          </div>
    </div>
	<div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>	
  </div>
</div>

</div>
       </div> 
    );
 }
}
export default Crewnav