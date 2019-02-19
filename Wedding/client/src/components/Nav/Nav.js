import React from 'react';
import'./style.css'



export const Nav = props =>
    (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">{props.title}</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Timeline</a></li>
            <li><a href="badges.html">Accomodations</a></li>
            <li><a href="collapsible.html">Registry</a></li>
          </ul>
        </div>
      </nav>
    )