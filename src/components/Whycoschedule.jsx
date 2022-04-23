import React from "react";

export const Whycoschedule = () => {

    const column = {
        display:"flex",
        flexDirection : "Column",
        margin:"2% 40%",
        padding:"0% 2%"
    }

    const row = {
        display: "flex",
        flexDirection:"Column"
    }

    return (
        <div style={column}>
            <div style={row}>
                <h3>Case Studies</h3>
                <p>See how Coschedule customers have found sucess.</p>
            </div>
            <div style={row}>
                <h3>Build Your Case for Coschedule</h3>
                <p>Get your custom ROI report & see what your team could save by switching to coshedule</p>
            </div>
        </div>
    )
}