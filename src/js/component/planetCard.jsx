import React, { useContext, useParams } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = ({ id, name, population, terrain }) => {

    const { actions, store } = useContext(Context);

    const verifyExist = (name) => {
        return store.favorites.some(item => item.name == name)
    }

    return (
        <>
            <div className="m-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
                <div>
                    <img src={name === "Tatooine"
                        ?
                        "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
                        :
                        `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                        className="planet-img card-img-top rounded-circle" alt="..."
                        onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s"} />
                </div>
                <div className="text-white-50 my-3">
                    <h5 className="card-title text-white text-center">Name: {name}</h5>
                    <p className="card-text m-0 text-white-50 text-center"><b>Population:</b> {population}</p>
                    <p className="card-text m-0 text-white-50 text-center"><b>Terrain:</b> {terrain}</p>
                </div>
                <div className=" d-flex align-center justify-content-center">
                    <Link to={`/planet-detail/${id}`}>
                        <button type="button" className="btn btn-dark me-2">
                            More Info...
                        </button>
                    </Link>
                    <button type="button" onClick={() => actions.addFavorite(name, "P")} className="btn btn-dark rounded-circle">
                        <i className={`bi bi-star-fill ${verifyExist(name) && "text-warning"}`}></i>
                    </button>
                </div>
            </div>
        </>
    )
}