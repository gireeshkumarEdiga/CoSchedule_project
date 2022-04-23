import React from "react";

export const Products = () => {

    const products = {
        display:"flex",
        flexDirection:"Row",
        // margin:"2% 20%",
        // border : "1px solid red",
    }

    const sub = {
        display : "flex",
        flexDirection : "Column",
        width:"90%",
        // border: "1px solid black",
        padding:"2% 5%",
    }
    const prod = {
        // border: "1px solid yellow",
        margin : "5% 20%,"
    }
    return (
       <div style={prod}> 
        <div style={products}>
            <div style={sub}>
                <div>CONTENT CALENDER</div>
                <h2>Marketing Calendar</h2>
                <p>A calendar that helps you see, schedule, and share your marketing.</p>
            </div>
            <div style={sub}>
                <div>CONTENT OPTIMIZATION</div>
                <h2>Headline Studio</h2>
            </div>
        </div> 
        <div style={products}>   
        <div style={sub}>
            <h2>Marketing Suite</h2>
            <p>A family of agile marketing products to coordinate your team, projects and process.</p>
        </div>
        <div style={sub}>
                <div>MARKETING EDUCATION</div>
                <h2>Actionable Marketing Institute</h2>
        </div>
        </div>   
    </div>
    )
}