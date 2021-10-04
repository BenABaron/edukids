import React from 'react';
import { Col, Container, Row, Card, Form, Button } from 'react-bootstrap';

function Career(props) {

  return(
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
        <h1>Career</h1>
        <p>Image goes here!</p>
        </Col>
      </Row>
      <Row>
        <Card className="Career-card-a">
          <Card.Body>
            <Card.Header className="Career-card-header Career-card-header-a">Vacancy/Careers</Card.Header>
            <Card.Title className="Career-card-title-a">Let's join with us!</Card.Title>
            <Card.Text className="Career-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique feugiat nibh eget condimentum. Donec mattis massa augue, sit amet facilisis nunc fermentum eu. Aliquam.</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Col className="Career-card-column">
          <Row>
            <Card className="Career-card-b">
              <Card.Body>
                <Card.Header className="Career-card-header Career-card-header-b">Full Time/Part Time</Card.Header>
                <Card.Title className="Career-card-title-b">Teacher</Card.Title>
                <Card.Text className="Career-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas tellus nec mattis tincidunt. Duis nisl ipsum.</Card.Text>
                <Button className="Career-button">Apply Now!</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="Career-card-b">
              <Card.Body>
                <Card.Header className="Career-card-header Career-card-header-b">Part Time</Card.Header>
                <Card.Title className="Career-card-title-b">Assistant</Card.Title>
                <Card.Text className="Career-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas tellus nec mattis tincidunt. Duis nisl ipsum.</Card.Text>
                <Button className="Career-button">Apply Now!</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col className="Career-card-column">
          <Row>
            <Card className="Career-card-b">
              <Card.Body>
                <Card.Header className="Career-card-header Career-card-header-b">Full Time</Card.Header>
                <Card.Title className="Career-card-title-b">Manager</Card.Title>
                <Card.Text className="Career-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas tellus nec mattis tincidunt. Duis nisl ipsum.</Card.Text>
                <Button className="Career-button">Apply Now!</Button>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card className="Career-card-b">
              <Card.Body>
                <Card.Header className="Career-card-header Career-card-header-b">Full Time/Part Time</Card.Header>
                <Card.Title className="Career-card-title-b">Accountant</Card.Title>
                <Card.Text className="Career-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer egestas tellus nec mattis tincidunt. Duis nisl ipsum.</Card.Text>
                <Button className="Career-button">Apply Now!</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col xs={5}>
          <Form className="Career-form">
            <Form.Group>
              <Form.Label className="Career-form-label">Join Our Team</Form.Label>
              <Form.Control type="text" placeholder="Your Name" className="Career-form-control" />
              <Form.Control type="email" placeholder="Your Email" className="Career-form-control" />
              <Form.Control type="text" placeholder="Your Position" className="Career-form-control" />
              <Form.Control type="textarea" style={{height: "170px"}} placeholder="Enter Your Message" className="Career-form-control" />
              <Button type="submit" className="Career-form-button">Send Application</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="Career-card-d">
            <Card.Body>
              <Card.Header className="Career-card-header Career-card-header-d">Our Benefits</Card.Header>
              <Card.Text>Our school has been present for over 15 years to provide best quality education for kids.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card body>Lorem ipsum</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="Career-card-c">
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Award Winning</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Career-card-c">
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Affordable Fees</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Career-card-b">
            <Card.Body>
              <Card.Img></Card.Img>
              <Card.Title>Best Environment</Card.Title>
              <Card.Text>Lorem ipsum</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )

} 

export default Career;