import React from 'react';
import styled from 'styled-components';
import Pic from '../assets/photo_ai.jpg';

const Home = () => {
    return (
      <HomeContainer>
        <div>
          <h2>Welcome to My Portfolio</h2>
          <p>
            Hi👋,   <br />
            My name is <GradientText> Ademola Adebambo </GradientText> <br /> 
            A passionate developer specializing in Front-End Development. <br />
            Explore my projects and get to know more about me.
          </p>
        </div>
        <ImageWrapper>
          <StyledImage src={Pic} alt="Profile picture of Ademola Adebambo" />
        </ImageWrapper>
      </HomeContainer>
    );
  };
  
  export default Home;
const HomeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  flex: 1;
  font-family: 'Mulish', sans-serif;;

  h2 {
    font-size: 2em;
    margin-bottom: 10px;
    line-height: 30px;
  }

  p {
    font-size: 1.2em;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    align-items: center; 
  }
`;

const GradientText = styled.span`
  background: linear-gradient(lightBlue, deepPink);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; 
  color: transparent; 
`;

const ImageWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
  width: 110px; 
  height: 110px; 
  border-radius: 50%; 
  background: linear-gradient(45deg, darkBlue, deepPink); 
  padding: 5px; 
  position: relative;

  @media (max-width: 768px) {
    margin-top: 15px; 
  }
`;

const StyledImage = styled.img`
  border-radius: 50%;
  width: 96%;
  height: 96%;
  object-fit: cover;
  position: absolute;

  @media (max-width: 768px) {
    margin-top: 0; 
  }
`;


