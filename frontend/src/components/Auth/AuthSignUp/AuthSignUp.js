import { Title } from '../../Title/Title'
import './AuthSignUp.css'

export const AuthSignUp = () => {
  return (
    <div class="page">
      <Title backTo={'/signin'} title={'Sign Up'} />
      <div class="page-content">
        <div class="register segments-page">
          <div class="container">
            <form class="list">
              <div class="item-input-wrap">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div class="item-input-wrap">
                <input type="email" placeholder="Email" required />
              </div>
              <div class="item-input-wrap">
                <input type="password" placeholder="Password" required />
              </div>
              <div class="item-input-wrap">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <button class="button">
                <i class="ti-user"></i>Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
