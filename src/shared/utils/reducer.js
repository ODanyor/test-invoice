export const initialState = {
  user: null,
  terminals: [],
  buyers: [
    { id: 41231, name: 'John', purchases: 2, totalPrice: 450 },
    { id: 12312, name: 'Sam', purchases: 10, totalPrice: 422 },
    { id: 53212, name: 'Lisa', purchases: 15, totalPrice: 340 },
    { id: 43531, name: 'Loris', purchases: 4, totalPrice: 978 },
    { id: 64232, name: 'Boris', purchases: 7, totalPrice: 492 },
    { id: 65972, name: 'John', purchases: 4, totalPrice: 484 },
    { id: 53124, name: 'Lara', purchases: 3, totalPrice: 450 },
    { id: 65345, name: 'Tomas', purchases: 5, totalPrice: 9614 },
    { id: 76456, name: 'Luisa', purchases: 4, totalPrice: 7841 },
    { id: 23153, name: 'Marcus', purchases: 4, totalPrice: 1447 },
    { id: 65323, name: 'John', purchases: 5, totalPrice: 784 },
    { id: 32153, name: 'Samuel', purchases: 2, totalPrice: 120 },
    { id: 23214, name: 'Natalie', purchases: 1, totalPrice: 10 },
    { id: 52042, name: 'Mark', purchases: 6, totalPrice: 780 },
    { id: 51285, name: 'Steav', purchases: 4, totalPrice: 450 },
  ],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      }

    case 'ADD_TERMINAL':
      return {
        ...state,
        terminals: [action.payload, ...state.terminals],
      }

    case 'REMOVE_TERMINAL':
      return {
        ...state,
        terminals: state.terminals.filter(
          (terminal) => terminal.id !== action.payload
        ),
      }

    default:
      return state
  }
}
