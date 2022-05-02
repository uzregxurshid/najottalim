export default function articles(props)
{
  return(
    <div className="program__card">
      <img className="program__card--img" width="350" height="240" src={props.src} alt="article_img"/>
        <div className="program__card--body">
          <h3 className="program__card--header">{props.head}</h3>
          <p className="program__card--name">{props.name}</p>
          <p className="program__card--text">{props.text}</p>
          <a className="program__card--link" href="#">{props.link} &rarr;</a>
       </div>
    </div>
  )
}