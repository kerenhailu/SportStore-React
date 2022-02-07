const SomeReducer = (state, action) => {
    switch (action.type) {
      case "up":
        return state + 1;
      case "dwon":
        return state - 1;
      case "reset":
        return 0;
        case "plus":
          return state + action.payload;
      default:
        return state;
    }
  }
  export default SomeReducer;
  