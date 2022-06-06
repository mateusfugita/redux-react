const INITIAL_STATE = {
  list: [
    'Volvo',
    'Fiat',
    'Ford'
  ]
}

export default function car(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_CAR':
      return {...state, list: [...state.list, action.name]}
    default:
      return state;
  }
}