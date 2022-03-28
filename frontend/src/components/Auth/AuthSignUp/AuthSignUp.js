import { Title } from '../../Title/Title'
import './AuthSignUp.css'

export const AuthSignUp = () => {
  return (
    <div className="page">
      <Title backTo={'/signin'} title={'Sign Up'} />
      <div className="page-content">
        <div className="register segments-page">
          <div className="container">
            <form className="list">
              <div className="item-input-wrap">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="item-input-wrap">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="item-input-wrap">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="item-input-wrap">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button className="button">
                <i className="ti-user"></i>Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
