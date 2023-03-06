import { useState } from "react"
import { login } from '../utils/simulateLogin';

const LoginPage = (props) => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState("")
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await login({ email, password })
      setIsLoggedIn(true)
    } catch(err) {
      setError("Incorrect credentials")
    }

    setIsLoading(false)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="viewport" style={{padding: "4em 30%", backgroundColor: "#444", height: "100vh"}}>
      <div className="container" style={{backgroundColor: "white", padding: "1em"}}>
        <div className="row">
          <div className="col-12">

            { isLoggedIn === true ? (
              <>
                <h1>Welcome!</h1>
                <button className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>Log Out</button>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group" style={{marginBottom: "1em"}}>
                  <label>Password</label>
                  <input 
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

export default LoginPage