import React from 'react';

function GifItem({img}) {
    return (
        <div className="card">
            <img src={ img.url } alt="Alt title "/>
            <p>{ img.title }</p>
        </div>
    );
}

export default GifItem;