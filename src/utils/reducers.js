

const loginReducer = (state, action) => {

  switch(action.type){
    case "field":
    return {
      ...state,
      [action.fieldName]: action.payload
    }

    case "login":
    return {
      ...state,
      error: "",
      isLoading: true
    }

    case "success":
    return {
      ...state,
      isLoggedIn: true,
      isLoading: false
    }

    case "error":
    return {
      ...state,
      error: "Incorrect credentials!",
      isLoggedIn: false,
      isLoading: false,
      email: "",
      password: ""
    }

    case "logout":
    return {
      ...state,
      isLoggedIn: false,
    };

    default:
    return state;
  }
}

export {
  loginReducer
}