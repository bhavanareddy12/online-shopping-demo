export const bagCountReducer = (state,action) => {
  let count = 0;
  switch (action.type) {
        case "increment":
            return count = action.value;
        default:
            return count = action.value;
  }
}