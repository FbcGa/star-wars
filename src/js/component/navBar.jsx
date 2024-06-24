import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const { store, actions } = useContext(Context);

    const deleteFav = (element) => {
        actions.deleteFavorites(element);
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-3" style={{ background: "#e3f2fd" }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item dropstart">
                            <span className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Favorites <span className='text-danger'>{store.favorites.length}</span>
                            </span>
                            <ul className="dropdown-menu">
                                {
                                    store.favorites.length == 0 ? (<span className='d-grid text-center text-danger'>No favorites yet!</span>) :
                                        (
                                            store.favorites.map((element, index) => {
                                                return (
                                                    <div key={index} className='d-flex m-0 p-2 align-items-center justify-content-between'>
                                                        <li>{element.name} </li>
                                                        <button className='btn btn-danger align-items-end' onClick={() => deleteFav(element)}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>

                                                )

                                            })
                                        )

                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
