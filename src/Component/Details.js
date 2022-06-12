import React, {useState, useEffect} from 'react';
import {BASE_API} from "../Functions/GetApi";
// axios
import axios from "axios";
// react-router-dom
import {Link, useParams} from "react-router-dom";
import style from "../Component-style/Details.module.css";
import lodGif from "../image/Gif/loading.gif";

const Details = () => {
    const params = useParams();
    const id = params.id;
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
        <div className={style.boxDetails}>
            {
                crop.length !== 0 ?
                    <div className={style.Details}>
                        <div className={style.boxImage}>
                            <img src={crop.image} alt="image product"/>
                        </div>
                        <div className={style.boxDescription}>
                            <p className={style.title}>{crop.title}</p>
                            <p className={style.dis}>{crop.description}</p>
                            <p className={style.dis}>Category : <span>{crop.category}</span></p>
                            <div>
                                <span className={style.price}>${crop.price}</span>
                                <Link to="/Products"><span className={style.Back}>Back to Shop</span></Link>
                            </div>

                        </div>
                    </div>
                    :
                    <div className={style.boxLoading}>
                        <img src={lodGif} alt="loading"/>
                    </div>
            }
        </div>
    );
};

export default Details;
