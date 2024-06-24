import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import "../../styles/singleCard.css"

export const SinglePlanet = () => {
    const params = useParams();
    const { store } = useContext(Context);
    const planet = store.details;
    return (

        <div className='d-grid vh-100'>
            <div className="character-details-card d-flex text-white m-auto bg-dark shadow-lg p-3 rounded">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${(Number(params.id) + 2)}.jpg`}
                    className="card-img-top" style={{ width: "18rem" }}
                    alt="..." />
                <div className="character-info d-flex flex-column mx-5">
                    <h1 className='display-4'>{planet.name} </h1>
                    <div className="character-attributes mt-3">
                        <p><strong>Rotation_period:</strong> {planet.rotation_period} </p>
                        <p><strong>Diameter:</strong> {planet.diameter} </p>
                        <p><strong>Climate:</strong> {planet.climate} </p>
                        <p><strong>Gravity: </strong>{planet.gravity} </p>
                    </div>
                </div>
            </div>
        </div>
    )


}
