import React from 'react';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';
const Contact = ()=>{
    const customStyle = {
    background:'#F1E4DB',
    padding:'100px 0px',
    borderRadius:'10px',
}
    
    return (
        <>
         <div className="Contact-area" id="contactUs">
            <div className="container" style={customStyle}>
               <div className="row">
                   <div className="col-md-6 col-sm-12 col-12">
                    <div className="contact-left">
                    <h2>Contact Us</h2>
                    <div className="single-widget">
                        <div className="widget-icon">
                            <EditLocationIcon />
                        </div>
                        <div className="widget-text">
                            <h6>Address</h6>
                            <p>311 GileadRd. Huntersville,NC28078</p>
                        </div>
                    </div>
                    <div className="single-widget">
                        <div className="widget-icon">
                            <MailOutlineIcon />
                        </div>
                        <div className="widget-text">
                            <h6>Email</h6>
                            <p>info@Revylbusiness.com</p>
                        </div>
                    </div>
                    <div className="single-widget">
                        <div className="widget-icon">
                            <CallIcon />
                        </div>
                        <div className="widget-text">
                            <h6>Phone</h6>
                            <p>(704)000-0000</p>
                        </div>
                    </div>
                </div>
                   </div>
                   <div className="col-md-6 col-sm-12 col-12">
                    <div className="contact-right">
                        <form action="">
                            <input type="text" placeholder="First Name" name=""/>
                            <input type="text" placeholder="Last Name" name=""/>
                            <input type="email" placeholder="Email" name=""/>
                            <textarea name="" id="" cols="" rows="" placeholder="Message"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        </div>
                   </div>
               </div>
               
            </div> 

         </div>
        </>
    )
         
}
export default Contact;