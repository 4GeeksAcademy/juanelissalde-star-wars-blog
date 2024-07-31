import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js"
import { VehicleCard } from "./vehicleCard.jsx";

export const Vehicles = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getVehicles()
    }, [])

    return (
        <div className="col-11 mx-auto my-2">
            <h1 className="text-white">Vehicles</h1>
            <div className="cards-container">
                {store.vehicles && store.vehicles.length > 0 && store.vehicles.map((vehicle, index) => (
                    <VehicleCard
                        key={index}

                        id={vehicle.id}
                        img={vehicle.img}
                        name={vehicle.name}
                        model={vehicle.model}
                        size={vehicle.size}
                    />
                ))}
            </div>
        </div>
    )
}