import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../BookContainer/redux";

function HookContainer() {
    const noOfBooks = useSelector(state=>state.numberOfBooks);
    const dispatch = useDispatch();
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h1>HookContainer Container</h1>
            <h2>No of books - {noOfBooks}</h2>
            <input value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>dispatch(buyBook(number))}>Buy {number} book</button>
        </div>
    );
}

export default HookContainer;