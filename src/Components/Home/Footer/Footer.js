import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid style={{ backgroundColor: '#FBD062' }}>
            <Container>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 p-5">
                        <h2>Let us handle your project, professionally.</h2>
                        <p><small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small></p>
                    </div>
                    <div className="col-md-6 p-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Your Details" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows="3"  placeholder="Your massage"/>
                            </Form.Group>
                            <Button variant="dark" type="submit" className="pl-5 pr-5">Send</Button>
                        </Form>
                    </div>
                </div>
            </Container>
            <div className="text-center p-3">
                <p className="text-muted">&copy; Hello Kowshik {new Date().getFullYear()}</p>
            </div>
        </Container>
    );
};

export default Footer;