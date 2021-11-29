import { useEffect, useState } from "react";
export function Cities(){
    const [cities, setCities] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const requestOptions = {
                method : "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json",
                }
            }
            const response = await fetch("http://localhost:5000/cities",requestOptions );
            setCities(await response.json()) ;
        }
        fetchData();
    }, []);
    return(
        <div>
            <h2> Cities </h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cities.map((e,i) => 
                    <tr> 
                        <td>{e.id}</td><td>{e.name}</td> <td>{e.country}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
