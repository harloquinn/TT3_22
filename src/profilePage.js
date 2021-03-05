import React, { useState, useEffect } from 'react';
import './profilePage.css';

function Profile() {

    const [profile,setProfile] = useState({
        firstName:'',
        lastName:'',
        nric:'',
        phoneNumber:'',
        email:''
    })

    useEffect(async() => {
        
    setProfile({...profile,
        firstName:JSON.parse(localStorage.getItem('firstName')),
        lastName:JSON.parse(localStorage.getItem('lastName')),
        nric:JSON.parse(localStorage.getItem('nric')),
        email:JSON.parse(localStorage.getItem('email')),
        phoneNumber:JSON.parse(localStorage.getItem('phoneNumber')),
    });

    
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
                    <label htmlFor="phoneNumber">Phone Number:{profile.phoneNumber}</label>
                    <label htmlFor="email">Email:{profile.email}</label>
            </div>
      </div>
    );
  }
  
  export default Profile;