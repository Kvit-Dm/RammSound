import em001 from '../media/emotions.gif/001.gif'
import em002 from '../media/emotions.gif/002.gif'
import em003 from '../media/emotions.gif/003.gif'
import em004 from '../media/emotions.gif/004.gif'
import em005 from '../media/emotions.gif/005.gif'
import em006 from '../media/emotions.gif/006.gif'
import em007 from '../media/emotions.gif/007.gif'
import em008 from '../media/emotions.gif/008.gif'
import em009 from '../media/emotions.gif/009.gif'
import em010 from '../media/emotions.gif/010.gif'
import em011 from '../media/emotions.gif/011.gif'
import em012 from '../media/emotions.gif/012.gif'
import em013 from '../media/emotions.gif/013.gif'
import em014 from '../media/emotions.gif/014.gif'
import em015 from '../media/emotions.gif/015.gif'
import em016 from '../media/emotions.gif/016.gif'
import em017 from '../media/emotions.gif/017.gif'
import em018 from '../media/emotions.gif/018.gif'
import em019 from '../media/emotions.gif/019.gif'
import em020 from '../media/emotions.gif/020.gif'
import em021 from '../media/emotions.gif/021.gif'
import em022 from '../media/emotions.gif/022.gif'
import em023 from '../media/emotions.gif/023.gif'
import em024 from '../media/emotions.gif/024.gif'
import em025 from '../media/emotions.gif/025.gif'


const allEm = [em001, em002, em003, em004, em005, em006, em007, em008, em009, em010, em011, em012, em013, em014, em015, em016, em017, em018, em019, em020, em021, em022, em023, em024, em025
]

let previous

export function newEmotion() {
    let newM = allEm[Math.floor(Math.random() * allEm.length)]
    if (previous === newM) {
        return newEmotion()
    } else {
        previous = newM
        return  newM
    }
}



