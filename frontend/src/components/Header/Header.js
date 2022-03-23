import './Header.css'

export const Header = () => {
  return (
    <div className="title-header">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logos">
              <h2>Recipes Book</h2>
            </div>
          </div>
          <div className="col-2">
            <div className="icon-search">
              <a href="#">
                <i className="ti-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
