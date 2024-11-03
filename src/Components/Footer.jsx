import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.footerBg};
  color: ${({ theme }) => theme.footerText};
  text-align: center;
  padding: 10px 20px;
  margin-top: auto;
`;

