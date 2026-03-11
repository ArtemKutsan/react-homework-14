const initialState = {
  username: 'Artem',
  status: 'online',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return { ...state, username: action.payload.username, status: action.payload.status };

    default:
      return state;
  }
};

export default reducer;
