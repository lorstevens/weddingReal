import React from 'react';
import './style.css'

export const Info= () => {
    return (

        <div id="info" className="block-container" style={{ backgroundImage: "url(/assets/wildflowers.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: 'center' }}>

            <div className="registry">

                <div><h3 className='headings'>Important Info</h3></div>
                <div><h4>Parking</h4>
                    <p>Wedding guests can park at The Quarters parking garage, located at 2222 Rio Grande Street, about 1 1⁄2 blocks away. There is also ample street parking around the venue.</p>
                    <a target="blank" href="https://goo.gl/maps/9Tbxuq7mRk72">Parking Garage Directions</a>
                </div>

                <div><h4>Accomodations</h4>
                <p>There are many hotels near the venue. We recommend the following hotels: </p>
                
                <p className="hotel"><i>Hampton Inn & Suites | 1701 Lavaca St</i></p>
                <p className="hotel"><i>Double Tree by Hilton | 1617 N Interstate Hwy 35</i></p>
                <p className="hotel"><i>AT&T Conference Center | 1900 University Ave</i></p>

            </div>

            <div><h4>Attire</h4>
            <p>Cocktail attire please!</p>
            </div>

            </div>
        </div>



    )
}