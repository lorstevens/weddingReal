import React from 'react';
import './style.css'
import '../../styles/theme.css'

export const Accomodations = () => {
    return (
        <div id="gifts" className="accomodation-container">
            <div className='container' id='gift-container'>

                <div className='header-box'>
                    <h3 className='headings' id="whiteHeading" >Accomodations</h3>
                </div>


                <div>
                    <p className="hotelCenter"><b>HAMPTON INN AND SUITES AUSTIN</b></p>

                    <p className="hotelCenter">1701 Lavaca St</p>

                    <p className="hotelCenter">Austin, TX 78701</p>

                    <p className="hotelCenter">512-499-8881</p>
                    <br></br>


                    <div className='thanks-box'>

                        <p className="hotelCenter">Rooms have been reserved for our guests at a discounted rate. </p>
                        <p className="hotelCenter"> Please reference the <b>Henry / Stevens </b>wedding when making your reservations. </p>
                            <p>Kindly reserve your room by <b>June 20, 2019.</b> by calling the Hampton directly or booking online       
                            <a target="blank" href="https://hamptoninn.hilton.com/en/hp/groups/personalized/A/AUSUAHX-AHL-20190711/index.jhtml?WT.mc_id=POG"><b><i> HERE</i></b></a>
                        </p>
                        <br></br>


                    </div>


                </div>


            </div>
        </div>
    )
}