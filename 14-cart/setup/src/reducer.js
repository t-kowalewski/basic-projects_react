const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE_ITEM') {
    const newCart = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }

  // New version
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, operator } = action.payload;

    const dynamicMap = (arr, operator) => {
      return arr.map((item) => {
        return item.id === id
          ? {
              ...item,
              amount: operator === '+' ? item.amount + 1 : item.amount - 1,
            }
          : item;
      });
    };

    return {
      ...state,
      cart:
        operator === '+'
          ? dynamicMap(state.cart, '+')
          : dynamicMap(state.cart, '-').filter((item) => item.amount > 0),
    };
  }

  // Old version
  // if (action.type === 'INCREASE') {
  //   return {
  //     ...state,
  //     cart: state.cart.map((item) => {
  //       return item.id === action.payload
  //         ? { ...item, amount: item.amount + 1 }
  //         : item;
  //     }),
  //   };
  // }

  // if (action.type === 'DECREASE') {
  //   return {
  //     ...state,
  //     cart: state.cart
  //       .map((item) => {
  //         return item.id === action.payload
  //           ? { ...item, amount: item.amount - 1 }
  //           : item;
  //       })
  //       .filter((item) => item.amount > 0),
  //   };
  // }
  ////////////////

  if (action.type === 'GET_TOTALS') {
    return {
      ...state,
      amount: state.cart.reduce((acc, curVal) => acc + curVal.amount, 0),
      total: state.cart.reduce((acc, curVal) => {
        const total = parseFloat(
          (acc + curVal.price * curVal.amount).toFixed(2)
        );
        return total;
      }, 0),
    };
  }

  if (action.type === 'DISPLAY_DATA') {
    return {
      ...state,
      cart: action.payload,
      loading: false,
    };
  }

  throw new Error('No matching action type');
};

export default reducer;
