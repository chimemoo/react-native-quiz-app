import { combineReducers } from 'redux'


const username = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [
        ...state,
        {
          username: action.username
        }
      ]
    default:
      return state
  }
}



export default combineReducers({
  username
})