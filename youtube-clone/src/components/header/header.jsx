import { NavLink } from "react-router-dom";
import MenuIcon from "../../assets/images/header/menu.svg";
import Logo from '../../assets/images/header/logo.png';
import Search from "../../assets/images/header/search.svg"
import Video from "../../assets/images/header/video.svg";
import More from "../../assets/images/header/more.svg";
import Notification from "../../assets/images/header/alert.svg"
import Avatart from "../../assets/images/avatar/header.png";
import "./header.scss"
const Header = () => {
    return (
        <>
            <header>
                <div className={"header"}>
                    <div className={"header__left"}>

                        {/*Gamburger button*/}
                        <button className="header__hamburger" type="button" aria-hidden={true}>
                            <img className="header__hamburger--image" src={MenuIcon} alt={"hamburger_button"} />
                        </button>

                        {/*Logo*/}
                        <div className={"header__logo"}>
                            <NavLink className={"header__logo--link"} to={"/"}>
                                <img className={"header__logo--image"} src={Logo} alt={"Logo"} width={116} height={25} />
                            </NavLink>
                        </div>

                        {/*Search bar*/}
                        <div className={"header__search"}>
                            <input className={"header__search--input"} type={"search"} placeholder={"Search"} />
                            <img className={"header__search--image"} src={Search} alt={"search"} />
                        </div>

                    </div>
                    <div className="header__right">

                        {/*Buttons*/}
                        <div className={"header__btngroup"}>
                            <ul className={"header__btn--list"}>
                                <li className={"header__btn--item"}>
                                    <button className={"header__btns"} type={"button"} aria-hidden={"true"}>
                                        <img src={Video} alt={"header button"} />
                                    </button>
                                </li>
                                <li className={"header__btn--item"}>
                                    <button className={"header__btns"} type={"button"} aria-hidden={"true"}>
                                        <img src={More} alt={"header button"} />
                                    </button>
                                </li>
                                <li className={"header__btn--item"}>
                                    <button className={"header__btns"} type={"button"} aria-hidden={"true"} >
                                        <img src={Notification} alt={"header button"} />
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/*Avatar*/}
                        <div className={"header__avatar"}>
                            <button className={"header__avatar--button"} type={"button"}>
                                <img className={"header__avatar--image"} src={Avatart} alt={"avatar"} width={40} height={40} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;