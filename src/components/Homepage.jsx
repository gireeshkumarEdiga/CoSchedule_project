import React from "react";
import { Link } from "react-router-dom";

export const Homepage = () => {
    const button = {
        backgroundColor : "#e5806a",
        color:"white",
        margin : "2% 0%",
    }

    const h1 = {
        padding:"0% 25%",
        fontSize :"40px"
    }

    const company = {
        margin: "0% 10%",
        display:"grid",
        gridGap : "5%",
        textAlign :"centre",
        gridTemplateRow: "100px 100px",
        gridTemplateColumns : "auto auto auto auto auto",
    }
    const prod = {
        margin: "2% 10%",
        display:"grid",
        gridGap : "5%",
        gridTemplateRow: "500x 500px",
        gridTemplateColumns : "auto auto",
    }

    const products = {
        padding: "5% 2%",
        // border : "1px solid red",
        backgroundColor:"#f8f8f8",
        paddingBottom :"50px"
    }

    const back = {
        backgroundColor:"#fffff",
        marginTop:"-22px",
        padding: "2% 0%"
    }

    const fastestgrowing = {
        backgroundColor :"#fffff",
        margin: "2% 10%"
    }

    const fastest = {
        display: "flex",
        flexDirection : "row",
        margin: "2%"
    }

    const organize = {
        backgroundColor:"#e5806a",
        padding: "5% 20%",
    }

    const footer = {
        display: "flex",
        flexDirection:"row",
        margin: "2% 5%",
        // border: "1px solid black"
    }

    const sub1 = {
        display: "flex",
        flexDirection:"column",
        marginRight:"20%",
        // border : "1px solid red",
        padding: "0% 1%"
    }

    const sub2 = {
        display: "grid",
        gridGap:" 1% 2%",
        gridTemplateColumns :"auto auto auto",
        gridTemplateRow :"auto auto",
        // border : "1px solid red"
    }

    const div = {
        // margin: "1px solid black",
    }

    return (
        <div>
            <h1 style={h1}>Organize All Of Your Marketing In One Place. From Any Place.</h1>
            <p>Get more done in less time with the only work management software for marketers.</p>
            <button style={button}><Link to="/requestyourdemo">Request Your Demo Now</Link></button>
            <div>
                <img style={{width:"90%", height:"500px"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhome-calendar.png&w=1200&q=75" />
            </div>
            <div>
                <h2>30,000 marketers start their day with CoSchedule</h2>
                <div style={company}>
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}}  src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75" />
                    <img style={{width:"90%",margin:"5% 0%"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75" />
                </div>
            </div>
            <div style={products}>
                <h2>Our Products</h2>
                <div style={prod}>
                    <div>
                        <img style={{width:"100%",height:"120px"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100" />
                        <div style={back}>
                            <h3>Marketing Calendar</h3>
                            <p>A calendar that helps you see, schedule, and share your marketing.</p>
                            <ul>
                            <li>See everything together in one place</li>
                                <li>Share your progress with higher-ups</li>
                                <li>Show what your marketing is doing</li>
                            </ul>                    
                            <h4 style={{color:"orange"}}>Explore More</h4>
                        </div>
                    </div>
                    <div>
                        <img style={{width:"100%",height:"120px"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100" />
                        <div style={back}>
                            <h3>Marketing Suite</h3>
                            <p>A family of agile marketing products to coordinate your team, projects, and process.</p>
                            <ul>
                                <li>Manage marketing requests</li>
                                <li>Eliminate content bottlenecks</li>
                                <li>Maximize resources to increase output</li>
                            </ul>
                            <h4 style={{color:"orange"}}>Explore More</h4>
                        </div>    
                    </div>
                    <div>
                    <img style={{width:"100%",height:"120px"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100" />
                        <div style={back}>
                            <h3>Headline Studio</h3>
                            <p>Write better headlines that will boost your traffic</p>
                            <ul>
                                <li>Score your headlines based on proven data</li>
                                <li>Improve headlines with smart suggestions</li>
                                <li>Find the high-scoring words instantly</li>
                            </ul>
                            <h4 style={{color:"orange"}}>Explore More</h4>
                        </div> 
                    </div>
                    <div>
                    <img style={{width:"100%",height:"120px"}} src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100" />
                        <div style={back}>
                            <h3>Develop new marketing skills in 30 minutes (or less).</h3>
                            <p>Write better headlines that will boost your traffic</p>
                            <ul>
                                <li>mprove your marketing with fluff-free training</li>
                                <li>Spend less time learning & more time doing</li>
                                <li>Learn from industry pros you trust</li>
                            </ul>
                            <h4 style={{color:"orange"}}>Explore More</h4>
                        </div> 
                    </div>
                </div> 
            </div>
            <div style={fastestgrowing}>
                <h2>The fastest growing marketing work management software</h2>
                <p>CoSchedule is trusted by 30,000 marketers in 100+ countries.</p>
                <div style={fastest} >
                    <div>
                        <h1>Gartner</h1>
                        <h2>Magic Quadrant</h2>
                        <p>The Gartner Magic Quadrant for Content Marketing Platforms 2020</p>
                    </div>
                    <div>
                        <h1>Inc.</h1>
                        <h2>5000</h2>
                        <p>One Of The Fastest-Growing Marketing for Content Marketing Platforms 2020</p>
                    </div>
                    <div>
                        <h1>Higher Performer 2021</h1>
                        <p>Awaeded High Performer in 5 Product Categories</p>
                    </div>
                </div>
            </div>
            <div style={organize}>
                <h1 style={{color:"white"}}>Organize all of your marketing in one place</h1>
                <button style={{color:"#e5806a", backgroundColor:"white",}}>Request your demo name</button>
            </div>
            <div style={footer}>
                <div style={sub1}>
                    <p>Sign Up</p>
                    <p>Request A Demo</p>
                    <p>Sign In</p>
                </div>
                <div style={sub2} >
                <div style={div}>
                    <h3>PRODUCTS</h3>
                    <p>Martketing Calender</p>
                    <p>Marketing Suite</p>
                    <p>Headline Studio</p>
                    <p>Actionable Marketing Institute</p>
                </div>
                <div style={div}>
                    <h3>WHY COSCHDEULE</h3>
                    <p>Customer Stories</p>
                    <p>Support</p>
                    <p>Product Announcements</p>
                    <p>Pricing</p>
                </div>
                <div style={div}>
                    <h3>COMPANY</h3>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Contact US</p>
                    <p>Affilate Program</p>
                    <p>Terms & Polices</p>
                </div>
                <div style={div}>
                    <h3>RESOURCES</h3>
                    <p>CoSchedule Maketing Blog</p>
                    <p>Actionable Marketing Pocast</p>
                    <p>10x Marketing Formula Book</p>
                    <p>Get Started with Agile Marketing Book</p>
                    <p>Marketing Formula Book</p>
                </div>
                <div style={div}>
                    <h3>GUIDES</h3>
                    <p>CoSchedule Guide</p>
                    <p>Agile Marketing Guide</p>
                    <p>Marketing Strategy Guide</p>
                    <p>Contact Marketing Guide</p>
                </div>
                <div style={div}>
                    <h3>TOOLS</h3>
                    <p>Headline Analyzer</p>
                    <p>Social Message Optimizer</p>
                    <p>Email Subject Line Tester</p>
                    <p>Marketing Dictionary</p>
                </div>
                </div>
            </div>
        </div>
    )
}