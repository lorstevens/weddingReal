import React from 'react';
import './style.css'
import '../../styles/theme.css'

export const Gifts = () => {
    return (
        <div id="gifts" className="registry-container">
            <div className='container'>

                <div className='header-box'>
                    <h3 className='headings' id="whiteHeading" >What About Gifts?</h3>
                </div>

                <div className="thanks-div">
                    <div className='thanks-box'>


                        <p>We are so humbled you want to contribute to our new life! </p>
                        <p>Your presence on our big day is enough, but if you'd like to give us a gift, we are registered at the links below. <span style={{'fontWeight': '700'}}>THANK YOU!</span> </p>

                    </div>
                </div>

                <div className="logos">
                    <a target="blank" href="https://www.honeyfund.com/wedding/AndrewLorna"><img className="logo" src='/assets/honeyfund-logo.png' /></a>
                    <a target="blank" href="https://www.target.com/gift-registry/giftgiver?registryId=bc959e1c83674a69ab162b342d15cb64&lnk=registry_custom_url"><img className="logo" src='/assets/target-logo2.png' /></a>
                </div>
            </div>
        </div>
    )
}