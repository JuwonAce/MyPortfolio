import React from 'react';
import styled from 'styled-components';
import html from '../assets/htmlicon.png'
import css from '../assets/CssIcona.png'
import javascript from '../assets/javaicon.png'
import typescript from '../assets/typescripticon.png'
import vscode from '../assets/vscode.png'
import git from '../assets/giticon.png'
import vercel from '../assets/vercelicon.svg'
import react from '../assets/reacticon.png'
import Github from '../assets/githubIcona.png'

const About = () => {
    
  return (
    <AboutContainer>
      <h2>About Me</h2>
      <p>
        Hi👋, <br />
        My name is Ademola, a passionate front-end developer based in Lagos State, Nigeria. <br />
        With a background in project management and a strong interest in technology, I've honed my skills in creating user-friendly web applications. <br />
        I enjoy turning ideas into reality by leveraging my knowledge of HTML, CSS, and JavaScript, along with modern frameworks like React. <br />
        I thrive in collaborative environments, constantly learning and adapting to new challenges in the fast-paced tech world.
      </p>
      <TechIcons>
        <h4>Technologies I have been working with recently</h4>
        <IconsWrapper>
          <img src= {html} alt="HTML" />
          <img src= {css} alt="CSS" />
          <img src= {javascript} alt="JavaScript"/>
          <img src= {typescript} alt="Typescript" />
          <img src= {vscode} alt="VSCode" />
          <img src= {git} alt="Git"/>
          <img src= {Github} alt="Github" />
          <img src= {vercel} alt="Vercel" />
          <img src= {react} alt="React"/>

        </IconsWrapper>
      </TechIcons>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 20px;
  flex: 1;
  font-family: 'Mulish', sans-serif;
  line-height: 50px;
  max-width: 1200px;
  margin: 0 auto; 
  
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
    line-height: 30px;
  }

  p {
    line-height: 1.6;
    font-size: 1em;
    line-height: 30px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    text-align: center;
  }
`;

const TechIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 20px;

  h4 {
    display: flex;
    align-items: center;
    margin-bottom: 10px; 
  }
`;

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  max-width: 100%;

  img {
    transition: transform 0.3s, filter 0.3s ease;
    width: 50px;
    height: auto;

    &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    img {
        width: 30px;
    }
  }
 
`;


export default About;
