export const intialState = {
  basket: [],
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
