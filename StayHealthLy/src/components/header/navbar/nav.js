import logo from "../../../assets/img/logo.svg"

function navbar() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar__left">
          <img className="navbar__image" src={logo} alt="logo" width="156" height="36" />
        </div>

        <div className="navbar__center">
          <ul className="navbar__list">
            <li className="navbar__items">
              <a className="navbar__links navbar__links--active" href="#">
                Home
              </a>
            </li>
            <li className="navbar__items">
              <a className="navbar__links" href="#">
                Program
              </a>
            </li>
            <li className="navbar__items">
              <a className="navbar__links" href="#">
                Nutritions
              </a>
            </li>
            <li className="navbar__items">
              <a className="navbar__links" href="#">
                Pricing
              </a>
            </li>
            <li className="navbar__items">
              <a className="navbar__links" href="#">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__btn">
          <a className="navbar__button" href="#">
            Join Now
          </a>
        </div>
      </nav>
    </div>
  )
}

export default navbar;