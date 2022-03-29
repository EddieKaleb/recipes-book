import { useEffect, useState } from 'react'
import { Title } from '../../Title/Title'
import { useParams, useNavigate } from 'react-router-dom'

import './RecipeDetail.css'

export const RecipeDetail = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    const getRecipe = async () => {
      const recipeFromServer = await fetchRecipe()
      setRecipe(recipeFromServer)
    }

    getRecipe()
  }, [])

  const fetchRecipe = async () => {
    const { id } = params

    const res = await fetch(`http://localhost:3000/receitas/buscar/${id}`)

    const data = await res.json()

    return data
  }

  const deleteRecipe = async (id) => {
    await fetch(`http://localhost:3000/receitas/excluir/${id}`, {
      method: 'DELETE',
    })

    navigate('/')
  }

  const editRecipe = async (id) => {
    navigate(`/recipes/edit/${id}`)
  }

  return (
    <div className="page">
      <Title backTo={'/'} title={"Recipe's Details"} />
      <div className="page-content">
        <div className="restaurant">
          <div className="container">
            <div className="actions">
              <i
                className="ti-pencil"
                onClick={() => editRecipe(recipe.id)}
              ></i>
              <i
                className="ti-trash"
                onClick={() => deleteRecipe(recipe.id)}
              ></i>
            </div>
            <div className="content">
              <a href="#">
                <img src={recipe.url_imagem} />
                <span className="mask"></span>
                <div className="title">
                  <h4>{recipe.titulo}</h4>
                  <span className="subtitle">
                    <i className="ti-timer"></i>
                    {recipe.tempo_preparo} min&nbsp;|&nbsp;
                    <i className="ti-server"></i> servings&nbsp;|&nbsp;
                    <i className="ti-book"></i>
                    {/*recipe.categoria.descricao*/}
                    <br />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="restaurant-single">
          <div className="container">
            <div className="resto-menu new-menu">
              <div className="wrap-title">
                <h3>
                  <i className="ti-video-camera" />
                  &nbsp;Recipe's Video
                </h3>
              </div>
              <div className="row content-text">
                {recipe.url_video ? (
                  <iframe
                    height={400}
                    src={recipe.url_video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  ></iframe>
                ) : (
                  <span>-</span>
                )}
              </div>
            </div>

            <div className="resto-menu new-menu">
              <div className="wrap-title">
                <h3>
                  <i className="ti-apple" />
                  &nbsp;Ingredients
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  <div className="content-text">{recipe.ingredientes}</div>
                </div>
              </div>
            </div>

            <div className="resto-menu new-menu">
              <div className="wrap-title">
                <h3>
                  <i className="ti-menu-alt" />
                  &nbsp;Directions (steps)
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  <div className="content-text">{recipe.modo_preparo}</div>
                </div>
              </div>
            </div>

            <div className="resto-menu new-menu">
              <div className="wrap-title">
                <h3>
                  <i className="ti-receipt" />
                  &nbsp;Cook Notes (observations)
                </h3>
              </div>
              <div className="row">
                <div className="col">
                  {recipe.observacoes ? (
                    <div className="content-text">{recipe.observacoes}</div>
                  ) : (
                    <span>-</span>
                  )}
                </div>
              </div>
            </div>

            <div className="new-menu">
              <div className="container-link wrap-title">
                <h3>
                  <i className="red-icon ti-share" />
                  &nbsp;
                  <a className="share-link" href="">
                    Share Recipe
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
