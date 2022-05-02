import './channel.scss'
import {Link} from "react-router-dom";
import Cover from '../../assets/images/channel/cover.png';
import Profile1 from '../../assets/images/channel/avatar.png';
import Profile2 from '../../assets/images/channel/avatar1.png';
import Profile3 from '../../assets/images/channel/avatar2.png';
import Profile4 from '../../assets/images/channel/avatar3.png';
import SearchIcon from '../../assets/images/channel/search.svg';
import Video from '../../assets/images/channel/video.png';
import Left from "../../assets/images/main/left";
import Right from "../../assets/images/main/right";
import Videocard from "../../components/subcomponents/videocard/videocard";
import Datahook from "../../hooks/datahook";

const Channel = () => {
    const data= Datahook();
    const datas = data.map((d) => <Videocard key={d.id} title={d.title} cover={d.thumbnailUrl} widths={250} heights={140}/>);
    return (
        <div className={"channel"}>
            <div className={"channel__cover"}>
                <img src={Cover} width={1595} height={280} style={{
                    width: "85vw"
                }} alt={'cover'}/>
            </div>
            <div className={"channel__top"}>
                <div className={"channel__left"}>
                    <div className={"channel__left--info"}>
                        <img className={"channel__left--image"} src={Profile1} alt={'Avatar'} width={80} height={80}/>
                        <div className={'channel__left--details'}>
                            <p className={"channel__left--name"}>Margaret Phelps</p>
                            <p className={"channel__left--subs"}>245K subscribed</p>
                        </div>
                    </div>
                </div>
                <div className={"channel__right"}>
                    <button className={"channel__right--button"} type={"button"}>Subscribe 2.3m</button>
                </div>
            </div>
            <div className={"channel__middle"}>
                <div className={"channel__middle--left"}>
                    <ul className={"channel__middle--list"}>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel"} className={'channel__middle--link'}>
                                Home
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel/:videos"} className={'channel__middle--link'}>
                                Videos
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel/:playlists"} className={'channel__middle--link'}>
                                Playlists
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel/:channels"} className={'channel__middle--link'}>
                                Channels
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel/:discussion"} className={'channel__middle--link'}>
                                Discussion
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <Link to={"/channel/:about"} className={'channel__middle--link'}>
                                About
                            </Link>
                        </li>
                        <li className={"channel__middle--items"}>
                            <button className={'channel__middle--button'}>
                                <img src={SearchIcon} alt={"search"}/>
                            </button>
                        </li>
                    </ul>

                    <div className={'channel__middle--content'}>
                        <div className={"channel__middle--contentleft"}>
                            <Link to={"/video/2"}  className={'channel__middle--contentvideo'}>
                                <img src={Video} alt={"Video"}/>
                            </Link>
                        </div>
                        <div className={"channel__middle--contentright"}>
                            <Link to={"/video/2"} className={'channel__middle--contenthead'}>
                                Choosing The Best Audio Player Software For Your Computer
                            </Link>
                            <div className={"channel__middle--contenttext"}>
                                Your cheap internet-based banner advertising will become one of the sought for ads there
                                are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and
                                intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of
                                banner ads.
                            </div>
                            <div className={'channel__middle--contentinfo'}>
                                <div>
                                    <span className={"main__item--view"}>80k views</span>
                                    <span className={"main__item--date"}>3 days ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"channel__middle--right"}>
                    <div className={"channel__middle--recommended"}>
                        Recommended channel
                    </div>
                    <ul className={"channel__middle--channellist"}>
                        <li className={'channel__middle--channelitems'}>
                            <img className={'channel__middle--channelimage'} src={Profile2} alt={"profile"}/>
                            <span className={"channel__middle--channelname"}>Flora Benson</span>
                        </li>
                        <li className={'channel__middle--channelitems'}>
                            <img className={'channel__middle--channelimage'} src={Profile3} alt={"profile"}/>
                            <span className={"channel__middle--channelname"}>Violet Cobb</span>
                        </li>
                        <li className={'channel__middle--channelitems'}>
                            <img className={'channel__middle--channelimage'} src={Profile4} alt={"profile"}/>
                            <span className={"channel__middle--channelname"}>Phillip Mullins</span>
                        </li>
                    </ul>
                </div>
            </div>
           <div className={"channel__bottom"}>
               <div className={"main__top--head channel__bottom--list"}>
                   <div className={"main__channel"}>
                       <div className={"main__channel--name "}>Margaret Phelps videos</div>
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
           </div>
            <ul className={'channel__list'}>
                {datas}
            </ul>
        </div>
    );
};

export default Channel;