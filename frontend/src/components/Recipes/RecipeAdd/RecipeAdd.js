import './RecipeAdd.css'

export const RecipeAdd = () => {
  return (
    <div className="page">
      <div className="navbar navbar-page">
        <div className="navbar-inner sliding">
          <div className="left">
            <a href="#" className="link back">
              <i className="ti-arrow-left"></i>
            </a>
          </div>
          <div className="title">Add New Recipe</div>
        </div>
      </div>
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
                <input type="text" placeholder="Directions (Steps)*" required />
              </div>

              <div className="item-input-wrap">
                <input type="text" placeholder="Cook's Notes (Observations)" />
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
