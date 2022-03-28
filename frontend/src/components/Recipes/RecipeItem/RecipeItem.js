import './RecipeItem.css'

export const RecipeItem = ({ recipe }) => {
  return (
    <div className="content">
      <div
        className="fig"
        style={{ backgroundImage: `url(${recipe.url_imagem})` }}
      ></div>
      <div className="text">
        <a href="#">
          <h4 className="recipe-title">{recipe.titulo}</h4>
        </a>

        <p className="price">
          <i className="ti-timer">&nbsp;</i>
          {recipe.tempo_preparo} min&nbsp;&nbsp;&nbsp;
          <i className="ti-server">&nbsp;</i>
          {recipe.rendimento} servings
        </p>
      </div>
    </div>
  )
}
