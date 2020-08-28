//import styled components
import styled from 'styled-components';

//image wrapper
export const ImgWrapper = styled.figure`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 50% 0 0 0;
  position: relative;
  width: 100%; 
`

//image
export const Image = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

//button
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

//container
export const Container = styled.article`
  margin: 0 auto
`
