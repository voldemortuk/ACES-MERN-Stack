import { useState } from "react";
export function AddCities() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(inputs));
        const requestOptions = {
            method : "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
            },
            body : JSON.stringify(inputs)
        }
        const response = await fetch("http://localhost:5000/add",requestOptions );
        console.log(await response.json());
    }
    return (

        <form onSubmit={handleSubmit}>
            <label>Enter Id:
                <input
                    type="text"
                    name="id"
                    value={inputs.id || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Name:
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter Country:
                <input
                    type="text"
                    name="country"
                    value={inputs.country || ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>

    )
}