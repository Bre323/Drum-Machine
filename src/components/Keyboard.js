import React from "react"
import '../styles/Keyboard.css'


const KeyboardKey = ({ play, sound }) => {

    const handleKeyDown = (event) => {
        if(event.keyCode === sound.keyCode) {
            play(sound.keyTrigger, sound.id)
        }
    }

    React.useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
    })

    return (
        <button className="drum-pad" id={sound.id} onClick={() => play(sound.keyTrigger, sound.id)}>

            <audio className="clip" id={sound.keyTrigger} src={sound.url} />
            {sound.keyTrigger}

        </button>
    )
}


const Keyboard = ({ power, play, sounds }) => {
    return (
        <div className="keyboard">
            {
                power ?
                sounds.map((sound) => {
                    return <KeyboardKey play={play} sound={sound} key={sound.id} />
                })
                : sounds.map((sound) => {
                    return <KeyboardKey play={play} sound={{...sound, url: "#"}} key={sound.id} />
                })
            }
        </div>
    )
}


export default Keyboard
