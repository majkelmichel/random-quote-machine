import React from 'react';
import './App.css';
import { Button, ButtonGroup } from 'reactstrap';


class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
  }
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

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
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
    this.state = {
      quotes: quotes,
      currentQuote: {
        quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
        author: quotes[Math.floor(Math.random() * quotes.length)].author
      }
    }
    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    let newQuote;
    do  {
      newQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
    } while(newQuote.quote === this.state.currentQuote.quote);

    this.setState({
      currentQuote: newQuote
    })
  }
  render() {
    return (
        <div className="AppWrapper-background">
          <div className="AppWrapper-center-parent">
            <div id="quote-box" className="AppWrapper-quote-box">
              <QuoteBox quote={this.state.currentQuote.quote} author={this.state.currentQuote.author} getNewQuote={this.getNewQuote} />
            </div>
          </div>
        </div>
    )
  }
}

export default AppWrapper;
