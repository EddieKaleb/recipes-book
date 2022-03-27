import { useState } from 'react'
import { Title } from '../../Title/Title'
import './RecipeDetail.css'

export const RecipeDetail = () => {
  const [recipe, setRecipe] = useState({
    id: 1,
    titulo: 'Cuscuz de Lilian',
    tempo_preparo: 5,
    rendimento: 10,
    categoria: {
      id: 1,
      descricao: 'Bolos e Massas',
    },
    usuario: {
      nome: 'Eddie',
    },
    ingredientes:
      'Cuscuz (400g); Cimento (100g); Areia (50g); Água (1ml); Brita (50g)',
    modo_preparo: 'Junte tudo e coloque no fogão',
    observacoes: 'Não deixar molhado, espere ficar seco',
    url_imagem:
      'https://pbs.twimg.com/media/ExKoiIdWQAM5No1?format=jpg&name=large',
    data: '2022-04-26 10:00:00',
    url_video: 'https://www.youtube.com/embed/AYdFb6rD6K0',
  })

  return (
    <div className="page">
      <Title title={"Recipe's Details"} />
      <div className="page-content">
        <div className="restaurant">
          <div className="container">
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
                    {recipe.categoria.descricao}
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
                <iframe
                  height={400}
                  src={recipe.url_video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                ></iframe>
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
                  <div className="content-text">{recipe.observacoes}</div>
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
