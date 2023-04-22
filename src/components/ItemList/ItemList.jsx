import React from "react";
import './itemlist.css'
import { Item } from "../Item/Item";

export const ItemList = ({productos=[]}) =>{
    return(
        <div className="container">
            <h3>Our Stock</h3>
        
        <div className="fila">
            {productos.map((item)=> <Item {...item} key={item.id}/>)}
        </div>
        
        
        </div>
    )
}