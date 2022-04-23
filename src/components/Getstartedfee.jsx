import React from "react";

export const Getstartedfee = () => {
    const column = {
        display :"flex",
        flexDirection : "Column",
        backgroundColor : "#f8f8f8"
    }
    const form = {
        backgroundColor:"white",
        margin : "2% 30%",
        padding : "5% 5%"

    }

    const input = {
        height:"30px",
        width:"90%"
    }

    return (
        <div style={column}>
            <div>
                <h1>Create My Marketing Calendar</h1>
                <p>free for life. No Credit card required.</p>
            </div>
            <div style={form}>
                Full Name <br/>
                <input type="text" placeholder="Full name" style={input} /><br /> <br />
                Email Address <br />
                <input type="email" placeholder="Work email address" style={input}  /><br/><br/>
                Company <br/>
                <input type="text" placeholder="Company Name" style={input}  /><br /> <br />
                Website URL <br />
                <input type="url" placeholder="Company website URL" style={input}  /><br/><br/>
                Password <br/>
                <input type="password" placeholder="Password (minimum 8 characters)" style={input}  /><br /> <br />
                <button>Get Started Now</button><br /><br />
                <p style={{fontSize:"10px"}}>By clicking "Get Started Now", you agree to CoSchedule’s terms of service, end user agreement, and privacy policy; you are 16 years or older; and you will receive information from CoSchedule from which you can opt out at any time.</p>
            </div>
        </div>
    )
}