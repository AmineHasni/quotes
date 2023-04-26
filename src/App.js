import React , {Suspense} from "react";
import { Route,Switch,Redirect } from "react-router-dom";
//import AllQuotes from "./pages/AllQuotes";
//import NewQuote from "./pages/NewQuote";
//import QuoteDetails from "./pages/QuoteDetails";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));

function App() {
  return (

      <Layout>
        <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
        <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes/>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetails/>
        </Route>
        <Route path='/new-quote'>
          <NewQuote/>
        </Route>
        
        </Switch>
        </Suspense>
      </Layout>
  );
}

export default App;
