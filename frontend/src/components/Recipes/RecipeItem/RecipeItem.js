import { useEffect, useState } from 'react'
import './RecipeItem.css'

export const RecipeItem = ({ recipe }) => {
  const [recipeCategory, setRecipeCategory] = useState({})

  useEffect(() => {
    const getRecipeCategory = async () => {
      const recipeCategoryFromServer = await fetchRecipeCategory()
      setRecipeCategory(recipeCategoryFromServer)
    }

    getRecipeCategory()
  }, [])

  const fetchRecipeCategory = async () => {
    const res = await fetch(
      `http://localhost:3000/categorias/buscar/${recipe.id_categoria}`,
    )
    const data = await res.json()

    return data
  }

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
        <span>{recipeCategory.descricao}</span>
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
