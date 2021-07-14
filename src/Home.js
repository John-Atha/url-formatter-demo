/* regex expression from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */

import './App.css';
import React, { useState } from 'react';
import { UrlFormatter } from 'url-formatter';

function Home() {

  const [text, setText] = useState("");

  return (
      <div>
        <div className='my-container'>
          <h3>Initial</h3>
          <div className='break' />
          <textarea
            className='bordered'
            placeholder='Your text here...'
            value={text}
            onChange={(event)=>{setText(event.target.value)}}
          />
        </div>
        
        <div className='my-container'>
          <h3 style={{'marginTop': '40px'}}>Formatted</h3>
          <div className='break' />

          <UrlFormatter text={text} />

        </div>
      </div>
  )
}


export default Home;
