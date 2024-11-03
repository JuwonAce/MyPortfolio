import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiVercel } from "react-icons/si";

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <HeaderContainer>
      <Logo>My Portfolio</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    
        <IconLink href="https://github.com/JuwonAce" target="_blank" rel="" aria-label="GitHub Profile">
          <FaGithub />
        </IconLink>
        <IconLink href="https://www.linkedin.com/in/ademola-adebambo/" target="_blank" rel="" aria-label="LinkedIn Profile">
          <FaLinkedin />
        </IconLink>
        <IconLink href="https://vercel.com/ademola-adebambos-projects" target="_blank" rel="" aria-label="Vercel Projects">
          <SiVercel />
        </IconLink>
        <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </ToggleButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  gap: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
  font-family: 'Inter', sans-serif;
`;

const Logo = styled.h1`
  font-size: 1.8em; 
  margin: 0; 
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  padding: 10px 15px; 
  font-weight: bold;
  display: flex;
  align-items: center;
  font-family: 'Mulish', sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.headerText}; 

  &:hover {
    color: ${({ theme }) => theme.hoverColor}; 
    background: rgba(0, 0, 0, 0.05); 
    border-radius: 5px; 
  }

  @media (max-width: 768px) {
    margin: 5px 0;
    padding: 10px; 
  }

  svg {
    margin-right: 5px;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 1.5em; 
  display: flex;
  align-items: center;
  padding: 5px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.hoverColor}; 
  }
`;

const IconLink = styled.a`
  margin: 0 10px;
  padding: 5px;
  color: inherit;
  font-size: 1.5em;

  &:hover {
    color: ${({ theme }) => theme.hoverColor}; 
  }
`;

