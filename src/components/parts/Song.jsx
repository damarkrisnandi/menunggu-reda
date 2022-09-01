import { Howl } from "howler";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";

const Song = (props) => {
    const howl = new Howl({
        src: ['song.mp3'],
        loop: true,
        onend: function() {
          console.log('Finished!');
        }
      });
    
    const [isPlay, setPlay] = useState(false);
    const [sound, setSound] = useState(howl)
    
    
      

    useEffect(() => {
        if (props.play) {
            setPlay(true);
            setSound({
                src: ['song.mp3'],
                loop: true,
                volume: 0.03,
                onend: function() {
                console.log('Finished!');
                }
            })
            
        }
    }, [props.play])
    //   sound.play();

    window.addEventListener('click', () => {
        setPlay(true);
        sound.play()
    })
    return ( 
        <Fragment>
            <div className="fixed bottom-1 left-1 z-50">
                <button className="text-green-500 font-light" onClick={() => {console.log(isPlay); setPlay(!isPlay); isPlay ? sound.pause() : sound.play()}}>
                    <ButtonPlay isPlay={isPlay} />
                </button>
            </div>    
        </Fragment> 
    );
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