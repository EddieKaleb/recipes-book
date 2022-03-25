import { Title } from '../../Title/Title'
import './RecipeDetail.css'

export const RecipeDetail = () => {
  return (
    <div className="page">
      <Title title={"Recipe's Details"} />
      <div className="page-content">
        <div className="restaurant">
          <div className="container">
            <div className="content">
              <a href="/restaurant-single/">
                <img
                  src="https://pbs.twimg.com/media/ExKoiIdWQAM5No1?format=jpg&name=large"
                  alt=""
                />
                <span className="mask"></span>
                <div className="title">
                  <h4>Cuscuz de Lilian</h4>
                  <span className="subtitle">
                    <i className="ti-timer"></i>4 min&nbsp;|&nbsp;
                    <i className="ti-server"></i>10 servings&nbsp;|&nbsp;
                    <i className="ti-book"></i>Bolos e Massas
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
                  src={'https://www.youtube.com/embed/AYdFb6rD6K0'}
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
                  <div className="content-text">
                    Cuscuz (400g); Cimento (100g); Areia (50g); Água (1ml);
                    Brita (50g)
                  </div>
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
                  <div className="content-text">
                    Junte tudo e coloque no fogão
                  </div>
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
                  <div className="content-text">
                    Não deixar molhado, espere ficar seco
                  </div>
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
