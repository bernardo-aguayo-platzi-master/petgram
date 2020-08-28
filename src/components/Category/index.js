//import react
import React from 'react';

//import styled components
import { Anchor, Image } from './styles';

export const Category = ({ cover }, path) => (
  <>
    {console.log(cover)}
    <Anchor href={path}>
      <Image src={cover} />
    </Anchor>
  </>
);
