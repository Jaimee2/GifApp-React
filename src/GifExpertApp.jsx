import React, { useState } from 'react';
import AddCategories from "./componets/AddCategories.jsx";
import GifGrid from "./componets/gifGrid.jsx";

export const GifExpertApp = (props) => {

    const [categories, setCategories] = useState([' One Punch ', ' Dragon Ball ']);

    const onAddCategory = (newCategory) => {
        // categories.push('Valorant') That not work! (Inmutability)

        //We have to create a new list!

        if (categories.includes(newCategory)) return;

        const newCategories = [newCategory, ...categories];
        setCategories(newCategories);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategories onNewValue={ onAddCategory }/>

            <button onClick={ onAddCategory }>Add Category</button>

            {
                categories.map((category) =>
                    <GifGrid key={ category }
                             category={ category }
                    />
                )
            }

        </>
    );
}

export default GifExpertApp;