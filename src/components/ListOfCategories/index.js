//import react
import React, { useState, useEffect } from 'react';
//import category component
import { Category } from '../Category';
//use styled components
import { List, Item } from './styles';

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  //use state hook for show the fixed list
  const [showFixed, setShowFixed] = useState(false)

  //get images
  useEffect(()=>{
    const getPets = () => {
      fetch('https://dog.ceo/api/breeds/image/random/15')
        .then(response => response.json())
        .then(data => setCategories(data.message));
    }
    getPets();

  }, [])

  //show the other list
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  //const to render the list
  const renderList = (fixed) => (
    <List className={fixed && 'fixed'}>
      {categories.map((pet, i) => (
        <Item key={i}>
          <Category cover={pet} path={i}/>
        </Item>
      ))}
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
};
