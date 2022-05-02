import image from "../../assets/img/first.jpg";
import image1 from "../../assets/img/second.jpg";
import image2 from "../../assets/img/third.jpg";

import Article from "./article"
function program() {
  return (
    <section className="program">
      <div className="container">
        <div className="program__container">
          <p className="program__text">PROGRAMS</p>
          <h2 className="program__header">
           We Have a programs to help your workouts
          </h2>
        </div>
        <div className="program__articles">
          <ul className="program__list">
            <li className="program__items program__items--side">&lt;</li>
            <li className="program__items">
              <Article src={image} 
              head="Full Body Workout"
              name="By The Rock"
              text="You can do it in your own home, all in under 30 mins? just need a mat and som . . ."
              link="Check out this program!"
              />
            </li>
            <li className="program__items">
              <Article src={image1} 
              head="Bodyweight Workout"
              name="By Timi Tarner"
              text="No need equipments, just your body, your soul, and your spirit. You can do . . ."
              link="Check out this program!"
              />
            </li>
            <li className="program__items">
              <Article src={image2} 
              head="Dumbell Workout"
              name="By Frank Jane"
              text="This is a workout you can do at home just using a set of barbells. The workout is . . ."
              link="Check out this program!"
              />
            </li>
            <li className="program__items program__items--side">&gt;</li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default program;
