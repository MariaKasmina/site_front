import {Carousel} from "react-bootstrap";
import caruselSlideFirst from "../images/slide11.jpg";
import caruselSlideSecond from "../images/slide22.jpg";
import caruselSlideThird from "../images/slide3.jpg";
import React from "react";

function CarouselFeature(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="slide-image"
                    src={caruselSlideFirst}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='slide-title'>Путешествуйте вместе с нами</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image"
                    src={caruselSlideSecond}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Только самые выгодные предложения</h3>
                    <p>Более 1000 выгодных предложений ждут Вас</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="slide-image"
                    src={caruselSlideThird}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Исполняем Ваши мечты о путешествиях</h3>
                    <p>Розыгрыши путевок каждый месяц</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFeature;