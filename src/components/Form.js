import {useState} from "react";
import Items from "./Items";
import React from 'react'
import {v4 as uuidv4} from 'uuid'

export default function Form() {
    const [dataArr,setDataArr] = useState([]);
    const [stateInput,setStateInput] = useState([]);

    const deleteElement = id => {
        const filtedState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filtedState)
    }
    const addElement = e => {
        e.preventDefault();
        const newArr = [...dataArr]
        const newTodo = {}
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();
        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput("");
        console.log("hello")
    }
    const linkedInput = e => {
        setStateInput(e)
    }
    return (
        <div className="m-auto px-4 col-12">
            <form onSubmit={e => addElement(e)} action="" className="mb-3">
                <label htmlFor="todo" className="from-label mt-3">
                    chose a faire
                </label>
                <input 
                    value={stateInput}
                    onInput={e => linkedInput(e.target.value)}
                    type="text"
                    className="form-control"
                    id="todo"
                    required
                    />
                    <br/>
                    <button className="btn btn-success">ajouter</button>
            </form>
            

            <h2>Listes des choses a faire :
            </h2>
            <ul className="list-group">
                {dataArr.map(item => {
                    return (<Items txt={item.txt} key={item.id} id={item.id} delFunc={deleteElement}/>)
                })}
            </ul>
        </div>
    )
}
