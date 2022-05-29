import React, {useState, useEffect} from 'react';
import {BASE_API} from "../Functions/GetApi";
// axios
import axios from "axios";

const Details = (props) => {
    const id = props.match.params.id;
    const [crop, setCrop] = useState([])
    const getCrop = async () => {
        const result = await axios.get(`${BASE_API}/products/${id}`)
        return result.data
    }

    useEffect(() => {
        const fetchCrop = async () => {
            setCrop(await getCrop())
        }

        fetchCrop();
    }, [])

    return (

        <div>
            {
                crop.length !== 0 ?
                    <div style={{margin: "20px"}}>
                        <img style={{width: "200px"}} src={crop.image} alt="image product"/>
                        <p>{crop.title}</p>
                        <p>{crop.description}</p>
                        <span>{crop.price} $</span>
                    </div> :
                    <div><p>loading ...</p></div>
            }
        </div>

    );
};

export default Details;
