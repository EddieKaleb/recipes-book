import './CategoryItem.css'

export const CategoryItem = ({ category }) => {
  return (
    <div className="content">
      <a href="#">
        <img src={category.url_imagem} alt="" />
        <div className="mask"></div>
        <div className="title">
          <h4>{category.descricao}</h4>
        </div>
      </a>
    </div>
  )
}
