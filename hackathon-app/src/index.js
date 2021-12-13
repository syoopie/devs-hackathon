import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

function Test() {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = () => {
        setCar(previousState => {
            if (previousState["color"] === "blue") {
                return { ...previousState, color: "red" }
            } else {
                return { ...previousState, color: "blue" }
            }
        });
    }

    return (
        <>
            <Calendar/>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}
            >Change Color</button>
        </>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));