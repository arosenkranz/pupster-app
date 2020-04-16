import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import bgImg from './assets/images/about-bg.jpg';

function About() {
  return (
    <>
      <Jumbotron
        fluid
        className='text-light d-flex align-items-center'
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '45vh',
        }}>
        <Container className='text-center'>
          <h1 className='display-3'>Welcome to the Pupster App!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, culpa asperiores. Consectetur, odit. Saepe
          aliquid illo, accusamus placeat sit distinctio repellendus optio quae velit quos aut officia architecto esse
          reprehenderit?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, possimus error voluptatum id fuga aliquam
          cupiditate sed, reiciendis ex, voluptas molestiae dolore. Magnam beatae, architecto sequi quasi culpa fuga
          repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, possimus error voluptatum id
          fuga aliquam cupiditate sed, reiciendis ex, voluptas molestiae dolore. Magnam beatae, architecto sequi quasi
          culpa fuga repellendus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, possimus error
          voluptatum id fuga aliquam cupiditate sed, reiciendis ex, voluptas molestiae dolore. Magnam beatae, architecto
          sequi quasi culpa fuga repellendus.
        </p>
      </Container>
    </>
  );
}

export default About;
