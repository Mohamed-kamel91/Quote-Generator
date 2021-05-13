import React, {useState, useEffect} from "react";
import Quote from "./components/Quote"
import Buttons from "./components/Buttons"
import Mark from "./components/Mark"

function App () {
  const [quotes, setQuotes] = useState([])
  const [text, setText] = useState("")
  const [author, setAuthor] = useState("")
  const [opacity, setOpacity] = useState("hidden")

  // fetching quotes from ApI 
  useEffect(() => {
    const apiUrl = "https://type.fit/api/quotes"
    const quotesApi = fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const allQuotes = data // array contains all quotes objects
        const quote = data[Math.floor(Math.random() * data.length)] // get a random quote object
        setText(quote.text) 
        setAuthor(quote.author)
        setQuotes(allQuotes)
        setOpacity("visible")
      })
  }, [])

  // setting opacity to create a fade-in effect when generating a new quote
  function changeOpacity() {
    setOpacity("hidden")
    setTimeout(() => {
      setOpacity("visible")
    }, 100)
  }

  // Change quote every time the "new quote" button is pressed
  function changeQuote(quotes, changeOpacity) {
    // remove all objects whose author is "null" and get a random quote from the filtered array
    const quote = quotes.filter(quote => quote.author)[Math.floor(Math.random() * quotes.length)]
    setText(quote.text)
    setAuthor(quote.author)
    changeOpacity()
  }

  return (
    <div className="wrapper">
      <div className="quote-wrapper">
        <Mark />
        <Quote quoteInfo={{text,author}} opacity={opacity} />
      </div>
      <Buttons quotes={quotes} quoteInfo={{text,author}} changeOpacity={changeOpacity} changeQuote={changeQuote} /> 
    </div>
  )
}

export default App;