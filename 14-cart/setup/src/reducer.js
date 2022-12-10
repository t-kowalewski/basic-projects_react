const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === 'INCREASE') {
    return {
      ...state,
      cart: state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;
      }),
    };
  }

  if (action.type === 'DECREASE') {
    return {
      ...state,
      cart: state.cart
        .map((item) => {
          return item.id === action.payload
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
        .filter((item) => item.amount > 0),
    };
  }

  return state;
};

export default reducer;
