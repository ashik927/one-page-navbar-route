import React,{Component} from 'react';
import Logo from '../images/logo.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';

class Header extends Component{
    state = {clicked:false}
     eventHandle =()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return ( 
        <>
         
            <header className="header-area">
              <div className="container">
                  <div className="row">
                      <div className="col-md-4 col-sm-4 col-12">
                          <div className="header-left d-flex">
                          <a href="index.html"><img src={Logo} alt="logo.png"/></a>
                          <button className="collapseBTN" onClick={this.eventHandle}>{this.state.clicked ? <CloseIcon/>:<DehazeIcon/>}</button>
                      </div>
                      </div>
                      <div className="col-md-8 col-sm-8 col-12">
                          <div className="main-menu float-md-right float-lg-right float-sm-none">
                              <ul className={this.state.clicked ? 'nav-menu-active' : 'nav-menu'}>
                                  <li><a href="#home">Home</a></li>
                                  <li><a href="#about">About Us</a></li>
                                  <li><a href="#appFeature">App Features</a></li>
                                  <li><a href="#contactUs" className="contactus">Contact Us</a></li>
                              </ul>
                              
                      </div>
                      </div>
                  </div>
              </div>
            </header>
          </>
      )

    }
    
}

export default Header;
