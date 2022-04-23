import React from "react";

export const Resources = () => {
    
    const resources = {
        display:"flex",
        flexDirection: "Row",
        margin:"2% 20%",
    } 

    const learn = {
        display: "flex",
        flexDirection:"Column",
        padding:"2% 2%",
    } 
    const tools = {
        display: "flex",
        flexDirection:"Column",
        padding:"2% 2%",
    } 
    const guid = {
        display: "flex",
        flexDirection:"Column",
        padding:"2% 2%",
    } 
    return (
        <div style={resources}>
            <div style={learn}>
                <div>
                    <h3>CoSchedule Blog</h3>
                    <p>Content to help marketers plan. organize and meet their goals</p>
                </div>
                <div>
                    <h3>CoSchedule Guide</h3>
                    <p>How to organize all of your marketing with CoSchedule best practices.</p>
                </div>
                <div>
                    <h3>Marketing Idead Hub</h3>
                    <p>A list of creative tactics to try out in your marketing strategy.</p>
                </div>
            </div>
            <div style={tools}>
                <div>
                    <h3>TOOLS</h3>
                    <p>Healine Analyzer</p>
                    <p>Social Message Optimizer</p>
                    <p>Email Subject line Tester</p>
                </div>
                <di>
                    <h3>BOOKS</h3>
                    <p>10x Marketing Formila</p>
                    <p>Get Started with Agile Marketing</p>
                </di>
            </div>
            <div style={guid}>
                <div>
                    <h3>GUIDES</h3>
                    <p>Agile Marketing Guide</p>
                    <p>Marketing Strategy Guide</p>
                    <p>Content marketing Guide</p>
                </div>
                <div>
                    <h3>PODCAST</h3>
                    <p>Actionable Marketing Podcast</p>
                </div>
            </div>
        </div>
    )
}