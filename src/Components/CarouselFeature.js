import {Carousel} from "react-bootstrap";
import caruselSlideFirst from "../images/slide11.jpg";
import caruselSlideSecond from "../images/slide22.jpg";
import caruselSlideThird from "../images/slide3.jpg";
import React from "react";

const carouselItems = [
    {
        title: 'Путешествуйте вместе с нами',
        img: caruselSlideFirst
    },
    {
        title: 'Только самые выгодные предложения',
        text: '',
        img: caruselSlideSecond
    },
    {
        title: 'Исполняем Ваши мечты о путешествиях',
        text: 'Розыгрыши путевок каждый месяц',
        img: caruselSlideThird
    }
]

function CarouselFeature() {
    return (
        <Carousel>
            {carouselItems.map((element, key) => (
                <Carousel.Item key={key}>
                    <Carousel.Caption>
                        <h3 className='slide-title'>{element.title}</h3>
                        <p>{element.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselFeature;