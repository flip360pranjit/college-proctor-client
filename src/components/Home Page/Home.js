import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import Features from "./Features";
import Footer from "./Footer";

function Home(){
    return (
        <div>
            <Navbar />
            <Content />
            <Features />
            <Footer />
        </div>
    )
}

export default Home;