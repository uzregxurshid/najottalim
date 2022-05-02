import image from "../../assets/img/nutr.png"
export default function nutriton() {
    return (
      <section className="nutrition">
        <div className="container">
          <div className="nutrition__container">
            <div className="nutrition__left">
              <img className="nutrition__img" src={image} alt="nutrition"  width="605" height="484"/>
            </div>
            <div className="nutrition__right">
              <p className="nutrition__text">
              Nutritions
              </p>
              <h2 className="nutrition__header">
              meal preparation for workout
              </h2>
              <p className="nutrition__content">
              Don’t worry we have the best nutritionist for your workout, firstly consult with our experts, we can make your meal preparation based on Total Daily Energy Expenditure.
              </p>
              <a className="nutrition__btn" href="#">Join Now</a>
            </div>
          </div>
        </div>
      </section>
      
  )
}
