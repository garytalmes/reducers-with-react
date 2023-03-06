import { useReducer } from "react"
import { login } from '../utils/simulateLogin';

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

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const LoginReducerPage = (props) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { email, password, isLoading, error, isLoggedIn } = state;

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    dispatch({ type: 'login' });

    try {
      await login({ email, password })
      dispatch({ type: 'success' });
    } catch(err) {
      dispatch({ type: 'error' });
    }
  }

  return (
    <div className="viewport" style={{padding: "4em 30%", backgroundColor: "#444", height: "100vh"}}>
      <div className="container" style={{backgroundColor: "white", padding: "1em"}}>
        <div className="row">
          <div className="col-12">

            { isLoggedIn === true ? (
              <>
                <h1>Welcome!</h1>
                <button 
                  className="btn btn-primary" 
                  onClick={ () =>  dispatch({ type: 'logout' }) }
                >
                  Log Out
                </button>
              </>
            ) : (
              <form className="form" onSubmit={handleFormSubmit}>

                { error.length > 0 && (
                  <p style={{border: "1px solid red", padding: ".75em"}}>{ error }</p>
                )}

                <div className="form-group" style={{marginBottom: "1em"}}>
                  <label>Email Address</label>
                  <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="johndoe@gmail.com"
                    value={email}
                    onChange={(e) =>
                      dispatch({
                        type: "field",
                        fieldName: "email",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group" style={{marginBottom: "1em"}}>
                  <label>Password</label>
                  <input 
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      dispatch({
                        type: "field",
                        fieldName: "password",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-group">
                  <button 
                    className="btn btn-primary" 
                    disabled={isLoading}
                  >
                    { isLoading === true ? "Logging in..." : "Log In" }
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginReducerPage