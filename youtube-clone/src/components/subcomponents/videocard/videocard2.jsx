import React from 'react';
import {Link} from "react-router-dom";
import "./videocard2.scss"
const NVideocard = ({cover,title, widths, heights}) => {
    const mystyle={
        width:widths,
        height:heights
    }
    const itemw={
        width: widths,
    }
    return (
        <li className={"card__item"} style={itemw}>
            <Link className={"card__item--video"} to={"/video/2"}>
                <img className={"card__item--image"} src={cover} width={widths} height={heights}
                     alt={"asdfasdf"} style={mystyle}/>
                <div className={"card__item--title"}>{title}</div>
                <div className={"card__item--summary"}>
                    <div>
                        <span className={"card__item--view"}>80k views</span>
                        <span className={"card__item--date"}>3 days ago</span>
                    </div>
                    <span className={"card__item--channel"}> Dollie Blair</span>
                </div>
            </Link>
        </li>
    );
};

export default NVideocard;