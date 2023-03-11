import React from "react"
import '../styles/DrumControl.css'

const DrumControl = ({ name, power, stop, volume, handleVolumeChange }) => {
    return (
        <div className="control">
            <button className="power-button" onClick={stop}>
                Turn {power ? "ON" : "OFF"}
            </button>

            <p>Volume: {Math.round(volume * 100)}</p>

            <input type="range" 
            min="0" max="1" step="0.01"
            onChange={handleVolumeChange} />

            <h2 id="display">{name}</h2>
            <button className="change-button">Change Sounds Group</button>
        </div>
    )
}

export default DrumControl
