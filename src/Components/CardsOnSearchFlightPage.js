import React from "react";
import {Card, Button} from 'react-bootstrap'
import moskowCard from '../images/moskow.jpg'
import santPetersburgCard from '../images/santpetersburg.jpg'
import kazanCard from '../images/kazan.jpg'

function CardsOnSearchFlightPage() {
    return (
        <div className='cards-block mt-4 mb-4'>
            <Card style={{width: '19rem'}} className='mr-2'>
                <Card.Img variant="top" src={moskowCard}/>
                <Card.Body>
                    <Card.Title>Москва</Card.Title>
                    <Card.Text>
                        Получите возможность погулять по Новогодней Москве
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '19rem'}} className='mr-2 ml-2'>
                <Card.Img variant="top" src={santPetersburgCard}/>
                <Card.Body>
                    <Card.Title>Санкт-Петербург</Card.Title>
                    <Card.Text>
                        Путешествие по музеям в городе Петра
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '19rem'}} className='ml-2'>
                <Card.Img variant="top" src={kazanCard}/>
                <Card.Body>
                    <Card.Title>Казань</Card.Title>
                    <Card.Text>
                       Путешествие к жемчужине Поволжья
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardsOnSearchFlightPage;