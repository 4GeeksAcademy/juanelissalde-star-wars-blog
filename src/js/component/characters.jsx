import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./card.jsx";

export const Characters = () => {
    return (
        <div className="col-11 mx-auto my-4">
            <h1 className="text-white">Characters</h1>
            <div className="cards-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}