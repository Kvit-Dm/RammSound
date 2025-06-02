import "./sass css/main.sass"
import Elm from "./js/element-maker";
import {startGameBtn} from "./js/renderQuest";
import {showFinalScore} from "./js/showFinalScore";
import {gameInfo} from "./js/nextLevel";

export const mainDiv = new Elm(
    document.body ,
    '',
    'whole-page ');

export const startBlock = new Elm(
    mainDiv.elm,
    '',
    'start_block elm-background border-effect ',
    '');

const startQuestion = new Elm(
    startBlock.elm,
    'p',
    'start-question',
    'Are you true RAMMSTEIN FAN ?'
)

const startButton = new Elm(
    startBlock.elm,
    'p',
    'start-button border-effect',
    'LET\'S TEST IT OUT')
startButton.setOnClick(()=>startGameBtn())

// this fun is a shortcut for cheking final resume stage
function showFinalScoreFromStart (){
    gameInfo.gameAlbumNumber = 9
    gameInfo.showScoreStatus = true
    showFinalScore()
}







