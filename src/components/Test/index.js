import React, { useState } from 'react';
import purify from 'dompurify';

const Test = () => {
 const [text, setText] = useState('');
 const updateText = (e) => {
  setText(e.target.value);
 };
 return (
  <div>
   <input onChange={updateText} type="text" value={text} />
   {/* <div dangerouslySetInnerHTML={{ __html: createDOMPurify(text) }} /> */}
   <div dangerouslySetInnerHTML={{ __html: purify.sanitize(text) }} />
  </div>
 )
}
export default Test;