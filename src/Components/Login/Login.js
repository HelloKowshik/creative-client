import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSiggnedIn: false,
        name: '',
        email:'',
        photo: ''
    });

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const googleSingIn = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(GoogleProvider)
        .then(result =>{
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSiggnedIn: true,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
          });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="loginContainer text-center">
            <div className="p-5">
                <Link to="/home"><img src="https://iili.io/2ZBmHQ.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link>
            </div>
            <div className="col-md-6 mx-auto border p-5 pt-5 pb-5">
                <h3 className="p-3">Login With</h3>
                <div className="border rounded p-1 pl-5 pr-5 ">
                    <button onClick={googleSingIn} className="btn font-weight-bold text-dark"><span><img src="https://iili.io/2xw5TQ.png" alt=""className="icon m-1"/></span>Continue with Google</button>
                </div>
                <p className="p-2">Don't have an account? <Link to="">Create an account</Link></p>

            </div>
        </div>
    );
};

export default Login;