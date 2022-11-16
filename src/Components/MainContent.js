import React from "react";
import './styles/maincontent.css'


import HomePage from "./HomePage";
import NocGierPage from "./NocGierPage";
import TurniejPage from "./TurniejPage";
import GameJamPage from "./GameJamPage";
import WarsztatyPage from "./WarsztatyPage";
import ONasPage from "./ONasPage";
import PartnerzyPage from "./PartnerzyPage";


export default function MainContent ({count}) {

    let page

    // eslint-disable-next-line default-case
    switch (count) {
        case 0:
            page = <HomePage/>
            break;
        case 1:
            page = <NocGierPage/>
            break;
        case 2:
            page = <TurniejPage/>
            break;
        case 3:
            page = <GameJamPage/>
            break;
        case 4:
            page = <WarsztatyPage/>
            break;
        case 5:
            page = <ONasPage/>
            break;
        case 6:
            page = <PartnerzyPage/>
            break;
    }
    return (
        <main id="main">
            {page}
        </main>
    )
}
