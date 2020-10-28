import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {

        fetch(`https://quiet-ravine-71494.herokuapp.com/userOrder?email=` + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setServicesList(data);
            })
    }, [])
    return (
        <div className="row">
            {
                servicesList.map(service =>
                    <div className="col-md-4" key={service._id}>
                        <div style={{ borderRadius: 20 }} className="p-3 bg-white m-2">
                            <div className="d-flex">
                                <div>
                                    {
                                        service.image.img && <img src={`data:image/png;base64,${service.image.img}`} className="w-25 img-fluid rounded-circle" alt="" />
                                    }
                                </div>
                                <button className={service.status==="Pending"?"btn btn-danger ml-auto":service.status==="On going"?"btn btn-warning ml-auto":"btn btn-success ml-auto"}>{service.status}</button>
                            </div>
                            <div className="mt-3">
                                <h5>{service.project}</h5>
                                <p className="text-muted">{service.details}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ServiceList;