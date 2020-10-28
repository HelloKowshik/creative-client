import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container fluid style={{ backgroundColor: '#FBD062' }}>
            <Container className="header-container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 p-5 mt-4">
                        <h2>Let's Grow Your Brand To The Next Level</h2>
                        <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est inventore architecto eum corrupti nesciunt?</small></p>
                        <button className="btn btn-dark pl-5 pr-5">Hire us</button>
                    </div>
                    <div className="col-md-8 p-3">
                        <img src="https://iili.io/2ZCIWX.png" className="img-fluid p-5" alt="" />
                    </div>
                </div>
            </Container>
            <Container style={{ backgroundColor: '#ffffff' }} className="d-flex p-md-5">
                <Link to="" className="btn"><img src="https://iili.io/2ZCiep.png" className="img-fluid w-50" alt="" /></Link>
                <Link to="" className="btn"><img src="https://iili.io/2ZCsmN.png" className="img-fluid w-50" alt="" /></Link>
                <Link to="" className="btn"><img src="https://iili.io/2ZnJkl.png" className="img-fluid w-50" alt="" /></Link>
                <Link to="" className="btn"><img src="https://iili.io/2Zn3IS.png" className="img-fluid w-50" alt="" /></Link>
                <Link to="" className="btn"><img src="https://iili.io/2ZnqBe.png" className="img-fluid w-50" alt="" /></Link>

            </Container>
        </Container>
    );
};

export default Header;