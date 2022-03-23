import './RecipeItem.css'

export const RecipeItem = () => {
  return (
    <div className="content">
      <img src="images/menu1.jpg" alt="" />
      <div className="text">
        <a href="#">
          <h4>Peanut Egg</h4>
        </a>
        <span>Asian Food</span>
        <p className="price">$8.00</p>
      </div>
    </div>
  )
}
