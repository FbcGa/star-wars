import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters.jsx";
import { Link } from "react-router-dom";
import { CardPlanet } from "../component/cardPlanet.jsx";

export const Home = () => {
    const { store } = useContext(Context);


    return (
        <div className="bg-black">
            <h1 className="text-center text-white mb-3">Star Wars</h1>

            <div className="m-auto gap-5" style={{ width: "90%", height: "auto" }}>
                <div className="m-auto d-flex justify-content-between">
                    <h2 className="text-white">Characters</h2>
                    <button className="btn btn-danger">Favorites</button>
                </div>
                <section className="container-fluid mb-5 p-0 row flex-nowrap overflow-auto gap-4">
                    {
                        store.characters.map((character, index) => {
                            return (
                                <CardCharacters key={index}
                                    character={character}
                                />
                            )

                        })
                    }
                </section>
                <div className="m-auto d-flex justify-content-between">
                    <h2 className="text-white">Planets</h2>
                </div>
                <section className="container-fluid mt-5 p-0 row flex-nowrap overflow-auto gap-4">
                    {
                        store.planets.map((planet, index) => {
                            return (
                                <CardPlanet key={index}
                                    planet={planet}
                                    index={index}
                                />
                            )

                        })
                    }
                </section>
            </div>

        </div>

    );
}

