export const intialState = {
  basket: [1, 2, 3, 4],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
};

export default Reducer;
