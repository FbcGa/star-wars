import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters.jsx";
import { CardPlanet } from "../component/cardPlanet.jsx";

export const Home = () => {
    const { store } = useContext(Context);


    return (
        <>
            <img className="rounded mx-auto d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8UEvq-8gIY_w1LvSUysHTGt-J_gAki08vg&s" alt="" />

            <div className="m-auto gap-5" style={{ width: "90%", height: "auto" }}>
                <div className="m-auto d-flex justify-content-between">
                    <h2 className="text-white">Characters</h2>
                </div>
                <section className="container-fluid mb-5 p-0 row flex-nowrap overflow-auto gap-3 bg-dark">
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
                <section className="container-fluid mt-5 p-0 row flex-nowrap overflow-auto gap-3 bg-dark">
                    {
                        store.planets.map((planet, index) => {
                            return (
                                <CardPlanet key={index}
                                    planet={planet}
                                />
                            )

                        })
                    }
                </section>
            </div>

        </>

    );
}

