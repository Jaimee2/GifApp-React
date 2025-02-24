import React, { useEffect, useState } from 'react';
import { getGift } from "../helpers/getGifs.js";
import GifItem from "./GifItem.jsx";

function GifGrid({category}) {
    const [images, setImages] = useState([]);

    useEffect(() => { //Like onInit on Angular :) when the component is initialized
        getGift(category).then(newImages => setImages(newImages));
    }, [category]) //React to changes dependencies!

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map(img => <GifItem key={ img.key } img={ img }/>)
                }
            </div>

        </>
    );
}

export default GifGrid;