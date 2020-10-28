import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './AdminsComponents.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import ServiceList from './ServiceList/ServiceList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import { useEffect } from 'react';

const AdminsComponents = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [active, setActive] = useState("Service list");
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        fetch( `https://quiet-ravine-71494.herokuapp.com/admins`)
        .then(res => res.json())
        .then(data => {
            const currentAdmin = data.find(data => data.email === loggedInUser.email);
            setAdmin(currentAdmin);
        })
    }, [])
    
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
                                <Link to="/adminsComponents" onClick={() => handleTab("Service list")} className={active === "Service list" ? "activeTab font-weight-bold  p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faList} /> Service list</Link>
                                <Link to="/adminsComponents" onClick={() => handleTab("Add Service")} className={active === "Add Service" ? "activeTab font-weight-bold p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faPlus} /> Add Service</Link>
                                <Link to="/adminsComponents" onClick={() => handleTab("Make Admin")} className={active === "Make Admin" ? "activeTab font-weight-bold  p-2" : "font-weight-bold navLink p-2"}><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div className="col-md-10 p-3">
                    <div className="d-flex">
                        <h3 className="p-3 mr-auto">{active}</h3>
                        <h4 className="p-3"><span className="p-1"><img src={loggedInUser.photo} className="rounded-circle" style={{width: 32}} alt="" /></span>{loggedInUser.name}</h4>
                    </div>
                    {
                        admin
                        ?<div style={{ backgroundColor: "#F4F7FC" }} className="p-5">
                            {
                                active === "Service list" && <ServiceList />
                            }
                            {
                                active === "Add Service" && <AddService />
                            }
                            {
                                active == "Make Admin" && <MakeAdmin />
                            }
                        </div>
                        :<div style={{ backgroundColor: "#F4F7FC" }} className="p-5">
                            <h2 className="text-danger">Sorry! You are not an Admin</h2>
                            <h6>Please <Link to="/login">Login</Link> With Verified Email.</h6>
                        </div>
                    }
                </div>
            </div>
        </Container>
    );
};

export default AdminsComponents;