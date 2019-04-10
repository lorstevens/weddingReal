import React from 'react'
import './style.css'



        // <div class="row">
        //     <div class="col s12">This div is 12-columns wide on all screen sizes</div>
        //     <div class="col s6">6-columns (one-half)</div>
        //     <div class="col s6">6-columns (one-half)</div>
        //   </div>

export const AboutUs = () => {
    return (
        <div id="aboutUs" className="about-us">
     
            <div className="about-container">
            <div id='aboutUsRow'>
                <div className="about col s12">
                    <h3 className="headings">How it Started...</h3>
                    <h6 className="quote">"You've lived your life and I've lived mine. And now it's time we lived them together."</h6>
                    <br/>
                    <p>Lorna and Andrew grew up in the same neighborhood and went to the same highschool. They saw each other in the hallways around school, but never spoke to each other. Their lives continued to go on different paths...  </p>
                    <br/>
                    <p>Years later, finding themselves living in the same city after college, they were pushed together with the help of their friends. Their first date was a group date, and even though Lorna spilled her drink and complained about geology (Andrew loves rocks), Andrew asked her out again. </p>
                    <br/>
                    <p>Six years went by since that first date. On April 28, Andrew brought Lorna to some back roads for a bike ride. Next to a cornfield, with Reba playing on the radio, Andrew asked Lorna to be his forever partner. It was <span className="spanColor">perfect.</span>  </p>
                    </div>
                <div className="image col s12">
                    <img id="tree" src="/assets/lornaandrewtree.jpg" alt="tree" />
                    <img id="plant-about" alt="plant" src="/assets/plant2.png" />
                </div>

                </div>
                
            </div>
            
        </div>
    )
}