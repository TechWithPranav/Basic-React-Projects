import React from "react"
// import '../../public/shop.png'
// import '../../public/shoe_image.png'

function Home_section(){

   const customstyle1={
color: "white",
backgroundColor: "brown",
border:"none",
padding:"4px"

   };
   const customstyle2={
color: "black",
backgroundColor: "white",
padding:"4px"

   };


    return(
   <div className="home_sec">
    <div className="left">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div>
            <button style={customstyle1}>Shop Now</button>
            <button style={customstyle2}> Category</button>
        </div>
        <img src="../../public/shop.png" alt="" />
    </div>
    <div className="right">
        <img src="../../public/shoe_image.png" alt="" srcset="" />
    </div>
   </div>
    )
}

export default Home_section;