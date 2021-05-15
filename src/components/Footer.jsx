import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = ()=>{
    const date = new Date().getFullYear();
    return (
        <>
         <footer>
             <div className="container">
                 <ul className="footerMenu">
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About Us</a></li>
                     <li><a href="#">App Features</a></li>
                     <li><a href="#">Contact Us</a></li>
                 </ul>
                 <ul className="Social-icon">
                     <li><a href="#"><FacebookIcon/></a></li>
                     <li><a href="#"><TwitterIcon/></a></li>
                     <li><a href="#"><InstagramIcon/></a></li>
                 </ul>
                 <div className="copyright">
                     <p>©Revi!{date}</p>
                 </div>

             </div>
         </footer>
        </>
    )
         
}
export default Footer;