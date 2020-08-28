//import styled components
import styled from 'styled-components';

//img wrapper
export const ImgWrapper = styled.figure`
	border-radius: 10px;
	display: block;
	height: 0;
	overflow: hidden;
	padding: 56.25% 0 0 0;
	position: relative;
	width: 100%;
`;

//img component
export const Image = styled.img`
	box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	width: 100%;
`;

//button component
export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`;
