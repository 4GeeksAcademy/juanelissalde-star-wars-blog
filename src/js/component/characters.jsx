import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CharacterCard } from "./characterCard.jsx";
import { Context } from "../store/appContext"

export const Characters = () => {

    const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (
        <div className="col-11 mx-auto my-2">
            <h1 className="text-white">Characters</h1>
            <div className="cards-container">
                {store.characters && store.characters.length > 0 && store.characters.map((character, index) => (
                    <CharacterCard
                        key={index}

                        id={character.id}
                        img={character.img}
                        name={character.name}
                        gender={character.gender}
                        hairColor={character.hair_color}
                        eyeColor={character.eye_color}
                    />
                ))}
            </div>
        </div>
    )
}