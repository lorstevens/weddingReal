import React, { Component } from 'react';


import {Header} from '../components/Header/Header'
// import {Form} from '../components/Form/Form'
import {Footer} from '../components/Footer/Footer'
import {Accomodations} from '../components/Accomodations/Accomodations'
import {Nav} from '../components/Nav/Nav'
import {Gifts} from '../components/Gifts/Gifts'
import {TimeLine} from '../components/Timeline/Timeline'
import {Info} from '../components/Info/Info'
import {AboutUs} from '../components/AboutUs/AboutUs'
import Todo from '../components/Form/ToDo';


export class HomeContainer extends Component {
    render() {
        return (
            <div>
           
            <Header />
            <TimeLine />
            <Info/>
            <Accomodations/>
            <AboutUs/>
            <Gifts/>
            <Todo/>
            <Footer/>
            </div>
        )
    }
}



