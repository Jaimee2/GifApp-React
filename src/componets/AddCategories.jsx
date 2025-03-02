import React, { useState } from 'react';

function AddCategories({onNewValue}) {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    function onsubmitEvent(event) {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        onNewValue(inputValue) // Emit value!
        setInputValue('')

    }

    return (
        <form onSubmit={ (event) => onsubmitEvent(event) }
              aria-label="form"
        >
            <input type="text"
                   placeholder="Search gifts..."
                   value={ inputValue }
                   onChange={ onInputChange }
            />
        </form>
    );
}

export default AddCategories;