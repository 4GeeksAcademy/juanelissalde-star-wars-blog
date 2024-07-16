import React, { useContext, useParams } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ id, name, gender, hairColor, eyeColor }) => {

    const { actions, store } = useContext(Context);

    const verifyExist = (name) => {
		return store.favorites.some(item => item.name == name)
    }

    return (
        <>
            <div className="card m-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
                <div className="card-header">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text m-0"><b>Gender:</b> {gender}</p>
                    <p className="card-text m-0"><b>Hair Color:</b> {hairColor}</p>
                    <p className="card-text m-0"><b>Eye color:</b> {eyeColor}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Link to={`/single/${id}`}>
                        <button type="button" className="btn btn-dark">
                            More Info...
                        </button>
                    </Link>
                    <button type="button" onClick={() => actions.addFavorite(name, "C")} className="btn btn-dark rounded-circle">
                        <i className={`bi bi-star-fill ${verifyExist(name) && "text-warning"}`}></i>
                    </button>
                </div>
            </div>
        </>
    )
}