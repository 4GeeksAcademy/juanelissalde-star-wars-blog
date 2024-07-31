import React, { useContext, useParams } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = ({ id, img, name, gender, hairColor, eyeColor }) => {

    const { actions, store } = useContext(Context);

    const verifyExist = (name) => {
        return store.favorites.some(item => item.name == name)
    }

    return (
        <>
            <div className="card m-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
                <div className="card-header d-flex justify-content-between">
                    <Link to={`/character-detail/${id}`}>
                        <button type="button" className="btn btn-dark">
                            More Info...
                        </button>
                    </Link>
                    <button type="button" onClick={() => actions.addFavorite(name, "C")} className="btn btn-dark rounded-circle">
                        <i className={`bi bi-star-fill ${verifyExist(name) && "text-warning"}`}></i>
                    </button>
                </div>
                <div>
                    <img src={img} className="card-img-top" alt="..." />
                    {/* <img src={props.name === "Tatooine" ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${props.id}.jpg`} className="card-img-top" alt="..." onError={(e)=> e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s"} /> */}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text m-0"><b>Gender:</b> {gender}</p>
                    <p className="card-text m-0"><b>Hair Color:</b> {hairColor}</p>
                    <p className="card-text m-0"><b>Eye color:</b> {eyeColor}</p>
                </div>
            </div>
        </>
    )
}