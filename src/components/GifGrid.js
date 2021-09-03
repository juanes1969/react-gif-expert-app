import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifFridItem } from '../components/GifFridItem';

export const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {loading && <p className="card animate__animated animate__flash">Loading...</p>}

                {images.map(img =>
                    <GifFridItem key={img.id} {...img} />
                )}
            </div>
        </>
    )
}
