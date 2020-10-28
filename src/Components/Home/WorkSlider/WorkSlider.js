import React from 'react';
import { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';

const WorkSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid className="text-center p-5" style={{ backgroundColor: "#111430" }}>
            <Container>
                <h2 className="text-white">Here are some of <span style={{ color: "#7AB259" }}>our works</span></h2>
                <div className="p-5 t">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 mx-auto"
                                src="https://iili.io/2t9KMl.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item> 
                           <img
                                className="d-block w-25 mx-auto"
                                src="https://iili.io/2t9BFS.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 mx-auto"
                                src="https://iili.io/2t9nS9.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 mx-auto"
                                src="https://iili.io/2tJswu.png"
                                alt="Four slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-25 mx-auto"
                                src="https://iili.io/2td2ta.png"
                                alt="five slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </Container>
    );
};

export default WorkSlider;