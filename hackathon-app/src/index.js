import React from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import NewBooking from './pages/newbookings';

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

    const addOneToYear = () => {
        setCar(previousState => {
            let nextYear = Number(previousState["year"]) + 1;
            nextYear = String(nextYear);
            return { ...previousState, year: nextYear} 
        })
    }

    return (
        <>
            <Router>
                <Navbar />
                    <Routes>
                        <Route path='/'  element={<Home/>} />
                        <Route path='/newbookings' element={<NewBooking/>} />
                    </Routes>
            </Router>
            
            
            <Calendar/>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            
            <button
                type="button"
                onClick={updateColor}
            >Change Color</button>

            <button
                type="button"
                onClick={addOneToYear}
            >Add 1 to year</button>
        </>
  )
}

ReactDOM.render(<Test />, document.getElementById('root'));

