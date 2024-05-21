import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'

export default function Home() {
  return (
    <div className='container mt-5'>
      
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/1.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/2.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h3>Second Slide Label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='/images/1a.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='alert alert-info text-center'>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt at quasi blanditiis voluptatibus aut reiciendis, rem animi placeat repudiandae sequi molestiae libero quae inventore repellat optio doloremque earum, numquam exercitationem recusandae possimus fugit magnam. Eligendi aperiam rem facere, ullam esse rerum cum quisquam perspiciatis sapiente deleniti consequatur eos pariatur quibusdam adipisci consectetur iure veniam earum dicta. Tempora quod totam quia consequatur quaerat illo. Debitis illo nostrum assumenda vitae natus alias deleniti omnis, numquam voluptatum tempora sed, quidem dignissimos quod soluta vel hic blanditiis minus doloribus ut laborum ex asperiores. Doloremque doloribus id dignissimos tenetur ducimus tempore sunt voluptatibus ex repudiandae!
        </p>
      </div>
    </div>
  );
}
