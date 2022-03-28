import { useState, useEffect } from 'react'

import { Link, useLocation } from 'react-router-dom'

import { RecipeItem } from '../RecipeItem/RecipeItem'

import './RecipeList.css'

export const RecipeList = ({ search }) => {
  const location = useLocation()

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

    if (location.pathname === '/') {
      getRecipes()
    } else {
      getSearchRecipes()
    }
  }, [search])

  const fetchSearchedRecipes = async () => {
    if (search === undefined) return

    const res = await fetch(
      `http://localhost:3000/receitas/filtrar?titulo=${search}`,
    )

    const data = await res.json()

    return data
  }

  const fetchRecipes = async () => {
    const res = await fetch('http://localhost:3000/receitas')

    const data = await res.json()

    return data
  }

  return (
    <div className="popular-menu segments">
      <div className="container">
        {location.pathname === '/' ? (
          <div className="section-title">
            <h3>
              My Recipes
              <Link to="/categories" className="see-all-link">
                See Categories
              </Link>
            </h3>
          </div>
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
            <span>Nenhum resultado encontrado!</span>
          )}
        </div>
      </div>
    </div>
  )
}
