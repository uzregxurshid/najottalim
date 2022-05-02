import image1 from '../../../assets/img/train.jpg'

export default function introduct() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__container">
          <div className="intro__top">
            <p className="intro__text">WELCOME TO THE CLUB</p>
            <h1 className="intro__header">Choose Your Programs,<br /> Pick Your Meal, <br /> Let’s Get Healthy.</h1>
            <p className="intro__mot">
              StayHealty provides Online Training, and Consultation About Diet and Exercise tailored based on user needs. We will provide a training model that can be accessed anytime and anywhere with the best trainers.
            </p>
            <div className="intro__buttons">
              <a className="intro__btn intro__btn--join" href="#">Join Now</a>
              <a className="intro__btn intro__btn--contact" href="#">Contact Us</a>
            </div>
          </div>
          <div className="intro__vid">
              <img className="intro__image" src={image1} alt="train" width="1100" height="600" />
          </div>
        </div>
      </div>
    </section>
  )
}
