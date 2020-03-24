import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavHome from './components/NavHome';
import Home from './components/homepage/Home';
import PP1 from './components/profilepage/PP1/PP1';
import FP1 from './components/filterpage/FP1/FP1';
import Login from './components/Login/login';
import Fan from './components/Login/fan';
import Main from './components/Event/main';
import forgetpassword from './components/Login/forgetpassword';
import resetpassword from './components/Login/resetpassword';
import Gmain from './components/Gig/gmain';
import Epmain from './components/Eventprofile/epmain';
import Studiofiltermain from './components/studiofilter/studiofiltermain';
import Artistmain from './components/Artist/artistmain';
import Option from './components/Login/option';
import Artistnav from './components/Artistdashboard/Artistnav';
import Bandnav from './components/Banddashboard/Bandnav'; 
import Crewnav from './components/Crewdashboard/Crewnav';
import Studionav from './components/Studiodashboard/Studionav';
import Artistdashmain from './components/Artistdashboard/Artistdashmain';
import Banddashmain from './components/Banddashboard/Banddashmain';
import Crewdashmain from './components/Crewdashboard/Crewdashmain';
import Studiodashmain from './components/Studiodashboard/Studiodashmain';
import Artistpicmain from './components/Artistdashboard/Artistpicmain';
import Bandpicmain from './components/Banddashboard/Bandpicmain';
import Crewpicmain from './components/Crewdashboard/Crewpicmain';
import Studiopicmain from './components/Studiodashboard/Studiopicmain';
import Artistpic from './components/Artistdashboard/Artistpic';
import Bandpic from './components/Banddashboard/Bandpic';
import Crewpic from './components/Crewdashboard/Crewpic';
import Studiopic from './components/Studiodashboard/Studiopic';
import Artistmediamain from './components/Artistdashboard/Artistmediamain';
import Bandmediamain from './components/Banddashboard/Bandmediamain';
import Crewmediamain from './components/Crewdashboard/Crewmediamain';
import Studiomediamain from './components/Studiodashboard/Studiomediamain';
import Artistmedia from './components/Artistdashboard/Artistmedia';
import Bandmedia from './components/Banddashboard/Bandmedia';
import Crewmedia from './components/Crewdashboard/Crewmedia';
import Studiomedia from './components/Studiodashboard/Studiomedia';
class App extends Component {
  componentDidMount() {
    // Jquery here $(...)...
  }
  render() {
    return (
     
      <Router>
        <div className="App">
          <NavHome/>  
          <Route exact path="/" render={props => (
            <React.Fragment>
              
              <Home />
            </React.Fragment> 
          )} />
          <Route path="/pp1" component={PP1} />
          <Route path="/Bandpicmain" component={Bandpicmain} />
          <Route path="/Artistpicmain" component={Artistpicmain} />
          <Route path="/Crewpicmain" component={Crewpicmain} />
          <Route path="/Studiopicmain" component={Studiopicmain} />
          <Route path="/Artistmediamain" component={Artistmediamain} />
          <Route path="/Bandmediamain" component={Bandmediamain} />
          <Route path="/Crewmediamain" component={Crewmediamain} />
          <Route path="/Studiomediamain" component={Studiomediamain} />
          <Route path="/Artistmedia" component={Artistmedia} />
          <Route path="/Bandmedia" component={Bandmedia} />
          <Route path="/Crewmedia" component={Crewmedia} />
          <Route path="/Studiomedia" component={Studiomedia} />
          <Route path="/Artistpic" component={Artistpic} />
          <Route path="/Bandpic" component={Bandpic} />
          <Route path="/Crewpic" component={Crewpic} />
          <Route path="/Studiopic" component={Crewpic} />
          <Route path="/Artistnav" component={Artistnav} />
          <Route path="/Bandnav" component={Bandnav} />
          <Route path="/Crewnav" component={Crewnav} />
          <Route path="/Studionav" component={Studionav} />
          <Route path="/Artistdashmain" component={Artistdashmain} />
          <Route path="/Banddashmain" component={Banddashmain} />
          <Route path="/Crewdashmain" component={Crewdashmain} />
          <Route path="/Studiodashmain" component={Studiodashmain} />
          <Route path="/option" component={Option} />
          <Route path="/artistmain" component={Artistmain}/>
          <Route path="/Home" component={Home} />
          <Route path="/fp1" component={FP1} />
          <Route path='/login' component={Login} />
          <Route path='/Fan' component={Fan} />
          <Route path='/forgetpassword' component={forgetpassword} />  
          <Route path='/Main' component={Main} />  
          <Route path='/gmain' component={Gmain}/>
          <Route path='/epmain' component={Epmain}/>
          <Route path='/studiofiltermain' component={Studiofiltermain}/>
          <Route path='/resetpassword' component={resetpassword} />  
      </div>
      </Router>
    );
  }
}

export default App;
