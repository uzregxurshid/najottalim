import card from '../../assets/img/card/first.jpg'
import card1 from '../../assets/img/card/second.jpg'
import card2 from '../../assets/img/card/third.jpg'

export default function pricing() {
  return (
    <section className="pricing">
      <div className="container">
        <div className="pricing__container">
          <div className="pricing__top">
            <p className="pricing__text">
              PRICING
            </p>
            <h2 className="pricing__header">
              CHOOSE YOUR PACKAGE FOR WORKOUT
            </h2>
          </div>
          <div className="pricing_bottom">
            <ul className="pricing__list">
              <li className="pricing__items">
                <div className="pricing__card">
                  <div className="pricing__card--body">
                    <h3 className="pricing__card--plan">Basic</h3>
                    <img className="pricing__card--img" width="188" height="120"  src={card} alt="The Rock" />
                    <p className="pricing__card--name">
                      The Rock
                    </p>
                    <ul className="pricing__card--list">
                      <li className="pricing__card--item">3 Times A Week</li>
                      <li className="pricing__card--item">Full Zoom</li>
                      <li className="pricing__card--item">PDF Module</li>
                      <li className="pricing__card--item">Meal Preparation</li>
                    </ul>
                  </div>
                <div className="pricing__card--bottom">
                  <div className="pricing__card--cost">
                  Rp500.000
                    <span className="pricing__card--mini">
                      /month
                    </span>
                  </div>
                    <a className="pricing__card--btn" href="#">
                      Workout Now
                    </a>
                </div>
                </div>
              </li>
              <li className="pricing__items">
                <div className="pricing__card">
                  <div className="pricing__card--body">
                    <h3 className="pricing__card--plan">Standart</h3>
                    <img className="pricing__card--img" width="188" height="120"  src={card1} alt="Anna Jane" />
                    <p className="pricing__card--name">
                      Anna Jane
                    </p>
                    <ul className="pricing__card--list">
                      <li className="pricing__card--item">4 Times A Week</li>
                      <li className="pricing__card--item">Full Zoom</li>
                      <li className="pricing__card--item">PDF Module</li>
                      <li className="pricing__card--item">Meal Preparation</li>
                      <li className="pricing__card--item">Suplement</li>
                    </ul>
                  </div>
                <div className="pricing__card--bottom">
                  <div className="pricing__card--cost">
                  Rp1000.000
                    <span className="pricing__card--mini">
                      /month
                    </span>
                  </div>
                    <a className="pricing__card--btn" href="#">
                      Workout Now
                    </a>
                </div>
                </div>
              </li>
              <li className="pricing__items">
                <div className="pricing__card">
                  <div className="pricing__card--body">
                    <h3 className="pricing__card--plan">Premium</h3>
                    <img className="pricing__card--img" width="188" height="120"  src={card2} alt="The Rock" />
                    <p className="pricing__card--name">
                      The Rock
                    </p>
                    <ul className="pricing__card--list">
                      <li className="pricing__card--item">4 Times A Week</li>
                      <li className="pricing__card--item">Full Zoom</li>
                      <li className="pricing__card--item">PDF Module</li>
                      <li className="pricing__card--item">Meal Preparation</li>
                      <li className="pricing__card--item">Suplement</li>
                      <li className="pricing__card--item">Gym Equipment</li>
                    </ul>
                  </div>
                <div className="pricing__card--bottom">
                  <div className="pricing__card--cost">
                  Rp2000.000
                    <span className="pricing__card--mini">
                      /month
                    </span>
                  </div>
                    <a className="pricing__card--btn" href="#">
                      Workout Now
                    </a>
                </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
