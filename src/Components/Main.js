import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
            {
                console.log("Hi!");
            }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br> a body without a soul.</br></h1>
                </div>    
                <div className="row2">
                    <h2>Find your book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <Card/>
                <Card/>
                <Card/>
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>


    )
}
export default Main;


