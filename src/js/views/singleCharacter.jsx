import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/singleCard.css"
export const SingleCharacter = () => {
    const params = useParams();
    const { store } = useContext(Context);
    const character = store.details;

    return (
        <div className='d-grid vh-100'>
            <div className="character-details-card d-flex text-white m-auto bg-dark shadow-lg p-3 rounded">
                <img
                    src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                    className="character-image card-img-top rounded"
                    alt={character.name}
                />
                <div className="character-info d-flex flex-column mx-5">
                    <h1 className="display-4">{character.name}</h1>
                    <div className="character-attributes mt-3">
                        <p><strong>Birth Year:</strong> {character.birth_year}</p>
                        <p><strong>Eye Color:</strong> {character.eye_color}</p>
                        <p><strong>Hair Color:</strong> {character.hair_color}</p>
                        <p><strong>Height:</strong> {character.height}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
