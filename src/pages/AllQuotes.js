import React from 'react'
import QuoteList from '../components/quotes/QuoteList'


const DUMMY_QUOTES =[
  {id: 'q1' , author: 'Alex Morgan' , text: 'Keep working even when no one is watching.'},
  {id: 'q2' , author: 'African Proverb' , text: 'If you want to go fast, go alone. If you want to go far, go together.'},
  {id: 'q3' , author: 'Vince Lombardi' , text: 'Perfection is not attainable, but if we chase perfection we can catch excellence.'},
];
const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes
