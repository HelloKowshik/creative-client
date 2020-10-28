import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const AddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [file, setFile] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const history = useHistory();

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', data.title);
        formData.append('description', data.description);

        fetch('https://quiet-ravine-71494.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        alert("Service Added Successfully");
        history.push(`/home`);
    }
    return (
        <div className="w-75"> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="font-weight-bold">Service Title</label><br/>
                <input name="title" className="form-control p-2" ref={register({ required: true })} placeholder="Enter title" />
                {errors.title && <span className="error">Service Title is required</span>}
                <br/>

                <label className="font-weight-bold">Icon</label><br/>
                <input onChange={handleFileChange} type="file" name="file" className="" ref={register({ required: true })} placeholder="Upload Image" />
                {errors.file && <span className="error">Service Title is required</span>}
                <br />

                <label className="font-weight-bold mt-5">Description</label>
                <input name="description" type="text" rows="3" className="form-control p-5" ref={register({ required: true })} placeholder="Project Details" />
                {errors.description && <span className="error">Project Details is required</span>}

                <button className="btn btn-success pl-5 pr-5 mt-5" type="submit">Send</button>
            </form>
        </div>
    );
};

export default AddService;