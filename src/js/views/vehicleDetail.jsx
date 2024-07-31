import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetail = props => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const vehicle = store.vehicle;

    const verifyExist = (name) => {
        return store.favorites.some(item => item.name == name)
    }

    useEffect(() => {
        actions.getVehicleDetail(id)
    }, [])

    console.log(store.vehicle);
    return (
        <div className="jumbotron col-11 mx-auto">
            <div className="detail-header d-flex align-center justify-content-between">
                <h1 className="display-4 text-white-50">{store.vehicle.name}</h1>
                <button type="button" onClick={() => actions.addFavorite(store.vehicle.name, "V")} className="btn btn-dark rounded-circle py-0">
                    <i className={`bi bi-star-fill ${verifyExist(store.vehicle.name) && "text-warning"}`}></i>
                </button>
            </div>
            <hr className="my-4" />

            <Link to="/">
                <span className="btn btn-secondary btn-lg mt-5" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div >
    );
};

VehicleDetail.propTypes = {
    match: PropTypes.object
};
