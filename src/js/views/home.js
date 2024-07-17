import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.jsx";
import { Planets } from "../component/planets.jsx";

export const Home = () => (
	<>
		<Planets />
		<Characters />
	</>
);
