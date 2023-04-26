import React from 'react'
import { useParams , Route } from 'react-router-dom'
import { Fragment } from 'react'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES =[
  {id: 'q1' , author: 'Alex Morgan' , text: 'Keep working even when no one is watching.'},
  {id: 'q2' , author: 'African Proverb' , text: 'If you want to go fast, go alone. If you want to go far, go together.'},
  {id: 'q3' , author: 'Vince Lombardi' , text: 'Perfection is not attainable, but if we chase perfection we can catch excellence.'},
];

const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
  if (!quote){
    return(
      <p>No quote found for this Id !!!</p>
    )
  }
  return (
    <div>
      <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author}/>
        <Route path='/quotes/:quoteId/comments'>
          <Comments/>
        </Route>
      </Fragment>
      
    </div>
  )
}

export default QuoteDetails
