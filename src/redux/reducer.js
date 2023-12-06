// const initialState = {
//   counter: "0",
// };
//  const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INC":
//       return { ...state, counter: state.counter + 1 };

//       case "DEC":
//         return { ...state, counter: state.counter + 1 };

//         case "MUL":
//             return { ...state, counter: state.counter * 2 };

//             case "RESET":
//                 return { ...state, counter: state.counter = 0 };

//     default:
//       return state;
//   }
// };

// export default reducer;
// ./redux/reducer.js

const initialState = {
    counter: 0,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "INC":
        return { ...state, counter: state.counter + 1 };
      case "DEC":
        return { ...state, counter: state.counter > 0 ? state.counter - 1 : 0};
      case "MUL":
        return { ...state, counter: state.counter * 2 };
      case "RESET":
        return { ...state, counter: 0 };
  
      default:
        return state;
    }
  };
  