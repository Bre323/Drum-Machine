import React from "react"
import '../styles/DrumControl.css'

const DrumControl = () => {
    return (
        <div className="control">
            <button className="power-button">Turn OFF</button>
            <p>Volume: 100</p>
            <input type="range" min="0" max="1" step="0.01" />
            <h2 id="display">display</h2>
            <button className="change-button">Change Sounds Group</button>
        </div>
    )
}

export default DrumControl
