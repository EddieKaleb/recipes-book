import './AuthSignIn.css'

export const AuthSignIn = () => {
  return (
    <div class="page">
      <div class="navbar navbar-page">
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back">
              <i class="ti-arrow-left"></i>
            </a>
          </div>
          <div class="title">Login</div>
        </div>
      </div>
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
          </div>
        </div>
      </div>
    </div>
  )
}
