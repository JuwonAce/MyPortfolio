import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import countryMap from '../assets/countrymap.png'
import profileCard from '../assets/profileCard.png'
import Dessert from '../assets/dessert.png'
import Blogpost from '../assets/blogpost.png'
import productListing from '../assets/productListing.png'

const Projects = () => {
    const projectData = [
      {
        title: 'Country Map',
        description: 'Country Map is a user-friendly app that lets you explore countries worldwide at a glance. You can click on any country to see key details like its name, capital, population, and region. Designed to be responsive and smooth on any device, it’s a fun, easy way to learn about the world!',
        thumbnail: countryMap,
        liveLink: 'https://juwonace.github.io/CountryMap/', 
        codeLink: 'https://github.com/JuwonAce/CountryMap', 
      },
      {
        title: 'Profile Card',
        description: 'This is a sleek profile card that displays user info with style! It’s designed with both light and dark modes, so it looks great no matter the theme. Perfect for showcasing a quick bio or contact info.',
        thumbnail: profileCard,
        liveLink: 'https://profile-card-a928yfjko-ademola-adebambos-projects.vercel.app/',
        codeLink: 'https://github.com/JuwonAce/ProfileCard',
      },
      {
        title: 'Dessert Shopping',
        description: 'Welcome to the sweetest spot online! This dessert shopping platform lets you explore a delightful range of treats, from cakes to cookies. With an easy-to-navigate interface, you can satisfy your cravings and have your favorite desserts delivered right to your door.',
        thumbnail: Dessert,
        liveLink: 'https://juwonace.github.io/DESSERT/',
        codeLink: 'https://github.com/JuwonAce/DESSERT',
      },
      {
          title: 'My Blogpost',
          description: 'Dive into my blog, where I share thoughts, insights, and stories on topics that relates to Tech. This space is all about connection and conversation. Join me on this journey, and lets explore new ideas together!.',
          thumbnail: Blogpost,
          liveLink: 'https://blogpost-jiq19gf9h-ademola-adebambos-projects.vercel.app/',
          codeLink: 'https://github.com/JuwonAce/Blogpost',
        },
        {
          title: 'Product List',
          description: 'Explore my product listing page, designed to help users find and evaluate their favorite items easily. With a clean layout and clear ratings, shoppers can quickly assess products and make informed decisions. It is all about making online shopping a breeze!',
          thumbnail: productListing,
          liveLink: 'https://product-listing-h8tg9yjxv-ademola-adebambos-projects.vercel.app/',
          codeLink: 'https://github.com/JuwonAce/Product-Listing',
        },
    ];
  
    return (
      <ProjectsContainer>
        <h2>My Projects</h2>
        <div className="project-list">
          {projectData.map((project, index) => (
            <div className="project" key={index}>
              <div className="thumbnail">
                <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Preview
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </ProjectsContainer>
    );
  };
  
export default Projects;


const ProjectsContainer = styled.div`
  padding: 20px;
  flex: 1;
  font-family: 'Mulish', sans-serif;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
  }

  .project-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .project {
    background: ${({ theme }) => theme.headerBg};
    padding: 15px;
    border-radius: 8px;
    flex: 1 1 calc(25% - 40px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .thumbnail {
      width: 100%;
      height: 200px;
      border-radius: 8px;
      margin-bottom: 15px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    h3 {
      margin-top: 0;
      font-size: 1.5em;
      text-align: center;
    }

    p {
      font-size: 1em;
      text-align: center;
      margin: 10px 0;
    }

    .links {
      display: flex;
      gap: 10px;
      margin-top: 15px;

      a {
        display: flex;
        align-items: center;
        gap: 5px;
        text-decoration: none;
        color: ${({ theme }) => theme.textColor};
        font-weight: bold;

        &:hover {
          color: ${({ theme }) => theme.primaryColor};
        }

        svg {
          font-size: 1em;
        }
      }
    }

    @media (max-width: 768px) {
      flex: 1 1 100%;
    }
  }
`;


