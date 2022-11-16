/*import Vr from "../pictures/vr.webp";*/
import "./styles/warsztaty.css"
import CardWar from "./CardWar"
import data from "./data.js"

export default function WarsztatyPage () {
  const Datas = data.map((x) => {
    return (
      <CardWar
        /*key = {x.id}*/
        item = {x}
      />
    );})
  return (
      <section id="warsztaty">
          <div className="war-container appear padding-section">

              {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
              <h3>Warsztaty</h3>

              <div className="war-content">
                 <p>
                    Intryguje Cię świat IT? Chcesz nabrać nowych skilli? Jeśli tak, to idealnie trafiłeś{/*gender neutral*/}!
                    Zapisz się na nasze warsztaty, które organizujemy wspólnie z najlepszymi fachowcami w branży i
                    zapewnij sobie wejściówkę do świata IT.
                 </p>
                 <div className="war-content-container">
                     {Datas}
                     {/*<h3 className="wkrotce">Już wkrótce!</h3>*/}
                 </div>
              </div>

          </div>
      </section>
  )
}
