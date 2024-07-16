import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
    return (
        <>
            <div className="card m-3" style={{minWidth: "18rem", maxWidth: "18rem" }}>
                <img src="https://lumiere-a.akamaihd.net/v1/images/grogu-main_89c92eaa.jpeg?region=246%2C0%2C1428%2C803" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <button type="button" className="btn btn-dark">
                        More Info...
                    </button>
                    <button type="button" className="btn btn-dark rounded-circle">
                        <i className="bi bi-star-fill"></i>
                    </button>
                </div>
            </div>
        </>
    )
}