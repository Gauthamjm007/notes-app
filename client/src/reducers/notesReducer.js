const initState = [];

export default function notesReducer(state = initState, action) {
  switch (action.type) {
    case "GET_NOTES":
      return [...action.payload];
    case "ADD_NOTES":
      return state.concat(action.payload);
    case "REMOVE_NOTES":
      return state.filter((ele) => ele._id !== action.payload);
    case "EDIT_NOTES":
      return state.map((ele) =>
        ele._id === action.payload.id
          ? Object.assign(ele, {}, action.payload.data)
          : Object.assign(ele, {})
      );
    default:
      return [...state];
  }
}
