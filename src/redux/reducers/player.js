import { SET_PLAYER } from "../actions"

const initialState = {
    info: {
    },
  }

  
  const playerReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PLAYER:
        return {
          ...state,
          info:{ ...action.payload},
        }
        default:
        return state
    }
  }
  
  export default playerReducer