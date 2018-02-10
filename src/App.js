import React, { Component } from 'react';
import Guessing from './components/Guessing'
import HangGuy from './components/HangGuy'
import AvailableLetters from './components/AvailableLetters'
import word from './fixtures/word'
import guesses from './fixtures/guesses'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HangGuy word={word} guesses={guesses}/> <br/><br/>
        <Guessing word={word} guesses={guesses}/> <br/><br/>
        <AvailableLetters word={word} guesses={guesses}/>
      </div>
    );
  }
}

export default App;
