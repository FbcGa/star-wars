import React, { useContext } from 'react'
import "../../styles/card.css"
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const CardPlanet = ({ planet }) => {
    const uid = planet.url.split("/")[5];

    const { store, actions } = useContext(Context);

    const handleClik = (planet) => {
        actions.getDetails(planet);
    }

    const addFavorite = (planet) => {
        actions.addFavorites(planet);
    }
    const getFavoriteButtonClass = (name) => {
        return store.favorites.some((e) => e.name === name) ? 'btn-danger' : 'btn-dark';
    }
    return (
        <div className="card text-white" style={{ width: "18rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + (Number(uid) + 2) + ".jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link to={`/planet/${uid}`} ><button className="btn btn-primary" onClick={() => handleClik(planet)}>Learn more</button> </Link>
                    <button className={`btn ${getFavoriteButtonClass(planet.name)} btn-lg`}
                        onClick={() => addFavorite(planet)}><i className="far fa-heart"></i></button>
                </div>

            </div>
        </div>
    )
}
