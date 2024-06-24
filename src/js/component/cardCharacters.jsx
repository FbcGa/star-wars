import React, { useContext, useState } from 'react';
import "../../styles/card.css";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const CardCharacters = ({ character }) => {
    const uid = character.url.split("/")[5];
    const { store, actions } = useContext(Context);

    const handleClik = (character) => {
        actions.getDetails(character);
    }

    const addFavorite = (character) => {
        actions.addFavorites(character);
    }
    const getFavoriteButtonClass = (name) => {
        return store.favorites.some((e) => e.name === name) ? 'btn-danger' : 'btn-dark';

    }

    return (
        <div className="card text-white" style={{ width: "18rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + uid + ".jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to={`/character/${uid}`} ><button className="btn btn-primary" onClick={() => handleClik(character)}>Learn more</button> </Link>
                    <button
                        className={`btn ${getFavoriteButtonClass(character.name)} btn-lg`}
                        onClick={() => addFavorite(character)}
                    >
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
