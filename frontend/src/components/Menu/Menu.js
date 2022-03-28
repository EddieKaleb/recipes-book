import { Link, useLocation } from 'react-router-dom'

import { Title } from '../Title/Title'
import './Menu.css'

export const Menu = () => {
  return (
    <div class="page">
      <Title title="Menu" backTo={'/'} />
      <div class="page-content">
        <div class="pages segments-page">
          <div class="container">
            <div class="content">
              <ul>
                <li>
                  <a class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <span>Hello, Eddie!</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <Link to={'/'} class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-home"></i>
                        <span>Home</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/recipes/new-recipe'}
                    class="item-content item-link"
                  >
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-plus"></i>
                        <span>New Recipe</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to={'/categories'} class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-agenda"></i>
                        <span>Categories</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to={'/signin'} class="item-content item-link">
                    <div class="item-inner">
                      <div class="item-title">
                        <i class="ti-shift-left"></i>
                        <span>Logout</span>
                        <i class="ti-angle-right"></i>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
