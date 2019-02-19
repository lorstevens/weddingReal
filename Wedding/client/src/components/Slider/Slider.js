import React, { Component } from 'react';
import './style.css'

import { Slide } from './Slide'
import { RightArrow } from './Arrows'
import { LeftArrow } from './Arrows'

export class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "/assets/lornaandrrew.jpg",
        "/assets/onbike.jpg",
        "/assets/bikeandrew.jpg",
        "/assets/lornaandrewtree.jpg",
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (

      <div className="about-us">
      <div className="container">
        <div className="about-container">
          <div className="about">

            
          <h3 className="headings">How it Started...</h3>
            <p>Lorem ipsum dolor sit amet, esse legere impetus sed ei, ei virtute legendos assueverit quo. Sale munere feugait
                vix ea, eius voluptua mea ne, ius ei alii dicat lobortis. Sea vero cibo epicurei ex. Iusto sanctus usu ad.
                Mea id dico putent fabulas.
          </p>
          </div>
          <div className="slider">

            <div className="slider-wrapper"
              style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
              }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
            </div>

            <LeftArrow
              goToPrevSlide={this.goToPrevSlide}
            />

            <RightArrow
              goToNextSlide={this.goToNextSlide}
            />
          </div>
          <img id="plant3" src = "/assets/plant3.png"/>
          <img id="plant2" src = "/assets/plant3.png"/>
        </div>
      </div>
      </div>



    );
  }
}