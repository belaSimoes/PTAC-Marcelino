import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';

export default function Home() {
   
    const [name, setName] = useState();
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">APP</Link>
                <p>{name}</p>
                <input type="text" onChange={(e)=> 
                {setName(e.target.value)}}/>
        </div>

    );
}