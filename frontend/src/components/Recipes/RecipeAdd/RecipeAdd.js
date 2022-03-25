import { Title } from '../../Title/Title'
import './RecipeAdd.css'

export const RecipeAdd = () => {
  return (
    <div className="page">
      <Title title={'Add New Recipe'} />

      <div className="page-content">
        <div className="reservation segments-page">
          <div className="container">
            <form className="list">
              <div className="item-input-wrap">
                <input type="text" placeholder="Title*" required />
              </div>
              <div className="item-input-wrap input-dropdown-wrap">
                <select placeholder="Category" required>
                  <option value="" disabled selected>
                    Select a category*
                  </option>
                  <option value="1">Doces e Salgados</option>
                </select>
              </div>

              <div className="item-input-wrap">
                <input type="text" placeholder="Cook (minutes)*" required />
              </div>
              <div className="item-input-wrap">
                <input
                  type="text"
                  placeholder="Servings (yield/quantity)*"
                  required
                />
              </div>
              <div className="item-input-wrap">
                <input type="text" placeholder="Ingredients*" required />
              </div>
              <div className="item-input-wrap">
                <textarea
                  rows="5"
                  type="text"
                  placeholder="Directions (steps)*"
                  required
                />
              </div>

              <div className="item-input-wrap">
                <textarea rows="5" placeholder="Cook's Notes (observations)" />
              </div>
              <div className="item-input-wrap">
                <input type="text" placeholder="Image URL" />
              </div>
              <div className="item-input-wrap">
                <input type="text" placeholder="Video URL" />
              </div>

              <button className="button">
                <i className="ti-clipboard"></i>Save Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
