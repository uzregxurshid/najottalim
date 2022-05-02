import { Image} from "react-bootstrap";
import Comment from "../../img/events/comment.svg";
import Retweet from "../../img/events/retweet.svg";
import Like from "../../img/events/like.svg";
import Share from "../../img/events/share.svg";
import Statistics from "../../img/events/statistics.svg";
import More from "../../img/moreeee.svg";
const Tweet = ({avatar, name, retweetCount, commentCount, likeCount, text, username, rasm, eni, boyi}) => {
    return (
        <>
            <div className={"pt-2 py-1 px-4 mb-2 d-flex border-bottom border-black d-flex justify-content-between"}>
                <div>
                    <div className={"me-2"}><a href={"/profile"}><Image src={avatar} width={60}
                                                                        height={60}/></a></div>
                    <div>
                        <h6 className={"h6 fw-bold"}>{name} <span
                            className={"text-muted fs-6 fw-normal"}>{username}</span>
                        </h6>
                        <p>
                            {text}
                        </p>
                        <Image
                            src={rasm}
                            width={eni}
                            height={boyi}
                        />
                        <ul className={"list-unstyled d-flex"}>
                            <li className={"me-5"}>
                                <a className={"text-decoration-none text-muted"} href={"/profile"}>
                                    <Image src={Comment}/>
                                    <span>{commentCount}</span>
                                </a>
                            </li>
                            <li className={"me-5"}>
                                <a className={"text-decoration-none text-muted"} href={"/profile"}>
                                    <Image src={Retweet}/>
                                    <span>{retweetCount}</span>
                                </a>
                            </li>
                            <li className={"me-5"}>
                                <a className={"text-decoration-none text-muted"} href={"/profile"}>
                                    <Image src={Like}/>
                                    <span>{likeCount}</span>
                                </a>
                            </li>
                            <li className={"me-5"}>
                                <a className={"text-decoration-none text-muted"} href={"/profile"}>
                                    <Image src={Share}/>
                                </a>
                            </li>
                            <li className={"me-5"}>
                                <a className={"text-decoration-none text-muted"} href={"/profile"}>
                                    <Image src={Statistics}/>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div>
                    <a href={"/mooptions"}>
                        <Image src={More}/>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Tweet;