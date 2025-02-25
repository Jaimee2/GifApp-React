import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs.js";

function UseFetchGifs(category) {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { //Like onInit on Angular :)
        getGift(category).then(newImages => {
            setImages(newImages);
            setIsLoading(false);
        });
    }, [category])

    return {images: images, isLoading: isLoading}
}

export default UseFetchGifs;