//import react
import React from 'react';

//import styled components
import { ImgWrapper, Image, Button, Container } from './styles';

//import heart icons from react icons
import { MdFavoriteBorder } from 'react-icons/md';

export const PhotoCard = ({ cover, id, likes = 0 }) => {
  return (
    <Container>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Image src={cover} alt={`pet with the id: ${id}`} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='16px' /> {`${likes} likes`}
      </Button>
    </Container>
  );
};
