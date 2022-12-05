import "./styles/partnerzy.css"
import logoCDAction from "../pictures/logos/cd-action.webp"
import logoDolnySlask from "../pictures/logos/dolny-slask.webp"
import logoPCFormat from "../pictures/logos/pc-format.webp"
import logoPWR from "../pictures/logos/pwr.webp"
import logoRadioLuz from "../pictures/logos/radio-luz.webp"
import logoTVSStyk from "../pictures/logos/tvs-styk.webp"
import logoUnit8 from "../pictures/logos/unit8.webp"

export default function PartnerzyPage () {
  return (
    <section id="partnerzy" className="appear">
        <div className="partnerzy--boxes">
            {/*<h3 className="wkrotce">Już wkrótce!</h3>*/}
            <h3>Partner</h3>
            <div className="partnerzy--box">
                <a href="https://unit8.com/"><img className="logo-big" src={logoUnit8} alt="Logo Unit8" /></a>
            </div>
            <h3>Patronaty honorowe</h3>
            <div className="partnerzy--box">
                <img src={logoPWR} alt="Logo Politechniki Wrocławskiej" />
                <img src={logoDolnySlask} alt="Logo Marszałka Wojewódzkiego" />
            </div>
            <h3>Partronaty medialne</h3>
            <div className="partnerzy--box">
                <img src={logoCDAction} alt="cos tam" />
                <img src={logoTVSStyk} alt="cos tam" />
                <img src={logoPCFormat} alt="cos tam" />
                <img src={logoRadioLuz} alt="cos tam" />
            </div>
        </div>
    </section>
  )
}
