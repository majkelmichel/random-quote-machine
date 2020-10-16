import React from 'react';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// REDUX

const quotes = [{quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand', author: 'Martin Fowler'},
  {quote: 'First, solve the problem. Then, write the code', author: 'John Johnson'},
  {quote: 'Experience is the name everyone gives to their mistakes', author: 'Oscar Wilde'},
  {quote: 'In order to be irreplaceable, one must always be different', author: 'Coco Chanel'},
  {quote: 'Java is to JavaScript what car is to Carpet', author: 'Chris Heilmann'},
  {quote: 'Knowledge is power', author: 'Francis Bacon'},
  {quote: 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code', author: 'Dan Salomon'},
  {quote: 'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away', author: 'Antoine de Saint-Exupery'},
  {quote: 'Ruby is rubbish! PHP is phpantastic!', author: 'Nikita Popov'},
  {quote: 'Code is like humor. When you have to explain it, it’s bad.', author: 'Cory House'},
  {quote: 'Fix the cause, not the symptom.', author: 'Steve Maguire'},
  {quote: 'Optimism is an occupational hazard of programming: feedback is the treatment.', author: 'Kent Beck'},
  {quote: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.', author: 'Martin Fowler'},
  {quote: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman'},
  {quote: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson'},
  {quote: 'Make it work, make it right, make it fast.', author: 'Kent Beck'}
];

const NEWQUOTE = 'NEWQUOTE';

const generateQuote = (newQuote) => {
  return {
    type: NEWQUOTE,
    currentQuote: newQuote
  };
}

const defaultState = {
  currentQuote: {
    quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
    author: quotes[Math.floor(Math.random() * quotes.length)].author
  }
}

const quoteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEWQUOTE:
      let newQuote;
      do  {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
      } while(newQuote.quote === state.currentQuote.quote);
      return {
        currentQuote: newQuote
      };
    default:
      return state;
  }
}

const store = createStore(quoteReducer);




// REACT

class QuoteBox extends React.Component {
  render() {
    return (
        <div className="QuoteBox-wrapper">
          <span className="QuoteBox-quote" id="text">{this.props.quote}</span>
          <br />
          <span className="QuoteBox-author" id="author">~ {this.props.author}</span>
          <div id="buttons">
            <ButtonGroup className="QuoteBox-buttons">
              <Button outline size="lg" color="info" onClick={this.props.getNewQuote} id="new-quote">New Quote</Button>
              <Button outline size="lg" color="info"><a href="https://twitter.com/intent/tweet" id="tweet-quote">Tweet Quote</a></Button>
            </ButtonGroup>
          </div>
        </div>
    )
  }
}


class QuoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.props.getNewQuote(this.props.currentQuote)
  }
  render() {
    return (
          <div className="AppWrapper-background">
            <div className="AppWrapper-center-parent">
              <div id="quote-box" className="AppWrapper-quote-box">
                {/*<span>{this.props.currentQuote.quote}</span>*/}
                <QuoteBox quote={this.props.currentQuote.quote} author={this.props.currentQuote.author} getNewQuote={this.getNewQuote} />
              </div>
            </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (quote) => {
      dispatch(generateQuote(quote));
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteApp);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}


export default AppWrapper;
