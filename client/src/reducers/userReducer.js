const initState = [];

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "USER_REMOVE":
      return initState;
    default:
      return [...state];
  }
}
