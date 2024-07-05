import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState ([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
            {
                axios.get('https://www.googleapis.com/books/v1/volumes', {
                    params: {
                      q: search,
                      key: 'AIzaSyDXKSqXHdHvcgGu7bDa7i_EH8AEa6Hvc5g',
                      maxResults: 40
                    }
                  })                  
                .then(res=>setData(res.data.items)) 
                .catch(err=>console.log(err)) 
            }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Enjoy every moment.</h1>
                </div>    
                <div className="row2">
                    <h2>Search your book</h2>
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
                {
                    <Card book={bookData}/> 
                } 
            </div>
        </>


    )
}
export default Main;


