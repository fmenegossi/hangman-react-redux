import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import hang0 from '../images/hang0.png'
import hang1 from '../images/hang1.png'
import hang2 from '../images/hang2.png'
import hang3 from '../images/hang3.png'
import hang4 from '../images/hang4.png'
import hang5 from '../images/hang5.png'
import hang6 from '../images/hang6.png'
import {wrongGuesses} from '../functions'

class HangGuy extends PureComponent {
  static propTypes = {
		word: PropTypes.string.isRequired,
    guesses: PropTypes.array.isRequired
	}

	render() {
    const images = [
      hang0,
      hang1,
      hang2,
      hang3,
      hang4,
      hang5,
      hang6,
    ]

    const {word, guesses} = this.props
		return (
			<img alt='HangGuy' src={images[wrongGuesses(word, guesses)]} />
		)
	}
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    guesses: state.guesses
  }
}

export default connect(mapStateToProps)(HangGuy)
