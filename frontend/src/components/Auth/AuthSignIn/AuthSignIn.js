import { Link } from 'react-router-dom'

import './AuthSignIn.css'

export const AuthSignIn = () => {
  return (
    <div class="page">
      <div class="page-content">
        <div class="login segments-page">
          <div class="container">
            <div class="logos">
              <div class="image">
                <img src="images/logo.png" alt="" />
              </div>
            </div>
            <form class="list">
              <div class="item-input-wrap">
                <input type="email" placeholder="Email" required />
              </div>
              <div class="item-input-wrap no-mb">
                <input type="password" placeholder="Password" required />
              </div>

              <br />
              <button class="button">
                <i class="ti-shift-right"></i>Sign In
              </button>
            </form>

            <div class="register-link">
              <Link to="/signup">Or Sign Up Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
