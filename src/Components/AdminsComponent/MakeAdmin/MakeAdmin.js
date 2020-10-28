import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        fetch('https://quiet-ravine-71494.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Admin Added Successfully");
        history.push(`/home`);
    }

    return (
        <div className="w-75"> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="font-weight-bold">Email</label><br/>
                <input name="email" className="form-control p-2" ref={register({ required: true })} placeholder="jon@gmail.com" />
                {errors.email && <span className="error">Email is required</span>}

                <button className="btn btn-success pl-5 pr-5 p-2 mb-1 mt-2" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MakeAdmin;