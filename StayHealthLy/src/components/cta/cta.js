import image from "../../assets/img/right.png"
export default function cta() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__container">
          <div className="cta__contact">
            <div className="cta__left">
              <h2 className="cta__header">
              Become a member of this workout class
              </h2>
              <form method="post" className="cta__form">
                <input className="cta__email" type="email" name="email" id="email" placeholder="Email Address" required="required"/>
                <input className="cta__btn" type="submit" value="Join Now"/>
              </form>
            </div>
            <div className="cta__right">
              <img src={image} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
   )
}
