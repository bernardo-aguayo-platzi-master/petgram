//import react
import React from 'react';

//import Category component
import { ListOfCategories } from './components/ListOfCategories';

//import photo card component
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

//import global styles
import { GlobalStyles } from './GlobalStyles'

const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories />
    <ListOfPhotoCards/>
  </>
);

export default App;
