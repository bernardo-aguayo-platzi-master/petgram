//import react
import React, { useState, useEffect } from 'react'

//import Photo cards
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(()=>{
    const getPets = () => {
      fetch('https://dog.ceo/api/breeds/image/random/7')
        .then(response => response.json())
        .then(data => setCards(data.message));
    }
    getPets();

  }, [])

  console.log(cards)

  return (
    <ul>
      {cards.map((pet, i) => <PhotoCard key={i} cover={pet} id={i}/>)}
    </ul>
  )
};
