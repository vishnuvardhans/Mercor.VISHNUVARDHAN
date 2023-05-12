 import { ReactDOM } from 'react';
 import './scroll.css';
import React, { useState, useEffect } from 'react';

function Example() {
  var [visElement, setVisElement] = useState(null);
  var [visElement, setVisElement1] = useState(null);
  useEffect(() => {
    function update() {
      const container = document.getElementById('controls');
      const elem = document.getElementById('example');
      const rect = elem.getBoundingClientRect();
      container.innerHTML = '';
      let vis = rect.y<44? 'white' : 'rgb(94, 83, 83)';
      var i=0;
      for (const key in rect) {
        i=i+1;
        if (typeof rect[key] !== 'function') {
          let para = document.createElement('p');
          console.log(rect.y);
          para.textContent = `${key}: ${rect[key]}`;
          container.appendChild(para);
        }
      }
     //////////////////////////////////////////////////////
      setVisElement1(
        <div style={{ color: vis }} id="example">
          <p1>This is the output .Due to my internals exam i was not able to complete fully but i had completed for one word where as even for 100 words method is same
            <br/>
              -----------Thank You For This Opportunity!!!!---------
          </p1>
          {/* while({vis[i]}!='') */}
          {/* <p1>{Vis[i]}</p1> */}
        </div>
      );
  
    }
    document.addEventListener('scroll', update);
    return () => document.removeEventListener('scroll', update);
  }, []);

  return (
    <div>
      <div id="example">Example</div>
      {/* <div id="example1">Example</div> */}
      <div id="controls"></div>
      {visElement}
      {/* {setVisElement1} */}
    </div>
  );
}

export default Example;

