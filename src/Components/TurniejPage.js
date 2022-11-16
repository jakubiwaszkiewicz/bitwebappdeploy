import klawa from "../pictures/janusz/turniej.jpg";
import "./styles/turniej.css"
import "./styles/button.css"

export default function TurniejPage () {
  return (
    <section id="turniej">
        <div className="tur-container appear">
            <div className="tur-content-cont">
                <div className="tur-cont-img">
                    <img src={klawa} alt="Turniej League of Legends."></img>
                </div>
                <div className="tur-cont-cont">
                    <h3>Turniej League of Legends</h3>
                    <div className="tur-cont-text">
                        <p>
                          W nocy z 10 na 11 grudnia
                          Po długich godzinach spędzonych przed komputerem nadszedł czas na finałowe starcie!
                          Już 10 grudnia, w SKS-ie, odbędzie się pojedynek prawdziwych e-sportowych gigantów.
                          Która drużyna okaże się mistrzem turnieju League of Legends? Dowiesz się oglądając naszego streama.
                          Emocje sięgną zenitu!
                        </p>
                    </div>
                    <div className="tur-cont-btn">
                      <a className="a-button" href="#" target="_blank"><div className="rose-neon-button">Regulamin</div></a>
                      <a className="a-button" href="#" target="_blank"><div className="rose-neon-button">Stream</div></a>
                    </div>
                </div>
            </div>

          {/*<div className="game-harmonogram">
            <div className="table">
                <div className="row">
                    <h3 id="harmonogram-title">Harmonogram turnieju</h3>
                </div>
              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right">Lorem ipsum dolor sit amet</div>
              </div>

              <div className="row-border"></div>

              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
              </div>

              <div className="row-border"></div>

              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right">Lorem ipsum dolor sit amet, consectetur</div>
              </div>
            </div>
          </div>*/}


        </div>
    </section>
  )
}
