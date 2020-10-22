import React from 'react';

import TokenPost from './endpoints/TokenPost';

import UserPost from './endpoints/UserPost';

import PhotoPost from './endpoints/PhotoPost';

import PhotoGet from './endpoints/PhotoGet';


const Api = () => {
  return (
    <>
    <h2>User Post</h2>
    <UserPost/>
    <h2>TOKEN POST</h2>
    <TokenPost/>
    <h2>PHOTO POST</h2>
    <PhotoPost/>
    <h2>PHOTO GET</h2>
    <PhotoGet/>
    </>
  )
}

export default Api;
