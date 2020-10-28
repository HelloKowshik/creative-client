import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://quiet-ravine-71494.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <Container fluid className="text-center p-5">
            <Container>
                <h2>Provide awesome <span style={{ color: "#7AB259" }}>services</span></h2>
                <div className="row p-5">
                    {
                        services.map(service =>
                            <div className="col-md-4 p-3 pt-5 pb-5 services-card" key={service._id}>
                                <Link to={`/usersComponent/${service.title}`} style={{color: "#000000"}}>
                                    <div>
                                        {
                                            service.image.img
                                            ?<img src={`data:image/png;base64,${service.image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                            :<img src={service.image} className="w-25 img-fluid rounded-circle" alt="" />
                                        }
                                    </div>
                                    <h5>{service.title}</h5>
                                    <p><small>{service.description}</small></p>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </Container>
        </Container>
    );
};

export default Services;