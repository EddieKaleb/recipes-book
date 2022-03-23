import { RecipeItem } from '../RecipeItem/RecipeItem'
import './RecipeList.css'

export const RecipeList = () => {
  return (
    <div className="popular-menu segments">
      <div className="container">
        <div className="section-title">
          <h3>
            My Recipes
            <a href="#" className="see-all-link">
              See Categories
            </a>
          </h3>
        </div>
        <div className="row">
          <div className="col">
            <RecipeItem />
          </div>
          <div className="col">
            <RecipeItem />
          </div>
          <div className="col">
            <RecipeItem />
          </div>
          <div className="col">
            <RecipeItem />
          </div>
        </div>
      </div>
    </div>
  )
}
