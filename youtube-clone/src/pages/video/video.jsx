import React from 'react';
import Toggle from "../../components/toggle/toggle";
import Datahook from "../../hooks/datahook";
import './video.scss'
import NVideocard from "../../components/subcomponents/videocard/videocard2";
import Profile1 from '../../assets/images/video/profile.png'
import Like from '../../assets/images/video/like.svg'
import Dislike from '../../assets/images/video/dislike.svg'
import Share from '../../assets/images/video/share.svg'
import More from '../../assets/images/video/more.svg'
import {Link} from "react-router-dom";

const Video = () => {
    const data = Datahook();
    const Cards = data.map((d) => <NVideocard key={d.id} title={d.title} cover={d.thumbnailUrl} widths={367}
                                              heights={213}/>);

    return (
        <div className={'video'}>
            <div className={'video__left'}>
                <div className={'video__youtube'}>
                    <iframe width="1366" height="700" src="https://www.youtube.com/embed/TcMBFSGVi1c?start=1"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <div className={'video__like'}>
                    <div className={"video__name"}>Dude You Re Getting A Telescope</div>
                    <div className={'video__like--content'}>
                        <div className={'video__like--left'}>123k views</div>
                        <div className={'video__like--right'}>
                            <button className={'video__like--button'} type={"button"}>
                                <img src={Like} alt={'likebtn'}/>
                                <span className={'video__like--margin'}> 123k</span>
                            </button>
                            <button className={'video__like--button'} type={"button"}>
                                <img src={Dislike} alt={'Dislike'}/>
                                <span className={'video__like--margin'}> 435k</span>
                            </button>
                            <button className={'video__like--button'} type={"button"}>
                                <img src={Share} alt={'Share'}/>
                                <span className={'video__like--margin'}> Share</span>
                            </button>
                            <button className={'video__like--moree'} type={"button"}>
                                <img src={More} alt={'More'}/>
                            </button>

                        </div>
                    </div>
                </div>
                <hr/>
                <div className={'video__summary'}>
                    <div className={"video__summary--left"}>
                        <div className={'video__image'}>
                            <img src={Profile1} alt={"logo"} width={80} height={80}/>
                        </div>
                        <div className={'video__channelinfo'}>
                            <div>
                                <Link className={'video__channelname'} to={'/channel'}>
                                    Food & Drink
                                </Link>
                            </div>
                            <div className={'video__release'}>Published on 14 Jun 2019</div>
                            A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing
                            result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers
                            to take action. There is no magic formula to write perfect ad copy; it is based on a number
                            of factors, including ad placement, demographic, even the consumer’s mood when they see your
                            ad.
                            <div>
                                <button className={'video__showmore'}>Show more</button>
                            </div>
                        </div>
                    </div>
                    <div className={"video__summary--right"}>
                        <button className={"channel__right--button"} type={"button"}>Subscribe 2.3m</button>
                    </div>
                </div>
            </div>
            <div className={'video__right'}>
                <div className={'video__toggle'}>
                    <p className={'video__toggle--header'}>Next</p>
                    <Toggle/>
                </div>
                <ul className={"video__list"}>
                    {Cards}
                </ul>
            </div>
        </div>
    );
};

export default Video;