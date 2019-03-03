import React from 'react';
import'./style.css'



export const Nav = props =>
    (
        <nav>
        <div class="nav-wrapper">
         
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#timeLine">Timeline</a></li>
            <li><a href="#info">Info</a></li>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#gifts">Registry</a></li>
            <li><a href="#rsvp">RSVP</a></li>
          </ul>
        </div>
      </nav>
    )