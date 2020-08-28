//import react
import React from 'react';
//import category component
import { Category } from '../Category';
//use styled components
import { List, Item } from './styles';

export const ListOfCategories = () => (
  <List>
    {[1, 2, 3, 4].map((element) => (
      <Item key={element}>
        <Category />
      </Item>
    ))}
  </List>
);
