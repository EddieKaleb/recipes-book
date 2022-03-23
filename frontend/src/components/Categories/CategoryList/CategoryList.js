import { CategoryItem } from '../CategoryItem/CategoryItem'

import './CategoryList.css'

export const CategoryList = () => {
  return (
    <div className="page">
      <div className="navbar navbar-page">
        <div className="navbar-inner sliding">
          <div className="left">
            <a href="#" className="link back">
              <i className="ti-arrow-left"></i>
            </a>
          </div>
          <div className="title">Categories</div>
        </div>
      </div>
      <div className="page-content">
        <div className="categories segments-page">
          <div className="container">
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
          </div>
        </div>
      </div>
    </div>
  )
}
