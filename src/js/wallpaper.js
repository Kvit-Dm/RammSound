import wp001 from '../img/wallpaper/001.jpg';
import wp002 from '../img/wallpaper/002.jpg';
import wp003 from '../img/wallpaper/003.jpg';
import wp004 from '../img/wallpaper/004.jpg';
import wp005 from '../img/wallpaper/005.jpg';
import wp006 from '../img/wallpaper/006.jpg';
import wp007 from '../img/wallpaper/007.jpg';
import wp008 from '../img/wallpaper/008.jpg';
import wp009 from '../img/wallpaper/009.jpg';
import wp010 from '../img/wallpaper/010.jpg';
import wp011 from '../img/wallpaper/011.jpg';
import wp012 from '../img/wallpaper/012.jpg';
import wp013 from '../img/wallpaper/013.jpg';
import wp014 from '../img/wallpaper/014.jpg';
import wp015 from '../img/wallpaper/015.jpg';
import wp016 from '../img/wallpaper/016.jpg';
import wp017 from '../img/wallpaper/017.jpg';
import wp018 from '../img/wallpaper/018.png';
import wp019 from '../img/wallpaper/019.jpg';
import wp020 from '../img/wallpaper/020.jpg';
import {mainDiv} from "../index";

const wallpaperList = [wp001, wp002, wp003, wp004, wp005, wp006, wp007, wp008, wp009, wp010, wp011, wp012, wp013, wp014, wp015, wp016, wp017, wp018, wp019, wp020]

import ElementMaker from "./element-maker";

const WallpaperContainer = new ElementMaker(
    mainDiv.elm,
    'div',
    'wallpaper-container',
);

const bgImg1 = new ElementMaker(
    WallpaperContainer.elm,
    'img',
    'bg-img',
    '',
    'src',
);

const bgImg2 = new ElementMaker(
    WallpaperContainer.elm,
    'img',
    'bg-img',
    '',
    'src',
);


let current = bgImg1.elm;
let next = bgImg2.elm;

function change_wallpaper(turn = 0) {
    if (wallpaperList[turn] === undefined) turn = 0;

    next.src = wallpaperList[turn];
    next.classList.remove('loaded');

    next.onload = () => {
        // Show new image
        next.classList.add('loaded');

        // Hide current image
        current.classList.remove('loaded');

        // Swap references
        [current, next] = [next, current];
    };

    setTimeout(() => change_wallpaper(turn + 1), 7000);
}

change_wallpaper(1)








