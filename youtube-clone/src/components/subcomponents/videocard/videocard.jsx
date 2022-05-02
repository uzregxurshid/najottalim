import React from 'react';
import {Link} from "react-router-dom";
import "./videocard.scss"
const Videocard = ({cover,title, widths, heights}) => {
    const mystyle={
        width:widths,
        height:heights
    }
    const itemw={
        width: widths,
    }
    return (
        <li className={"main__item"} style={itemw}>
            <Link className={"main__item--video"} to={"/video/2"}>
                <img className={"main__item--image"} src={cover} width={widths} height={heights}
                     alt={"asdfasdf"} style={mystyle}/>
                <div className={"main__item--title"}>{title}</div>
                <div className={"main__item--summary"}>
                    <div>
                        <span className={"main__item--view"}>80k views</span>
                        <span className={"main__item--date"}>3 days ago</span>
                    </div>
                    <span className={"main__item--channel"}> Dollie Blair</span>
                </div>
            </Link>
        </li>
    );
};

export default Videocard;