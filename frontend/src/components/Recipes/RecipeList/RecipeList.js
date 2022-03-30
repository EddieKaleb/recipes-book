import { useState, useEffect } from 'react'

import { Link, useLocation, useParams } from 'react-router-dom'
import { Title } from '../../Title/Title'

import { RecipeItem } from '../RecipeItem/RecipeItem'

import './RecipeList.css'

export const RecipeList = ({ search }) => {
  const location = useLocation()
  const params = useParams()

  const [recipes, setRecipes] = useState([])

  const [searchedRecipes, setSearchedRecipes] = useState([])

  useEffect(() => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes()
      setRecipes(recipesFromServer)
    }

    const getSearchRecipes = async () => {
      const recipesFromServer = await fetchSearchedRecipes()
      setSearchedRecipes(recipesFromServer)
    }

    const getRecipesByCategory = async () => {
      const recipesFromServer = await fetchRecipesByCategory()
      setSearchedRecipes(recipesFromServer)
    }

    if (location.pathname === '/') {
      getRecipes()
    } else if (location.pathname.includes('/recipes/categories')) {
      getRecipesByCategory()
    } else {
      getSearchRecipes()
    }
  }, [search])

  const fetchSearchedRecipes = async () => {
    if (search === undefined) return

    const res = await fetch(
      `http://localhost:3000/receitas/filtrar?titulo=${search}`,
    )

    return await res.json()
  }

  const fetchRecipes = async () => {
    const res = await fetch('http://localhost:3000/receitas')

    return await res.json()
  }

  const fetchRecipesByCategory = async () => {
    const { id } = params

    if (!id) return

    const res = await fetch(`http://localhost:3000/receitas/categorias/${id}`)

    return await res.json()
  }

  return (
    <div className="popular-menu segments">
      <div className="container">
        {location.pathname === '/' ? (
          <div className="section-title">
            <h3>
              <Link to="/categories" className="see-all-link">
                See Categories
              </Link>
            </h3>
          </div>
        ) : location.pathname.includes('/recipes/categories') ? (
          <Title backTo="/categories" title="Recipes from Category" />
        ) : (
          <span></span>
        )}
        <div className="row justify-content-md-center justify-content-lg-start">
          {location.pathname === '/' ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="col col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
              >
                <RecipeItem recipe={recipe} />
              </div>
            ))
          ) : searchedRecipes.length ? (
            searchedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="col col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3"
              >
                <RecipeItem recipe={recipe} />
              </div>
            ))
          ) : (
            <span>We haven't find any result!</span>
          )}
        </div>
      </div>
    </div>
  )
}
