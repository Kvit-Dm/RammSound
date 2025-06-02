import {mainDiv, startBlock} from "../index";
import Elm from "./element-maker";
import '../sass css/gameBlock.sass'
import '../sass css/main.sass'
import {renderNextLvl, ChooseOption} from './nextLevel'


export function startGameBtn() {
    startBlock.remove()

    const gameBlock = new Elm(
        mainDiv.elm,
        '',
        'game-block'
    )

    const gameHeader = new Elm(
        gameBlock.elm,
        '',
        'game-header midl-block border-effect elm-background'
    )

    const headerLogo = new Elm(
        gameHeader.elm,
        'p',
        'header-logo',
        'RAMMSTEIN'
    )

    const gameScoreInfo = new Elm(
        gameHeader.elm,
        'p',
        'header-score-block',
    )

    const gameScoreText = new Elm(
        gameScoreInfo.elm,
        'p',
        'header-score-text',
        'SCORE'
    )

    const gameScoreNumber = new Elm(
        gameScoreInfo.elm,
        'p',
        'header-score-number header-score-number__non-active  ',
        '0'
    )

    const finalScore = new Elm(
        gameBlock.elm,
        '',
        'final-score-page'
    )


    const gameBody = new Elm(
        gameBlock.elm,
        '',
        'game-body midl-block border-effect elm-background'
    )

    const bodyAlbumList = new Elm(
        gameBody.elm,
        '',
        'album-list border-effect'
    )
// TODO цикл
    const albumElm1 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm ',
        'Herzeleid'
    )
    const albumElm2 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Sehnsucht'
    )
    const albumElm3 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Mutter'
    )
    const albumElm4 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Reise, Reise'
    )
    const albumElm5 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Rosenrot'
    )
    const albumElm6 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Liebe ist für alle da'
    )
    const albumElm7 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Untitled'
    )
    const albumElm8 = new Elm(
        bodyAlbumList.elm,
        '',
        'album-list-elm',
        'Zeit'
    )

    const randomSong = new Elm(
        gameBody.elm,
        '',
        'random-song border-effect'
    )

    const randomImg = new Elm(
        randomSong.elm,
        'img',
        'random-song__img border-effect'
    )

    const randomSongInfo = new Elm(
        randomSong.elm,
        '',
        'random-song__info',
    )

    const randomSongInfoSongName = new Elm(
        randomSongInfo.elm,
        'p',
        'random-song__info-name',
        'What name of this song ?',
    )

    const randomSongInfoSongControls = new Elm(
        randomSongInfo.elm,
        'audio',
        'random-song__info-song',
        '',
        'controls',
        ''
    )

    const randomSongInfoSongSrc = new Elm(
        randomSongInfoSongControls.elm,
        'source',
        'random-song__info-song',
        ''
    )

    const gameVarAndAnswer = new Elm(
        gameBody.elm,
        '',
        'game-body_var-and-answer'
    )


    const gameVariantsList = new Elm(
        gameVarAndAnswer.elm,
        '',
        'game-variants-list border-effect'
    )

    const gameVariant1 = new Elm(
        gameVariantsList.elm,
        'div',
        'game-variant border-effect'
    )
    gameVariant1.setOnClick(() => ChooseOption(gameVariant1.elm))

    const gameVariant1Mark = new Elm(
        gameVariant1.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant1Name = new Elm(
        gameVariant1.elm,
        'p',
        '',
    )

    const gameVariant2 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        ''
    )
    gameVariant2.setOnClick(() => ChooseOption(gameVariant2.elm))

    const gameVariant2Mark = new Elm(
        gameVariant2.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant2Name = new Elm(
        gameVariant2.elm,
        'p',
        '',
    )


    const gameVariant3 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        ''
    )
    gameVariant3.setOnClick(() => ChooseOption(gameVariant3.elm))

    const gameVariant3Mark = new Elm(
        gameVariant3.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant3Name = new Elm(
        gameVariant3.elm,
        'p',
        '',
    )

    const gameVariant4 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        ''
    )
    gameVariant4.setOnClick(() => ChooseOption(gameVariant4.elm))

    const gameVariant4Mark = new Elm(
        gameVariant4.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant4Name = new Elm(
        gameVariant4.elm,
        'p',
        '',
    )

    const gameVariant5 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        ''
    )
    gameVariant5.setOnClick(() => ChooseOption(gameVariant5.elm))

    const gameVariant5Mark = new Elm(
        gameVariant5.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant5Name = new Elm(
        gameVariant5.elm,
        'p',
        '',
    )

    const gameVariant6 = new Elm(
        gameVariantsList.elm,
        'p',
        'game-variant border-effect',
        ''
    )
    gameVariant6.setOnClick(() => ChooseOption(gameVariant6.elm))

    const gameVariant6Mark = new Elm(
        gameVariant6.elm,
        'i',
        'fa-regular fa-circle  mark-all',
        ''
    )

    const gameVariant6Name = new Elm(
        gameVariant6.elm,
        'p',
        '',
    )

    const gameAnswer = new Elm(
        gameVarAndAnswer.elm,
        '',
        'game-answer border-effect',
        ''
    )

    const gameAnswerEmotion = new Elm(
        gameAnswer.elm,
        'img',
        'game-answer__emotion border-effect '
    )

    const gameAnswerInfo = new Elm(
        gameAnswer.elm,
        'div',
        'game-answer__info-block '
    )

    const gameAnswerName = new Elm(
        gameAnswerInfo.elm,
        'p',
        'game-answer__name ',
        'Name'
    )

    const gameAnswerAlbumName = new Elm(
        gameAnswerInfo.elm,
        'p',
        'game-answer__album-name ',
        'Album name'
    )

    const gameAnswerSongControls = new Elm(
        gameAnswer.elm,
        'audio',
        'game-answer__muz ',
        '',
        'controls',
        ''
    )

    const gameAnswerSongSrc = new Elm(
        gameAnswerSongControls.elm,
        'source',
        '',
        '',
    )

    const gameNextLvl = new Elm(
        gameBody.elm,
        '',
        'game-next-lvl-btn  border-effect ',
        'Next Level'
    )

    // const gameFooter = new Elm(
    //     gameBlock.elm,
    //     '',
    //     'game-footer midl-block border-effect elm-background'
    // )
    //
    // const footerInfo = new Elm(
    //     gameFooter.elm,
    //     'p',
    //     'footer-info',
    //     '2022'
    // )

    renderingArgumentsImport = {

        albumElm1,
        albumElm2,
        albumElm3,
        albumElm4,
        albumElm5,
        albumElm6,
        albumElm7,
        albumElm8,
        gameVariant1,
        gameVariant1Mark,
        gameVariant1Name,
        gameVariant2,
        gameVariant2Mark,
        gameVariant2Name,
        gameVariant3,
        gameVariant3Mark,
        gameVariant3Name,
        gameVariant4,
        gameVariant4Mark,
        gameVariant4Name,
        gameVariant5,
        gameVariant5Mark,
        gameVariant5Name,
        gameVariant6,
        gameVariant6Mark,
        gameVariant6Name,

        randomImg,
        randomSongInfoSongControls,

        gameAnswerName,
        gameAnswerAlbumName,
        gameAnswerEmotion,
        gameAnswerSongControls,
        gameScoreNumber,
        gameNextLvl,
        gameScoreText,
    }

    showFinalScoreImport = {
        finalScore,
        gameHeader,
        gameBody,
        // gameFooter
    }

    gameNextLvl.setOnClick(() => renderNextLvl())
    renderNextLvl('first time')
}

export let renderingArgumentsImport
export let showFinalScoreImport


