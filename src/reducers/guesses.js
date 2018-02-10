import initialState from '../fixtures/guesses'
import {MAKE_GUESS} from '../actions/makeGuess'

export default (state = initialState, { type, payload } = {}) => {
  switch(type){
    case MAKE_GUESS:
      return [...state, payload]
    default:
      return state
  }

}
