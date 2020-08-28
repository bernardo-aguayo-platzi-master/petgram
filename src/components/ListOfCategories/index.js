//import react
import React, { useState, useEffect } from 'react';
//import category component
import { Category } from '../Category';
//use styled components
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getPets = () => {
      fetch('https://dog.ceo/api/breeds/image/random/15')
        .then(response => response.json())
        .then(data => setCategories(data.message));
    }
    getPets();

  }, [])

  return (
    <List>
      {categories.map((pet, i) => (
        <Item key={i}>
          <Category cover={pet} path={i}/>
        </Item>
      ))}
    </List>
  );
};
