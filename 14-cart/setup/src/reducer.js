const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  if (action.type === 'INCREASE') {
    // const selectedProduct = state.cart.find(
    //   (prod) => prod.id === action.payload
    // );
    // console.log(selectedProduct);

    return {
      ...state,
      cart: state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount + 1 }
          : item;

        // if (item.id === action.payload) {
        //   return { ...item, amount: item.amount + 1 };
        // } else {
        //   return item;
        // }
      }),
    };
  }

  return state;
};

export default reducer;
