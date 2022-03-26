import { useState } from "react";
import Items from "./Items";
import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Form() {
    const [dataArr,setDataArr] = useState([
        {txt:"premire item" , id:uuidv4()},
        {txt:"deuxieme item" , id:uuidv4()},
        {txt:"troisieme item" , id:uuidv4()},
        {txt:"quatrieme item" , id:uuidv4()},
    ]);

    const deleteElement = id => {
        console.log(id);
    }
  return (
    <div className="m-auto px-4 col-12">
        <form action="" className="mb-3">
            <label htmlFor="todo" className="from-label mt-3">
                chose a faire
            </label>
            <input type="text" className="form-control" id="todo"/>
        </form>
        <button className="btn btn-success">ajouter</button>

        <h2>Listes des choses a faire : </h2>
        <ul className="list-group">
            {dataArr.map(item=>{
                return(
                    <Items
                        txt={item.txt}
                        key={item.id}
                        id = {item.id}
                        delFunc={deleteElement}
                   
                    />
                )
            })}
        </ul>
    </div>
  )
}
