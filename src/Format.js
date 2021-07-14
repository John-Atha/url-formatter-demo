/* regex expression from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */

import './App.css';
import React, { useState, useEffect } from 'react';

function Format(props) {

  const [text, setText] = useState("");
  const [formatted, setFormatted] = useState([]);
  const expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/;
  const url_regex = new RegExp(expression);
  
  useEffect(()=>{
    setText(props.text);
  }, [props.text])
  
  useEffect(() => {
    const s = text;
    let parts = s.split('\n');
    for (let i=1; i<parts.length; i+=2) {
      parts.splice(i, 0, '\n');
    }
    let i=0;
    while (true) {
      if (i===parts.length) {
        break;
      }
      if (parts[i]==='\n') {}
      else if (parts[i].includes(' ')) {
        let part = parts[i].split(' ');
        parts.splice(i, 0, part[0]);
        parts[i+1] = part.slice(1, part.length).join(' ');
      }
      i++;
    }
    setFormatted(parts);
  }, [text])
  
  return (
    <div className='flex-layout result'>
      {formatted.map((value, index) => {
        if (value==='\n') { 
          return ( <div className='break' key={index} /> )
        }
        else if (value===' ') {
          return( <div className='space' key={index} />  )
        }
        else if (value.match(url_regex)) {
          return (
            <a className='word'
              rel='noopener noreferrer'
              target='_blank'
              href={value}
              key={index}>
                {value}
            </a>
          )
        }
        else {
          return ( <div className='word' key={index}>{value}</div> )
        }
      })}
    </div>
  )

}

export default Format;
