// import express from "express";
// import mongoose from "mongoose";

// let app = express();
// app.use(express.json());
// import './index.js';
// import { JSDOM } from "jsdom";

// // First DOM
// const dom = new JSDOM(`<!DOCTYPE html><button class="b1">Menu</button>`);
// const window = dom.window;
// const document = window.document;
// // Second DOM
// const dom1 = new JSDOM(`<!DOCTYPE html><input class="search"><button class="button">Search</button>`);
// const window1 = dom1.window;
// const document1 = window1.document;


let b1 = document.querySelector(".b1");
let menu = document.querySelector(".menu");
let search = document.querySelector(".search");
let searchbtn = document.querySelector(".button");
let addtocartbtn = document.querySelector(".addtocart");

import { handleAddToCart } from "./addtocart.js";   
import data from "./data.js";


b1.addEventListener('click', () =>{
    if(menu.style.top === "-1500px"){
        menu.style.position = "relative";
    menu.style.top = "0px";
    menu.style.transition = "top 0.3s ease";

    }
    else{
        menu.style.transition="top 0.3s ease";
         menu.style.position = "fixed";
        menu.style.top= "-1500px";
        menu.style.transition="top 1s ease";
        b1.textContent = "menu";
    }

})


  


// data.forEach(item => {
//     console.log(item.id);
// });

  let div = document.createElement("div");

function createCard(product) {

    if (!product || product.id == null) return;

   
    let p = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    let innerdiv = document.createElement("div");
    let btn= document.createElement("button");
 
 innerdiv.style.display="flex";
    innerdiv.style.flexWrap="wrap";
    div.style.display="flex";
    div.style.flexWrap="wrap";
    div.style.gap="20px";
    p.className = "product";
    p.style.width = "200px";
   p.style.backgroundColor = "#1e293b";
    p.style.border = "1px solid #334155";
    p.style.transition = "0.3s";
    p.style.boxShadow=" 0 8px 20px rgba(0, 0, 0, 0.4)";
   p.addEventListener("mouseover", function() {
    p.style.transform = "translateY(-6px)";   // Hover effect
});
 p.addEventListener("mouseout", function() {
    p.style.transform = "translateY(0px)";   // Hover effect
});
    btn.style.cursor = "pointer";
    btn.style.width = "90px";
     btn.style.height = "80px";
     btn.style.borderRadius = "10px";
    p.style.padding = "10px";
   p1.style.fontSize = "14px";
   btn.style.height = "20px";
    btn.style.border = "none";
    btn.style.color= "white";
    btn.style.backgroundColor = "#1e3a8a";
    img.style.width = "100%";
    img.style.height = "200px";
       p1.style.color = "#cbd5e1";
    innerdiv.style.justifyContent="center";
    innerdiv.style.alignItems="center";
    innerdiv.style.gap="40px";
    img.src = product.image;
    p1.textContent = product.title;
    p2.textContent = "₹" + product.price;
    p2.style.fontSize = "18px";
    p2.style.color = "#facc15";
       btn.textContent = "Add to Cart";
       p2.style.fontWeight = "bold";
          innerdiv.appendChild(p2);
       innerdiv.appendChild(btn);
    p.style.boxShadow = "1px 1px 2px black";
    p.append(img, p1, innerdiv);

   div.appendChild(p);
   document.body.appendChild(div);
 
btn.addEventListener("click", () => {
 
    
  handleAddToCart(product);
});


}

data.forEach(item => {
   let data11 = createCard(item);
  
});


searchbtn.addEventListener('click', () => {
    div.innerHTML = "";
    let searchTerm = search.value.toLowerCase();
    data.forEach(data => {
        if (data.name === searchTerm) {
            console.log(data);
             let data111 = createCard(data);
        } else {
            console.log("not found");
        }

    });

    if( search.value.trim() === ""){
       
        data.forEach(item => {
            let data11 = createCard(item);
        });
    }
    // if(search.value.trim() !== data.name){
    //     div.innerHTML = "";
       
    // }
});




    // let filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
    // console.log(filteredData);



