import {renderingArgumentsImport} from "./renderQuest";
import {gameInfo} from "./nextLevel";

export function countScore() {
    let calculation = {
        varMiss: 5
    }

    const allVarMarks =
        [renderingArgumentsImport.gameVariant1Mark.elm,
        renderingArgumentsImport.gameVariant2Mark.elm,
        renderingArgumentsImport.gameVariant3Mark.elm,
        renderingArgumentsImport.gameVariant4Mark.elm,
        renderingArgumentsImport.gameVariant5Mark.elm,
        renderingArgumentsImport.gameVariant6Mark.elm]

    allVarMarks.forEach((elm)=>{
        if ( Array.from(elm.classList).includes('fa-circle-xmark')){
            calculation.varMiss = calculation.varMiss - 1
        }
    })

    gameInfo.totalScore += calculation.varMiss
}






