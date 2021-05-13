import React from "react"

function Buttons({quotes, quoteInfo, changeOpacity, changeQuote}) {
  const {text, author} = quoteInfo

  return (
    <div className="buttons">
      <button onClick={() => changeQuote(quotes, changeOpacity)} id="new-quote">New Quote</button>
      <a href={`https://twitter.com/intent/tweet?text=" ${text} " -${author}&hashtags=quote`} target="_blank" id="tweet-quote">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  )
}

export default Buttons
