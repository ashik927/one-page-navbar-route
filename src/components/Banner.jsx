import React from 'react';
import BannerImg from '../images/banner.png';
import GooglePlay from '../images/google-play.png';
import Apple from '../images/apple.png';
const Banner =()=>{
    return (
        <>
         <div className="banner-area" id="home">
            <div className="container d-flex">
                <div className="row">
                    <div className="col-md-6 col-12 col-sm-6">
                        <div className="banner-content-left">
                            <h1>Build Your <br/>Business Together</h1>
                            <p>Lorem Ipsum issimply dummy text of the printing  type setting industry.Lorem Ipsum has beenthe</p>
                            <div className="btn-group">
                                <a href="#"><img src={GooglePlay} alt="googleplay.png"/></a>
                                <a href="#"><img src={GooglePlay} alt="Apple.png"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 col-sm-6">
                        <div className="banner-content-right">
                            <img src={BannerImg} alt="BannerImg"/>
                        </div>
                    </div>
                </div>
            
             
            </div> 
             
         </div>
        </>
    )
       
    
}

export default Banner;