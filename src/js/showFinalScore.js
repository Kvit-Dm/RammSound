import {renderingArgumentsImport, showFinalScoreImport} from "./renderQuest";
import {gameInfo, renderNextLvl} from "./nextLevel";
import Elm from "./element-maker";
import '../sass css/finalScore.sass'
import {startGameBtn} from "./renderQuest";

export let renderFinalScoreImport

export function showFinalScore(){
  showFinalScoreImport.gameBody.remove()
  renderFinalScoreElements()
  renderFinalScoreNumber()
  chendgeHeaderScore()
 }

function renderFinalScoreElements(){

 const finalScore = new Elm(
     showFinalScoreImport.finalScore.elm,
     '',
     'final-score border-effect elm-background midl-block'
 )

 const finalScoreContent = new Elm(
     finalScore.elm,
     '',
     'final-score__main-block'
 )

 const finalScoreTitle = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__title',
     'SCORE'
 )

 const finalScoreScoreNumber = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__score-number',
     `¯\\_ (ツ)_/¯`
 )

 const finalScoreResume = new Elm(
     finalScoreContent.elm,
     'p',
     'final-score__resume',
     'YOU CAN DO BETTER'
 )
    const finalScoreReplayBtn = new Elm(
        finalScoreContent.elm,
        'p',
        'final-score__replay-btn border-effect',
        'REPLAY'
    )
    finalScoreReplayBtn.setOnClick(()=>{
        rerunWholeNewGame()
    })

 renderFinalScoreImport = {
     finalScore,
     finalScoreScoreNumber,
     finalScoreResume
 }
}

function renderFinalScoreNumber(){
    renderFinalScoreImport.finalScoreScoreNumber.elm.textContent = gameInfo.totalScore
    if (gameInfo.totalScore === 40){
        renderFinalScoreImport.finalScoreResume.elm.textContent = 'Undeniably, you are Rammstein fan to the core!'
    }
    if (gameInfo.totalScore <= 36){
        renderFinalScoreImport.finalScoreResume.elm.textContent = 'You’ve got potential — now sharpen it.'
    }
    if (gameInfo.totalScore <= 33){
        renderFinalScoreImport.finalScoreResume.elm.textContent = 'That was cute. Now do it for real.'
    }
     if (gameInfo.totalScore <= 30){
        renderFinalScoreImport.finalScoreResume.elm.textContent = 'Nice try, rookie.'
    }
}

function chendgeHeaderScore(){
    // this fun hide and show heder score when resoult stage on
    if (gameInfo.showScoreStatus){
        renderingArgumentsImport.gameScoreText.elm.classList.add('dsp-none')
        renderingArgumentsImport.gameScoreNumber.elm.classList.add('dsp-none')
    } else {
        renderingArgumentsImport.gameScoreText.elm.classList.remove('dsp-none')
        renderingArgumentsImport.gameScoreNumber.elm.classList.remove('dsp-none')
    }
}

function rerunWholeNewGame(){
    cleanFinalScoreStage()
    gameInfo.findAnswer = false
    gameInfo.gameAlbumNumber = 0
    gameInfo.showScoreStatus = false
    gameInfo.totalScore = 0
    startGameBtn()
}

function   cleanFinalScoreStage(){
    showFinalScoreImport.gameHeader.elm.remove()
    showFinalScoreImport.finalScore.elm.remove()
    // showFinalScoreImport.gameFooter.elm.remove()
}