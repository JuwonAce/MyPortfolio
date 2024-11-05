import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../src/Components/Header';
import Footer from '../src/Components/Footer';
import Home from '../src/Components/Home';
import About from '../src/Components/About';
import Projects from '../src/Components/Projects';
import Contact from '../src/Components/Contact';
import { lightTheme, darkTheme } from '../src/Components/themes/Themes';
import { GlobalStyles } from '../src/Components/GlobalStyles';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Header toggleTheme={toggleTheme} currentTheme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
