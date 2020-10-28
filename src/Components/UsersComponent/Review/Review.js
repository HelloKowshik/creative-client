import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const { project } = useParams();
    const history = useHistory();

    const onSubmit = (data) => {
        data.image = loggedInUser.photo;
        fetch('https://quiet-ravine-71494.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert("Review Added");
        history.push(`/home`);
    }
    return (
        <div className="w-75"> 
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" className="form-control p-4" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className="error">Name is required</span>}
                <br />

                <input type="text" name="title" className="form-control p-4" ref={register({ required: true })} placeholder="Company's name, Designation" />
                {errors.title && <span className="error">Company's name, Designation is required</span>}
                <br />

                <input name="feedback" type="text" rows="3" className="form-control p-5" ref={register({ required: true })} placeholder="Description" />
                {errors.feedback && <span className="error">Description is required</span>}
                <br />

                <button className="btn pl-5 pr-5 mt-5" type="submit" style={{ backgroundColor: "#111430", color: "white" }}>Submit</button>
            </form>
        </div>
    );
};

export default Review;