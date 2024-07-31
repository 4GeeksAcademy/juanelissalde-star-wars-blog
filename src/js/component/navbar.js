import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Navbar = () => {
	const { actions, store } = useContext(Context);

	let favsCounter = store.favorites.length

	useEffect(() => {
		favsCounter
	}, [])

	return (
		<nav className="navbar border-body navbar-expand-sm col-11 mx-auto">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" />
				</Link>
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon text-light"></span>
				</button>
				<div className="navbar-collapse collapse show justify-content-between" id="navbarColor01">
					<form className="d-flex mx-sm-4 my-2 w-100" role="search">
						<input className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-warning" type="submit">Search</button>
					</form>
					<div className="btn-group y-2 me-2">
						<button type="button" className="favs-button btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							<span>Editor</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
							<li className="fav-li-item">
								<Link to="/editor">
									<button className="dropdown-item text-center" type="button">
										Planets
									</button>
								</Link>
							</li>
							<li className="fav-li-item">
								<button className="dropdown-item text-center" type="button">
									Characters
								</button>
							</li>
							<li className="fav-li-item">
								<button className="dropdown-item text-center" type="button">
									Vehicles
								</button>
							</li>
							<li className="fav-li-item">
								<Link to="/editor">
									<button className="dropdown-item text-center text-white" type="button">
										See All
									</button>
								</Link>
							</li>
						</ul>
					</div>
					<div className="btn-group y-2">
						<button type="button" className="favs-button btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
							<span className="favs-counter badge me-1 p-0 bg-secondary rounded-circle text-light">{favsCounter}</span>
							<span>Favorites</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
							{store.favorites && store.favorites.length > 0 && store.favorites.map((item, index) => (
								<li key={index} className="fav-li-item">
									<a className="dropdown-item" href="#">
										({item.type}) {item.name}
									</a>
									<button onClick={() => actions.deleteFavorite(item.name)} className="dropdown-item text-center" type="button">
										<i className="bi bi-trash3"></i>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
