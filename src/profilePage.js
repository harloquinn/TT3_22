import React, { useState, useEffect } from 'react';
import './profilePage.css';

function Profile() {

    const profile = {
        "phoneNumber": "(+65) 96100402",
        "accountKey": "2b14f7ac-c26a-43f9-a202-b7c79a2fdbde",
        "lastName": "Mosciski",
        "username": "Group22",
        "address": "84463 Zackery Springs",
        "email": "group22@techtrek.com",
        "firstName": "Rhiannon",
        "nric": "S30394410U"};

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