import {NavLink} from "react-router-dom";
import Profile1 from "../../assets/images/avatar/avatarff.png";
import Left from "../../assets/images/main/left";
import Right from "../../assets/images/main/right";
import Profile2 from "../../assets/images/main/foods.png";
import "./main.scss"
import {useRef} from "react";
import Videocard from "../../components/subcomponents/videocard/videocard";
import Datahook from "../../hooks/datahook";

const Main = () => {
    const list = useRef();
    const data=Datahook();
    const Cards = data.map((d) => <Videocard key={d.id} title={d.title} cover={d.thumbnailUrl} widths={250} heights={150}/>);
    const Recommended = data.map((d) => <Videocard key={d.id} title={d.title} cover={d.thumbnailUrl} widths={540} heights={250}/>);

    return (
        <div className={"main"}>
            <div className={"container"}>
                <div className={"main__container"}>
                    <div className={"main__top"}>
                        <div className={"main__top--head"}>
                            <div className={"main__channel"}>
                                <NavLink className={"main__channel--link"} to={"/channel"}>
                                    <img className={"main__channel--image"} src={Profile1} alt={"channel"} width={50}
                                         height={50}/>
                                    <div className={"main__channel--name"}>Dollie Blair</div>
                                </NavLink>
                            </div>
                            <div className={"main__btngroup"}>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Left/>
                                </button>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Right/>
                                </button>
                            </div>
                        </div>
                        <ul ref={list} className={"main__list"}>
                            {Cards}
                        </ul>
                    </div>
                    <div className={"main__middle"}>
                        <div className={"main__top--head"}>
                            <div className={"main__channel"}>
                                    <div className={"main__channel--name "}>Recommended</div>
                            </div>
                            <div className={"main__btngroup"}>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Left/>
                                </button>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Right/>
                                </button>
                            </div>
                        </div>
                        <ul ref={list} className={"main__list"}>
                            {Recommended}
                        </ul>
                    </div>
                    <div className={"main__bottom"}>
                        <div className={"main__top--head"}>
                            <div className={"main__channel"}>
                                <NavLink className={"main__channel--link"} to={"/channel"}>
                                    <img className={"main__channel--image"} src={Profile2} alt={"channel"} width={50}
                                         height={50}/>
                                    <div className={"main__channel--name"}>Food & Drink</div>
                                </NavLink>
                            </div>
                            <div className={"main__btngroup"}>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Left/>
                                </button>
                                <button className={"main__btn"} type={"button"} aria-hidden={"true"}>
                                    <Right/>
                                </button>
                            </div>
                        </div>
                        <ul ref={list} className={"main__list"}>
                            {Cards}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;