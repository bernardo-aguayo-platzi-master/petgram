//import react
import React from 'react';

//import Category component
import { ListOfCategories } from './components/ListOfCategories';

//import photo card component
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

//import global styles
import { GlobalStyles } from './styles/GlobalStyles'

//import Logo
import Logo from './components/Logo'

const App = () => (
  <>
    <GlobalStyles />
    <Logo/>
    <ListOfCategories />
    <ListOfPhotoCards/>
  </>
);

export default App;
