import React, { useState, useEffect } from 'react';

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

    return (
      <div className="profile-container">
          <div className='profile-info'>
              <div className='profile-firstName'>
              <label htmlFor="firstName">First Name:{profile.firstName}</label>
              </div>
              <div className='profile-lasttName'>
              <label htmlFor="lastName">Last Name:{profile.lastName}</label>
              </div>
              <div className='profile-nric'>
              <label htmlFor="nric">NRIC:{profile.nric}</label>
            </div>
            <div className='profile-phoneNumber'>
              <label htmlFor="nric">Phone Number:{profile.phoneNumber}</label>
            </div>
            <div className='profile-username'>
              <label htmlFor="username">Username:{profile.username}</label>
            </div>
            <div className='profile-email'>
              <label htmlFor="email">NRIC:{profile.email}</label>
            </div>
            <div className='profile-accountKey'>
              <label htmlFor="accountKey">Account Key:{profile.accountKey}</label>
            </div>
        </div>
      </div>
    );
  }
  
  export default Profile;