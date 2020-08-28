//import react
import React from 'react';

//const default image
const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq6A3dpFslGtcwfut1iFd0o7kr_uFfVhjdhQ&amp;usqp=CAU';

export const Category = (
  { cover = defaultImage,
    path,
    emoji = '?' }) => (
  <>
    <a href={path}>
      <img src={cover}/>
      {emoji}
    </a>
  </>
)
