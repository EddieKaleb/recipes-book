import './AuthSignUp.css'

export const AuthSignUp = () => {
  return (
    <div class="page">
      <div class="navbar navbar-page">
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back">
              <i class="ti-arrow-left"></i>
            </a>
          </div>
          <div class="title">Sign Up</div>
        </div>
      </div>
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
