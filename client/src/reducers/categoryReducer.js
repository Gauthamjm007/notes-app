const initState = [];

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case "GET_CATEGORY":
      return [...action.payload];
    case "ADD_CATEGORY":
      return state.concat(action.payload);
    case "REMOVE_CATEGORY":
      return state.filter((ele) => ele._id !== action.payload);
    case "EDIT_CATEGORY":
      return state.map((ele) =>
        ele._id === action.payload.id
          ? Object.assign(ele, {}, action.payload.data)
          : Object.assign(ele, {})
      );
    default:
      return [...state];
  }
}
