import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import headphon from '../images/headphon.jpg';
import earphone from '../images/earphone.jpg';
import headpp from '../images/headpp.jpg';

const MyCarousel = () => {
  return (
    <div className="d-flex justify-content-center">
      <Carousel className="mx-auto" style={{ width: '60%' }}>
        <Carousel.Item>
          <Card className="mx-auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={headphon} alt="First slide" />
            <Card.Body>
              <Card.Title className="text-center">Headphones</Card.Title>
              <Card.Text className="text-center">Some representative placeholder content for the first slide.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mx-auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={headpp} alt="Second slide" />
            <Card.Body>
              <Card.Title className="text-center">Headset</Card.Title>
              <Card.Text className="text-center">Some representative placeholder content for the second slide.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="mx-auto" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={earphone} alt="Third slide" />
            <Card.Body>
              <Card.Title className="text-center">Earphones</Card.Title>
              <Card.Text className="text-center">Some representative placeholder content for the third slide.</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
