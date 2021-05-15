import React from 'react';
import JobIcon from '@material-ui/icons/WorkOutline';
import TicketIcon from '@material-ui/icons/ConfirmationNumber';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
const Service = ()=>{
    return (
        <>
         <div className="Service-area" id="appFeature">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12 col-sm-12">
                  <div className="single-service-box">
                    <div className="service-icon">
                      <JobIcon style={{ color:'#fff'}}/>
                    </div>
                    <div className="service-content">
                        <h4>View Events</h4>
                        <p>Lorem Ipsum issimplydummytextofthe printing and type settingindustry.Lorem Ipsum hasbeen.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                  <div className="single-service-box">
                    <div className="service-icon">
                      <TicketIcon style={{ color:'#fff'}}/>
                    </div>
                    <div className="service-content">
                        <h4>Buy Tickets</h4>
                        <p>Lorem Ipsum issimplydummytextofthe printing and type settingindustry.Lorem Ipsum hasbeen.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                  <div className="single-service-box">
                    <div className="service-icon">
                      <StorefrontIcon style={{ color:'#fff'}}/>
                    </div>
                    <div className="service-content">
                        <h4>Store Tickets on Your Phone</h4>
                        <p>Lorem Ipsum issimplydummytextofthe printing and type settingindustry.Lorem Ipsum hasbeen.</p>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                <div className="single-service-box">
                  <div className="service-icon">
                    <PeopleOutlineIcon style={{ color:'#fff'}}/>
                  </div>
                  <div className="service-content">
                      <h4>Send Tickets to Friends</h4>
                      <p>Lorem Ipsum issimplydummytextofthe printing and type settingindustry.Lorem Ipsum hasbeen.</p>
                  </div>
              </div>
                </div>
              </div>
            </div> 
             
         </div>
        </>
    )
         
}
export default Service;