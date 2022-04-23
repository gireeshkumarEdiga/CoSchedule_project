import React from "react";
import { Link } from "react-router-dom";

export const Signin = () => {

    const parent = {
        backgroundColor : "#c8c8c8",
        padding : "5% 35%"
    }

    const child = {
        backgroundColor:"#f7f7f7",
        borderRadius:"10px",
        padding: "5% 0%",
        // border : "1px solid black"
    }

    const img = {
        width:"60%",
        margin : "60px 30px 20px 20px"
    }

    const input = {
        height : "40px",
        width: "70%"
    }

    const button = {
        backgroundColor:"#e5806a",
        padding:"2% 30%",
        height : "40px",
        // width: "70%",
        textDecoration:"none",
        color:"black",
    }

    const box = {
        border : "1px solid red"
    }

    return (
        <div style={parent}>
            <div style={child}>
                <div>
                <img style={img} src="https://accounts.coschedule.com/img/cos-logo-horz.svg" />
                </div>
                <div>
                <br />
                EMAIL ADDRESS
                <br />
                <br />
                <input style={input} type="email" placeholder="Emial Address"/>
                <br />
                <br />
                <label>PASSWORD</label>
                <br />
                <br />
                <input style={input} type="password" placeholder="Password" />
                <br />
                <br />
                <br />
                <Link style={button} to="sign_in">Button</Link>
                <br />
                <br />
                <br />
                <div>Need an account ? | forgot your password</div>
                </div>
            </div>
        </div>
    )
}