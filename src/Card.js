import React from "react"
const Card = () => {
return  <div className="container">
<div className="title">BANK OF AMERICA</div>
<img className="chip" src="https://partimages.globalspec.com/28/4278/4654278_large.png"></img>
<div className="logo-and-data">
    <div className="data">
        <p className="serial-number">9587 5687 2347 2274</p>
        <div className="pin-and-date">
            <p className="pin">5422</p>
            <div className="date">
                <div className="limit"><p style={{fontSize:"6px",color:"white",}}>VALI <br/> THRU</p><img height="10px" src="https://img.icons8.com/ios/50/000000/sort-right.png"/></div>
                <div className="month-year">
                    <div><p style={{color:"white",fontSize:"6px",lineHeight:"0px"}}>MONTH/YEAR</p></div>
                    <div style={{height:"28px"}}><p style={{fontWeight:"bolder",color:"white",margin:"0px",fontSize:"15pt"}}>11/50</p></div>
                </div>
            </div>
        </div>
        <p className="cardholder">CARDHOLDER</p>
    </div>
    <div className="logo">
        <img className="service-logo" src="https://png2.kisspng.com/sh/8a87f378e6e75bc467c89d76c4bd2c0b/L0KzQYi4UsE3N5I2fpGAYUO4RYfqVvUyaWc5SJC5OEC8SIq4VcE2OWQ5TKc5NkK8QoW6TwBvbz==/5a3556c6e1a640.0809891515134450629243.png"></img>
    </div>
</div>
</div>}
export default Card;