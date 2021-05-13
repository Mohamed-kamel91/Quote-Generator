import React from "react"

function Quote({quoteInfo, opacity}) {
  const {text, author} = quoteInfo
    
  return (
    <div id="quote-box">
      <p className={opacity} id="text">{text}</p>
      <span className={opacity} id="author">-{author}</span>
    </div>
  )
}

export default Quote
