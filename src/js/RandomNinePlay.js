
import {gameInfo} from "./nextLevel";


import nine01 from "../muz/nine/nine01.mp3";
import nine02 from "../muz/nine/nine02.mp3";
import nine03 from "../muz/nine/nine03.mp3";
import nine04 from "../muz/nine/nine04.mp3";
import nine05 from "../muz/nine/nine05.mp3";
import nine06 from "../muz/nine/nine06.mp3";

export function RandomNinePlay(max = 6,) {
    if (!gameInfo.findAnswer){
        const allNineFiles = [nine01, nine02, nine03, nine04, nine05, nine06];
        (max)? max = allNineFiles.length :
            console.log('012', max)

        let ninePlay = new Audio(allNineFiles[Math.floor(Math.random() * max)]);
        ninePlay.loop = false;
        ninePlay.play();
    }
}

