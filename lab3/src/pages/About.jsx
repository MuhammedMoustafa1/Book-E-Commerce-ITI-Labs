import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/About.css';


export default function About() {
  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">About Us</h1>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Image src="/images/1.jpg" fluid rounded />
        </Col>
        <Col md={6}>
          <h2>Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatum placeat repudiandae iure sed. Debitis mollitia voluptatibus incidunt, corporis dignissimos aliquam numquam, doloribus facilis aperiam quidem explicabo tempore nam? Sint.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officia veniam, fugiat tempora quo nostrum expedita deleniti facilis quibusdam. Nisi, sunt temporibus! Eos porro doloribus dignissimos ipsum aspernatur cum quo?
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide the best services and products to our customers. We aim to achieve excellence through dedication and innovation, ensuring that our customers are always satisfied with our offerings.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/2.jpg" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>
                John is our CEO with over 20 years of experience in the industry. His vision and leadership have been instrumental in our success.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/1a.jpg" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>
                Jane is the CTO, bringing innovative technology solutions to our company. Her expertise has led to numerous breakthroughs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="/images/1.jpg" />
            <Card.Body>
              <Card.Title>Mike Johnson</Card.Title>
              <Card.Text>
                Mike is our COO, ensuring that our operations run smoothly and efficiently. His organizational skills are unmatched.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Our Values</h2>
          <p>
            Integrity, innovation, and customer satisfaction are at the core of our values. We strive to uphold these values in every aspect of our business.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <Image src="/images/2.jpg" fluid rounded />
        </Col>
        <Col md={6}>
          <Image src="/images/1.jpg" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
}
