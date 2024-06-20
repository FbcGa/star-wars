import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardCharacters } from "../component/cardCharacters.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <h1 className="text-center text-white mb-3">Star Wars</h1>
            <div className="m-auto d-flex justify-content-between" style={{ width: "90%" }}>
                <h2 className="text-white">Characters</h2>
                <Link className="btn text-white">See all</Link>
            </div>
            <div className="m-auto" style={{ width: "90%", height: "auto" }}>
                <section className="container-fluid m-0 p-0">
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
            </div>

        </>

    );
}

