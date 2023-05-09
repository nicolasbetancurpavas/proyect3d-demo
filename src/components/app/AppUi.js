import { NavBar } from "../NavBar";
import { Carousel } from "../Carousel/index.js";
import { useContext } from "react";
import { Context } from "../context";
export function AppUI() {
    const { width } = useContext(Context)
    return (
        <div className="app">
            <NavBar />
            <Carousel />
        </div>
    );
}

