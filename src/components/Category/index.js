//import react
import React from 'react';

//import styled components
import { Anchor, Image } from './styles';

export const Category = ({ cover, path }) => (
  <>
    <Anchor href={path}>
      <Image src={cover} alt={'history of pet'}/>
    </Anchor>
  </>
);
