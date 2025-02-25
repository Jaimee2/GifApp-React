import React from 'react';
import GifItem from "./GifItem.jsx";
import useFetchGifs from "../hooks/useFetchGifs.js";

function GifGrid({category}) {

    const {images, isLoading} = useFetchGifs(category);
    console.log(isLoading)

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ? <h2> Loading... </h2> : null
            }

            <div className="card-grid">
                {
                    images.map(img => <GifItem key={ img.key } img={ img }/>)
                }
            </div>

        </>
    );
}

export default GifGrid;