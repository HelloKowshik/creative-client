import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Order from './Order/Order';
import Review from './Review/Review';
import ServiceList from './ServiceList/ServiceList';
import './UsersComponents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faCommentDots, faList } from '@fortawesome/free-solid-svg-icons'


const UsersComponent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [active, setActive] = useState("order");

    const handleTab = (tabName) => {
        setActive(tabName);
    }
    return (
        <Container fluid>
            <div className="row">
                <div className="col-md-2 bg-white p-3">
                    <Navbar className="flex-column">
                        <Navbar.Brand><Link to="/home"><img src="https://iili.io/2ZBmHQ.png" style={{ width: 150 }} className="d-inline-block align-top mb-5" alt="" /></Link></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="flex-column">
                                <Link to="/usersComponent/:project" onClick={() => handleTab("order")} className={active === "order" ? "activeTab font-weight-bold  p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faCartArrowDown} /> Order</Link>
                                <Link to="/usersComponent/:project" onClick={() => handleTab("Services list")} className={active === "Services list" ? "activeTab font-weight-bold p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faList} /> Services list</Link>
                                <Link to="/usersComponent/:project" onClick={() => handleTab("review")} className={active === "review" ? "activeTab font-weight-bold  p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faCommentDots} /> Review</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div className="col-md-10 p-3">
                    <div className="d-flex">
                        <h3 className="p-3 mr-auto">{active}</h3>
                        <h4 className="p-3"><span className="p-1"><img src={loggedInUser.photo} className="rounded-circle" style={{width: 32}} alt="" /></span>{loggedInUser.name}</h4>
                    </div>
                    <div style={{ backgroundColor: "#F4F7FC" }} className="p-5">
                        {
                            active === "order" && <Order />
                        }
                        {
                            active === "Services list" && <ServiceList />
                        }
                        {
                            active == "review" && <Review />
                        }
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default UsersComponent;