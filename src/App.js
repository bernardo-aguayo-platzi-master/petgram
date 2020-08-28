//import react
import React from 'react';

//import Category component
import { ListOfCategories } from './components/ListOfCategories';

//import global styles
import { GlobalStyles } from './GlobalStyles'

const App = () => (
  <>
    <GlobalStyles />
    <ListOfCategories />
  </>
);

export default App;
