import { Howl } from "howler";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";

const Song = (props) => {
    const howl = new Howl({
        src: ['song.mp3'],
        loop: true,
        volume: 0.1,
        onend: function() {
          console.log('Finished!');
        }
      });
    
    const [isPlay, setPlay] = useState(false);
    const sound = useState(howl)[0];
    const [isOpen, setOpen] = useState(false)
    
    
      

    useEffect(() => {
        console.log(isPlay)
        if (!isPlay) {
            sound.pause()
        } else {
            sound.play();
        }
    })
      

    // window.addEventListener('click', () => {
    //     setPlay(true);
    //     sound.play()
    // })
    const theme = props.theme;
    const animationConstant = `duration-700 transform transition-all ease-in-out`;
    return ( 
        <Fragment>
            
            <div className="fixed bottom-1 left-1 z-50">
                <button className="text-white font-light" onClick={() => {setPlay(!isPlay)}}>
                    <ButtonPlay isPlay={isPlay} />
                </button>
            </div> 
            {(<div className={`${animationConstant} bg-header fixed top-0 left-0 right-0 bottom-0 w-full h-screen ${isOpen ? "-translate-y-28 opacity-0 z-0": "z-50"} overflow-hidden bg-gray-700 bg-opacity-95 flex flex-col items-center justify-center`}>
            <ButtonMain onClick={() => {setOpen(true); setPlay(true)}} theme={theme}/>
            </div>)}
        </Fragment> 
    );
}

const ButtonMain = ({onClick, theme}) => {
    return (
        <Fragment>
            <div className={`${theme.headerStyle} text-xl`}>
                <button className="px-4 py-5 bg-sky-500 text-white rounded-xl" onClick={onClick}>Buka Undangan</button>
            </div>
        </Fragment>
    )
}

const ButtonPlay = ({isPlay}) => {
    if (isPlay) {
        return (
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        )
    }
    return (
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
};
export default Song;