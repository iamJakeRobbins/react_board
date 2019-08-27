import ADD_NAME from './action.js';


function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return Object.assign({}, state, {
        name: [
          ...state.name,
          {
            text: action.text,
          }
        ]
      })
    default:
      return state
  }
}
