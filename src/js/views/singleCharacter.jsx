import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';

export const SingleCharacter = () => {
    const params = useParams();
    const { store, actions } = useContext(Context);
    console.log(store.details);
    const character = store.details;

    return (

        <div className='d-grid vh-100'>
            <div className='d-flex text-white m-auto bg-dark' style={{ width: "70%" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" style={{ width: "18rem" }} alt="..." />
                <div className='d-flex flex-column mx-5'>
                    <h1>{character.name} </h1>
                    <span>birth_year: {character.birth_year} </span>
                    <span>eye_color: {character.eye_color} </span>
                    <span>hair_color: {character.hair_color} </span>
                    <span>height: {character.height} </span>
                </div>
            </div>
        </div>
    )
}
