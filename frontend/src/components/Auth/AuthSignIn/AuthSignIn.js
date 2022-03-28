import { Link } from 'react-router-dom'

import './AuthSignIn.css'

export const AuthSignIn = () => {
  return (
    <div className="page">
      <div className="page-content">
        <div className="login segments-page">
          <div className="container">
            <div className="logos">
              <div className="image">
                <img src="images/logo.png" alt="" />
              </div>
            </div>
            <form className="list">
              <div className="item-input-wrap">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="item-input-wrap no-mb">
                <input type="password" placeholder="Password" required />
              </div>

              <br />
              <button className="button">
                <i className="ti-shift-right"></i>Sign In
              </button>
            </form>

            <div className="register-link">
              <Link to="/signup">Or Sign Up Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
