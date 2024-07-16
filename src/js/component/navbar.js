import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar border-body navbar-expand-lg" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<form className="d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-warning" type="submit">Search</button>
				</form>
				<div className="btn-group">
					<button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu dropdown-menu-start dropdown-menu-lg-start">
						<li><button className="dropdown-item" type="button">Name <i className="bi bi-trash3"></i></button></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
