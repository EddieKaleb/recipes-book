import './Menu.css'

export const Menu = () => {
  return (
    <div class="page">
      <div class="navbar navbar-page">
        <div class="navbar-inner sliding">
          <div class="left">
            <a href="#" class="link back">
              <i class="ti-arrow-left"></i>
            </a>
          </div>
          <div class="title">Menu</div>
        </div>
      </div>
      <div class="page-content">
        <div class="pages segments-page">
          <div class="container">
            <div class="content">
              <ul>
                <li>
                  <a href="#" class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <span>Hello, Eddie!</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-home"></i>
                        <span>Home</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-plus"></i>
                        <span>New Recipe</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-apple"></i>
                        <span>Categories</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-shift-left"></i>
                        <span>Logout</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
