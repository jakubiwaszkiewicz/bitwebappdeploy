import "./styles/harmonogram.css"
import "./styles/tabela.css"

export default function HarmonogramPage () {

  let day1 = "{Strefa retro, Turniej Fify}"
  return (
      <section id="harmonogram">
        <div className="harmonogram-container">
          <div className="harmonogram-title">
            <h3>Harmonogram</h3>
          </div>

          <div className="harmonogram-content">
            <div className="table">
              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right"><span className="text-blue">22</span> listopada</div>
              </div>

              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right"><span className="text-blue">22</span> listopada</div>
              </div>

              <div className="row">
                <div className="table-item-left"><span className="text-blue">17</span> pażdziernika</div>
                <div className="col-border"></div>
                <div className="table-item-right"><span className="text-blue">22</span> listopada</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
