import React from 'react';
import './style.css'
import '../../styles/theme.css'

export const TimeLine = () => {
    return (
        <div className='container small-container' id="timeLine">

            <div className='header-box'>
                <h3 className='headings' >Wedding Day Timeline</h3>
            </div>

            <ul>
                <li>
                    <p className="time">4:30</p>
                    <p className="whatBlock"> 
                        <span className="what2"> Doors Open at The Mansion</span>
                        <span className='details'>The Mansion, 2312 San Gabriel St, Austin, TX 78705</span>
                        <span className='details2'>Also called the Texas Federation of Women's Club. Get ready for a little bit of class!</span>
                        <ul>
                            <li className="details"> <img src="/assets/directions.png" alt="directions"/> <a target="_blank" href="https://goo.gl/maps/v6hRHq1yJiF2">Directions to Venue</a> 
                            </li>
                        </ul>
                     </p>
                </li>

                <li>
                    <p className="time">5:00</p>
                    <p >
                        <span className="what2"> The Wedding Ceremony</span>
                        <span className='details'>The Mansion, Georgian Tea Room</span>
                        <span className='details2'>The most important 30 minutes of our day. Sip on some bubbly while we say the 'I do's' </span>
                    </p>
                </li>

                <li>
                    <p className="time">5:30</p>
                    <p>
                        <span className="what2"> Cocktail Time</span>
                        <span className='details'>The Mansion, The Library & Dining Room</span>
                        <span className='details2'>A little party pre-game. Feel free to play the piano :)</span>
                    </p>
                </li>

                <li>
                <p className="time">6:30</p>
                <p>
                    <span className="what2">Reception</span>
                    <span className='details'>The Mansion, Main Ballroom</span>
                    <span className='details2'>Dinner, dancing and drinking, here we go!</span>
                </p>
            </li>
                



            </ul>

         
            <img id="plant2" src = "/assets/plant1.png"/>
            <img id="plant3" src = "/assets/plant3.png"/>
            <img id="plant1" src = "/assets/plant3.png"/>



        </div>

    )
}


