import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar navbar-home">
      <div className="navbar-inner">
        <div className="block">
          <div className="row">
            <div className="col-3">
              <a href="/pages/" className="link">
                <i className="ti-menu"></i>
              </a>
            </div>
            <div className="col-3">
              <a href="/categories/" className="link">
                <i className="ti-home"></i>
              </a>
            </div>
            <div className="col-3">
              <a href="/search/" className="link">
                <i className="ti-search"></i>
              </a>
            </div>
            <div className="col-3">
              <a href="/reservation/" className="link">
                <i className="ti-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
