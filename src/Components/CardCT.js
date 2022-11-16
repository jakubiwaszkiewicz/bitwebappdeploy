import "./styles/contentcardCT.css"

export default function cardCT (props) {
    return (
    <article className="cardCT">
        <div className="div1">
            <span className="title-cardCT title-work">{props.item.title}</span>
        </div>
        <img src={props.item.img} alt={props.item.alt}/>
        <div className="div2">
            <span className="title-cardCT title-name">{props.item.name}</span>
        </div>
        {/*dać p heighta, to powinno załatwić sprawe z przesuwającymi się kolumnami, nie mam innego pomysłu*/}
        {/*dać więcej miejsca bo nie mieści się tytuł zdjątek*/}
        {/*vertical-align: text-bottom; dla p jak i p height up*/}
    </article>
    )
}