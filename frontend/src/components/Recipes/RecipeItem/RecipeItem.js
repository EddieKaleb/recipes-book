import './RecipeItem.css'

export const RecipeItem = ({ recipe }) => {
  return (
    <div className="content">
      <img src={recipe.url_imagem} alt="" />
      <div className="text">
        <a href="#">
          <h4>{recipe.titulo}</h4>
        </a>
        <span>{recipe.categoria.descricao}</span>
        <p className="price">
          {recipe.tempo_preparo} min {recipe.rendimento} porções
        </p>
      </div>
    </div>
  )
}
