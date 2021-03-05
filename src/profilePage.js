import React, { useState, useEffect } from 'react';
import './profilePage.css';

function Profile() {

    const [profile,setProfile] = useState({})

    useEffect(async() => {


     console.log(JSON.parse(localStorage.getItem('user.address')));

    
    },[]);


    //while waiting for localStorage.parse

    return (
      <div className="profile-container">
          <h1>WELCOME {profile.username} </h1>
          <h2>Please look at your information below</h2>
              <div className='profile-personalInfo'>
                    <label htmlFor="firstName">First Name:{profile.firstName}</label>
                    <label htmlFor="lastName">Last Name:{profile.lastName}</label>
                    <label htmlFor="nric">NRIC:{profile.nric}</label>
                    <label htmlFor="nric">Phone Number:{profile.phoneNumber}</label>
            </div>
            <div className='profile-accountInfo'>
              <label htmlFor="username">Username:{profile.username}</label>
              <label htmlFor="email">NRIC:{profile.email}</label>
            </div>
      </div>
    );
  }
  
  export default Profile;