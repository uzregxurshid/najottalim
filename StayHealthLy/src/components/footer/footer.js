import logo from "../../assets/img/logo.svg"
import youtube from "../../assets/img/footer/youtube.svg"
import facebook from "../../assets/img/footer/facebook.svg"
import instagram from "../../assets/img/footer/instagram.svg"
export default function footer() {
  return (
    <footer className="footer">
      <div className="footer__divide"></div>
      <div className="container">
        <div className="footer__container">
          <div className="footer__left">
            <img className="footer__logo" src={logo} alt="logo"/>
            <p className="footer__text">
            Online Training, and Consultation About Diet and Exercise tailored based on user needs. 
            </p>
            <ul className="footer__social--list">
              <li className="footer__social--items">
                <a className="footer__social--links" href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
              <li className="footer__social--items">
                <a className="footer__social--links" href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li className="footer__social--items">
                <a className="footer__social--links" href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <ul className="footer__list">
              <li className="footer__items">
                   Product
                <ul className="footer__products">
                  <li className="footer__products--items">
                    <a className="footer__products--link" href="#">
                      Gym Equipment
                    </a>
                  </li>
                  <li className="footer__products--items">
                    <a className="footer__products--link" href="#">
                      Suplement
                    </a>
                  </li>
                  <li className="footer__products--items">
                    <a className="footer__products--link" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer__items">
                Explore Us
                <ul className="footer__explore">
                  <li className="footer__explore--items">
                    <a className="footer__explore--link" href="#">
                     FAQ
                    </a>
                  </li>
                  <li className="footer__explore--items">
                    <a className="footer__explore--link" href="#">
                     Privacy Policy
                    </a>
                  </li>
                  <li className="footer__explore--items">
                    <a className="footer__explore--link" href="#">
                      Term and Conditions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer__items">
                Contact
                <ul className="footer__contact">
                  <li className="footer__contact--items">
                    <a className="footer__contact--link" href="mailto:hi@stayhealthy.com">
                      hi@stayhealthy.com
                    </a>
                  </li>
                  <li className="footer__contact--items">
                    <a className="footer__contact--link" href="tel:021-123-636">
                      021-123-636
                    </a>
                  </li>
                  <li className="footer__contact--items">
                    <a className="footer__contact--link" href="https://stayhealthy.com">
                      stayhealthy.com
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>  
  )
}
