import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';



const CarouselCard = () => {
  return (
    <>
    
    <Carousel
    style={{maxWidth: "768px", margin: "0 auto"}} className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>-----p- 
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height: "600px",objectFit: "cover" }}
          className="d-block w-100 custom-image"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-image"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselCard
