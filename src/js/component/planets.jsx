import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import { PlanetCard } from "./planetCard.jsx";

export const Planets = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getPlanets()
    }, [])

    return (
        <div className="col-11 mx-auto my-2">
            <h1 className="text-white">Planets</h1>
            <div className="cards-container">
                {store.planets && store.planets.length > 0 && store.planets.map((planet, index) => (
                    <PlanetCard
                        key={index}

                        id={planet.id}
                        img={planet.img}
                        name={planet.name}
                        population={planet.population}
                        terrain={planet.terrain}
                    />
                ))}
            </div>
        </div>
    )
}