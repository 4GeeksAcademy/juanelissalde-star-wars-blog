import React, { useContext, useParams } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = ({ id, img, name, model, size }) => {

    const { actions, store } = useContext(Context);

    const verifyExist = (name) => {
        return store.favorites.some(item => item.name == name)
    }

    return (
        <>
            <div className="m-3" style={{ minWidth: "18rem", maxWidth: "18rem" }}>
                <div>
                    <img src={img}
                        className="card-img-top rounded-circle" alt={name}
                        onError={(e) => e.target.src = "https://www.saeraauto.com/wp-content/uploads/2022/07/banner3.png"} />
                </div>
                <div className="text-white-50 my-3">
                    <h5 className="card-title text-white text-center">Name: {name}</h5>
                    <p className="card-text m-0 text-white-50 text-center"><b>Model:</b> {model}</p>
                    <p className="card-text m-0 text-white-50 text-center"><b>Size:</b> {size}</p>
                </div>
                <div className=" d-flex align-center justify-content-center">
                    <Link to={`/vehicle-detail/${id}`}>
                        <button type="button" className="btn btn-dark me-2">
                            More Info...
                        </button>
                    </Link>
                    <button type="button" onClick={() => actions.addFavorite(name, "V")} className="btn btn-dark rounded-circle">
                        <i className={`bi bi-star-fill ${verifyExist(name) && "text-warning"}`}></i>
                    </button>
                </div>
            </div>
        </>
    )
}