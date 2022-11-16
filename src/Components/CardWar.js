import "./styles/contentcard.css"

export default function CardWar (props) {
  return (
    <div className="content-card">
        <div>
            <div><p>{props.item.description}</p></div>
            <img src={props.item.img} alt={props.item.alt}/>
        </div>
        <a className="a-button" href={props.item.link} target="_blank"><div className="rose-neon-button"><span>Zapisz się!</span></div></a>
    </div>
  )
}
