import { FC, useState } from "react";

export const UpdateMultipleState: FC = () => {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "yellow"
    });

    const changeColor = () => {
        setCar(previousState => { return { ...previousState, color: "red" } });
    };
    const changeBrand = () => {
        setCar(previousState => { return { ...previousState, brand: "subaru" } });
    }

    return (
        <div>
            <h2>UseState Hook</h2>
            <p>Update Multiple States</p>
            <p>This is a {car.color} {car.brand} {car.model} from {car.year}.</p>
            <button onClick={changeColor}>Change color</button>
            <button onClick={changeBrand}>Change brand</button>
        </div>
    )
};