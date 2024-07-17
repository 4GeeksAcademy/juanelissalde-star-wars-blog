import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = props => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const planet = store.planet;

    const verifyExist = (name) => {
        return store.favorites.some(item => item.name == name)
    }

    useEffect(() => {
        actions.getPlanetDetail(id)
    }, [])

    console.log(store.planet);
    return (
        <div className="jumbotron col-11 mx-auto">
            <div className="detail-header d-flex align-center justify-content-between">
                <h1 className="display-4 text-white-50">{store.planet.name}</h1>
                <button type="button" onClick={() => actions.addFavorite(store.planet.name, "P")} className="btn btn-dark rounded-circle py-0">
                    <i className={`bi bi-star-fill ${verifyExist(store.planet.name) && "text-warning"}`}></i>
                </button>
            </div>
            <hr className="my-4" />

            <div className="detail-container mb-3 col-12 d-flex justify-content-center">
                <div className="col-md-4">
                    <img src={store.planet.name === "Tatooine"
                        ?
                        "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
                        :
                        `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="planet-img card-img-top rounded-circle" alt="..."
                        onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s"} />
                </div>
                <div className="col-md-8">
                    <div className="card-body text-white">
                        <h5 className="card-title">{store.planet.name}</h5>
                        <div className="planet-description">
                            <p>
                                {planet.name} is a planet known for its {planet.climate}
                                climate and varied terrain that includes {planet.terrain}.
                                It has a diameter of {planet.diameter}
                                km and a gravity of {planet.gravity}.
                                The planet rotates in a period of {planet.rotation_period}
                                hours and has an orbital period of {planet.orbital_period} days.
                            </p>
                            <p>
                                {planet.name} has a population of {planet.population}
                                inhabitants and a water surface percentage of {planet.surface_water}%.
                                It has been featured in {planet.films ? planet.films.length : 0}
                                movies from the Star Wars universe and is home to several notable residents.
                            </p>
                            <p>
                                For more information, check the provided link:
                                <a target="_blank" href={planet.url}>{planet.name}</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/">
                <span className="btn btn-secondary btn-lg mt-5" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div >
    );
};

PlanetDetail.propTypes = {
    match: PropTypes.object
};
