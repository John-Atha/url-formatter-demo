import './App.css';
import React from 'react';

function About() {
  return (
    <div className='about-container'>
      <div className='flex-layout with-whitespace'>
        {'Hello, I am '}
        <a href='https://www.github.com/John-Atha' rel='noopener noreferrer' target='_blank'>
          John-Atha
        </a>
      </div>
      <hr />
      <div>This is a simple reactJs project</div>
      <div>It uses a small javascript code snippet and some decoration with HTML and CSS</div>
      <hr />
      <div>
          The aim is to turn the urls of a text to clickable hrefs, keeping the relative
          positioning of all the words and other elements of the text.
      </div>
      <hr />
      <div>
            I have been looking for an easy way to format the text this way in some projects I have build, as it can seem very useful for UX.
      </div>
    </div>
  )
}

export default About;
